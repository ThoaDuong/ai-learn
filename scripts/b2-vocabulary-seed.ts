/**
 * B2 Level Vocabulary Seed Script
 * Run: npx tsx scripts/b2-vocabulary-seed.ts
 */

import { MongoClient, ObjectId } from "mongodb";

// Admin user ID for guest mode vocabulary
const ADMIN_USER_ID = new ObjectId("000000000000000000000001");

interface VocabularySeed {
    userId: ObjectId;
    word: string;
    meaning: string;
    partOfSpeech: string;
    level: string;
    phonetic: string;
    example: string;
    exampleTranslation: string;
    createdAt: Date;
}

const b2Vocabulary: Omit<VocabularySeed, "userId" | "createdAt">[] = [
    {
        word: "accomplish",
        meaning: "hoàn thành, đạt được",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əˈkɒm.plɪʃ/",
        example: "She accomplished her goal of running a marathon.",
        exampleTranslation: "Cô ấy đã hoàn thành mục tiêu chạy marathon."
    },
    {
        word: "acknowledge",
        meaning: "thừa nhận, công nhận",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əkˈnɒl.ɪdʒ/",
        example: "He refused to acknowledge his mistake.",
        exampleTranslation: "Anh ấy từ chối thừa nhận sai lầm của mình."
    },
    {
        word: "adequate",
        meaning: "đầy đủ, thỏa đáng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈæd.ɪ.kwət/",
        example: "The hotel provided adequate facilities for guests.",
        exampleTranslation: "Khách sạn cung cấp đầy đủ tiện nghi cho khách."
    },
    {
        word: "anticipate",
        meaning: "dự đoán, mong đợi",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ænˈtɪs.ɪ.peɪt/",
        example: "We anticipate a busy holiday season.",
        exampleTranslation: "Chúng tôi dự đoán mùa lễ hội sẽ bận rộn."
    },
    {
        word: "apparent",
        meaning: "rõ ràng, hiển nhiên",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/əˈpær.ənt/",
        example: "It was apparent that she was upset.",
        exampleTranslation: "Rõ ràng là cô ấy đang buồn."
    },
    {
        word: "circumstances",
        meaning: "hoàn cảnh, tình huống",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈsɜː.kəm.stæn.sɪz/",
        example: "Under no circumstances should you leave.",
        exampleTranslation: "Trong bất kỳ hoàn cảnh nào bạn cũng không nên rời đi."
    },
    {
        word: "compromise",
        meaning: "thỏa hiệp, nhượng bộ",
        partOfSpeech: "noun/verb",
        level: "B2",
        phonetic: "/ˈkɒm.prə.maɪz/",
        example: "They reached a compromise after hours of discussion.",
        exampleTranslation: "Họ đạt được thỏa hiệp sau nhiều giờ thảo luận."
    },
    {
        word: "consequently",
        meaning: "do đó, vì vậy",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈkɒn.sɪ.kwənt.li/",
        example: "He didn't study, consequently he failed the exam.",
        exampleTranslation: "Anh ấy không học, do đó đã trượt kỳ thi."
    },
    {
        word: "contradictory",
        meaning: "mâu thuẫn, trái ngược",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌkɒn.trəˈdɪk.tər.i/",
        example: "The witness gave contradictory statements.",
        exampleTranslation: "Nhân chứng đưa ra những lời khai mâu thuẫn."
    },
    {
        word: "crucial",
        meaning: "quan trọng, then chốt",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈkruː.ʃəl/",
        example: "This is a crucial moment in history.",
        exampleTranslation: "Đây là thời khắc then chốt trong lịch sử."
    },
    {
        word: "deliberately",
        meaning: "cố ý, có chủ đích",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/dɪˈlɪb.ər.ət.li/",
        example: "She deliberately ignored my calls.",
        exampleTranslation: "Cô ấy cố tình bỏ qua cuộc gọi của tôi."
    },
    {
        word: "distinguish",
        meaning: "phân biệt, nhận ra",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/dɪˈstɪŋ.ɡwɪʃ/",
        example: "Can you distinguish between the twins?",
        exampleTranslation: "Bạn có thể phân biệt được cặp song sinh không?"
    },
    {
        word: "elaborate",
        meaning: "chi tiết, tỉ mỉ; giải thích thêm",
        partOfSpeech: "adjective/verb",
        level: "B2",
        phonetic: "/ɪˈlæb.ər.ət/",
        example: "Could you elaborate on your proposal?",
        exampleTranslation: "Bạn có thể giải thích thêm về đề xuất của mình không?"
    },
    {
        word: "eliminate",
        meaning: "loại bỏ, loại trừ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪˈlɪm.ɪ.neɪt/",
        example: "We need to eliminate all errors from the report.",
        exampleTranslation: "Chúng ta cần loại bỏ tất cả lỗi khỏi báo cáo."
    },
    {
        word: "encounter",
        meaning: "gặp gỡ, chạm trán",
        partOfSpeech: "verb/noun",
        level: "B2",
        phonetic: "/ɪnˈkaʊn.tər/",
        example: "We encountered many problems along the way.",
        exampleTranslation: "Chúng tôi gặp nhiều vấn đề trên đường đi."
    },
    {
        word: "enthusiasm",
        meaning: "sự nhiệt tình, hăng hái",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪnˈθjuː.zi.æz.əm/",
        example: "She showed great enthusiasm for the project.",
        exampleTranslation: "Cô ấy thể hiện sự nhiệt tình lớn với dự án."
    },
    {
        word: "essential",
        meaning: "thiết yếu, cần thiết",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɪˈsen.ʃəl/",
        example: "Water is essential for life.",
        exampleTranslation: "Nước là thiết yếu cho sự sống."
    },
    {
        word: "eventually",
        meaning: "cuối cùng, rốt cuộc",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ɪˈven.tʃu.ə.li/",
        example: "Eventually, she agreed to help us.",
        exampleTranslation: "Cuối cùng, cô ấy đồng ý giúp chúng tôi."
    },
    {
        word: "evidence",
        meaning: "bằng chứng, chứng cứ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈev.ɪ.dəns/",
        example: "There is no evidence to support his claim.",
        exampleTranslation: "Không có bằng chứng hỗ trợ tuyên bố của anh ấy."
    },
    {
        word: "fundamental",
        meaning: "cơ bản, nền tảng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌfʌn.dəˈmen.təl/",
        example: "This is a fundamental principle of physics.",
        exampleTranslation: "Đây là nguyên lý cơ bản của vật lý."
    },
    {
        word: "generous",
        meaning: "hào phóng, rộng rãi",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈdʒen.ər.əs/",
        example: "He made a generous donation to charity.",
        exampleTranslation: "Anh ấy đã quyên góp hào phóng cho từ thiện."
    },
    {
        word: "hesitate",
        meaning: "do dự, ngần ngại",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈhez.ɪ.teɪt/",
        example: "Don't hesitate to ask for help.",
        exampleTranslation: "Đừng ngần ngại yêu cầu giúp đỡ."
    },
    {
        word: "illustrate",
        meaning: "minh họa, làm rõ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈɪl.ə.streɪt/",
        example: "Let me illustrate my point with an example.",
        exampleTranslation: "Hãy để tôi minh họa quan điểm bằng một ví dụ."
    },
    {
        word: "imply",
        meaning: "ngụ ý, ám chỉ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪmˈplaɪ/",
        example: "Are you implying that I'm wrong?",
        exampleTranslation: "Bạn đang ám chỉ rằng tôi sai à?"
    },
    {
        word: "inevitable",
        meaning: "không thể tránh khỏi",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɪˈnev.ɪ.tə.bəl/",
        example: "Change is inevitable in life.",
        exampleTranslation: "Thay đổi là điều không thể tránh khỏi trong cuộc sống."
    },
    {
        word: "influence",
        meaning: "ảnh hưởng, tác động",
        partOfSpeech: "noun/verb",
        level: "B2",
        phonetic: "/ˈɪn.flu.əns/",
        example: "Music has a strong influence on my mood.",
        exampleTranslation: "Âm nhạc có ảnh hưởng mạnh đến tâm trạng của tôi."
    },
    {
        word: "insist",
        meaning: "khăng khăng, nhấn mạnh",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪnˈsɪst/",
        example: "She insisted on paying for dinner.",
        exampleTranslation: "Cô ấy khăng khăng trả tiền bữa tối."
    },
    {
        word: "interpret",
        meaning: "giải thích, thông dịch",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪnˈtɜː.prɪt/",
        example: "How do you interpret this data?",
        exampleTranslation: "Bạn giải thích dữ liệu này như thế nào?"
    },
    {
        word: "investigate",
        meaning: "điều tra, nghiên cứu",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪnˈves.tɪ.ɡeɪt/",
        example: "Police are investigating the crime.",
        exampleTranslation: "Cảnh sát đang điều tra vụ án."
    },
    {
        word: "maintain",
        meaning: "duy trì, bảo trì",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/meɪnˈteɪn/",
        example: "It's important to maintain good health.",
        exampleTranslation: "Điều quan trọng là duy trì sức khỏe tốt."
    },
    {
        word: "negotiate",
        meaning: "đàm phán, thương lượng",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/nɪˈɡəʊ.ʃi.eɪt/",
        example: "They are negotiating a new contract.",
        exampleTranslation: "Họ đang đàm phán hợp đồng mới."
    },
    {
        word: "objective",
        meaning: "mục tiêu; khách quan",
        partOfSpeech: "noun/adjective",
        level: "B2",
        phonetic: "/əbˈdʒek.tɪv/",
        example: "What is the objective of this meeting?",
        exampleTranslation: "Mục tiêu của cuộc họp này là gì?"
    },
    {
        word: "overcome",
        meaning: "vượt qua, khắc phục",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˌəʊ.vəˈkʌm/",
        example: "She overcame many obstacles to succeed.",
        exampleTranslation: "Cô ấy đã vượt qua nhiều trở ngại để thành công."
    },
    {
        word: "persistent",
        meaning: "kiên trì, bền bỉ",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/pəˈsɪs.tənt/",
        example: "His persistent efforts paid off.",
        exampleTranslation: "Những nỗ lực kiên trì của anh ấy đã được đền đáp."
    },
    {
        word: "potential",
        meaning: "tiềm năng, tiềm lực",
        partOfSpeech: "noun/adjective",
        level: "B2",
        phonetic: "/pəˈten.ʃəl/",
        example: "You have the potential to be a great leader.",
        exampleTranslation: "Bạn có tiềm năng trở thành một nhà lãnh đạo tuyệt vời."
    },
    {
        word: "precise",
        meaning: "chính xác, chuẩn xác",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/prɪˈsaɪs/",
        example: "Please give me the precise measurements.",
        exampleTranslation: "Xin hãy cho tôi số đo chính xác."
    },
    {
        word: "principle",
        meaning: "nguyên tắc, nguyên lý",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈprɪn.sɪ.pəl/",
        example: "He is a man of strong principles.",
        exampleTranslation: "Anh ấy là người có nguyên tắc vững chắc."
    },
    {
        word: "proportion",
        meaning: "tỷ lệ, phần",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/prəˈpɔː.ʃən/",
        example: "A large proportion of students passed the exam.",
        exampleTranslation: "Một tỷ lệ lớn học sinh đã vượt qua kỳ thi."
    },
    {
        word: "pursue",
        meaning: "theo đuổi, đeo đuổi",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/pəˈsjuː/",
        example: "She decided to pursue a career in medicine.",
        exampleTranslation: "Cô ấy quyết định theo đuổi sự nghiệp y khoa."
    },
    {
        word: "relevant",
        meaning: "liên quan, thích hợp",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈrel.ə.vənt/",
        example: "Please include only relevant information.",
        exampleTranslation: "Xin hãy chỉ bao gồm thông tin liên quan."
    },
    {
        word: "reluctant",
        meaning: "miễn cưỡng, không sẵn lòng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/rɪˈlʌk.tənt/",
        example: "He was reluctant to admit his mistake.",
        exampleTranslation: "Anh ấy miễn cưỡng thừa nhận lỗi của mình."
    },
    {
        word: "significant",
        meaning: "đáng kể, quan trọng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/sɪɡˈnɪf.ɪ.kənt/",
        example: "There has been a significant improvement.",
        exampleTranslation: "Đã có sự cải thiện đáng kể."
    },
    {
        word: "simulate",
        meaning: "mô phỏng, giả lập",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈsɪm.jə.leɪt/",
        example: "The program simulates real-world conditions.",
        exampleTranslation: "Chương trình mô phỏng điều kiện thực tế."
    },
    {
        word: "sophisticated",
        meaning: "tinh vi, phức tạp",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/səˈfɪs.tɪ.keɪ.tɪd/",
        example: "This is a sophisticated piece of technology.",
        exampleTranslation: "Đây là một thiết bị công nghệ tinh vi."
    },
    {
        word: "strategy",
        meaning: "chiến lược, kế hoạch",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈstræt.ə.dʒi/",
        example: "We need a new marketing strategy.",
        exampleTranslation: "Chúng ta cần một chiến lược marketing mới."
    },
    {
        word: "sustain",
        meaning: "duy trì, chịu đựng",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/səˈsteɪn/",
        example: "The economy cannot sustain this growth rate.",
        exampleTranslation: "Nền kinh tế không thể duy trì tốc độ tăng trưởng này."
    },
    {
        word: "thorough",
        meaning: "kỹ lưỡng, toàn diện",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈθʌr.ə/",
        example: "The doctor did a thorough examination.",
        exampleTranslation: "Bác sĩ đã thực hiện kiểm tra kỹ lưỡng."
    },
    {
        word: "transform",
        meaning: "biến đổi, chuyển đổi",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/trænsˈfɔːm/",
        example: "Technology has transformed the way we work.",
        exampleTranslation: "Công nghệ đã biến đổi cách chúng ta làm việc."
    },
    {
        word: "ultimate",
        meaning: "cuối cùng, tối thượng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈʌl.tɪ.mət/",
        example: "Our ultimate goal is customer satisfaction.",
        exampleTranslation: "Mục tiêu cuối cùng của chúng tôi là sự hài lòng của khách hàng."
    },
    {
        word: "widespread",
        meaning: "phổ biến, lan rộng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈwaɪd.spred/",
        example: "There is widespread support for the proposal.",
        exampleTranslation: "Có sự ủng hộ rộng rãi cho đề xuất này."
    }
];

async function seedB2Vocabulary() {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        console.error("❌ MONGODB_URI environment variable is not set");
        console.log("Please set it in your .env.local file");
        process.exit(1);
    }

    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("✅ Connected to MongoDB");

        const db = client.db("AILearn");
        const vocabularyCollection = db.collection("vocabularies");

        // Check if B2 vocabulary already exists for admin
        const existingCount = await vocabularyCollection.countDocuments({
            userId: ADMIN_USER_ID,
            level: "B2"
        });

        if (existingCount > 0) {
            console.log(`⚠️ Found ${existingCount} existing B2 vocabulary items for admin`);
            const response = await new Promise<string>((resolve) => {
                process.stdout.write("Do you want to delete and re-seed? (y/n): ");
                process.stdin.once("data", (data) => resolve(data.toString().trim().toLowerCase()));
            });

            if (response === "y") {
                await vocabularyCollection.deleteMany({
                    userId: ADMIN_USER_ID,
                    level: "B2"
                });
                console.log("🗑️ Deleted existing B2 vocabulary");
            } else {
                console.log("❌ Seeding cancelled");
                process.exit(0);
            }
        }

        // Insert vocabulary with timestamps
        const vocabularyToInsert: VocabularySeed[] = b2Vocabulary.map((vocab) => ({
            ...vocab,
            userId: ADMIN_USER_ID,
            createdAt: new Date()
        }));

        const result = await vocabularyCollection.insertMany(vocabularyToInsert);
        console.log(`✅ Inserted ${result.insertedCount} B2 vocabulary items`);
        console.log("🎉 Seeding complete!");

    } catch (error) {
        console.error("❌ Error seeding vocabulary:", error);
        process.exit(1);
    } finally {
        await client.close();
        process.exit(0);
    }
}

seedB2Vocabulary();
