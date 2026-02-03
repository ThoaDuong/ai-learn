"use client";

import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { useDropzone } from "react-dropzone";
import { motion, AnimatePresence } from "framer-motion";
import { getCroppedImg } from "@/common/utils/imageUtils";
import { Camera, Upload, ZoomIn, ZoomOut, RotateCw, X, Check, RefreshCw } from "lucide-react";
import Image from "next/image";

interface AvatarUploaderProps {
    currentImage: string;
    googleImage?: string;
    onSave: (base64Image: string) => Promise<void>;
    onRevert: () => Promise<void>;
    isSaving?: boolean;
}

export default function AvatarUploader({
    currentImage,
    googleImage,
    onSave,
    onRevert,
    isSaving = false,
}: AvatarUploaderProps) {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
    const [isCropModalOpen, setIsCropModalOpen] = useState(false);

    const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles && acceptedFiles.length > 0) {
            const file = acceptedFiles[0];
            const reader = new FileReader();
            reader.onload = () => {
                setImageSrc(reader.result as string);
                setIsCropModalOpen(true);
            };
            reader.readAsDataURL(file);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "image/*": [".jpeg", ".jpg", ".png"],
        },
        maxFiles: 1,
    });

    const handleSaveCrop = async () => {
        if (!imageSrc || !croppedAreaPixels) return;
        try {
            const croppedImageBase64 = await getCroppedImg(
                imageSrc,
                croppedAreaPixels,
                rotation
            );
            await onSave(croppedImageBase64);
            setIsCropModalOpen(false);
            setImageSrc(null);
            setZoom(1);
            setRotation(0);
        } catch (e) {
            console.error(e);
        }
    };

    const handleCancelCrop = () => {
        setIsCropModalOpen(false);
        setImageSrc(null);
        setZoom(1);
        setRotation(0);
    };

    const hasCustomImage = googleImage && currentImage !== googleImage;

    return (
        <div className="w-full">
            <div className="flex flex-col items-center gap-6">
                {/* Current Avatar Display with Hover Overlay */}
                <div {...getRootProps()} className="relative group cursor-pointer">
                    <input {...getInputProps()} />
                    <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-blue-100 transition-all">
                        <Image
                            src={currentImage || "/placeholder-avatar.png"}
                            alt="Profile"
                            fill
                            className="object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Camera className="w-8 h-8 text-white mb-1" />
                            <span className="text-xs text-white font-medium">Change</span>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 justify-center">
                    <div {...getRootProps()}>
                        <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
                            <Upload className="w-4 h-4" />
                            Upload New Photo
                        </button>
                    </div>

                    {hasCustomImage && (
                        <button
                            onClick={onRevert}
                            disabled={isSaving}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
                        >
                            <RefreshCw className={`w-4 h-4 ${isSaving ? 'animate-spin' : ''}`} />
                            Use Google Image
                        </button>
                    )}
                </div>
            </div>

            {/* Crop Modal */}
            <AnimatePresence>
                {isCropModalOpen && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                            onClick={handleCancelCrop}
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                                <h3 className="font-semibold text-gray-900">Crop Profile Picture</h3>
                                <button onClick={handleCancelCrop} className="p-1 hover:bg-gray-100 rounded-full text-gray-500">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="relative w-full h-64 bg-gray-900">
                                <Cropper
                                    image={imageSrc || ""}
                                    crop={crop}
                                    zoom={zoom}
                                    rotation={rotation}
                                    aspect={1}
                                    onCropChange={setCrop}
                                    onCropComplete={onCropComplete}
                                    onZoomChange={setZoom}
                                    cropShape="round"
                                    showGrid={false}
                                />
                            </div>

                            <div className="p-6 space-y-6">
                                {/* Controls */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <ZoomOut className="w-4 h-4 text-gray-400" />
                                        <input
                                            type="range"
                                            value={zoom}
                                            min={1}
                                            max={3}
                                            step={0.1}
                                            aria-labelledby="Zoom"
                                            onChange={(e) => setZoom(Number(e.target.value))}
                                            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                        />
                                        <ZoomIn className="w-4 h-4 text-gray-400" />
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-3 justify-end">
                                    <button
                                        onClick={handleCancelCrop}
                                        className="px-5 py-2.5 rounded-xl text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSaveCrop}
                                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                                    >
                                        <Check className="w-4 h-4" />
                                        Save Profile Picture
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
