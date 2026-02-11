/**
 * B2 Level Vocabulary Seed Script
 * Auto-generated from full-word.json by generate-b2-seed.ts
 * Run: npx tsx scripts/b2-vocabulary-seed.ts
 */

import * as fs from "fs";
import * as path from "path";
import { MongoClient, ObjectId } from "mongodb";

// Load .env.local manually
const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf-8");
    for (const line of envContent.split("\n")) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith("#")) {
            const eqIndex = trimmed.indexOf("=");
            if (eqIndex > 0) {
                const key = trimmed.substring(0, eqIndex).trim();
                const value = trimmed.substring(eqIndex + 1).trim();
                if (!process.env[key]) {
                    process.env[key] = value;
                }
            }
        }
    }
}

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
        word: "abandon",
        meaning: "từ bỏ, bỏ rơi, bỏ mặc",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əˈbændən/",
        example: "The baby had been abandoned by its mother.",
        exampleTranslation: "Đứa bé đã bị mẹ bỏ rơi."
    },
    {
        word: "absolute",
        meaning: "tuyệt đối, hoàn toàn",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈæbsəluːt/",
        example: "I've joined a class for absolute beginners.",
        exampleTranslation: "Tôi đã tham gia một lớp học dành cho những người hoàn toàn mới bắt đầu."
    },
    {
        word: "absorb",
        meaning: "hấp thụ, tiếp thu",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əbˈzɔːrb/",
        example: "Plants absorb carbon dioxide from the air.",
        exampleTranslation: "Cây cối hấp thụ khí carbon dioxide từ không khí."
    },
    {
        word: "abstract",
        meaning: "trừu tượng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈæbstrækt/",
        example: "abstract knowledge/principles",
        exampleTranslation: "kiến thức/nguyên tắc trừu tượng"
    },
    {
        word: "academic",
        meaning: "học giả, giảng viên đại học",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌækəˈdemɪk/",
        example: "a leading/distinguished/prominent academic",
        exampleTranslation: "một học giả hàng đầu/xuất sắc/nổi bật"
    },
    {
        word: "accent",
        meaning: "giọng điệu, âm điệu, trọng âm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈæksənt/",
        example: "a northern/Dublin/Scottish accent",
        exampleTranslation: "giọng miền Bắc/Dublin/Scotland"
    },
    {
        word: "acceptable",
        meaning: "có thể chấp nhận được, được chấp thuận",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/əkˈseptəbl/",
        example: "Children must learn socially acceptable behaviour.",
        exampleTranslation: "Trẻ em phải học hành vi được xã hội chấp nhận."
    },
    {
        word: "accidentally",
        meaning: "tình cờ, vô tình, ngẫu nhiên",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˌæksɪˈdentəli/",
        example: "As I turned around, I accidentally hit him in the face.",
        exampleTranslation: "Khi tôi quay người lại, tôi vô tình đấm vào mặt anh ấy."
    },
    {
        word: "accommodate",
        meaning: "chứa được, đáp ứng, cung cấp chỗ ở",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əˈkɑːmədeɪt/",
        example: "The hotel can accommodate up to 500 guests.",
        exampleTranslation: "Khách sạn có thể chứa tới 500 khách."
    },
    {
        word: "accompany",
        meaning: "đi cùng, hộ tống, kèm theo",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əˈkʌmpəni/",
        example: "accompany somebody/something + adv./prep. His wife accompanied him on the trip.",
        exampleTranslation: "Vợ anh ấy đã đi cùng anh ấy trong chuyến đi."
    },
    {
        word: "accomplish",
        meaning: "hoàn thành, đạt được, thực hiện",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əˈkɑːmplɪʃ/",
        example: "The first part of the plan has been safely accomplished.",
        exampleTranslation: "Phần đầu tiên của kế hoạch đã được hoàn thành an toàn."
    },
    {
        word: "account",
        meaning: "coi là, xem là, giải thích",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əˈkaʊnt/",
        example: "be accounted + adj. In English law a person is accounted innocent until they are proved guilty.",
        exampleTranslation: "Theo luật Anh, một người được coi là vô tội cho đến khi họ được chứng minh là có tội."
    },
    {
        word: "accountant",
        meaning: "kế toán viên",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/əˈkaʊntənt/",
        example: "We talked to the company’s chief accountant.",
        exampleTranslation: "Chúng tôi đã nói chuyện với kế toán trưởng của công ty."
    },
    {
        word: "accuracy",
        meaning: "sự chính xác, độ chính xác",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈækjərəsi/",
        example: "They questioned the accuracy of the information in the file.",
        exampleTranslation: "Họ đã đặt câu hỏi về độ chính xác của thông tin trong hồ sơ."
    },
    {
        word: "accurate",
        meaning: "chính xác, đúng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈækjərət/",
        example: "an accurate description/picture of something",
        exampleTranslation: "một mô tả/bức tranh chính xác về điều gì đó"
    },
    {
        word: "accurately",
        meaning: "một cách chính xác",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈækjərətli/",
        example: "The article accurately reflects public opinion.",
        exampleTranslation: "Bài báo phản ánh chính xác ý kiến công chúng."
    },
    {
        word: "accuse",
        meaning: "buộc tội, tố cáo",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əˈkjuːz/",
        example: "of something to accuse somebody of murder/a crime",
        exampleTranslation: "buộc tội ai đó giết người/phạm tội"
    },
    {
        word: "acid",
        meaning: "axit, chất chua",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈæsɪd/",
        example: "The acid burned a hole in her coat.",
        exampleTranslation: "Axit đã đốt cháy một lỗ trên áo khoác của cô ấy."
    },
    {
        word: "acknowledge",
        meaning: "thừa nhận, công nhận, xác nhận",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əkˈnɑːlɪdʒ/",
        example: "She refuses to acknowledge the need for reform.",
        exampleTranslation: "Cô ấy từ chối thừa nhận sự cần thiết của cải cách."
    },
    {
        word: "acquire",
        meaning: "có được, đạt được, thu được",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əˈkwaɪər/",
        example: "She has acquired a good knowledge of English.",
        exampleTranslation: "Cô ấy đã có được kiến thức tiếng Anh tốt."
    },
    {
        word: "activate",
        meaning: "kích hoạt",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈæktɪveɪt/",
        example: "The burglar alarm is activated by movement.",
        exampleTranslation: "Chuông báo trộm được kích hoạt bởi chuyển động."
    },
    {
        word: "actual",
        meaning: "thực tế, thật sự",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈæktʃuəl/",
        example: "James looks younger than his wife but in actual fact (= really) he is five years older.",
        exampleTranslation: "James trông trẻ hơn vợ anh ấy nhưng trên thực tế (= thực sự) anh ấy hơn vợ năm tuổi."
    },
    {
        word: "adapt",
        meaning: "thích nghi, điều chỉnh",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əˈdæpt/",
        example: "It's amazing how soon you adapt.",
        exampleTranslation: "Thật đáng ngạc nhiên là bạn thích nghi nhanh đến mức nào."
    },
    {
        word: "addiction",
        meaning: "sự nghiện ngập, thói nghiện",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/əˈdɪkʃn/",
        example: "cocaine addiction",
        exampleTranslation: "nghiện cocaine"
    },
    {
        word: "additional",
        meaning: "bổ sung, thêm vào",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/əˈdɪʃənl/",
        example: "additional resources/funds/security/funding/costs",
        exampleTranslation: "các nguồn lực/quỹ/an ninh/nguồn tài trợ/chi phí bổ sung"
    },
    {
        word: "additionally",
        meaning: "thêm vào đó, ngoài ra",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/əˈdɪʃənəli/",
        example: "Additionally, the bus service will run on Sundays, every two hours.",
        exampleTranslation: "Ngoài ra, dịch vụ xe buýt sẽ hoạt động vào Chủ Nhật, cứ hai giờ một chuyến."
    },
    {
        word: "address",
        meaning: "giải quyết, đề cập, phát biểu",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əˈdres/",
        example: "Your essay does not address the real issues.",
        exampleTranslation: "Bài luận của bạn không giải quyết các vấn đề thực sự."
    },
    {
        word: "adequate",
        meaning: "đầy đủ, thích đáng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈædɪkwət/",
        example: "They'll need an adequate supply of hot water.",
        exampleTranslation: "Họ sẽ cần một nguồn cung cấp nước nóng đầy đủ."
    },
    {
        word: "adequately",
        meaning: "một cách đầy đủ, thích đáng",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈædɪkwətli/",
        example: "Are you adequately insured?",
        exampleTranslation: "Bạn đã được bảo hiểm đầy đủ chưa?"
    },
    {
        word: "adjust",
        meaning: "điều chỉnh, thích nghi",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əˈdʒʌst/",
        example: "Watch out for sharp bends and adjust your speed accordingly.",
        exampleTranslation: "Hãy cẩn thận với những khúc cua gấp và điều chỉnh tốc độ của bạn cho phù hợp."
    },
    {
        word: "administration",
        meaning: "quản lý, hành chính, ban quản trị, chính quyền",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ədˌmɪnɪˈstreɪʃn/",
        example: "Administration costs are passed on to the customer.",
        exampleTranslation: "Chi phí quản lý được chuyển sang cho khách hàng."
    },
    {
        word: "adopt",
        meaning: "nhận nuôi, thông qua, áp dụng",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əˈdɑːpt/",
        example: "a campaign to encourage childless couples to adopt",
        exampleTranslation: "một chiến dịch khuyến khích các cặp vợ chồng không con nhận nuôi (con)."
    },
    {
        word: "advance",
        meaning: "trước, sớm",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ədˈvæns/",
        example: "Please give us advance warning of any changes.",
        exampleTranslation: "Làm ơn thông báo trước cho chúng tôi về bất kỳ thay đổi nào."
    },
    {
        word: "affair",
        meaning: "vụ việc, công việc, chuyện, sự vụ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/əˈfer/",
        example: "world/international affairs",
        exampleTranslation: "các vấn đề/công việc thế giới/quốc tế"
    },
    {
        word: "affordable",
        meaning: "giá cả phải chăng, hợp túi tiền",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/əˈfɔːrdəbl/",
        example: "We offer quality products at affordable prices.",
        exampleTranslation: "Chúng tôi cung cấp sản phẩm chất lượng với giá cả phải chăng."
    },
    {
        word: "afterwards",
        meaning: "sau đó, về sau",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈæftərwərdz/",
        example: "Afterwards she was sorry for what she'd said.",
        exampleTranslation: "Sau đó cô ấy hối hận về những gì mình đã nói."
    },
    {
        word: "agency",
        meaning: "cơ quan, đại lý",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈeɪdʒənsi/",
        example: "She works for an advertising agency.",
        exampleTranslation: "Cô ấy làm việc cho một công ty quảng cáo."
    },
    {
        word: "agenda",
        meaning: "chương trình nghị sự, lịch trình",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/əˈdʒendə/",
        example: "We have a very full agenda of issues to discuss.",
        exampleTranslation: "Chúng tôi có một chương trình nghị sự rất đầy đủ các vấn đề cần thảo luận."
    },
    {
        word: "aggressive",
        meaning: "hung hăng, xông xáo, quyết liệt",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/əˈɡresɪv/",
        example: "Seals have been known to exhibit aggressive behaviour towards swimmers.",
        exampleTranslation: "Hải cẩu được biết là có hành vi hung hăng đối với những người bơi lội."
    },
    {
        word: "agriculture",
        meaning: "nông nghiệp",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈæɡrɪkʌltʃər/",
        example: "The number of people employed in agriculture has fallen in the last decade.",
        exampleTranslation: "Số lượng người làm việc trong ngành nông nghiệp đã giảm trong thập kỷ qua."
    },
    {
        word: "aid",
        meaning: "viện trợ, sự giúp đỡ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/eɪd/",
        example: "humanitarian/food/medical aid",
        exampleTranslation: "viện trợ nhân đạo/lương thực/y tế"
    },
    {
        word: "AIDS",
        meaning: "AIDS (Hội chứng suy giảm miễn dịch mắc phải)",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/eɪdz/",
        example: "the AIDS epidemic",
        exampleTranslation: "đại dịch AIDS"
    },
    {
        word: "aircraft",
        meaning: "máy bay, phi cơ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈerkræft/",
        example: "fighter/transport/military aircraft",
        exampleTranslation: "máy bay chiến đấu/vận tải/quân sự"
    },
    {
        word: "alarm",
        meaning: "báo động, làm hoảng sợ, làm lo lắng",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əˈlɑːrm/",
        example: "I can only guess that they don't want to alarm the public yet.",
        exampleTranslation: "Tôi chỉ có thể đoán rằng họ chưa muốn làm công chúng lo lắng."
    },
    {
        word: "alien",
        meaning: "người ngoài hành tinh, người nước ngoài, người lạ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈeɪliən/",
        example: "an illegal alien",
        exampleTranslation: "một người nước ngoài nhập cư bất hợp pháp"
    },
    {
        word: "alongside",
        meaning: "bên cạnh, sát bên",
        partOfSpeech: "preposition",
        level: "B2",
        phonetic: "/əˌlɔːŋˈsaɪd/",
        example: "A police car pulled up alongside us.",
        exampleTranslation: "Một chiếc xe cảnh sát dừng lại bên cạnh chúng tôi."
    },
    {
        word: "alter",
        meaning: "thay đổi, sửa đổi",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈɔːltər/",
        example: "Prices did not alter significantly during 2019.",
        exampleTranslation: "Giá cả không thay đổi đáng kể trong năm 2019."
    },
    {
        word: "altogether",
        meaning: "hoàn toàn, tất cả, tổng cộng",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˌɔːltəˈɡeðər/",
        example: "The train went slower and slower until it stopped altogether.",
        exampleTranslation: "Tàu chạy chậm dần rồi dừng hẳn."
    },
    {
        word: "ambulance",
        meaning: "xe cứu thương",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈæmbjələns/",
        example: "Call an ambulance!",
        exampleTranslation: "Gọi xe cứu thương!"
    },
    {
        word: "amount",
        meaning: "lên tới, tổng cộng là, có ý nghĩa là",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əˈmaʊnt/",
        example: "This is an example of amount.",
        exampleTranslation: "Đây là một ví dụ của từ 'amount'."
    },
    {
        word: "amusing",
        meaning: "vui, hài hước, gây cười",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/əˈmjuːzɪŋ/",
        example: "an amusing story/game/incident",
        exampleTranslation: "một câu chuyện/trò chơi/sự cố vui nhộn/hài hước"
    },
    {
        word: "analyst",
        meaning: "nhà phân tích",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈænəlɪst/",
        example: "a political/financial analyst",
        exampleTranslation: "một nhà phân tích chính trị/tài chính"
    },
    {
        word: "ancestor",
        meaning: "tổ tiên",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈænsestər/",
        example: "His ancestors had come to America from Ireland.",
        exampleTranslation: "Tổ tiên của anh ấy đã đến Mỹ từ Ireland."
    },
    {
        word: "anger",
        meaning: "sự tức giận, cơn giận",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈæŋɡər/",
        example: "She had to find a way to express her pent-up anger.",
        exampleTranslation: "Cô ấy phải tìm cách giải tỏa cơn giận dồn nén của mình."
    },
    {
        word: "angle",
        meaning: "góc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈæŋɡl/",
        example: "a 45° angle",
        exampleTranslation: "một góc 45 độ"
    },
    {
        word: "animation",
        meaning: "hoạt hình, sự hoạt náo",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌænɪˈmeɪʃn/",
        example: "computer/cartoon animation",
        exampleTranslation: "hoạt hình máy tính/phim hoạt hình"
    },
    {
        word: "anniversary",
        meaning: "ngày kỷ niệm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌænɪˈvɜːrsəri/",
        example: "on the anniversary of his wife’s death",
        exampleTranslation: "vào ngày giỗ vợ anh ấy"
    },
    {
        word: "annual",
        meaning: "hàng năm, thường niên",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈænjuəl/",
        example: "an annual meeting/event/report/conference",
        exampleTranslation: "một cuộc họp/sự kiện/báo cáo/hội nghị hàng năm"
    },
    {
        word: "annually",
        meaning: "hàng năm, mỗi năm",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈænjuəli/",
        example: "The exhibition is held annually.",
        exampleTranslation: "Triển lãm được tổ chức hàng năm."
    },
    {
        word: "anticipate",
        meaning: "dự đoán, lường trước",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ænˈtɪsɪpeɪt/",
        example: "We don't anticipate any major problems.",
        exampleTranslation: "Chúng tôi không lường trước bất kỳ vấn đề lớn nào."
    },
    {
        word: "anxiety",
        meaning: "sự lo lắng, nỗi lo âu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/æŋˈzaɪəti/",
        example: "acute/intense/deep anxiety",
        exampleTranslation: "sự lo lắng cấp tính/dữ dội/sâu sắc"
    },
    {
        word: "anxious",
        meaning: "lo lắng, bồn chồn",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈæŋkʃəs/",
        example: "The bus was late and Sue began to get anxious.",
        exampleTranslation: "Xe buýt bị trễ và Sue bắt đầu lo lắng."
    },
    {
        word: "apology",
        meaning: "lời xin lỗi",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/əˈpɑːlədʒi/",
        example: "to offer/make/demand/accept an apology",
        exampleTranslation: "đưa ra/thực hiện/yêu cầu/chấp nhận lời xin lỗi"
    },
    {
        word: "apparent",
        meaning: "rõ ràng, hiển nhiên",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/əˈpærənt/",
        example: "Their devotion was apparent.",
        exampleTranslation: "Sự tận tâm của họ rất rõ ràng."
    },
    {
        word: "apparently",
        meaning: "rõ ràng là, hình như, có vẻ như",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/əˈpærəntli/",
        example: "Apparently they are getting divorced soon.",
        exampleTranslation: "Rõ ràng là họ sắp ly hôn."
    },
    {
        word: "appeal",
        meaning: "lời kêu gọi, sự hấp dẫn, kháng cáo",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/əˈpiːl/",
        example: "appeal for something to launch a TV appeal for donations to the charity",
        exampleTranslation: "lời kêu gọi điều gì đó để phát động lời kêu gọi quyên góp trên TV cho tổ chức từ thiện"
    },
    {
        word: "applicant",
        meaning: "người nộp đơn, ứng viên",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈæplɪkənt/",
        example: "There were over 500 applicants for the job.",
        exampleTranslation: "Có hơn 500 ứng viên cho công việc đó."
    },
    {
        word: "approach",
        meaning: "cách tiếp cận, phương pháp",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/əˈprəʊtʃ/",
        example: "She took the wrong approach in her dealings with them.",
        exampleTranslation: "Cô ấy đã dùng sai cách tiếp cận trong việc giải quyết vấn đề với họ."
    },
    {
        word: "appropriate",
        meaning: "thích hợp, phù hợp",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/əˈprəʊpriət/",
        example: "an appropriate response/measure/method",
        exampleTranslation: "một phản ứng/biện pháp/phương pháp thích hợp"
    },
    {
        word: "appropriately",
        meaning: "một cách thích hợp",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/əˈprəʊpriətli/",
        example: "The government has been accused of not responding appropriately to the needs of the homeless.",
        exampleTranslation: "Chính phủ bị cáo buộc đã không phản ứng một cách thích hợp với nhu cầu của người vô gia cư."
    },
    {
        word: "approval",
        meaning: "sự chấp thuận, sự tán thành",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/əˈpruːvl/",
        example: "She desperately wanted to win her father's approval.",
        exampleTranslation: "Cô ấy tha thiết muốn giành được sự chấp thuận của cha mình."
    },
    {
        word: "approve",
        meaning: "chấp thuận, tán thành",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əˈpruːv/",
        example: "I told my mother I wanted to leave school but she didn't approve.",
        exampleTranslation: "Tôi nói với mẹ tôi muốn bỏ học nhưng bà không chấp thuận."
    },
    {
        word: "arise",
        meaning: "phát sinh, nảy sinh",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əˈraɪz/",
        example: "An opportunity arose to work in the United States.",
        exampleTranslation: "Một cơ hội làm việc ở Hoa Kỳ đã nảy sinh."
    },
    {
        word: "armed",
        meaning: "có vũ trang",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɑːrmd/",
        example: "an armed robbery",
        exampleTranslation: "một vụ cướp có vũ trang"
    },
    {
        word: "arms",
        meaning: "vũ khí, binh khí",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɑːrmz/",
        example: "arms and ammunition",
        exampleTranslation: "vũ khí và đạn dược"
    },
    {
        word: "arrow",
        meaning: "mũi tên",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈærəʊ/",
        example: "a bow and arrow",
        exampleTranslation: "một cây cung và mũi tên"
    },
    {
        word: "artificial",
        meaning: "nhân tạo, giả tạo",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌɑːrtɪˈfɪʃl/",
        example: "an artificial limb/flower/sweetener/fertilizer",
        exampleTranslation: "một chi/hoa/chất tạo ngọt/phân bón nhân tạo"
    },
    {
        word: "artistic",
        meaning: "nghệ thuật, có tính nghệ thuật",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɑːrˈtɪstɪk/",
        example: "the artistic works of the period",
        exampleTranslation: "các tác phẩm nghệ thuật của thời kỳ đó"
    },
    {
        word: "artwork",
        meaning: "tác phẩm nghệ thuật, đồ họa (cho in ấn)",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɑːrtwɜːrk/",
        example: "Can you let me have the finished artwork for the poster by Friday?",
        exampleTranslation: "Bạn có thể gửi cho tôi bản thiết kế cuối cùng của áp phích trước thứ Sáu được không?"
    },
    {
        word: "ashamed",
        meaning: "xấu hổ, hổ thẹn",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/əˈʃeɪmd/",
        example: "ashamed of something She was deeply ashamed of her behaviour at the party.",
        exampleTranslation: "xấu hổ về điều gì đó Cô ấy vô cùng xấu hổ về hành vi của mình tại bữa tiệc."
    },
    {
        word: "aside",
        meaning: "sang một bên, riêng ra",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/əˈsaɪd/",
        example: "She pulled the curtain aside.",
        exampleTranslation: "Cô ấy kéo tấm rèm sang một bên."
    },
    {
        word: "aspect",
        meaning: "khía cạnh",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈæspekt/",
        example: "aspect of something The book aims to cover all aspects of city life.",
        exampleTranslation: "khía cạnh của điều gì đó Cuốn sách nhằm bao quát mọi khía cạnh của đời sống thành phố."
    },
    {
        word: "assess",
        meaning: "đánh giá",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əˈses/",
        example: "assess somebody/something Accurately assessing environmental impacts is very complex.",
        exampleTranslation: "đánh giá ai đó/cái gì đó Việc đánh giá chính xác tác động môi trường là rất phức tạp."
    },
    {
        word: "assessment",
        meaning: "sự đánh giá",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/əˈsesmənt/",
        example: "a detailed assessment of the risks involved",
        exampleTranslation: "một sự đánh giá chi tiết về các rủi ro liên quan"
    },
    {
        word: "asset",
        meaning: "tài sản, lợi thế",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈæset/",
        example: "In his job, patience is an invaluable asset.",
        exampleTranslation: "Trong công việc của anh ấy, sự kiên nhẫn là một tài sản vô giá."
    },
    {
        word: "assign",
        meaning: "phân công, giao (việc)",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əˈsaɪn/",
        example: "(to somebody) The teacher assigned a different task to each of the children.",
        exampleTranslation: "(cho ai đó) Giáo viên đã giao một nhiệm vụ khác nhau cho mỗi đứa trẻ."
    },
    {
        word: "assistance",
        meaning: "sự hỗ trợ, sự giúp đỡ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/əˈsɪstəns/",
        example: "technical/economic/military assistance",
        exampleTranslation: "sự hỗ trợ kỹ thuật/kinh tế/quân sự"
    },
    {
        word: "associate",
        meaning: "liên kết, liên tưởng",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əˈsəʊʃieɪt/",
        example: "associate somebody/something with somebody/something I always associate the smell of baking with my childhood.",
        exampleTranslation: "liên kết ai đó/cái gì đó với ai đó/cái gì đó Tôi luôn liên tưởng mùi bánh nướng với tuổi thơ của mình."
    },
    {
        word: "associated",
        meaning: "liên quan, có liên quan",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/əˈsəʊʃieɪtɪd/",
        example: "associated with doing something the risks associated with taking drugs",
        exampleTranslation: "có liên quan đến việc làm gì đó các rủi ro liên quan đến việc sử dụng ma túy"
    },
    {
        word: "association",
        meaning: "hiệp hội, sự liên kết",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/əˌsəʊʃiˈeɪʃn/",
        example: "Do you belong to any professional or trade associations?",
        exampleTranslation: "Bạn có thuộc bất kỳ hiệp hội nghề nghiệp hoặc thương mại nào không?"
    },
    {
        word: "assume",
        meaning: "giả định, cho rằng, thừa nhận",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əˈsuːm/",
        example: "assume (that)… It is reasonable to assume (that) the economy will continue to improve.",
        exampleTranslation: "Có lý khi cho rằng nền kinh tế sẽ tiếp tục cải thiện."
    },
    {
        word: "assumption",
        meaning: "giả định, sự cho rằng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/əˈsʌmpʃn/",
        example: "an underlying/implicit assumption",
        exampleTranslation: "một giả định tiềm ẩn/ngầm hiểu"
    },
    {
        word: "assure",
        meaning: "đảm bảo, cam đoan, trấn an",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əˈʃʊr/",
        example: "(that)… You think I did it deliberately, but I assure you (that) I did not.",
        exampleTranslation: "Bạn nghĩ tôi đã làm điều đó một cách cố ý, nhưng tôi đảm bảo với bạn rằng tôi đã không làm vậy."
    },
    {
        word: "astonishing",
        meaning: "đáng kinh ngạc, kinh ngạc",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/əˈstɑːnɪʃɪŋ/",
        example: "She ran 100m in an astonishing 10.6 seconds.",
        exampleTranslation: "Cô ấy chạy 100m trong 10.6 giây đáng kinh ngạc."
    },
    {
        word: "attachment",
        meaning: "tệp đính kèm, sự gắn bó",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/əˈtætʃmənt/",
        example: "No attachment was included.",
        exampleTranslation: "Không có tệp đính kèm nào được bao gồm."
    },
    {
        word: "attempt",
        meaning: "nỗ lực, sự cố gắng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/əˈtempt/",
        example: "I passed my driving test at the first attempt.",
        exampleTranslation: "Tôi đã vượt qua bài kiểm tra lái xe ngay lần thử đầu tiên."
    },
    {
        word: "auction",
        meaning: "cuộc đấu giá",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɔːkʃn/",
        example: "an auction of paintings",
        exampleTranslation: "một cuộc đấu giá tranh"
    },
    {
        word: "audio",
        meaning: "âm thanh, thuộc về âm thanh",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈɔːdiəʊ/",
        example: "audio and video recordings/files/clips",
        exampleTranslation: "các bản ghi/tệp/đoạn âm thanh và video"
    },
    {
        word: "automatic",
        meaning: "tự động",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌɔːtəˈmætɪk/",
        example: "automatic doors",
        exampleTranslation: "cửa tự động"
    },
    {
        word: "automatically",
        meaning: "một cách tự động",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˌɔːtəˈmætɪkli/",
        example: "The heating switches off automatically.",
        exampleTranslation: "Hệ thống sưởi tự động tắt."
    },
    {
        word: "awareness",
        meaning: "nhận thức, ý thức",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/əˈwernəs/",
        example: "awareness of something an awareness of the importance of eating a healthy diet",
        exampleTranslation: "nhận thức về điều gì đó, nhận thức về tầm quan trọng của việc ăn uống lành mạnh"
    },
    {
        word: "awkward",
        meaning: "khó xử, vụng về",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈɔːkwərd/",
        example: "There was an awkward silence.",
        exampleTranslation: "Có một sự im lặng khó xử."
    },
    {
        word: "back",
        meaning: "ủng hộ, hỗ trợ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/bæk/",
        example: "Her parents backed her in her choice of career.",
        exampleTranslation: "Cha mẹ cô ấy đã ủng hộ cô ấy trong lựa chọn nghề nghiệp."
    },
    {
        word: "bacteria",
        meaning: "vi khuẩn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/bækˈtɪriə/",
        example: "Neither chilling nor freezing kills all bacteria.",
        exampleTranslation: "Cả việc làm lạnh hay đóng băng đều không tiêu diệt được tất cả vi khuẩn."
    },
    {
        word: "badge",
        meaning: "huy hiệu, phù hiệu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/bædʒ/",
        example: "She wore a badge saying ‘Vote for Coates’.",
        exampleTranslation: "Cô ấy đeo một huy hiệu có chữ 'Bầu cho Coates'."
    },
    {
        word: "balanced",
        meaning: "cân bằng, công bằng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈbælənst/",
        example: "The programme presented a balanced view of the two sides of the conflict.",
        exampleTranslation: "Chương trình đã trình bày một cái nhìn cân bằng về hai phía của cuộc xung đột."
    },
    {
        word: "ballet",
        meaning: "ba lê",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/bæˈleɪ/",
        example: "She wants to be a ballet dancer.",
        exampleTranslation: "Cô ấy muốn trở thành một vũ công ba lê."
    },
    {
        word: "balloon",
        meaning: "bong bóng, khinh khí cầu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/bəˈluːn/",
        example: "to blow up/burst/pop a balloon",
        exampleTranslation: "thổi phồng/làm vỡ/làm nổ bong bóng"
    },
    {
        word: "bar",
        meaning: "cấm, ngăn cấm",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/bɑːr/",
        example: "Prisoners are barred by law from voting in general elections.",
        exampleTranslation: "Phạm nhân bị pháp luật cấm bỏ phiếu trong các cuộc tổng tuyển cử."
    },
    {
        word: "barely",
        meaning: "hầu như không, vừa đủ",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈberli/",
        example: "He could barely read and write.",
        exampleTranslation: "Anh ấy hầu như không thể đọc và viết."
    },
    {
        word: "bargain",
        meaning: "món hời, sự mặc cả",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈbɑːrɡən/",
        example: "I picked up a few good bargains in the sale.",
        exampleTranslation: "Tôi đã mua được vài món hời tốt trong đợt giảm giá."
    },
    {
        word: "barrier",
        meaning: "rào cản, chướng ngại vật",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈbæriər/",
        example: "The crowd had to stand behind barriers.",
        exampleTranslation: "Đám đông phải đứng sau hàng rào chắn."
    },
    {
        word: "basement",
        meaning: "tầng hầm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈbeɪsmənt/",
        example: "Kitchen goods are sold in the basement.",
        exampleTranslation: "Đồ dùng nhà bếp được bán ở tầng hầm."
    },
    {
        word: "basically",
        meaning: "về cơ bản, nói chung",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈbeɪsɪkli/",
        example: "I think we are basically saying the same thing.",
        exampleTranslation: "Tôi nghĩ về cơ bản chúng ta đang nói cùng một điều."
    },
    {
        word: "basket",
        meaning: "cái rổ, cái giỏ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈbæskɪt/",
        example: "a shopping basket",
        exampleTranslation: "một cái giỏ mua sắm"
    },
    {
        word: "bat",
        meaning: "gậy (bóng chày/cricket), con dơi",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/bæt/",
        example: "a baseball/cricket bat",
        exampleTranslation: "một cây gậy bóng chày/cricket"
    },
    {
        word: "battle",
        meaning: "chiến đấu, tranh đấu",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈbætl/",
        example: "Both teams battled hard.",
        exampleTranslation: "Cả hai đội đã chiến đấu hết mình."
    },
    {
        word: "bear",
        meaning: "chịu đựng, mang",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ber/",
        example: "The pain was almost more than he could bear.",
        exampleTranslation: "Cơn đau gần như vượt quá sức chịu đựng của anh ấy."
    },
    {
        word: "beat",
        meaning: "nhịp, tiếng đập",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/biːt/",
        example: "several loud beats on the drum",
        exampleTranslation: "nhiều tiếng đập lớn trên trống"
    },
    {
        word: "beg",
        meaning: "cầu xin, van xin",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/beɡ/",
        example: "Now you have to beg and plead.",
        exampleTranslation: "Bây giờ bạn phải cầu xin và van nài."
    },
    {
        word: "being",
        meaning: "sự tồn tại, sự hiện hữu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈbiːɪŋ/",
        example: "The Irish Free State came into being in 1922.",
        exampleTranslation: "Nhà nước Tự do Ireland ra đời vào năm 1922."
    },
    {
        word: "beneficial",
        meaning: "có lợi, có ích",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌbenɪˈfɪʃl/",
        example: "A good diet is beneficial to health.",
        exampleTranslation: "Một chế độ ăn uống tốt có lợi cho sức khỏe."
    },
    {
        word: "bent",
        meaning: "cong, bị uốn cong",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/bent/",
        example: "a piece of bent wire",
        exampleTranslation: "một đoạn dây thép bị uốn cong"
    },
    {
        word: "beside",
        meaning: "bên cạnh",
        partOfSpeech: "preposition",
        level: "B2",
        phonetic: "/bɪˈsaɪd/",
        example: "He sat beside her all night.",
        exampleTranslation: "Anh ấy ngồi bên cạnh cô ấy suốt đêm."
    },
    {
        word: "besides",
        meaning: "ngoài ra, hơn nữa",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/bɪˈsaɪdz/",
        example: "I don't really want to go. Besides, it's too late now.",
        exampleTranslation: "Tôi thực sự không muốn đi. Hơn nữa, bây giờ đã quá muộn rồi."
    },
    {
        word: "bet",
        meaning: "cuộc cá cược, tiền cược",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/bet/",
        example: "to win/lose a bet",
        exampleTranslation: "thắng/thua một cuộc cá cược"
    },
    {
        word: "beyond",
        meaning: "xa hơn, ở phía bên kia",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/bɪˈjɑːnd/",
        example: "Snowdon and the mountains beyond were covered in snow.",
        exampleTranslation: "Snowdon và những ngọn núi xa hơn được bao phủ bởi tuyết."
    },
    {
        word: "bias",
        meaning: "sự thiên vị, thành kiến",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈbaɪəs/",
        example: "accusations of political bias in news programmes (= that reports are unfair and show favour to one political party)",
        exampleTranslation: "những lời buộc tội về sự thiên vị chính trị trong các chương trình tin tức (= rằng các bản tin không công bằng và thể hiện sự ưu ái cho một đảng phái chính trị)."
    },
    {
        word: "bid",
        meaning: "giá thầu, sự trả giá, nỗ lực (mua lại)",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/bɪd/",
        example: "bid for something A German firm launched a takeover bid for the company.",
        exampleTranslation: "Một công ty của Đức đã đưa ra giá thầu mua lại công ty."
    },
    {
        word: "bill",
        meaning: "lập hóa đơn, tính tiền",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/bɪl/",
        example: "Please bill me for the books.",
        exampleTranslation: "Làm ơn lập hóa đơn cho tôi về những cuốn sách này."
    },
    {
        word: "biological",
        meaning: "thuộc về sinh học",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌbaɪəˈlɑːdʒɪkl/",
        example: "the biological sciences",
        exampleTranslation: "các ngành khoa học sinh học"
    },
    {
        word: "bitter",
        meaning: "đắng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈbɪtər/",
        example: "Black coffee leaves a bitter taste in the mouth.",
        exampleTranslation: "Cà phê đen để lại vị đắng trong miệng."
    },
    {
        word: "blame",
        meaning: "sự đổ lỗi, trách nhiệm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/bleɪm/",
        example: "Why do I always get the blame for everything that goes wrong?",
        exampleTranslation: "Tại sao tôi luôn bị đổ lỗi cho mọi thứ sai sót?"
    },
    {
        word: "blanket",
        meaning: "chăn, mền",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈblæŋkɪt/",
        example: "It’s cold tonight—can I have another blanket?",
        exampleTranslation: "Tối nay trời lạnh quá—tôi có thể có thêm một cái chăn nữa không?"
    },
    {
        word: "blind",
        meaning: "mù, không nhìn thấy",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/blaɪnd/",
        example: "Doctors think he will go blind.",
        exampleTranslation: "Các bác sĩ nghĩ rằng anh ấy sẽ bị mù."
    },
    {
        word: "blow",
        meaning: "cú đánh, đòn đánh",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/bləʊ/",
        example: "She received a severe blow on the head.",
        exampleTranslation: "Cô ấy nhận một cú đánh mạnh vào đầu."
    },
    {
        word: "bold",
        meaning: "táo bạo, dũng cảm",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/bəʊld/",
        example: "It was a bold move on their part to open a business in France.",
        exampleTranslation: "Đó là một bước đi táo bạo của họ khi mở một doanh nghiệp ở Pháp."
    },
    {
        word: "bombing",
        meaning: "vụ đánh bom, việc đánh bom",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈbɑːmɪŋ/",
        example: "recent bombings in major cities",
        exampleTranslation: "các vụ đánh bom gần đây ở các thành phố lớn."
    },
    {
        word: "bond",
        meaning: "mối liên kết, sự ràng buộc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/bɑːnd/",
        example: "the bond that links us",
        exampleTranslation: "mối liên kết gắn kết chúng ta."
    },
    {
        word: "booking",
        meaning: "việc đặt chỗ, sự đặt trước",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈbʊkɪŋ/",
        example: "a booking form/hall/clerk",
        exampleTranslation: "mẫu đặt chỗ/phòng đặt chỗ/nhân viên đặt chỗ."
    },
    {
        word: "boost",
        meaning: "sự thúc đẩy, sự tăng cường",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/buːst/",
        example: "a great/tremendous/welcome boost",
        exampleTranslation: "một sự thúc đẩy tuyệt vời/to lớn/đáng hoan nghênh."
    },
    {
        word: "border",
        meaning: "giáp ranh, tiếp giáp",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈbɔːrdər/",
        example: "the countries bordering the Baltic",
        exampleTranslation: "các quốc gia giáp biển Baltic."
    },
    {
        word: "bound",
        meaning: "chắc chắn, nhất định",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/baʊnd/",
        example: "There are bound to be changes when the new system is introduced.",
        exampleTranslation: "Chắc chắn sẽ có những thay đổi khi hệ thống mới được giới thiệu."
    },
    {
        word: "breast",
        meaning: "vú, ngực",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/brest/",
        example: "She put the baby to her breast.",
        exampleTranslation: "Cô ấy cho em bé bú."
    },
    {
        word: "brick",
        meaning: "gạch",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/brɪk/",
        example: "The school is built of brick.",
        exampleTranslation: "Ngôi trường được xây bằng gạch."
    },
    {
        word: "brief",
        meaning: "ngắn gọn, vắn tắt",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/briːf/",
        example: "a brief visit/meeting/conversation",
        exampleTranslation: "một chuyến thăm/cuộc họp/cuộc trò chuyện ngắn gọn."
    },
    {
        word: "briefly",
        meaning: "một cách ngắn gọn, vắn tắt",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈbriːfli/",
        example: "He had spoken to Emma only briefly.",
        exampleTranslation: "Anh ấy chỉ nói chuyện với Emma một cách ngắn gọn."
    },
    {
        word: "broad",
        meaning: "rộng, bao la",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/brɔːd/",
        example: "a broad street/avenue/river",
        exampleTranslation: "một con phố/đại lộ/sông rộng."
    },
    {
        word: "broadcast",
        meaning: "chương trình phát sóng, buổi phát sóng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈbrɔːdkæst/",
        example: "(British English) a party political broadcast (= for example, before an election)",
        exampleTranslation: "(Tiếng Anh Anh) một chương trình phát sóng chính trị của đảng (= ví dụ, trước một cuộc bầu cử)."
    },
    {
        word: "broadcaster",
        meaning: "phát thanh viên, người phát sóng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈbrɔːdkæstər/",
        example: "She is a writer and broadcaster on environmental matters.",
        exampleTranslation: "Cô ấy là một nhà văn và phát thanh viên về các vấn đề môi trường."
    },
    {
        word: "broadly",
        meaning: "nói chung, một cách khái quát",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈbrɔːdli/",
        example: "Broadly speaking, I agree with you.",
        exampleTranslation: "Nói chung, tôi đồng ý với bạn."
    },
    {
        word: "budget",
        meaning: "ngân sách",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈbʌdʒɪt/",
        example: "an annual budget of £10 million",
        exampleTranslation: "ngân sách hàng năm 10 triệu bảng Anh"
    },
    {
        word: "bug",
        meaning: "côn trùng, lỗi (phần mềm)",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/bʌɡ/",
        example: "There's a bug crawling up your arm.",
        exampleTranslation: "Có một con côn trùng đang bò lên cánh tay bạn."
    },
    {
        word: "bullet",
        meaning: "viên đạn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈbʊlɪt/",
        example: "He was found to have a single bullet wound in his chest.",
        exampleTranslation: "Người ta phát hiện anh ta có một vết thương do đạn bắn vào ngực."
    },
    {
        word: "bunch",
        meaning: "bó, chùm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/bʌntʃ/",
        example: "a bunch of bananas, grapes, etc.",
        exampleTranslation: "một nải chuối, chùm nho, v.v."
    },
    {
        word: "burn",
        meaning: "vết bỏng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/bɜːrn/",
        example: "to have minor/severe/third-degree burns",
        exampleTranslation: "bị bỏng nhẹ/nặng/độ ba"
    },
    {
        word: "bush",
        meaning: "bụi cây",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/bʊʃ/",
        example: "a rose/holly bush",
        exampleTranslation: "bụi hoa hồng/cây nhựa ruồi"
    },
    {
        word: "but",
        meaning: "trừ, ngoại trừ",
        partOfSpeech: "preposition",
        level: "B2",
        phonetic: "/bʌt/",
        example: "We've had nothing but trouble with this car.",
        exampleTranslation: "Chúng tôi chẳng gặp gì ngoài rắc rối với chiếc xe này."
    },
    {
        word: "cabin",
        meaning: "khoang, ca bin, nhà gỗ nhỏ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkæbɪn/",
        example: "I lay in my cabin feeling miserably seasick.",
        exampleTranslation: "Tôi nằm trong khoang cảm thấy say sóng một cách khổ sở."
    },
    {
        word: "cable",
        meaning: "cáp",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkeɪbl/",
        example: "fibre-optic cable",
        exampleTranslation: "cáp quang"
    },
    {
        word: "calculate",
        meaning: "tính toán, ước tính",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈkælkjuleɪt/",
        example: "An independent valuer will calculate the value of your property.",
        exampleTranslation: "Một chuyên gia định giá độc lập sẽ tính toán giá trị tài sản của bạn."
    },
    {
        word: "canal",
        meaning: "kênh đào",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kəˈnæl/",
        example: "the Panama/Suez Canal",
        exampleTranslation: "Kênh đào Panama/Suez"
    },
    {
        word: "cancel",
        meaning: "hủy bỏ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈkænsl/",
        example: "All flights have been cancelled because of bad weather.",
        exampleTranslation: "Tất cả các chuyến bay đã bị hủy bỏ do thời tiết xấu."
    },
    {
        word: "cancer",
        meaning: "ung thư",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkænsər/",
        example: "breast/lung cancer",
        exampleTranslation: "ung thư vú/phổi"
    },
    {
        word: "candle",
        meaning: "nến",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkændl/",
        example: "a flickering candle",
        exampleTranslation: "một cây nến lung lay/chập chờn"
    },
    {
        word: "capable",
        meaning: "có khả năng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈkeɪpəbl/",
        example: "capable of something You are capable of better work than this.",
        exampleTranslation: "Bạn có khả năng làm việc tốt hơn thế này."
    },
    {
        word: "capacity",
        meaning: "dung tích, sức chứa",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kəˈpæsəti/",
        example: "a fuel tank with a maximum capacity of 50 litres",
        exampleTranslation: "một bình nhiên liệu có dung tích tối đa 50 lít"
    },
    {
        word: "capture",
        meaning: "sự bắt giữ, sự chiếm giữ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkæptʃər/",
        example: "He evaded capture for three days.",
        exampleTranslation: "Anh ta đã lẩn tránh sự bắt giữ trong ba ngày."
    },
    {
        word: "carbon",
        meaning: "cacbon",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkɑːrbən/",
        example: "carbon fibre",
        exampleTranslation: "sợi cacbon"
    },
    {
        word: "cast",
        meaning: "dàn diễn viên",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kæst/",
        example: "an all-star cast (= including many well-known actors)",
        exampleTranslation: "một dàn diễn viên toàn sao (= bao gồm nhiều diễn viên nổi tiếng)"
    },
    {
        word: "casual",
        meaning: "thông thường, bình thường, thoải mái",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈkæʒuəl/",
        example: "casual clothes (= comfortable clothes that you choose to wear in your free time)",
        exampleTranslation: "quần áo bình thường/thường ngày (= quần áo thoải mái bạn chọn mặc vào thời gian rảnh)"
    },
    {
        word: "catch",
        meaning: "sự bắt bóng, mẻ cá, cái chốt",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ketʃ/",
        example: "Roger made some brilliant catches at today's game.",
        exampleTranslation: "Roger đã có vài pha bắt bóng xuất sắc trong trận đấu hôm nay."
    },
    {
        word: "cave",
        meaning: "hang động",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/keɪv/",
        example: "the mouth (= the entrance) of the cave",
        exampleTranslation: "cửa hang (= lối vào) của hang động"
    },
    {
        word: "cell",
        meaning: "tế bào, phòng giam",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/sel/",
        example: "red and white blood cells",
        exampleTranslation: "các tế bào hồng cầu và bạch cầu"
    },
    {
        word: "certainty",
        meaning: "sự chắc chắn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈsɜːrtnti/",
        example: "There is no certainty that the president's removal would end the civil war.",
        exampleTranslation: "Không có gì chắc chắn rằng việc cách chức tổng thống sẽ chấm dứt cuộc nội chiến."
    },
    {
        word: "certificate",
        meaning: "giấy chứng nhận, chứng chỉ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/sərˈtɪfɪkət/",
        example: "a birth/marriage/death certificate",
        exampleTranslation: "giấy khai sinh/kết hôn/chứng tử"
    },
    {
        word: "chain",
        meaning: "xích, khóa bằng xích",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/tʃeɪn/",
        example: "chain somebody/something The doors were always locked and chained.",
        exampleTranslation: "Cửa luôn bị khóa và xích."
    },
    {
        word: "chair",
        meaning: "chủ trì, làm chủ tọa",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/tʃer/",
        example: "to chair a committee",
        exampleTranslation: "chủ trì một ủy ban"
    },
    {
        word: "chairman",
        meaning: "chủ tịch, chủ tọa",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈtʃermən/",
        example: "Sir Herbert took it upon himself to act as chairman.",
        exampleTranslation: "Ngài Herbert đã tự mình đảm nhận vai trò chủ tịch."
    },
    {
        word: "challenge",
        meaning: "thách thức, phản đối, yêu cầu giải thích",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈtʃælɪndʒ/",
        example: "His legal team immediately sought to challenge the decision.",
        exampleTranslation: "Đội ngũ pháp lý của anh ta ngay lập tức tìm cách phản đối quyết định này."
    },
    {
        word: "challenging",
        meaning: "thử thách, đầy thách thức",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈtʃælɪndʒɪŋ/",
        example: "challenging work/questions/problems",
        exampleTranslation: "công việc/câu hỏi/vấn đề đầy thử thách"
    },
    {
        word: "championship",
        meaning: "giải vô địch, chức vô địch",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈtʃæmpiənʃɪp/",
        example: "the National Basketball Association Championship",
        exampleTranslation: "Giải Vô địch Hiệp hội Bóng rổ Quốc gia"
    },
    {
        word: "characteristic",
        meaning: "đặc trưng, tiêu biểu",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌkærəktəˈrɪstɪk/",
        example: "characteristic of something/somebody Community support of families is characteristic of many societies.",
        exampleTranslation: "đặc trưng của cái gì/ai đó. Sự hỗ trợ gia đình của cộng đồng là đặc trưng của nhiều xã hội."
    },
    {
        word: "charming",
        meaning: "duyên dáng, quyến rũ, đáng yêu",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈtʃɑːrmɪŋ/",
        example: "The cottage is tiny, but it's charming.",
        exampleTranslation: "Ngôi nhà nhỏ xíu, nhưng nó rất duyên dáng."
    },
    {
        word: "chart",
        meaning: "ghi lại, mô tả sự phát triển",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/tʃɑːrt/",
        example: "The exhibition charts the history of the palace.",
        exampleTranslation: "Triển lãm ghi lại/mô tả lịch sử của cung điện."
    },
    {
        word: "chase",
        meaning: "cuộc rượt đuổi, sự truy đuổi",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/tʃeɪs/",
        example: "The thieves were caught by police after a short chase.",
        exampleTranslation: "Những tên trộm đã bị cảnh sát bắt sau một cuộc rượt đuổi ngắn."
    },
    {
        word: "cheek",
        meaning: "má",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/tʃiːk/",
        example: "chubby/rosy/pink cheeks",
        exampleTranslation: "má bầu bĩnh/hồng hào/hồng"
    },
    {
        word: "cheer",
        meaning: "tiếng reo hò, tiếng cổ vũ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/tʃɪr/",
        example: "A great cheer went up from the crowd.",
        exampleTranslation: "Một tiếng reo hò lớn vang lên từ đám đông."
    },
    {
        word: "chief",
        meaning: "chính, chủ yếu, quan trọng nhất",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/tʃiːf/",
        example: "the chief cause/problem/reason",
        exampleTranslation: "nguyên nhân/vấn đề/lý do chính"
    },
    {
        word: "choir",
        meaning: "dàn hợp xướng, đội hợp xướng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkwaɪər/",
        example: "She sings in the school choir.",
        exampleTranslation: "Cô ấy hát trong dàn hợp xướng của trường."
    },
    {
        word: "chop",
        meaning: "chặt, băm",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/tʃɑːp/",
        example: "He was chopping logs for firewood.",
        exampleTranslation: "Anh ấy đang chặt khúc gỗ làm củi."
    },
    {
        word: "circuit",
        meaning: "mạch, đường đua, vòng đua",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈsɜːrkɪt/",
        example: "The race ended with eight laps of a city centre circuit.",
        exampleTranslation: "Cuộc đua kết thúc với tám vòng trên đường đua trung tâm thành phố."
    },
    {
        word: "circumstance",
        meaning: "hoàn cảnh, trường hợp",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈsɜːrkəmstæns/",
        example: "Police said there were no suspicious circumstances surrounding the boy's death.",
        exampleTranslation: "Cảnh sát cho biết không có hoàn cảnh đáng ngờ nào xung quanh cái chết của cậu bé."
    },
    {
        word: "cite",
        meaning: "trích dẫn, viện dẫn",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/saɪt/",
        example: "She cited examples of companies the city has helped relocate or expand.",
        exampleTranslation: "Cô ấy đã trích dẫn các ví dụ về những công ty mà thành phố đã giúp di dời hoặc mở rộng."
    },
    {
        word: "citizen",
        meaning: "công dân",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈsɪtɪzn/",
        example: "The defeat of the president did not change the lives of ordinary citizens for the better.",
        exampleTranslation: "Việc tổng thống thất cử đã không làm thay đổi cuộc sống của những công dân bình thường tốt đẹp hơn."
    },
    {
        word: "civil",
        meaning: "dân sự, thuộc về dân chúng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈsɪvl/",
        example: "civil unrest (= that is caused by groups of people within a country)",
        exampleTranslation: "bất ổn dân sự (= do các nhóm người trong một quốc gia gây ra)"
    },
    {
        word: "civilization",
        meaning: "nền văn minh",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌsɪvələˈzeɪʃn/",
        example: "the technology of modern civilization",
        exampleTranslation: "công nghệ của nền văn minh hiện đại"
    },
    {
        word: "clarify",
        meaning: "làm rõ, làm sáng tỏ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈklærəfaɪ/",
        example: "a situation/problem/issue",
        exampleTranslation: "làm rõ một tình huống/vấn đề/sự việc"
    },
    {
        word: "classic",
        meaning: "kinh điển, cổ điển, tiêu biểu",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈklæsɪk/",
        example: "a classic film/story/car/game",
        exampleTranslation: "một bộ phim/câu chuyện/chiếc xe hơi/trò chơi kinh điển"
    },
    {
        word: "classify",
        meaning: "phân loại, xếp loại",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈklæsɪfaɪ/",
        example: "The books in the library are classified according to subject.",
        exampleTranslation: "Những cuốn sách trong thư viện được phân loại theo chủ đề."
    },
    {
        word: "clerk",
        meaning: "thư ký, nhân viên bán hàng/thu ngân",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/klɜːrk/",
        example: "The clerk at the counter gave me too little change.",
        exampleTranslation: "Người nhân viên/thu ngân ở quầy đã thối lại cho tôi quá ít tiền."
    },
    {
        word: "cliff",
        meaning: "vách đá, dốc đá",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/klɪf/",
        example: "the cliff edge/top",
        exampleTranslation: "mép/đỉnh vách đá"
    },
    {
        word: "clinic",
        meaning: "phòng khám, bệnh viện tư",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈklɪnɪk/",
        example: "Your local family planning clinic can give you advice about birth control.",
        exampleTranslation: "Phòng khám kế hoạch hóa gia đình tại địa phương của bạn có thể cho bạn lời khuyên về biện pháp tránh thai."
    },
    {
        word: "clip",
        meaning: "đoạn phim/nhạc, kẹp, cái kẹp",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/klɪp/",
        example: "Here is a clip from her latest movie.",
        exampleTranslation: "Đây là một đoạn trích từ bộ phim mới nhất của cô ấy."
    },
    {
        word: "close",
        meaning: "kết thúc, cuối cùng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kləʊz/",
        example: "at the close of the seventeenth century",
        exampleTranslation: "vào cuối thế kỷ mười bảy"
    },
    {
        word: "closely",
        meaning: "chặt chẽ, sát sao, gần gũi",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈkləʊsli/",
        example: "He walked into the room, closely followed by the rest of the family.",
        exampleTranslation: "Anh ấy bước vào phòng, theo sát phía sau là những người còn lại trong gia đình."
    },
    {
        word: "coincidence",
        meaning: "sự trùng hợp ngẫu nhiên",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kəʊˈɪnsɪdəns/",
        example: "a strange/an extraordinary/a remarkable coincidence",
        exampleTranslation: "một sự trùng hợp ngẫu nhiên kỳ lạ/phi thường/đáng chú ý"
    },
    {
        word: "collapse",
        meaning: "sự sụp đổ, sự đổ vỡ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kəˈlæps/",
        example: "the collapse of the Soviet Union",
        exampleTranslation: "sự sụp đổ của Liên Xô"
    },
    {
        word: "collector",
        meaning: "người sưu tập, người thu thập",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kəˈlektər/",
        example: "a stamp collector",
        exampleTranslation: "người sưu tập tem"
    },
    {
        word: "colony",
        meaning: "thuộc địa, thuộc địa thực dân",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkɑːləni/",
        example: "former British colonies",
        exampleTranslation: "các thuộc địa cũ của Anh"
    },
    {
        word: "colourful",
        meaning: "sặc sỡ, nhiều màu sắc",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈkʌlərfl/",
        example: "colourful shop windows",
        exampleTranslation: "những cửa sổ cửa hàng sặc sỡ"
    },
    {
        word: "combination",
        meaning: "sự kết hợp, sự phối hợp",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌkɑːmbɪˈneɪʃn/",
        example: "combination of something The tragedy was due to a combination of factors.",
        exampleTranslation: "Thảm kịch là do sự kết hợp của nhiều yếu tố."
    },
    {
        word: "comfort",
        meaning: "sự thoải mái, tiện nghi",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkʌmfərt/",
        example: "The hotel offers a high standard of comfort and service.",
        exampleTranslation: "Khách sạn mang đến sự thoải mái và dịch vụ tiêu chuẩn cao."
    },
    {
        word: "comic",
        meaning: "hài hước, gây cười",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈkɑːmɪk/",
        example: "a comic monologue/story",
        exampleTranslation: "một đoạn độc thoại/câu chuyện hài hước"
    },
    {
        word: "command",
        meaning: "lệnh, mệnh lệnh, sự chỉ huy",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kəˈmænd/",
        example: "Begin when I give the command.",
        exampleTranslation: "Bắt đầu khi tôi ra lệnh."
    },
    {
        word: "commander",
        meaning: "chỉ huy, tư lệnh",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kəˈmændər/",
        example: "military/allied/field/flight commanders",
        exampleTranslation: "các chỉ huy quân sự/đồng minh/chiến trường/chuyến bay"
    },
    {
        word: "commission",
        meaning: "ủy ban, hội đồng; tiền hoa hồng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kəˈmɪʃn/",
        example: "The commission is expected to report its findings next month.",
        exampleTranslation: "Ủy ban dự kiến sẽ báo cáo kết quả của mình vào tháng tới."
    },
    {
        word: "commitment",
        meaning: "sự cam kết, sự tận tâm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kəˈmɪtmənt/",
        example: "I'm not ready to make a long-term commitment.",
        exampleTranslation: "Tôi chưa sẵn sàng đưa ra một cam kết dài hạn."
    },
    {
        word: "committee",
        meaning: "ủy ban",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kəˈmɪti/",
        example: "an executive/advisory/organizing committee",
        exampleTranslation: "một ủy ban điều hành/tư vấn/tổ chức"
    },
    {
        word: "commonly",
        meaning: "thường, thông thường, phổ biến",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈkɑːmənli/",
        example: "Christopher is commonly known as Kit.",
        exampleTranslation: "Christopher thường được biết đến với tên Kit."
    },
    {
        word: "comparative",
        meaning: "tương đối",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/kəmˈpærətɪv/",
        example: "Then he was living in comparative comfort (= compared with others or with his own life at a previous time).",
        exampleTranslation: "Sau đó anh ta sống trong sự thoải mái tương đối (= so với người khác hoặc so với cuộc sống của chính anh ta ở thời điểm trước đó)."
    },
    {
        word: "completion",
        meaning: "sự hoàn thành, sự hoàn tất",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kəmˈpliːʃn/",
        example: "the completion of the new hospital building",
        exampleTranslation: "việc hoàn thành tòa nhà bệnh viện mới"
    },
    {
        word: "complex",
        meaning: "khu phức hợp, tổ hợp",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkɑːmpleks/",
        example: "a sports/leisure/shopping complex",
        exampleTranslation: "một khu phức hợp thể thao/giải trí/mua sắm"
    },
    {
        word: "complicated",
        meaning: "phức tạp, rắc rối",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈkɑːmplɪkeɪtɪd/",
        example: "a complicated issue/process/system",
        exampleTranslation: "một vấn đề/quá trình/hệ thống phức tạp"
    },
    {
        word: "component",
        meaning: "thành phần, bộ phận",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kəmˈpəʊnənt/",
        example: "the different organizations involved in the design of the various components",
        exampleTranslation: "các tổ chức khác nhau liên quan đến việc thiết kế các thành phần khác nhau"
    },
    {
        word: "compose",
        meaning: "sáng tác, biên soạn",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/kəmˈpəʊz/",
        example: "Mozart composed his last opera shortly before he died.",
        exampleTranslation: "Mozart đã sáng tác vở opera cuối cùng của mình ngay trước khi ông qua đời."
    },
    {
        word: "composer",
        meaning: "nhà soạn nhạc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kəmˈpəʊzər/",
        example: "Verdi was a prolific composer of operas.",
        exampleTranslation: "Verdi là một nhà soạn nhạc opera sung mãn."
    },
    {
        word: "compound",
        meaning: "hợp chất; khu nhà có tường bao quanh",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkɑːmpaʊnd/",
        example: "compounds derived from rainforest plants",
        exampleTranslation: "các hợp chất có nguồn gốc từ thực vật rừng nhiệt đới"
    },
    {
        word: "comprehensive",
        meaning: "toàn diện, bao quát",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌkɑːmprɪˈhensɪv/",
        example: "a comprehensive list of addresses",
        exampleTranslation: "một danh sách địa chỉ toàn diện"
    },
    {
        word: "comprise",
        meaning: "bao gồm, gồm có",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/kəmˈpraɪz/",
        example: "The collection comprises 327 paintings.",
        exampleTranslation: "Bộ sưu tập bao gồm 327 bức tranh."
    },
    {
        word: "compulsory",
        meaning: "bắt buộc",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/kəmˈpʌlsəri/",
        example: "English is a compulsory subject at this level.",
        exampleTranslation: "Tiếng Anh là môn học bắt buộc ở cấp độ này."
    },
    {
        word: "concentration",
        meaning: "sự tập trung",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌkɑːnsnˈtreɪʃn/",
        example: "This book requires a great deal of concentration.",
        exampleTranslation: "Cuốn sách này đòi hỏi sự tập trung cao độ."
    },
    {
        word: "concept",
        meaning: "khái niệm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkɑːnsept/",
        example: "concept of something the concept of social class",
        exampleTranslation: "khái niệm về tầng lớp xã hội"
    },
    {
        word: "concern",
        meaning: "sự lo lắng, mối quan ngại",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kənˈsɜːrn/",
        example: "concern about something/somebody Villagers expressed concern about the level of traffic.",
        exampleTranslation: "Người dân làng bày tỏ mối quan ngại về mức độ giao thông."
    },
    {
        word: "concerned",
        meaning: "lo lắng, quan tâm",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/kənˈsɜːrnd/",
        example: "Concerned citizens can have a huge impact.",
        exampleTranslation: "Những công dân quan tâm có thể tạo ra tác động lớn."
    },
    {
        word: "concrete",
        meaning: "bê tông; cụ thể",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈkɑːnkriːt/",
        example: "a concrete floor",
        exampleTranslation: "một sàn bê tông"
    },
    {
        word: "conduct",
        meaning: "cách ứng xử, đạo đức",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkɑːndʌkt/",
        example: "The sport has a strict code of conduct.",
        exampleTranslation: "Môn thể thao này có một quy tắc ứng xử nghiêm ngặt."
    },
    {
        word: "confess",
        meaning: "thú nhận, thú tội",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/kənˈfes/",
        example: "After hours of questioning, the suspect confessed.",
        exampleTranslation: "Sau nhiều giờ thẩm vấn, nghi phạm đã thú nhận."
    },
    {
        word: "confidence",
        meaning: "sự tự tin, sự tin tưởng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkɑːnfɪdəns/",
        example: "The president's actions hardly inspire confidence.",
        exampleTranslation: "Hành động của tổng thống khó mà truyền cảm hứng tin tưởng."
    },
    {
        word: "conflict",
        meaning: "xung đột, mâu thuẫn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkɑːnflɪkt/",
        example: "The violence was the result of political conflicts.",
        exampleTranslation: "Bạo lực là kết quả của các xung đột chính trị."
    },
    {
        word: "confusing",
        meaning: "khó hiểu, gây bối rối",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/kənˈfjuːzɪŋ/",
        example: "The instructions on the box are very confusing.",
        exampleTranslation: "Hướng dẫn trên hộp rất khó hiểu."
    },
    {
        word: "confusion",
        meaning: "sự bối rối, sự nhầm lẫn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kənˈfjuːʒn/",
        example: "The announcement caused a lot of confusion.",
        exampleTranslation: "Thông báo đã gây ra rất nhiều sự bối rối."
    },
    {
        word: "conscious",
        meaning: "có ý thức, tỉnh táo",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈkɑːnʃəs/",
        example: "conscious of something She's very conscious of the problems involved.",
        exampleTranslation: "Cô ấy rất ý thức về những vấn đề liên quan."
    },
    {
        word: "consequently",
        meaning: "do đó, vì vậy, hậu quả là",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈkɑːnsɪkwentli/",
        example: "This poses a threat to agriculture and the food chain, and consequently to human health.",
        exampleTranslation: "Điều này gây ra mối đe dọa cho nông nghiệp và chuỗi thực phẩm, và do đó, cho sức khỏe con người."
    },
    {
        word: "conservation",
        meaning: "sự bảo tồn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌkɑːnsərˈveɪʃn/",
        example: "to be interested in wildlife conservation",
        exampleTranslation: "quan tâm đến việc bảo tồn động vật hoang dã"
    },
    {
        word: "conservative",
        meaning: "bảo thủ",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/kənˈsɜːrvətɪv/",
        example: "the conservative views of his parents",
        exampleTranslation: "những quan điểm bảo thủ của cha mẹ anh ấy"
    },
    {
        word: "considerable",
        meaning: "đáng kể, đáng quan tâm",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/kənˈsɪdərəbl/",
        example: "The project wasted a considerable amount of time and money.",
        exampleTranslation: "Dự án đã lãng phí một lượng đáng kể thời gian và tiền bạc."
    },
    {
        word: "considerably",
        meaning: "đáng kể",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/kənˈsɪdərəbli/",
        example: "The need for sleep varies considerably from person to person.",
        exampleTranslation: "Nhu cầu ngủ khác nhau đáng kể ở mỗi người."
    },
    {
        word: "consideration",
        meaning: "sự cân nhắc, sự xem xét",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kənˌsɪdəˈreɪʃn/",
        example: "An employer is legally bound to give due consideration to the request.",
        exampleTranslation: "Người sử dụng lao động bị ràng buộc về mặt pháp lý phải xem xét kỹ lưỡng yêu cầu đó."
    },
    {
        word: "consistent",
        meaning: "kiên định, nhất quán",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/kənˈsɪstənt/",
        example: "a consistent approach to the problem",
        exampleTranslation: "một cách tiếp cận nhất quán đối với vấn đề"
    },
    {
        word: "consistently",
        meaning: "một cách nhất quán, luôn luôn",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/kənˈsɪstəntli/",
        example: "Her work has been of a consistently high standard.",
        exampleTranslation: "Công việc của cô ấy luôn đạt tiêu chuẩn cao."
    },
    {
        word: "conspiracy",
        meaning: "âm mưu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kənˈspɪrəsi/",
        example: "conspiracy (to do something) a conspiracy to overthrow the government",
        exampleTranslation: "một âm mưu lật đổ chính phủ"
    },
    {
        word: "constant",
        meaning: "liên tục, không ngừng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈkɑːnstənt/",
        example: "There were constant interruptions.",
        exampleTranslation: "Có những sự gián đoạn liên tục."
    },
    {
        word: "constantly",
        meaning: "liên tục, không ngừng",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈkɑːnstəntli/",
        example: "Fashion is constantly changing.",
        exampleTranslation: "Thời trang liên tục thay đổi."
    },
    {
        word: "construct",
        meaning: "xây dựng",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/kənˈstrʌkt/",
        example: "The building was constructed in 1993.",
        exampleTranslation: "Tòa nhà được xây dựng vào năm 1993."
    },
    {
        word: "construction",
        meaning: "sự xây dựng, công trình xây dựng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kənˈstrʌkʃn/",
        example: "Construction began this year and will take approximately 18 months.",
        exampleTranslation: "Việc xây dựng bắt đầu trong năm nay và sẽ mất khoảng 18 tháng."
    },
    {
        word: "consult",
        meaning: "tham khảo ý kiến, hỏi ý kiến",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/kənˈsʌlt/",
        example: "If the pain continues, consult your doctor.",
        exampleTranslation: "Nếu cơn đau vẫn tiếp tục, hãy tham khảo ý kiến bác sĩ."
    },
    {
        word: "consultant",
        meaning: "chuyên gia tư vấn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kənˈsʌltənt/",
        example: "a technology/design consultant",
        exampleTranslation: "một chuyên gia tư vấn công nghệ/thiết kế"
    },
    {
        word: "consumption",
        meaning: "sự tiêu thụ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kənˈsʌmpʃn/",
        example: "the production of fuel for domestic consumption (= to be used in the country where it is produced)",
        exampleTranslation: "việc sản xuất nhiên liệu để tiêu thụ trong nước (= để sử dụng trong nước nơi nó được sản xuất)"
    },
    {
        word: "contemporary",
        meaning: "đương đại, cùng thời",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/kənˈtempəreri/",
        example: "We have no contemporary account of the battle (= written near the time that it happened).",
        exampleTranslation: "Chúng tôi không có bản tường thuật đương thời nào về trận chiến đó (= được viết gần thời điểm nó xảy ra)."
    },
    {
        word: "contest",
        meaning: "cuộc thi",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkɑːntest/",
        example: "to hold a singing/talent contest",
        exampleTranslation: "tổ chức một cuộc thi hát/tài năng"
    },
    {
        word: "contract",
        meaning: "hợp đồng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkɑːntrækt/",
        example: "All employees have a written contract of employment.",
        exampleTranslation: "Tất cả nhân viên đều có hợp đồng lao động bằng văn bản."
    },
    {
        word: "contribute",
        meaning: "đóng góp",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/kənˈtrɪbjuːt/",
        example: "Do you wish to contribute?",
        exampleTranslation: "Bạn có muốn đóng góp không?"
    },
    {
        word: "contribution",
        meaning: "sự đóng góp, khoản đóng góp",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌkɑːntrɪˈbjuːʃn/",
        example: "All contributions will be gratefully received.",
        exampleTranslation: "Mọi khoản đóng góp sẽ được trân trọng tiếp nhận."
    },
    {
        word: "controversial",
        meaning: "gây tranh cãi",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌkɑːntrəˈvɜːrʃl/",
        example: "a highly controversial topic",
        exampleTranslation: "một chủ đề gây tranh cãi gay gắt"
    },
    {
        word: "controversy",
        meaning: "cuộc tranh cãi, sự tranh cãi",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkɑːntrəvɜːrsi/",
        example: "to arouse/cause controversy",
        exampleTranslation: "gây ra/tạo ra tranh cãi"
    },
    {
        word: "convenience",
        meaning: "sự tiện lợi, sự thuận tiện",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kənˈviːniəns/",
        example: "We have provided seats for the convenience of our customers.",
        exampleTranslation: "Chúng tôi đã cung cấp ghế ngồi để thuận tiện cho khách hàng."
    },
    {
        word: "convention",
        meaning: "quy ước, tục lệ, hội nghị",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kənˈvenʃn/",
        example: "the rigid social conventions of Victorian Britain",
        exampleTranslation: "những quy ước xã hội cứng nhắc của nước Anh thời Victoria"
    },
    {
        word: "conventional",
        meaning: "thông thường, theo quy ước",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/kənˈvenʃənl/",
        example: "conventional behaviour/morality",
        exampleTranslation: "hành vi/đạo đức thông thường"
    },
    {
        word: "convert",
        meaning: "chuyển đổi, cải tạo",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/kənˈvɜːrt/",
        example: "They took just nine months to convert the building.",
        exampleTranslation: "Họ chỉ mất chín tháng để cải tạo tòa nhà."
    },
    {
        word: "convey",
        meaning: "truyền đạt, chuyển tải, biểu lộ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/kənˈveɪ/",
        example: "Colours like red convey a sense of energy and strength.",
        exampleTranslation: "Những màu sắc như đỏ truyền tải cảm giác năng lượng và sức mạnh."
    },
    {
        word: "convinced",
        meaning: "bị thuyết phục, tin chắc",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/kənˈvɪnst/",
        example: "Sam nodded but he didn't look convinced.",
        exampleTranslation: "Sam gật đầu nhưng anh ấy trông không bị thuyết phục."
    },
    {
        word: "convincing",
        meaning: "có sức thuyết phục, đáng tin",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/kənˈvɪnsɪŋ/",
        example: "a convincing argument/explanation/case",
        exampleTranslation: "một lập luận/giải thích/trường hợp có sức thuyết phục"
    },
    {
        word: "cope",
        meaning: "đối phó, đương đầu",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/kəʊp/",
        example: "I got to the stage where I wasn't coping any more.",
        exampleTranslation: "Tôi đã đến giai đoạn mà tôi không thể đối phó được nữa."
    },
    {
        word: "core",
        meaning: "cốt lõi, chủ chốt",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/kɔːr/",
        example: "core subjects (= subjects that all the students have to study) such as English and mathematics",
        exampleTranslation: "các môn học cốt lõi (= các môn học mà tất cả học sinh phải học) như tiếng Anh và toán học"
    },
    {
        word: "corporate",
        meaning: "thuộc doanh nghiệp, thuộc công ty",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈkɔːrpərət/",
        example: "corporate finance/profits/tax",
        exampleTranslation: "tài chính/lợi nhuận/thuế của doanh nghiệp"
    },
    {
        word: "corporation",
        meaning: "tập đoàn, công ty",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌkɔːrpəˈreɪʃn/",
        example: "multinational corporations",
        exampleTranslation: "các tập đoàn đa quốc gia"
    },
    {
        word: "corridor",
        meaning: "hành lang",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkɔːrɪdɔːr/",
        example: "His room is along the corridor.",
        exampleTranslation: "Phòng của anh ấy nằm dọc hành lang."
    },
    {
        word: "council",
        meaning: "hội đồng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkaʊnsl/",
        example: "a town council",
        exampleTranslation: "một hội đồng thị trấn"
    },
    {
        word: "counter",
        meaning: "quầy hàng, quầy tính tiền",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkaʊntər/",
        example: "behind the counter I asked the woman behind the counter if they had any postcards.",
        exampleTranslation: "phía sau quầy hàng, tôi hỏi người phụ nữ phía sau quầy xem họ có bưu thiếp nào không."
    },
    {
        word: "county",
        meaning: "hạt, quận (đơn vị hành chính)",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkaʊnti/",
        example: "rural counties west of the Mississippi",
        exampleTranslation: "các hạt nông thôn phía tây sông Mississippi"
    },
    {
        word: "courage",
        meaning: "lòng dũng cảm, sự can đảm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkɜːrɪdʒ/",
        example: "He showed great courage and determination.",
        exampleTranslation: "Anh ấy đã thể hiện lòng dũng cảm và quyết tâm lớn."
    },
    {
        word: "coverage",
        meaning: "sự đưa tin, phạm vi đưa tin",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkʌvərɪdʒ/",
        example: "media/newspaper/press coverage",
        exampleTranslation: "sự đưa tin của truyền thông/báo chí"
    },
    {
        word: "crack",
        meaning: "vết nứt, kẽ nứt",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kræk/",
        example: "This cup has a crack in it.",
        exampleTranslation: "Chiếc cốc này có một vết nứt."
    },
    {
        word: "craft",
        meaning: "nghề thủ công, đồ thủ công",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kræft/",
        example: "traditional crafts like basket-weaving",
        exampleTranslation: "các nghề thủ công truyền thống như đan rổ"
    },
    {
        word: "crash",
        meaning: "vụ tai nạn, sự va chạm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kræʃ/",
        example: "a car/plane crash",
        exampleTranslation: "một vụ tai nạn ô tô/máy bay"
    },
    {
        word: "creation",
        meaning: "sự tạo ra, sự sáng tạo",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kriˈeɪʃn/",
        example: "Job creation needs to be the top priority.",
        exampleTranslation: "Tạo việc làm cần phải là ưu tiên hàng đầu."
    },
    {
        word: "creativity",
        meaning: "sự sáng tạo, tính sáng tạo",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌkriːeɪˈtɪvəti/",
        example: "Creativity and originality are more important than technical skill.",
        exampleTranslation: "Sự sáng tạo và độc đáo quan trọng hơn kỹ năng kỹ thuật."
    },
    {
        word: "creature",
        meaning: "sinh vật, loài vật",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkriːtʃər/",
        example: "respect for all living creatures",
        exampleTranslation: "tôn trọng tất cả các sinh vật sống"
    },
    {
        word: "credit",
        meaning: "ghi có, tín dụng",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈkredɪt/",
        example: "They credited my account two days later.",
        exampleTranslation: "Họ đã ghi có vào tài khoản của tôi hai ngày sau đó."
    },
    {
        word: "crew",
        meaning: "phi hành đoàn, thủy thủ đoàn, đội ngũ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kruː/",
        example: "crew members",
        exampleTranslation: "các thành viên phi hành đoàn/đội ngũ"
    },
    {
        word: "crisis",
        meaning: "khủng hoảng, biến cố",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkraɪsɪs/",
        example: "an economic/a financial crisis",
        exampleTranslation: "một cuộc khủng hoảng kinh tế/tài chính"
    },
    {
        word: "criterion",
        meaning: "tiêu chí, chuẩn mực",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kraɪˈtɪriən/",
        example: "The main criterion is value for money.",
        exampleTranslation: "Tiêu chí chính là giá trị đồng tiền."
    },
    {
        word: "critic",
        meaning: "nhà phê bình",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkrɪtɪk/",
        example: "a film/an art/a music critic",
        exampleTranslation: "một nhà phê bình phim/nghệ thuật/âm nhạc"
    },
    {
        word: "critical",
        meaning: "phê phán, chỉ trích; quan trọng, nghiêm trọng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈkrɪtɪkl/",
        example: "You should just ignore any critical comments.",
        exampleTranslation: "Bạn nên bỏ qua bất kỳ bình luận phê phán nào."
    },
    {
        word: "critically",
        meaning: "một cách phê phán, nghiêm trọng",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈkrɪtɪkli/",
        example: "She spoke critically of her father.",
        exampleTranslation: "Cô ấy đã nói một cách phê phán về cha mình."
    },
    {
        word: "criticism",
        meaning: "sự phê bình, lời chỉ trích",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkrɪtɪsɪzəm/",
        example: "to draw/face/receive criticism",
        exampleTranslation: "nhận/đối mặt với lời chỉ trích"
    },
    {
        word: "criticize",
        meaning: "phê bình, chỉ trích",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈkrɪtɪsaɪz/",
        example: "All you ever do is criticize!",
        exampleTranslation: "Tất cả những gì bạn làm là chỉ trích!"
    },
    {
        word: "crop",
        meaning: "cây trồng, vụ mùa",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/krɑːp/",
        example: "Sugar cane is an important crop on the island.",
        exampleTranslation: "Mía là một loại cây trồng quan trọng trên đảo."
    },
    {
        word: "crucial",
        meaning: "rất quan trọng, then chốt",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈkruːʃl/",
        example: "The next few weeks are going to be crucial.",
        exampleTranslation: "Vài tuần tới sẽ rất quan trọng."
    },
    {
        word: "cruise",
        meaning: "chuyến đi chơi biển, du thuyền",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kruːz/",
        example: "I'd love to go on a round-the-world cruise.",
        exampleTranslation: "Tôi rất muốn được đi một chuyến du thuyền vòng quanh thế giới."
    },
    {
        word: "cry",
        meaning: "tiếng kêu, tiếng khóc, tiếng gào",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kraɪ/",
        example: "cry of something to give a cry of anguish/despair/pain/joy/alarm, etc.",
        exampleTranslation: "tiếng kêu của cái gì đó để phát ra tiếng kêu đau đớn/tuyệt vọng/đau đớn/vui sướng/báo động, v.v."
    },
    {
        word: "cue",
        meaning: "tín hiệu, gợi ý",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kjuː/",
        example: "cue (for something) Jon's arrival was a cue for more champagne.",
        exampleTranslation: "gợi ý (cho cái gì đó) Jon đến là một tín hiệu để có thêm sâm panh."
    },
    {
        word: "cure",
        meaning: "cách chữa trị, phương thuốc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kjʊr/",
        example: "cure for something the search for a cure for cancer",
        exampleTranslation: "cách chữa trị cho cái gì đó cuộc tìm kiếm phương thuốc chữa ung thư."
    },
    {
        word: "curious",
        meaning: "tò mò, hiếu kỳ",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈkjʊriəs/",
        example: "He is such a curious boy, always asking questions.",
        exampleTranslation: "Cậu ấy là một cậu bé rất tò mò, luôn đặt câu hỏi."
    },
    {
        word: "current",
        meaning: "dòng chảy, dòng nước, luồng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈkɜːrənt/",
        example: "with the current It's easier to go with the current.",
        exampleTranslation: "theo dòng chảy Thật dễ dàng hơn khi đi xuôi theo dòng chảy."
    },
    {
        word: "curriculum",
        meaning: "chương trình học, giáo trình",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kəˈrɪkjələm/",
        example: "The school curriculum should be as broad as possible.",
        exampleTranslation: "Chương trình học của trường nên càng rộng càng tốt."
    },
    {
        word: "curve",
        meaning: "đường cong, chỗ uốn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kɜːrv/",
        example: "curve of something He admired the delicate curve of her ear.",
        exampleTranslation: "đường cong của cái gì đó Anh ấy ngưỡng mộ đường cong tinh tế của tai cô ấy."
    },
    {
        word: "curved",
        meaning: "cong, có đường cong",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/kɜːrvd/",
        example: "a curved edge/surface",
        exampleTranslation: "một cạnh/bề mặt cong."
    },
    {
        word: "cute",
        meaning: "dễ thương, đáng yêu",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/kjuːt/",
        example: "a cute little baby",
        exampleTranslation: "một em bé nhỏ dễ thương."
    },
    {
        word: "dairy",
        meaning: "thuộc về sữa, làm từ sữa",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈderi/",
        example: "dairy products/produce",
        exampleTranslation: "các sản phẩm/nông sản từ sữa."
    },
    {
        word: "dare",
        meaning: "dám, cả gan",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/der/",
        example: "She said it as loudly as she dared.",
        exampleTranslation: "Cô ấy nói to hết mức cô ấy dám."
    },
    {
        word: "darkness",
        meaning: "bóng tối, sự tối tăm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈdɑːrknəs/",
        example: "After a few minutes our eyes got used to the darkness.",
        exampleTranslation: "Sau vài phút, mắt chúng tôi đã quen với bóng tối."
    },
    {
        word: "database",
        meaning: "cơ sở dữ liệu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈdætəbeɪs/",
        example: "The database is updated monthly.",
        exampleTranslation: "Cơ sở dữ liệu được cập nhật hàng tháng."
    },
    {
        word: "date",
        meaning: "đề ngày, ghi ngày, có niên đại",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/deɪt/",
        example: "Thank you for your letter dated 24th March.",
        exampleTranslation: "Cảm ơn bức thư của bạn đề ngày 24 tháng 3."
    },
    {
        word: "deadline",
        meaning: "hạn chót, thời hạn cuối cùng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈdedlaɪn/",
        example: "I prefer to work to a deadline.",
        exampleTranslation: "Tôi thích làm việc theo đúng thời hạn."
    },
    {
        word: "deadly",
        meaning: "gây chết người, chí mạng, nguy hiểm chết người",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈdedli/",
        example: "a deadly weapon/disease",
        exampleTranslation: "một vũ khí/căn bệnh gây chết người."
    },
    {
        word: "dealer",
        meaning: "người buôn, đại lý, nhà phân phối",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈdiːlər/",
        example: "an art/antique dealer",
        exampleTranslation: "một nhà buôn đồ nghệ thuật/cổ vật."
    },
    {
        word: "debate",
        meaning: "cuộc tranh luận, sự tranh cãi",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dɪˈbeɪt/",
        example: "the first ever televised presidential debate",
        exampleTranslation: "cuộc tranh luận tổng thống đầu tiên được truyền hình trực tiếp."
    },
    {
        word: "debt",
        meaning: "nợ, khoản nợ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/det/",
        example: "to pay/repay a debt",
        exampleTranslation: "để trả/thanh toán một khoản nợ."
    },
    {
        word: "decent",
        meaning: "tử tế, đứng đắn, kha khá, tươm tất",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈdiːsnt/",
        example: "a decent meal/place to live",
        exampleTranslation: "một bữa ăn/nơi ở tươm tất."
    },
    {
        word: "deck",
        meaning: "boong tàu/xe buýt, sàn (tàu)",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dek/",
        example: "on deck I was the only person on deck at that time of night.",
        exampleTranslation: "trên boong Tôi là người duy nhất trên boong vào thời điểm đêm đó."
    },
    {
        word: "declare",
        meaning: "tuyên bố, công bố, khai báo",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/dɪˈkler/",
        example: "The government has declared a state of emergency.",
        exampleTranslation: "Chính phủ đã tuyên bố tình trạng khẩn cấp."
    },
    {
        word: "decline",
        meaning: "sự suy giảm, sự sụt giảm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dɪˈklaɪn/",
        example: "decline in something There has been a 5 per cent decline in student numbers.",
        exampleTranslation: "sự suy giảm trong cái gì đó Đã có sự suy giảm 5% số lượng sinh viên."
    },
    {
        word: "decoration",
        meaning: "sự trang trí, đồ trang trí",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌdekəˈreɪʃn/",
        example: "Christmas/festive decorations",
        exampleTranslation: "đồ trang trí Giáng sinh/lễ hội."
    },
    {
        word: "decrease",
        meaning: "sự giảm bớt, sự giảm sút",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈdiːkriːs/",
        example: "Sales for May show a decrease compared with the same month last year.",
        exampleTranslation: "Doanh số tháng 5 cho thấy sự giảm sút so với cùng tháng năm ngoái."
    },
    {
        word: "deeply",
        meaning: "sâu sắc, vô cùng, rất",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈdiːpli/",
        example: "She is deeply religious.",
        exampleTranslation: "Cô ấy rất sùng đạo."
    },
    {
        word: "defeat",
        meaning: "sự thất bại, trận thua",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dɪˈfiːt/",
        example: "The party faces defeat in the election.",
        exampleTranslation: "Đảng đó đối mặt với thất bại trong cuộc bầu cử."
    },
    {
        word: "defence",
        meaning: "sự bảo vệ, sự phòng thủ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dɪˈfens/",
        example: "in defence of somebody/something soldiers who died in defence of their country",
        exampleTranslation: "để bảo vệ ai đó/cái gì đó những người lính đã hy sinh để bảo vệ đất nước của họ."
    },
    {
        word: "defend",
        meaning: "bảo vệ, phòng thủ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/dɪˈfend/",
        example: "defend somebody/something The role of the military is to defend the country.",
        exampleTranslation: "bảo vệ ai đó/cái gì đó Vai trò của quân đội là bảo vệ đất nước."
    },
    {
        word: "defender",
        meaning: "người bảo vệ, hậu vệ, người phòng thủ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dɪˈfendər/",
        example: "This is an example of defender.",
        exampleTranslation: "Đây là một ví dụ về người bảo vệ."
    },
    {
        word: "delay",
        meaning: "sự trì hoãn, sự chậm trễ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dɪˈleɪ/",
        example: "Commuters will face long delays on the roads today.",
        exampleTranslation: "Người đi làm sẽ phải đối mặt với tình trạng chậm trễ kéo dài trên đường hôm nay."
    },
    {
        word: "delete",
        meaning: "xóa",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/dɪˈliːt/",
        example: "Your name has been deleted from the list.",
        exampleTranslation: "Tên của bạn đã bị xóa khỏi danh sách."
    },
    {
        word: "deliberate",
        meaning: "có chủ ý, cố ý, thận trọng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/dɪˈlɪbərət/",
        example: "a deliberate act of vandalism",
        exampleTranslation: "một hành động phá hoại có chủ ý"
    },
    {
        word: "deliberately",
        meaning: "cố ý, cố tình, một cách có chủ ý",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/dɪˈlɪbərətli/",
        example: "She's been deliberately ignoring him all day.",
        exampleTranslation: "Cô ấy đã cố tình phớt lờ anh ấy cả ngày."
    },
    {
        word: "delight",
        meaning: "niềm vui, sự thích thú",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dɪˈlaɪt/",
        example: "a feeling of sheer/pure delight",
        exampleTranslation: "một cảm giác vui sướng/thích thú tột độ"
    },
    {
        word: "delighted",
        meaning: "vui mừng, thích thú",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/dɪˈlaɪtɪd/",
        example: "a delighted smile",
        exampleTranslation: "một nụ cười vui vẻ"
    },
    {
        word: "delivery",
        meaning: "sự giao hàng, sự phân phát",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dɪˈlɪvəri/",
        example: "Allow 28 days for delivery.",
        exampleTranslation: "Cho phép 28 ngày để giao hàng."
    },
    {
        word: "demand",
        meaning: "nhu cầu, yêu cầu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dɪˈmænd/",
        example: "demand for something a demand for higher pay",
        exampleTranslation: "nhu cầu về thứ gì đó, một yêu cầu tăng lương"
    },
    {
        word: "democracy",
        meaning: "nền dân chủ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dɪˈmɑːkrəsi/",
        example: "parliamentary democracy",
        exampleTranslation: "nền dân chủ nghị viện"
    },
    {
        word: "democratic",
        meaning: "dân chủ",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌdeməˈkrætɪk/",
        example: "a democratic country",
        exampleTranslation: "một quốc gia dân chủ"
    },
    {
        word: "demonstrate",
        meaning: "chứng minh, thể hiện, biểu tình",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈdemənstreɪt/",
        example: "demonstrate that… New research convincingly demonstrates that age-related memory loss is not inevitable.",
        exampleTranslation: "chứng minh rằng… Nghiên cứu mới thuyết phục cho thấy rằng việc mất trí nhớ liên quan đến tuổi tác là không thể tránh khỏi."
    },
    {
        word: "demonstration",
        meaning: "cuộc biểu tình, sự chứng minh",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌdemənˈstreɪʃn/",
        example: "to take part in/go on a demonstration",
        exampleTranslation: "tham gia/đi biểu tình"
    },
    {
        word: "deny",
        meaning: "phủ nhận, từ chối",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/dɪˈnaɪ/",
        example: "an allegation/a charge/an accusation",
        exampleTranslation: "phủ nhận một cáo buộc/lời buộc tội/sự tố cáo"
    },
    {
        word: "depart",
        meaning: "khởi hành, rời đi",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/dɪˈpɑːrt/",
        example: "depart (for…) (from…) Flights for Rome depart from Terminal 3.",
        exampleTranslation: "Các chuyến bay đi Rome khởi hành từ Nhà ga số 3."
    },
    {
        word: "dependent",
        meaning: "phụ thuộc, lệ thuộc",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/dɪˈpendənt/",
        example: "a woman with several dependent children",
        exampleTranslation: "một người phụ nữ với nhiều con nhỏ phụ thuộc"
    },
    {
        word: "deposit",
        meaning: "tiền đặt cọc, tiền gửi",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dɪˈpɑːzɪt/",
        example: "They normally ask you to pay $100 (as a) deposit.",
        exampleTranslation: "Họ thường yêu cầu bạn trả 100 đô la tiền đặt cọc."
    },
    {
        word: "depressed",
        meaning: "chán nản, buồn rầu, trầm cảm",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/dɪˈprest/",
        example: "You mustn't let yourself get depressed.",
        exampleTranslation: "Bạn không được để bản thân chán nản."
    },
    {
        word: "depressing",
        meaning: "gây chán nản, buồn tẻ",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/dɪˈpresɪŋ/",
        example: "a depressing sight/thought/experience",
        exampleTranslation: "một cảnh tượng/suy nghĩ/trải nghiệm gây chán nản"
    },
    {
        word: "depression",
        meaning: "sự trầm cảm, suy thoái kinh tế",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dɪˈpreʃn/",
        example: "She was diagnosed as having clinical depression.",
        exampleTranslation: "Cô ấy được chẩn đoán mắc bệnh trầm cảm lâm sàng."
    },
    {
        word: "depth",
        meaning: "độ sâu, chiều sâu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/depθ/",
        example: "depth of something What's the depth of the water here?",
        exampleTranslation: "độ sâu của thứ gì đó, độ sâu của nước ở đây là bao nhiêu?"
    },
    {
        word: "derive",
        meaning: "có nguồn gốc từ, lấy được từ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/dɪˈraɪv/",
        example: "This is an example of derive.",
        exampleTranslation: "Đây là một ví dụ về derive."
    },
    {
        word: "desert",
        meaning: "bỏ rơi, sa mạc",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/dɪˈzɜːrt/",
        example: "She was deserted by her husband.",
        exampleTranslation: "Cô ấy đã bị chồng bỏ rơi."
    },
    {
        word: "deserve",
        meaning: "xứng đáng",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/dɪˈzɜːrv/",
        example: "You deserve a rest after all that hard work.",
        exampleTranslation: "Bạn xứng đáng được nghỉ ngơi sau tất cả công việc vất vả đó."
    },
    {
        word: "desire",
        meaning: "mong muốn, khao khát",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dɪˈzaɪər/",
        example: "He now had enough money to satisfy all his desires.",
        exampleTranslation: "Anh ấy giờ đã có đủ tiền để thỏa mãn mọi mong muốn của mình."
    },
    {
        word: "desperate",
        meaning: "tuyệt vọng, liều lĩnh",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈdespərət/",
        example: "The prisoners grew increasingly desperate.",
        exampleTranslation: "Các tù nhân ngày càng trở nên tuyệt vọng."
    },
    {
        word: "desperately",
        meaning: "tuyệt vọng, tha thiết",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈdespərətli/",
        example: "She looked desperately around for a weapon.",
        exampleTranslation: "Cô ấy tuyệt vọng nhìn quanh tìm vũ khí."
    },
    {
        word: "destruction",
        meaning: "sự phá hủy, sự tàn phá",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dɪˈstrʌkʃn/",
        example: "the destruction of the rainforests",
        exampleTranslation: "sự tàn phá các khu rừng nhiệt đới"
    },
    {
        word: "detail",
        meaning: "trình bày chi tiết, kể chi tiết",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/dɪˈteɪl/",
        example: "The brochure details all the hotels in the area and their facilities.",
        exampleTranslation: "Cuốn sách quảng cáo trình bày chi tiết tất cả các khách sạn trong khu vực và các tiện nghi của chúng."
    },
    {
        word: "detailed",
        meaning: "chi tiết",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/dɪˈteɪld/",
        example: "a detailed description of the events",
        exampleTranslation: "một mô tả chi tiết về các sự kiện."
    },
    {
        word: "detect",
        meaning: "phát hiện, dò tìm",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/dɪˈtekt/",
        example: "The tests are designed to detect the disease early.",
        exampleTranslation: "Các xét nghiệm được thiết kế để phát hiện bệnh sớm."
    },
    {
        word: "determination",
        meaning: "sự quyết tâm, sự kiên định",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dɪˌtɜːrmɪˈneɪʃn/",
        example: "fierce/grim/dogged determination",
        exampleTranslation: "sự quyết tâm mãnh liệt/kiên cường/bền bỉ"
    },
    {
        word: "devote",
        meaning: "cống hiến, dành hết cho",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/dɪˈvəʊt/",
        example: "This is an example of devote.",
        exampleTranslation: "Đây là một ví dụ về sự cống hiến."
    },
    {
        word: "differ",
        meaning: "khác biệt, không giống",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈdɪfər/",
        example: "They hold differing views.",
        exampleTranslation: "Họ có những quan điểm khác nhau."
    },
    {
        word: "dig",
        meaning: "đào, xới",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/dɪɡ/",
        example: "I think I'll do some digging in the garden.",
        exampleTranslation: "Tôi nghĩ tôi sẽ đào bới một chút trong vườn."
    },
    {
        word: "disability",
        meaning: "khuyết tật, tàn tật",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌdɪsəˈbɪləti/",
        example: "a physical/developmental/intellectual disability",
        exampleTranslation: "khuyết tật thể chất/phát triển/trí tuệ"
    },
    {
        word: "disabled",
        meaning: "khuyết tật, tàn tật",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/dɪsˈeɪbld/",
        example: "physically/developmentally/intellectually disabled",
        exampleTranslation: "bị khuyết tật về thể chất/phát triển/trí tuệ"
    },
    {
        word: "disagreement",
        meaning: "sự bất đồng, sự không đồng ý",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌdɪsəˈɡriːmənt/",
        example: "disagreement (about/on/over/as to something) Disagreement arose about exactly how to plan the show.",
        exampleTranslation: "Sự bất đồng nảy sinh về cách thức lên kế hoạch chính xác cho buổi biểu diễn."
    },
    {
        word: "disappoint",
        meaning: "làm thất vọng",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˌdɪsəˈpɔɪnt/",
        example: "disappoint (somebody) Her decision to cancel the concert is bound to disappoint her fans.",
        exampleTranslation: "Quyết định hủy bỏ buổi hòa nhạc của cô ấy chắc chắn sẽ làm người hâm mộ của cô ấy thất vọng."
    },
    {
        word: "disappointment",
        meaning: "sự thất vọng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌdɪsəˈpɔɪntmənt/",
        example: "Book early for the show to avoid disappointment.",
        exampleTranslation: "Hãy đặt vé sớm cho buổi biểu diễn để tránh thất vọng."
    },
    {
        word: "disc",
        meaning: "đĩa, vòng tròn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dɪsk/",
        example: "He wears an identity disc around his neck.",
        exampleTranslation: "Anh ấy đeo một thẻ nhận dạng hình đĩa quanh cổ."
    },
    {
        word: "discipline",
        meaning: "kỷ luật, môn học",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈdɪsəplɪn/",
        example: "The school has a reputation for high standards of discipline.",
        exampleTranslation: "Trường học có tiếng về các tiêu chuẩn kỷ luật cao."
    },
    {
        word: "discount",
        meaning: "giảm giá, chiết khấu",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈdɪskaʊnt/",
        example: "be discounted by something Most of our stock has been discounted by up to 40 per cent.",
        exampleTranslation: "Hầu hết hàng tồn kho của chúng tôi đã được giảm giá tới 40 phần trăm."
    },
    {
        word: "discourage",
        meaning: "làm nản lòng, ngăn cản",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/dɪsˈkɜːrɪdʒ/",
        example: "discourage (doing) something a campaign to discourage smoking among teenagers",
        exampleTranslation: "một chiến dịch nhằm ngăn chặn việc hút thuốc ở thanh thiếu niên"
    },
    {
        word: "dishonest",
        meaning: "không trung thực, gian dối",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/dɪsˈɑːnɪst/",
        example: "Beware of dishonest traders in the tourist areas.",
        exampleTranslation: "Hãy cẩn thận với những người bán hàng không trung thực ở các khu du lịch."
    },
    {
        word: "disk",
        meaning: "đĩa, vật hình đĩa",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dɪsk/",
        example: "Red blood cells are roughly the shape of a disk.",
        exampleTranslation: "Các tế bào hồng cầu có hình dạng gần giống một cái đĩa."
    },
    {
        word: "dismiss",
        meaning: "bác bỏ, giải tán, sa thải",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/dɪsˈmɪs/",
        example: "dismiss somebody/something to dismiss a suggestion/a claim/an idea",
        exampleTranslation: "bác bỏ một đề xuất/một tuyên bố/một ý tưởng"
    },
    {
        word: "disorder",
        meaning: "rối loạn, sự lộn xộn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dɪsˈɔːrdər/",
        example: "a blood/bowel disorder",
        exampleTranslation: "rối loạn máu/ruột"
    },
    {
        word: "display",
        meaning: "màn hình, sự trưng bày, sự biểu diễn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dɪˈspleɪ/",
        example: "a beautiful floral display",
        exampleTranslation: "một màn trưng bày hoa đẹp mắt"
    },
    {
        word: "distant",
        meaning: "xa xôi, xa cách",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈdɪstənt/",
        example: "the distant sound of music",
        exampleTranslation: "âm thanh âm nhạc vọng lại từ xa"
    },
    {
        word: "distinct",
        meaning: "rõ ràng, khác biệt",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/dɪˈstɪŋkt/",
        example: "There was a distinct smell of gas.",
        exampleTranslation: "Có một mùi gas rõ rệt."
    },
    {
        word: "distinguish",
        meaning: "phân biệt, nhận ra",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/dɪˈstɪŋɡwɪʃ/",
        example: "distinguish between A and B At what age are children able to distinguish between right and wrong?",
        exampleTranslation: "Ở độ tuổi nào thì trẻ em có thể phân biệt được đúng và sai?"
    },
    {
        word: "distract",
        meaning: "làm xao nhãng, làm phân tâm",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/dɪˈstrækt/",
        example: "You're distracting me from my work.",
        exampleTranslation: "Bạn đang làm tôi xao nhãng khỏi công việc của mình."
    },
    {
        word: "distribute",
        meaning: "phân phát, phân phối",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/dɪˈstrɪbjuːt/",
        example: "The leaflets have been widely distributed.",
        exampleTranslation: "Các tờ rơi đã được phân phát rộng rãi."
    },
    {
        word: "distribution",
        meaning: "sự phân phối, sự phân bố",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌdɪstrɪˈbjuːʃn/",
        example: "distribution of something They studied the geographical distribution of the disease.",
        exampleTranslation: "Họ đã nghiên cứu sự phân bố địa lý của căn bệnh."
    },
    {
        word: "district",
        meaning: "quận, huyện, khu vực",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈdɪstrɪkt/",
        example: "the City of London’s financial district",
        exampleTranslation: "khu tài chính của Thành phố Luân Đôn"
    },
    {
        word: "disturb",
        meaning: "làm phiền, quấy rầy",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/dɪˈstɜːrb/",
        example: "I'm sorry to disturb you, but can I talk to you for a moment?",
        exampleTranslation: "Tôi xin lỗi vì đã làm phiền bạn, nhưng tôi có thể nói chuyện với bạn một lát được không?"
    },
    {
        word: "dive",
        meaning: "cú lặn, cú lao xuống",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/daɪv/",
        example: "a spectacular high dive (= from high above the water)",
        exampleTranslation: "một cú lặn cao ngoạn mục (= từ trên cao xuống mặt nước)"
    },
    {
        word: "diverse",
        meaning: "đa dạng, phong phú",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/daɪˈvɜːrs/",
        example: "People from diverse cultures were invited to the event.",
        exampleTranslation: "Những người từ các nền văn hóa đa dạng đã được mời đến sự kiện này."
    },
    {
        word: "diversity",
        meaning: "sự đa dạng, tính đa dạng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/daɪˈvɜːrsəti/",
        example: "the biological diversity of the rainforests",
        exampleTranslation: "sự đa dạng sinh học của các khu rừng nhiệt đới"
    },
    {
        word: "divide",
        meaning: "sự chia rẽ, sự phân chia",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dɪˈvaɪd/",
        example: "He offered advice on bridging cultural divides.",
        exampleTranslation: "Anh ấy đã đưa ra lời khuyên về việc thu hẹp những rạn nứt văn hóa."
    },
    {
        word: "division",
        meaning: "sự phân chia, sự chia cắt, bộ phận",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dɪˈvɪʒn/",
        example: "The organism begins as a single cell and grows by cell division.",
        exampleTranslation: "Sinh vật bắt đầu từ một tế bào duy nhất và phát triển bằng cách phân chia tế bào."
    },
    {
        word: "divorce",
        meaning: "sự ly hôn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dɪˈvɔːrs/",
        example: "The marriage ended in divorce in 1996.",
        exampleTranslation: "Cuộc hôn nhân kết thúc bằng ly hôn vào năm 1996."
    },
    {
        word: "document",
        meaning: "ghi lại, ghi chép",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈdɑːkjument/",
        example: "Urban life in the nineteenth century is well documented.",
        exampleTranslation: "Đời sống đô thị vào thế kỷ 19 được ghi lại rất rõ ràng."
    },
    {
        word: "domestic",
        meaning: "trong nước, nội địa, gia đình",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/dəˈmestɪk/",
        example: "domestic affairs/politics",
        exampleTranslation: "các vấn đề/chính trị trong nước"
    },
    {
        word: "dominant",
        meaning: "chiếm ưu thế, thống trị",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈdɑːmɪnənt/",
        example: "The firm has achieved a dominant position in the world market.",
        exampleTranslation: "Công ty đã đạt được vị trí thống trị trên thị trường thế giới."
    },
    {
        word: "dominate",
        meaning: "thống trị, chi phối",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈdɑːmɪneɪt/",
        example: "She always says a lot in meetings, but she doesn't dominate.",
        exampleTranslation: "Cô ấy luôn nói rất nhiều trong các cuộc họp, nhưng cô ấy không chi phối."
    },
    {
        word: "donation",
        meaning: "sự quyên góp, sự đóng góp",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dəʊˈneɪʃn/",
        example: "a generous/large/small donation",
        exampleTranslation: "một khoản quyên góp hào phóng/lớn/nhỏ"
    },
    {
        word: "dot",
        meaning: "dấu chấm, chấm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dɑːt/",
        example: "There are dots above the letters i and j.",
        exampleTranslation: "Có những dấu chấm trên các chữ cái i và j."
    },
    {
        word: "downtown",
        meaning: "thuộc trung tâm thành phố, nội thành",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌdaʊnˈtaʊn/",
        example: "a downtown store",
        exampleTranslation: "một cửa hàng ở trung tâm thành phố"
    },
    {
        word: "downwards",
        meaning: "xuống dưới, hướng xuống",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈdaʊnwərdz/",
        example: "She was lying face downwards on the grass.",
        exampleTranslation: "Cô ấy nằm sấp mặt xuống cỏ."
    },
    {
        word: "dozen",
        meaning: "tá (12 cái)",
        partOfSpeech: "determiner",
        level: "B2",
        phonetic: "/ˈdʌzn/",
        example: "Give me a dozen, please.",
        exampleTranslation: "Làm ơn cho tôi một tá."
    },
    {
        word: "draft",
        meaning: "bản nháp, bản thảo",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dræft/",
        example: "This is only the first draft of my speech.",
        exampleTranslation: "Đây chỉ là bản nháp đầu tiên của bài phát biểu của tôi."
    },
    {
        word: "drag",
        meaning: "kéo lê, lôi đi",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/dræɡ/",
        example: "drag somebody/something The sack is too heavy to lift—you’ll have to drag it.",
        exampleTranslation: "Bao tải quá nặng để nhấc lên – bạn sẽ phải kéo lê nó."
    },
    {
        word: "dramatic",
        meaning: "đáng kể, ấn tượng, kịch tính",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/drəˈmætɪk/",
        example: "a dramatic increase/change/improvement/shift",
        exampleTranslation: "một sự gia tăng/thay đổi/cải thiện/chuyển dịch đáng kể"
    },
    {
        word: "dramatically",
        meaning: "đáng kể, đột ngột, kịch tính",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/drəˈmætɪkli/",
        example: "Prices have fallen dramatically.",
        exampleTranslation: "Giá đã giảm đáng kể."
    },
    {
        word: "drought",
        meaning: "hạn hán",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/draʊt/",
        example: "Farmers are facing ruin after two years of severe drought.",
        exampleTranslation: "Nông dân đang đối mặt với sự hủy hoại sau hai năm hạn hán nghiêm trọng."
    },
    {
        word: "dull",
        meaning: "tẻ nhạt, buồn chán, xám xịt",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/dʌl/",
        example: "Life in a small town could be deadly dull.",
        exampleTranslation: "Cuộc sống ở một thị trấn nhỏ có thể buồn tẻ chết người."
    },
    {
        word: "dump",
        meaning: "đổ, vứt bỏ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/dʌmp/",
        example: "Too much toxic waste is being dumped at sea.",
        exampleTranslation: "Quá nhiều chất thải độc hại đang bị đổ xuống biển."
    },
    {
        word: "duration",
        meaning: "khoảng thời gian, thời lượng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/duˈreɪʃn/",
        example: "The school was used as a hospital for the duration of the war.",
        exampleTranslation: "Ngôi trường được sử dụng làm bệnh viện trong suốt thời gian chiến tranh."
    },
    {
        word: "dynamic",
        meaning: "năng động, đầy nhiệt huyết",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/daɪˈnæmɪk/",
        example: "a dynamic leader",
        exampleTranslation: "một nhà lãnh đạo năng động"
    },
    {
        word: "economics",
        meaning: "kinh tế học",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌekəˈnɑːmɪks/",
        example: "He studied politics and economics at Yale.",
        exampleTranslation: "Anh ấy đã học chính trị và kinh tế học tại Yale."
    },
    {
        word: "economist",
        meaning: "nhà kinh tế học",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪˈkɑːnəmɪst/",
        example: "the World Bank's chief economist",
        exampleTranslation: "nhà kinh tế trưởng của Ngân hàng Thế giới"
    },
    {
        word: "edit",
        meaning: "chỉnh sửa, biên tập",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈedɪt/",
        example: "edit (something) This draft text will need to be edited.",
        exampleTranslation: "Bản nháp văn bản này sẽ cần được chỉnh sửa."
    },
    {
        word: "edition",
        meaning: "ấn bản, phiên bản",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪˈdɪʃn/",
        example: "a paperback/hardback edition",
        exampleTranslation: "một ấn bản bìa mềm/bìa cứng"
    },
    {
        word: "editorial",
        meaning: "thuộc về biên tập, xã luận",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌedɪˈtɔːriəl/",
        example: "the magazine’s editorial staff",
        exampleTranslation: "đội ngũ biên tập của tạp chí"
    },
    {
        word: "efficient",
        meaning: "hiệu quả, có năng suất",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɪˈfɪʃnt/",
        example: "a highly efficient worker",
        exampleTranslation: "một nhân viên làm việc rất hiệu quả"
    },
    {
        word: "efficiently",
        meaning: "một cách hiệu quả",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ɪˈfɪʃntli/",
        example: "a very efficiently organized event",
        exampleTranslation: "một sự kiện được tổ chức rất hiệu quả"
    },
    {
        word: "elbow",
        meaning: "khuỷu tay",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈelbəʊ/",
        example: "She jabbed him with her elbow.",
        exampleTranslation: "Cô ấy thúc khuỷu tay vào anh ấy."
    },
    {
        word: "elderly",
        meaning: "cao tuổi, lớn tuổi",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈeldərli/",
        example: "an elderly man/woman/lady",
        exampleTranslation: "một người đàn ông/phụ nữ/quý bà lớn tuổi"
    },
    {
        word: "elect",
        meaning: "bầu cử, bầu chọn",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪˈlekt/",
        example: "elect somebody/something Voters will elect a new president on 30 March next year.",
        exampleTranslation: "Cử tri sẽ bầu một tổng thống mới vào ngày 30 tháng 3 năm tới."
    },
    {
        word: "electronics",
        meaning: "điện tử",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪˌlekˈtrɑːnɪks/",
        example: "This is an example of electronics.",
        exampleTranslation: "Đây là một ví dụ về điện tử."
    },
    {
        word: "elegant",
        meaning: "thanh lịch, duyên dáng, tao nhã",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈelɪɡənt/",
        example: "She was tall and elegant.",
        exampleTranslation: "Cô ấy cao và thanh lịch."
    },
    {
        word: "elementary",
        meaning: "cơ bản, sơ đẳng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌelɪˈmentri/",
        example: "an elementary English course",
        exampleTranslation: "một khóa học tiếng Anh cơ bản"
    },
    {
        word: "eliminate",
        meaning: "loại bỏ, xóa bỏ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪˈlɪmɪneɪt/",
        example: "Credit cards eliminate the need to carry a lot of cash.",
        exampleTranslation: "Thẻ tín dụng loại bỏ nhu cầu mang nhiều tiền mặt."
    },
    {
        word: "elsewhere",
        meaning: "ở nơi khác, nơi khác",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˌelsˈwer/",
        example: "Dissatisfied customers will look elsewhere.",
        exampleTranslation: "Những khách hàng không hài lòng sẽ tìm nơi khác."
    },
    {
        word: "embrace",
        meaning: "ôm lấy, đón nhận, chấp nhận",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪmˈbreɪs/",
        example: "They embraced and promised to keep in touch.",
        exampleTranslation: "Họ ôm nhau và hứa sẽ giữ liên lạc."
    },
    {
        word: "emerge",
        meaning: "xuất hiện, nổi lên",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪˈmɜːrdʒ/",
        example: "The crabs emerge at low tide to look for food.",
        exampleTranslation: "Những con cua xuất hiện khi triều xuống để tìm thức ăn."
    },
    {
        word: "emission",
        meaning: "sự phát thải",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪˈmɪʃn/",
        example: "the emission of carbon dioxide into the atmosphere",
        exampleTranslation: "sự phát thải carbon dioxide vào khí quyển"
    },
    {
        word: "emotional",
        meaning: "cảm động, xúc động, thuộc về tình cảm",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɪˈməʊʃənl/",
        example: "emotional problems/stress",
        exampleTranslation: "các vấn đề/căng thẳng về cảm xúc"
    },
    {
        word: "emotionally",
        meaning: "về mặt tình cảm, một cách xúc động",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ɪˈməʊʃənəli/",
        example: "emotionally disturbed children",
        exampleTranslation: "trẻ em bị rối loạn cảm xúc"
    },
    {
        word: "emphasis",
        meaning: "sự nhấn mạnh, tầm quan trọng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈemfəsɪs/",
        example: "emphasis on/upon something Since the elections there has been a greater emphasis on education.",
        exampleTranslation: "nhấn mạnh vào/về cái gì đó Kể từ cuộc bầu cử, đã có sự nhấn mạnh hơn vào giáo dục."
    },
    {
        word: "emphasize",
        meaning: "nhấn mạnh, làm nổi bật",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈemfəsaɪz/",
        example: "His speech emphasized the importance of attracting industry to the town.",
        exampleTranslation: "Bài phát biểu của ông nhấn mạnh tầm quan trọng của việc thu hút công nghiệp đến thị trấn."
    },
    {
        word: "empire",
        meaning: "đế chế",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈempaɪər/",
        example: "These invasions almost led to the collapse of the Roman Empire.",
        exampleTranslation: "Những cuộc xâm lược này suýt dẫn đến sự sụp đổ của Đế chế La Mã."
    },
    {
        word: "enable",
        meaning: "cho phép, làm cho có thể",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪˈneɪbl/",
        example: "This new programme will enable older people to study at college.",
        exampleTranslation: "Chương trình mới này sẽ cho phép người lớn tuổi học đại học."
    },
    {
        word: "encounter",
        meaning: "cuộc gặp gỡ bất ngờ, sự đối mặt",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪnˈkaʊntər/",
        example: "a chance encounter",
        exampleTranslation: "một cuộc gặp gỡ tình cờ"
    },
    {
        word: "engage",
        meaning: "tham gia, thu hút, cam kết",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪnˈɡeɪdʒ/",
        example: "It is a movie that engages both the mind and the eye.",
        exampleTranslation: "Đó là một bộ phim thu hút cả trí tuệ và thị giác."
    },
    {
        word: "enhance",
        meaning: "nâng cao, tăng cường",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪnˈhæns/",
        example: "This is an opportunity to enhance the reputation of the company.",
        exampleTranslation: "Đây là cơ hội để nâng cao danh tiếng của công ty."
    },
    {
        word: "enjoyable",
        meaning: "thú vị, vui vẻ",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɪnˈdʒɔɪəbl/",
        example: "an enjoyable weekend/experience",
        exampleTranslation: "một cuối tuần/trải nghiệm thú vị"
    },
    {
        word: "enquiry",
        meaning: "cuộc điều tra",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪnˈkwaɪəri/",
        example: "a murder enquiry",
        exampleTranslation: "một cuộc điều tra giết người"
    },
    {
        word: "ensure",
        meaning: "đảm bảo, chắc chắn",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪnˈʃʊr/",
        example: "We are working to ensure the safety of people in the city.",
        exampleTranslation: "Chúng tôi đang làm việc để đảm bảo an toàn cho người dân trong thành phố."
    },
    {
        word: "entertaining",
        meaning: "giải trí, vui nhộn",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌentərˈteɪnɪŋ/",
        example: "an entertaining speech/evening",
        exampleTranslation: "một bài phát biểu/buổi tối vui nhộn"
    },
    {
        word: "enthusiasm",
        meaning: "sự nhiệt tình, sự hăng hái",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪnˈθuːziæzəm/",
        example: "Her voice was full of enthusiasm.",
        exampleTranslation: "Giọng cô ấy đầy nhiệt tình."
    },
    {
        word: "enthusiastic",
        meaning: "nhiệt tình, hăng hái",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɪnˌθuːziˈæstɪk/",
        example: "an enthusiastic supporter",
        exampleTranslation: "một người ủng hộ nhiệt tình"
    },
    {
        word: "entire",
        meaning: "toàn bộ, toàn vẹn",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɪnˈtaɪər/",
        example: "The entire village was destroyed.",
        exampleTranslation: "Cả ngôi làng đã bị phá hủy."
    },
    {
        word: "entirely",
        meaning: "hoàn toàn, toàn bộ",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ɪnˈtaɪərli/",
        example: "The experience was entirely new to me.",
        exampleTranslation: "Trải nghiệm này hoàn toàn mới đối với tôi."
    },
    {
        word: "entrepreneur",
        meaning: "doanh nhân, nhà kinh doanh",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌɑːntrəprəˈnɜːr/",
        example: "A creative entrepreneur, he was continually dreaming up new projects.",
        exampleTranslation: "Là một doanh nhân sáng tạo, anh ấy không ngừng mơ ước về các dự án mới."
    },
    {
        word: "envelope",
        meaning: "phong bì, bao thư",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɑːnvələʊp/",
        example: "Writing paper and envelopes are provided in your room.",
        exampleTranslation: "Giấy viết và phong bì được cung cấp trong phòng của bạn."
    },
    {
        word: "equal",
        meaning: "ngang hàng, người ngang vai",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈiːkwəl/",
        example: "She treats the people who work for her as her equals.",
        exampleTranslation: "Cô ấy đối xử với những người làm việc cho mình như những người ngang hàng."
    },
    {
        word: "equip",
        meaning: "trang bị, chuẩn bị",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪˈkwɪp/",
        example: "fully/poorly equipped",
        exampleTranslation: "được trang bị đầy đủ/kém"
    },
    {
        word: "equivalent",
        meaning: "tương đương, bằng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɪˈkwɪvələnt/",
        example: "250 grams or an equivalent amount in ounces",
        exampleTranslation: "250 gram hoặc một lượng tương đương theo ounce."
    },
    {
        word: "era",
        meaning: "thời đại, kỷ nguyên",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈerə/",
        example: "the Victorian/modern/post-war era",
        exampleTranslation: "thời Victoria/hiện đại/sau chiến tranh."
    },
    {
        word: "erupt",
        meaning: "phun trào, bùng nổ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪˈrʌpt/",
        example: "The volcano could erupt at any time.",
        exampleTranslation: "Ngọn núi lửa có thể phun trào bất cứ lúc nào."
    },
    {
        word: "essentially",
        meaning: "về bản chất, về cơ bản",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ɪˈsenʃəli/",
        example: "There are three essentially different ways of tackling the problem.",
        exampleTranslation: "Có ba cách tiếp cận vấn đề về bản chất là khác nhau."
    },
    {
        word: "establish",
        meaning: "thành lập, thiết lập",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪˈstæblɪʃ/",
        example: "The committee was established in 1912.",
        exampleTranslation: "Ủy ban được thành lập vào năm 1912."
    },
    {
        word: "estate",
        meaning: "khu đất, tài sản, bất động sản",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪˈsteɪt/",
        example: "on an estate She lives in a tower block on an estate in London.",
        exampleTranslation: "trong một khu đất. Cô ấy sống trong một khu chung cư trên một khu đất ở London."
    },
    {
        word: "estimate",
        meaning: "sự ước tính, báo giá",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈestɪmət/",
        example: "to provide/obtain an estimate",
        exampleTranslation: "đưa ra/nhận được báo giá."
    },
    {
        word: "ethic",
        meaning: "đạo đức, luân lý",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈeθɪk/",
        example: "professional/business/medical ethics",
        exampleTranslation: "đạo đức nghề nghiệp/kinh doanh/y tế."
    },
    {
        word: "ethical",
        meaning: "có đạo đức, hợp đạo đức",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈeθɪkl/",
        example: "ethical issues/standards/questions/dilemmas",
        exampleTranslation: "các vấn đề/tiêu chuẩn/câu hỏi/tình huống tiến thoái lưỡng nan về đạo đức."
    },
    {
        word: "ethnic",
        meaning: "thuộc dân tộc, sắc tộc",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈeθnɪk/",
        example: "ethnic background/origin",
        exampleTranslation: "xuất thân/nguồn gốc dân tộc."
    },
    {
        word: "evaluate",
        meaning: "đánh giá, ước lượng",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪˈvæljueɪt/",
        example: "The trial will evaluate the effectiveness of the different drugs.",
        exampleTranslation: "Cuộc thử nghiệm sẽ đánh giá hiệu quả của các loại thuốc khác nhau."
    },
    {
        word: "evaluation",
        meaning: "sự đánh giá, sự nhận định",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪˌvæljuˈeɪʃn/",
        example: "an evaluation of the healthcare system",
        exampleTranslation: "một cuộc đánh giá hệ thống chăm sóc sức khỏe."
    },
    {
        word: "even",
        meaning: "chẵn",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈiːvn/",
        example: "4, 6, 8 and 10 are all even numbers.",
        exampleTranslation: "4, 6, 8 và 10 đều là các số chẵn."
    },
    {
        word: "evident",
        meaning: "hiển nhiên, rõ ràng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈevɪdənt/",
        example: "The orchestra played with evident enjoyment.",
        exampleTranslation: "Dàn nhạc chơi với sự tận hưởng rõ ràng."
    },
    {
        word: "evil",
        meaning: "ác, xấu xa, độc ác",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈiːvl/",
        example: "Police described the killer as ‘a desperate and evil man’.",
        exampleTranslation: "Cảnh sát mô tả kẻ giết người là 'một kẻ tuyệt vọng và độc ác'."
    },
    {
        word: "evolution",
        meaning: "sự tiến hóa",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌevəˈluːʃn/",
        example: "the evolution of the human species",
        exampleTranslation: "sự tiến hóa của loài người."
    },
    {
        word: "evolve",
        meaning: "tiến hóa, phát triển",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪˈvɑːlv/",
        example: "evolve (from something) (into something) The idea evolved from a drawing I discovered in the attic.",
        exampleTranslation: "tiến hóa (từ cái gì đó) (thành cái gì đó). Ý tưởng này tiến hóa từ một bản vẽ tôi phát hiện trên gác mái."
    },
    {
        word: "examination",
        meaning: "sự kiểm tra, kỳ thi",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪɡˌzæmɪˈneɪʃn/",
        example: "successful candidates in GCSE examinations",
        exampleTranslation: "các thí sinh vượt qua kỳ thi GCSE."
    },
    {
        word: "exceed",
        meaning: "vượt quá, lớn hơn",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪkˈsiːd/",
        example: "The price will not exceed £100.",
        exampleTranslation: "Giá sẽ không vượt quá 100 bảng Anh."
    },
    {
        word: "exception",
        meaning: "sự ngoại lệ, trường hợp ngoại lệ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪkˈsepʃn/",
        example: "Most of the buildings in the town are modern, but the church is an exception.",
        exampleTranslation: "Hầu hết các tòa nhà trong thị trấn đều hiện đại, nhưng nhà thờ là một ngoại lệ."
    },
    {
        word: "excessive",
        meaning: "quá mức, thừa thãi",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɪkˈsesɪv/",
        example: "They complained about the excessive noise coming from the upstairs flat.",
        exampleTranslation: "Họ phàn nàn về tiếng ồn quá lớn phát ra từ căn hộ trên lầu."
    },
    {
        word: "exclude",
        meaning: "loại trừ, gạt bỏ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪkˈskluːd/",
        example: "The cost of borrowing has been excluded from the inflation figures.",
        exampleTranslation: "Chi phí vay đã được loại trừ khỏi số liệu lạm phát."
    },
    {
        word: "excuse",
        meaning: "lời bào chữa, lời biện hộ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪkˈskjuːs/",
        example: "Late again! What's your excuse this time?",
        exampleTranslation: "Lại đến muộn! Lần này lý do của bạn là gì?"
    },
    {
        word: "executive",
        meaning: "chấp hành, quản lý",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɪɡˈzekjətɪv/",
        example: "She has an executive position in a finance company.",
        exampleTranslation: "Cô ấy có một vị trí quản lý trong một công ty tài chính."
    },
    {
        word: "exhibit",
        meaning: "vật trưng bày, buổi triển lãm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪɡˈzɪbɪt/",
        example: "The museum contains some interesting exhibits on Spanish rural life.",
        exampleTranslation: "Bảo tàng chứa một số hiện vật thú vị về đời sống nông thôn Tây Ban Nha."
    },
    {
        word: "existence",
        meaning: "sự tồn tại, sự hiện hữu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪɡˈzɪstəns/",
        example: "I was unaware of his existence until today.",
        exampleTranslation: "Tôi không hề biết về sự tồn tại của anh ấy cho đến hôm nay."
    },
    {
        word: "exit",
        meaning: "lối ra",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈeɡzɪt/",
        example: "Where's the exit?",
        exampleTranslation: "Lối ra ở đâu?"
    },
    {
        word: "exotic",
        meaning: "ngoại lai, kỳ lạ",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɪɡˈzɑːtɪk/",
        example: "brightly-coloured exotic flowers/plants/birds",
        exampleTranslation: "những bông hoa/cây/chim ngoại lai có màu sắc rực rỡ."
    },
    {
        word: "expansion",
        meaning: "sự mở rộng, sự bành trướng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪkˈspænʃn/",
        example: "a period of rapid economic expansion",
        exampleTranslation: "một giai đoạn mở rộng kinh tế nhanh chóng."
    },
    {
        word: "expectation",
        meaning: "sự kỳ vọng, mong đợi",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌekspekˈteɪʃn/",
        example: "expectation of something We are confident in our expectation of a full recovery.",
        exampleTranslation: "kỳ vọng về điều gì đó. Chúng tôi tự tin vào kỳ vọng của mình về một sự phục hồi hoàn toàn."
    },
    {
        word: "expense",
        meaning: "chi phí, giá cả, khoản chi",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪkˈspens/",
        example: "The garden was transformed at great expense.",
        exampleTranslation: "Khu vườn được cải tạo với chi phí lớn."
    },
    {
        word: "expertise",
        meaning: "chuyên môn, chuyên sâu, sự thành thạo",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌekspɜːrˈtiːz/",
        example: "professional/scientific/technical, etc. expertise",
        exampleTranslation: "chuyên môn/khoa học/kỹ thuật, v.v."
    },
    {
        word: "exploit",
        meaning: "khai thác, lợi dụng",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪkˈsplɔɪt/",
        example: "He exploited his father's name to get himself a job.",
        exampleTranslation: "Anh ta đã lợi dụng tên tuổi của cha mình để xin được việc."
    },
    {
        word: "exploration",
        meaning: "sự thăm dò, sự khám phá",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌekspləˈreɪʃn/",
        example: "Budgets for space exploration have been cut back.",
        exampleTranslation: "Ngân sách cho thám hiểm không gian đã bị cắt giảm."
    },
    {
        word: "expose",
        meaning: "phơi bày, tiết lộ, lộ ra",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪkˈspəʊz/",
        example: "He smiled suddenly, exposing a set of amazingly white teeth.",
        exampleTranslation: "Anh ta cười bỗng nhiên, để lộ ra một hàm răng trắng một cách đáng kinh ngạc."
    },
    {
        word: "exposure",
        meaning: "sự phơi bày, sự tiếp xúc, sự lộ ra",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪkˈspəʊʒər/",
        example: "prolonged exposure to harmful radiation",
        exampleTranslation: "tiếp xúc kéo dài với bức xạ có hại"
    },
    {
        word: "extend",
        meaning: "mở rộng, kéo dài, gia hạn",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪkˈstend/",
        example: "to extend a fence/road/house",
        exampleTranslation: "mở rộng hàng rào/con đường/ngôi nhà"
    },
    {
        word: "extension",
        meaning: "sự mở rộng, sự gia hạn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪkˈstenʃn/",
        example: "the extension of new technology into developing countries",
        exampleTranslation: "sự mở rộng công nghệ mới đến các nước đang phát triển"
    },
    {
        word: "extensive",
        meaning: "rộng lớn, bao quát, sâu rộng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɪkˈstensɪv/",
        example: "The house has extensive grounds.",
        exampleTranslation: "Ngôi nhà có khuôn viên rộng lớn."
    },
    {
        word: "extensively",
        meaning: "một cách rộng rãi, một cách bao quát",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ɪkˈstensɪvli/",
        example: "She has travelled extensively.",
        exampleTranslation: "Cô ấy đã đi du lịch khắp nơi."
    },
    {
        word: "extent",
        meaning: "mức độ, quy mô, phạm vi",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪkˈstent/",
        example: "It is difficult to assess the full extent of the damage.",
        exampleTranslation: "Thật khó để đánh giá đầy đủ mức độ thiệt hại."
    },
    {
        word: "external",
        meaning: "bên ngoài, ngoại vi",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɪkˈstɜːrnl/",
        example: "the external walls of the building",
        exampleTranslation: "các bức tường bên ngoài của tòa nhà"
    },
    {
        word: "extract",
        meaning: "đoạn trích, chiết xuất",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈekstrækt/",
        example: "The following extract is taken from her new novel.",
        exampleTranslation: "Đoạn trích sau đây được lấy từ cuốn tiểu thuyết mới của cô ấy."
    },
    {
        word: "extraordinary",
        meaning: "phi thường, lạ thường, đặc biệt",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɪkˈstrɔːrdəneri/",
        example: "What an extraordinary thing to say!",
        exampleTranslation: "Thật là một điều phi thường khi nói ra!"
    },
    {
        word: "extreme",
        meaning: "cực đoan, cực điểm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪkˈstriːm/",
        example: "extremes of love and hate",
        exampleTranslation: "cực điểm của tình yêu và sự căm ghét"
    },
    {
        word: "fabric",
        meaning: "vải, chất liệu vải",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈfæbrɪk/",
        example: "They sell a wide variety of printed cotton fabric.",
        exampleTranslation: "Họ bán nhiều loại vải cotton in hoa văn."
    },
    {
        word: "fabulous",
        meaning: "tuyệt vời, phi thường, tuyệt hảo",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈfæbjələs/",
        example: "They put on a fabulous performance.",
        exampleTranslation: "Họ đã có một màn trình diễn tuyệt vời."
    },
    {
        word: "facility",
        meaning: "cơ sở vật chất, tiện nghi",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/fəˈsɪləti/",
        example: "leisure/sports facilities",
        exampleTranslation: "cơ sở vật chất giải trí/thể thao"
    },
    {
        word: "failed",
        meaning: "thất bại, hỏng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/feɪld/",
        example: "a failed writer",
        exampleTranslation: "một nhà văn thất bại"
    },
    {
        word: "failure",
        meaning: "sự thất bại, sự hỏng hóc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈfeɪljər/",
        example: "The success or failure of the plan depends on you.",
        exampleTranslation: "Thành công hay thất bại của kế hoạch phụ thuộc vào bạn."
    },
    {
        word: "faith",
        meaning: "niềm tin, lòng tin, đức tin",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/feɪθ/",
        example: "If the company can retain its customers' faith, it could become the market leader.",
        exampleTranslation: "Nếu công ty có thể giữ vững niềm tin của khách hàng, nó có thể trở thành người dẫn đầu thị trường."
    },
    {
        word: "fake",
        meaning: "giả, hàng giả",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/feɪk/",
        example: "There were a few stalls selling fake designer clothing.",
        exampleTranslation: "Có một vài quầy bán quần áo hàng hiệu giả."
    },
    {
        word: "fame",
        meaning: "danh tiếng, sự nổi tiếng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/feɪm/",
        example: "to achieve/win instant fame",
        exampleTranslation: "đạt được/giành được danh tiếng tức thì"
    },
    {
        word: "fantasy",
        meaning: "sự tưởng tượng, ảo tưởng, mộng tưởng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈfæntəsi/",
        example: "He spoke of his childhood fantasies about becoming a famous football player.",
        exampleTranslation: "Anh ấy nói về những tưởng tượng thời thơ ấu của mình về việc trở thành một cầu thủ bóng đá nổi tiếng."
    },
    {
        word: "fare",
        meaning: "giá vé",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/fer/",
        example: "bus/taxi fares",
        exampleTranslation: "giá vé xe buýt/taxi"
    },
    {
        word: "fault",
        meaning: "lỗi, khuyết điểm, sự sai sót",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/fɔːlt/",
        example: "Why should I say sorry when it's not my fault?",
        exampleTranslation: "Tại sao tôi phải xin lỗi khi đó không phải lỗi của tôi?"
    },
    {
        word: "favour",
        meaning: "ưa chuộng, ủng hộ, thiên vị",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈfeɪvər/",
        example: "Many countries favour a presidential system of government.",
        exampleTranslation: "Nhiều quốc gia ủng hộ một hệ thống chính phủ tổng thống."
    },
    {
        word: "feather",
        meaning: "lông vũ, chiếc lông",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈfeðər/",
        example: "a peacock feather",
        exampleTranslation: "một chiếc lông công"
    },
    {
        word: "federal",
        meaning: "liên bang, liên bang",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈfedərəl/",
        example: "a federal republic",
        exampleTranslation: "một nước cộng hòa liên bang"
    },
    {
        word: "fee",
        meaning: "phí, lệ phí",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/fiː/",
        example: "Employees are reimbursed for any legal fees incurred when they relocate.",
        exampleTranslation: "Nhân viên được hoàn trả cho bất kỳ khoản phí pháp lý nào phát sinh khi họ chuyển địa điểm."
    },
    {
        word: "feed",
        meaning: "bữa ăn, khẩu phần, thức ăn cho động vật",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/fiːd/",
        example: "her morning feed",
        exampleTranslation: "bữa ăn sáng của cô ấy"
    },
    {
        word: "feedback",
        meaning: "phản hồi, góp ý",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈfiːdbæk/",
        example: "customer/user feedback",
        exampleTranslation: "phản hồi của khách hàng/người dùng"
    },
    {
        word: "feel",
        meaning: "cảm giác, sự sờ mó",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/fiːl/",
        example: "You can tell it's silk by the feel.",
        exampleTranslation: "Bạn có thể nhận ra nó là lụa qua cảm giác."
    },
    {
        word: "fellow",
        meaning: "cùng nhau, đồng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈfeləʊ/",
        example: "fellow citizens/students",
        exampleTranslation: "công dân/sinh viên cùng khóa"
    },
    {
        word: "fever",
        meaning: "sốt",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈfiːvər/",
        example: "He has a high fever.",
        exampleTranslation: "Anh ấy bị sốt cao."
    },
    {
        word: "figure",
        meaning: "tính toán, xem xét, có ý nghĩa",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈfɪɡjər/",
        example: "My feelings about the matter didn't seem to figure at all.",
        exampleTranslation: "Cảm xúc của tôi về vấn đề này dường như không có ý nghĩa gì cả."
    },
    {
        word: "file",
        meaning: "nộp, sắp xếp, lưu trữ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/faɪl/",
        example: "(+ adv./prep.) The forms should be filed alphabetically.",
        exampleTranslation: "(+ trạng từ/giới từ) Các biểu mẫu nên được nộp theo thứ tự bảng chữ cái."
    },
    {
        word: "finance",
        meaning: "tài chính, tài chính học",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/fəˈnæns/",
        example: "The project will only go ahead if they can raise the necessary finance.",
        exampleTranslation: "Dự án sẽ chỉ được tiến hành nếu họ có thể huy động đủ tài chính cần thiết."
    },
    {
        word: "finding",
        meaning: "phát hiện, kết quả",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈfaɪndɪŋ/",
        example: "Our research findings indicate that pregnant women benefit from this treatment.",
        exampleTranslation: "Các phát hiện nghiên cứu của chúng tôi chỉ ra rằng phụ nữ mang thai được hưởng lợi từ phương pháp điều trị này."
    },
    {
        word: "firefighter",
        meaning: "lính cứu hỏa",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈfaɪərfaɪtər/",
        example: "Firefighters were called to a house in Summertown.",
        exampleTranslation: "Lính cứu hỏa đã được gọi đến một ngôi nhà ở Summertown."
    },
    {
        word: "firework",
        meaning: "pháo hoa",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈfaɪərwɜːrk/",
        example: "(British English) to let off a few fireworks",
        exampleTranslation: "(Tiếng Anh Anh) bắn một vài phát pháo hoa"
    },
    {
        word: "firm",
        meaning: "chắc chắn, vững vàng, kiên quyết",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/fɜːrm/",
        example: "a firm bed/mattress",
        exampleTranslation: "một chiếc giường/nệm chắc chắn"
    },
    {
        word: "firmly",
        meaning: "một cách chắc chắn, một cách kiên quyết",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈfɜːrmli/",
        example: "‘I can manage,’ she said firmly.",
        exampleTranslation: "‘Tôi có thể xoay sở được,’ cô ấy nói một cách kiên quyết."
    },
    {
        word: "fix",
        meaning: "giải pháp, cách sửa",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/fɪks/",
        example: "Luckily there is an easy fix.",
        exampleTranslation: "May mắn thay, có một giải pháp dễ dàng."
    },
    {
        word: "flame",
        meaning: "ngọn lửa",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/fleɪm/",
        example: "the tiny yellow flame of a match",
        exampleTranslation: "ngọn lửa vàng nhỏ của một que diêm"
    },
    {
        word: "flash",
        meaning: "ánh sáng lóe lên, tia chớp",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/flæʃ/",
        example: "a flash of lightning",
        exampleTranslation: "một tia chớp"
    },
    {
        word: "flavour",
        meaning: "hương vị, mùi vị",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈfleɪvər/",
        example: "The tomatoes give extra flavour to the sauce.",
        exampleTranslation: "Cà chua mang lại hương vị đậm đà hơn cho nước sốt."
    },
    {
        word: "flexible",
        meaning: "linh hoạt, mềm dẻo",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈfleksəbl/",
        example: "a more flexible approach",
        exampleTranslation: "một cách tiếp cận linh hoạt hơn"
    },
    {
        word: "float",
        meaning: "nổi, trôi, làm nổi",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/fləʊt/",
        example: "A group of swans floated by.",
        exampleTranslation: "Một đàn thiên nga trôi đi."
    },
    {
        word: "fold",
        meaning: "nếp gấp, nếp gấp",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/fəʊld/",
        example: "the folds of her dress",
        exampleTranslation: "những nếp gấp trên chiếc váy của cô ấy"
    },
    {
        word: "folding",
        meaning: "gấp, có thể gấp lại",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈfəʊldɪŋ/",
        example: "a folding chair/bike/knife",
        exampleTranslation: "một chiếc ghế/xe đạp/dao gấp"
    },
    {
        word: "following",
        meaning: "sau",
        partOfSpeech: "preposition",
        level: "B2",
        phonetic: "/ˈfɑːləʊɪŋ/",
        example: "He took charge of the family business following his father's death.",
        exampleTranslation: "Anh ấy tiếp quản công việc kinh doanh của gia đình sau cái chết của cha mình."
    },
    {
        word: "fond",
        meaning: "thích, yêu mến",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/fɑːnd/",
        example: "Over the years, I have grown quite fond of her.",
        exampleTranslation: "Qua nhiều năm, tôi đã trở nên khá yêu mến cô ấy."
    },
    {
        word: "fool",
        meaning: "kẻ ngốc, người ngu ngốc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/fuːl/",
        example: "Don't be such a fool!",
        exampleTranslation: "Đừng ngốc nghếch như vậy!"
    },
    {
        word: "forbid",
        meaning: "cấm, ngăn cản",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/fərˈbɪd/",
        example: "(from doing something) He forbade them from mentioning the subject again.",
        exampleTranslation: "(không được làm gì đó) Anh ấy đã cấm họ nhắc lại chủ đề đó nữa."
    },
    {
        word: "forecast",
        meaning: "dự báo, lời dự báo",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈfɔːrkæst/",
        example: "The sales forecasts are encouraging.",
        exampleTranslation: "Các dự báo doanh số là đáng khích lệ."
    },
    {
        word: "forgive",
        meaning: "tha thứ, bỏ qua",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/fərˈɡɪv/",
        example: "Can you ever forgive me?",
        exampleTranslation: "Bạn có thể tha thứ cho tôi không?"
    },
    {
        word: "format",
        meaning: "định dạng, hình thức",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈfɔːrmæt/",
        example: "The format of the new quiz show has proved popular.",
        exampleTranslation: "Định dạng của chương trình đố vui mới đã chứng tỏ sự phổ biến."
    },
    {
        word: "formation",
        meaning: "sự hình thành, sự thành lập",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/fɔːrˈmeɪʃn/",
        example: "the formation of a new government",
        exampleTranslation: "sự thành lập một chính phủ mới"
    },
    {
        word: "former",
        meaning: "trước đây, cũ",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈfɔːrmər/",
        example: "This fine ruin was, in former times, a royal castle.",
        exampleTranslation: "Tàn tích đẹp đẽ này, trong thời xưa, là một lâu đài hoàng gia."
    },
    {
        word: "formerly",
        meaning: "trước đây, nguyên là",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈfɔːrmərli/",
        example: "Namibia, formerly known as South West Africa",
        exampleTranslation: "Namibia, trước đây được gọi là Tây Nam Phi."
    },
    {
        word: "fortunate",
        meaning: "may mắn, hạnh phúc",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈfɔːrtʃənət/",
        example: "Remember those less fortunate than yourselves.",
        exampleTranslation: "Hãy nhớ đến những người kém may mắn hơn các bạn."
    },
    {
        word: "fortune",
        meaning: "sự giàu có, vận may, tài sản",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈfɔːrtʃən/",
        example: "He made a fortune in real estate.",
        exampleTranslation: "Anh ấy đã làm giàu từ bất động sản."
    },
    {
        word: "forum",
        meaning: "diễn đàn, hội nghị",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈfɔːrəm/",
        example: "forum (on something) to hold an international forum on drug abuse",
        exampleTranslation: "diễn đàn (về vấn đề gì đó) tổ chức một diễn đàn quốc tế về lạm dụng ma túy."
    },
    {
        word: "forward",
        meaning: "phía trước, tiến về phía trước",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈfɔːrwərd/",
        example: "The door opened, blocking his forward movement.",
        exampleTranslation: "Cánh cửa mở ra, cản trở bước tiến của anh ấy."
    },
    {
        word: "fossil",
        meaning: "hóa thạch",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈfɑːsl/",
        example: "fossils over two million years old",
        exampleTranslation: "hóa thạch hơn hai triệu năm tuổi."
    },
    {
        word: "found",
        meaning: "thành lập, sáng lập",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/faʊnd/",
        example: "to found a club/company/school",
        exampleTranslation: "thành lập một câu lạc bộ/công ty/trường học."
    },
    {
        word: "foundation",
        meaning: "nền tảng, cơ sở",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/faʊnˈdeɪʃn/",
        example: "Respect and friendship provide a solid foundation for marriage.",
        exampleTranslation: "Sự tôn trọng và tình bạn tạo nên một nền tảng vững chắc cho hôn nhân."
    },
    {
        word: "founder",
        meaning: "người sáng lập",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈfaʊndər/",
        example: "the founder and president of the company",
        exampleTranslation: "người sáng lập và chủ tịch của công ty."
    },
    {
        word: "fraction",
        meaning: "phần, tỷ lệ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈfrækʃn/",
        example: "Only a small fraction of a bank's total deposits will be withdrawn at any one time.",
        exampleTranslation: "Chỉ một phần nhỏ trong tổng số tiền gửi của ngân hàng sẽ được rút ra tại bất kỳ thời điểm nào."
    },
    {
        word: "fragment",
        meaning: "mảnh vỡ, mảnh vụn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈfræɡmənt/",
        example: "fragment (of something) Police found fragments of glass near the scene.",
        exampleTranslation: "mảnh (của cái gì đó) Cảnh sát tìm thấy những mảnh kính gần hiện trường."
    },
    {
        word: "framework",
        meaning: "khung, khuôn khổ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈfreɪmwɜːrk/",
        example: "built on a wooden framework",
        exampleTranslation: "được xây dựng trên một khung gỗ."
    },
    {
        word: "fraud",
        meaning: "sự gian lận, lừa đảo",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/frɔːd/",
        example: "She was charged with credit card fraud.",
        exampleTranslation: "Cô ấy đã bị buộc tội gian lận thẻ tín dụng."
    },
    {
        word: "free",
        meaning: "giải thoát, trả tự do",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/friː/",
        example: "The hijackers agreed to free a further ten hostages.",
        exampleTranslation: "Những kẻ cướp máy bay đồng ý trả tự do cho mười con tin nữa."
    },
    {
        word: "freedom",
        meaning: "sự tự do, quyền tự do",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈfriːdəm/",
        example: "Press freedom is under attack.",
        exampleTranslation: "Tự do báo chí đang bị tấn công."
    },
    {
        word: "freely",
        meaning: "một cách tự do, thoải mái",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈfriːli/",
        example: "the country’s first freely elected president",
        exampleTranslation: "vị tổng thống được bầu cử tự do đầu tiên của đất nước."
    },
    {
        word: "frequency",
        meaning: "tần suất, tần số",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈfriːkwənsi/",
        example: "Fatal road accidents have decreased in frequency over recent years.",
        exampleTranslation: "Số vụ tai nạn giao thông chết người đã giảm về tần suất trong những năm gần đây."
    },
    {
        word: "frequent",
        meaning: "thường xuyên, hay lui tới",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈfriːkwənt/",
        example: "He is a frequent visitor to this country.",
        exampleTranslation: "Ông ấy là một vị khách thường xuyên của đất nước này."
    },
    {
        word: "fuel",
        meaning: "cung cấp nhiên liệu, đốt nóng",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈfjuːəl/",
        example: "Uranium is used to fuel nuclear plants.",
        exampleTranslation: "Uranium được sử dụng để cung cấp nhiên liệu cho các nhà máy điện hạt nhân."
    },
    {
        word: "fulfil",
        meaning: "hoàn thành, thực hiện",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/fʊlˈfɪl/",
        example: "to fulfil your dream/ambition/potential",
        exampleTranslation: "thực hiện ước mơ/tham vọng/tiềm năng của bạn."
    },
    {
        word: "full-time",
        meaning: "toàn thời gian",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌfʊl ˈtaɪm/",
        example: "students in full-time education",
        exampleTranslation: "sinh viên học toàn thời gian."
    },
    {
        word: "fully",
        meaning: "hoàn toàn, đầy đủ",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈfʊli/",
        example: "I fully understand your motives.",
        exampleTranslation: "Tôi hoàn toàn hiểu động cơ của bạn."
    },
    {
        word: "function",
        meaning: "hoạt động, vận hành",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈfʌŋkʃn/",
        example: "We now have a functioning shower.",
        exampleTranslation: "Chúng tôi giờ đã có một vòi hoa sen đang hoạt động."
    },
    {
        word: "fund",
        meaning: "quỹ, nguồn vốn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/fʌnd/",
        example: "a disaster relief fund",
        exampleTranslation: "quỹ cứu trợ thiên tai."
    },
    {
        word: "fundamental",
        meaning: "cơ bản, nền tảng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌfʌndəˈmentl/",
        example: "the fundamental principles of scientific method",
        exampleTranslation: "các nguyên tắc cơ bản của phương pháp khoa học."
    },
    {
        word: "fundamentally",
        meaning: "về cơ bản, cốt lõi",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˌfʌndəˈmentəli/",
        example: "The two approaches are fundamentally different.",
        exampleTranslation: "Hai phương pháp này về cơ bản là khác nhau."
    },
    {
        word: "funding",
        meaning: "sự cấp vốn, nguồn vốn tài trợ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈfʌndɪŋ/",
        example: "federal/state funding",
        exampleTranslation: "việc cấp vốn liên bang/tiểu bang."
    },
    {
        word: "furious",
        meaning: "giận dữ, điên tiết",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈfjʊriəs/",
        example: "Their incompetence made me furious.",
        exampleTranslation: "Sự bất tài của họ khiến tôi vô cùng tức giận."
    },
    {
        word: "furthermore",
        meaning: "hơn nữa, vả lại",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˌfɜːrðərˈmɔːr/",
        example: "He said he had not discussed the matter with her. Furthermore, he had not even contacted her.",
        exampleTranslation: "Ông ấy nói rằng ông ấy đã không thảo luận vấn đề này với cô ấy. Hơn nữa, ông ấy thậm chí còn chưa liên lạc với cô ấy."
    },
    {
        word: "gain",
        meaning: "sự đạt được, lợi lộc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɡeɪn/",
        example: "The opposition made unexpected gains in the last election.",
        exampleTranslation: "Phe đối lập đã đạt được những thắng lợi bất ngờ trong cuộc bầu cử vừa qua."
    },
    {
        word: "gaming",
        meaning: "chơi game, trò chơi điện tử",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɡeɪmɪŋ/",
        example: "online/mobile/console gaming",
        exampleTranslation: "chơi game trực tuyến/trên di động/trên máy chơi game"
    },
    {
        word: "gang",
        meaning: "băng đảng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɡæŋ/",
        example: "criminal gangs",
        exampleTranslation: "băng đảng tội phạm"
    },
    {
        word: "gay",
        meaning: "đồng tính nam",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɡeɪ/",
        example: "gay men",
        exampleTranslation: "những người đồng tính nam"
    },
    {
        word: "gender",
        meaning: "giới tính",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈdʒendər/",
        example: "issues of class, race and gender",
        exampleTranslation: "các vấn đề về giai cấp, chủng tộc và giới tính"
    },
    {
        word: "gene",
        meaning: "gen",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dʒiːn/",
        example: "a dominant/recessive gene",
        exampleTranslation: "gen trội/lặn"
    },
    {
        word: "generate",
        meaning: "tạo ra, sản xuất",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈdʒenəreɪt/",
        example: "The wind turbines are used to generate electricity.",
        exampleTranslation: "Các tua-bin gió được sử dụng để tạo ra điện."
    },
    {
        word: "genetic",
        meaning: "di truyền",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/dʒəˈnetɪk/",
        example: "genetic and environmental factors",
        exampleTranslation: "các yếu tố di truyền và môi trường"
    },
    {
        word: "genius",
        meaning: "thiên tài",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈdʒiːniəs/",
        example: "the genius of Shakespeare",
        exampleTranslation: "thiên tài của Shakespeare"
    },
    {
        word: "genre",
        meaning: "thể loại",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈʒɑːnrə/",
        example: "literary/musical genres",
        exampleTranslation: "các thể loại văn học/âm nhạc"
    },
    {
        word: "genuine",
        meaning: "thật, chính hãng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈdʒenjuɪn/",
        example: "Is the painting a genuine Picasso?",
        exampleTranslation: "Bức tranh có phải là một bức Picasso thật không?"
    },
    {
        word: "genuinely",
        meaning: "thực sự, một cách chân thật",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈdʒenjuɪnli/",
        example: "There are some genuinely funny moments in the film.",
        exampleTranslation: "Có một vài khoảnh khắc thực sự hài hước trong phim."
    },
    {
        word: "gesture",
        meaning: "cử chỉ, hiệu lệnh",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈdʒestʃər/",
        example: "He made a rude gesture at the driver of the other car.",
        exampleTranslation: "Anh ta đã làm một cử chỉ thô lỗ với người lái xe của chiếc xe kia."
    },
    {
        word: "gig",
        meaning: "buổi biểu diễn (nhạc)",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɡɪɡ/",
        example: "They're doing a gig in Boston tonight.",
        exampleTranslation: "Họ có một buổi biểu diễn ở Boston tối nay."
    },
    {
        word: "globalization",
        meaning: "toàn cầu hóa",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌɡləʊbələˈzeɪʃn/",
        example: "This is an example of globalization.",
        exampleTranslation: "Đây là một ví dụ về toàn cầu hóa."
    },
    {
        word: "globe",
        meaning: "quả địa cầu, thế giới",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɡləʊb/",
        example: "tourists from every corner of the globe",
        exampleTranslation: "khách du lịch từ mọi nơi trên thế giới"
    },
    {
        word: "golden",
        meaning: "vàng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈɡəʊldən/",
        example: "a golden crown",
        exampleTranslation: "một chiếc vương miện vàng"
    },
    {
        word: "goodness",
        meaning: "lòng tốt, sự tốt bụng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɡʊdnəs/",
        example: "the essential goodness of human nature",
        exampleTranslation: "sự tốt bụng cốt yếu của bản chất con người"
    },
    {
        word: "gorgeous",
        meaning: "tuyệt đẹp, lộng lẫy",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈɡɔːrdʒəs/",
        example: "a gorgeous girl/man",
        exampleTranslation: "cô gái/chàng trai xinh đẹp"
    },
    {
        word: "govern",
        meaning: "quản lý, cai trị",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈɡʌvərn/",
        example: "The country is governed by elected representatives of the people.",
        exampleTranslation: "Đất nước được cai trị bởi các đại diện được bầu của nhân dân."
    },
    {
        word: "governor",
        meaning: "thống đốc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɡʌvərnər/",
        example: "the former governor of the colony",
        exampleTranslation: "cựu thống đốc của thuộc địa"
    },
    {
        word: "grab",
        meaning: "chộp lấy, giật lấy",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɡræb/",
        example: "grab somebody/something She grabbed his arm as he got up to leave.",
        exampleTranslation: "chộp lấy ai đó/cái gì đó Cô ấy đã giật lấy cánh tay anh khi anh đứng dậy để rời đi."
    },
    {
        word: "grade",
        meaning: "chấm điểm",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɡreɪd/",
        example: "grade somebody/something I spent all weekend grading papers.",
        exampleTranslation: "chấm điểm ai đó/cái gì đó Tôi đã dành cả cuối tuần để chấm bài."
    },
    {
        word: "gradually",
        meaning: "dần dần",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈɡrædʒuəli/",
        example: "to gradually increase/decrease",
        exampleTranslation: "tăng/giảm dần"
    },
    {
        word: "grand",
        meaning: "lớn, hoành tráng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɡrænd/",
        example: "It's not a very grand house.",
        exampleTranslation: "Đó không phải là một ngôi nhà rất lộng lẫy."
    },
    {
        word: "grant",
        meaning: "khoản tài trợ, trợ cấp",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɡrænt/",
        example: "government/federal grants",
        exampleTranslation: "các khoản tài trợ của chính phủ/liên bang"
    },
    {
        word: "graphic",
        meaning: "đồ họa",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈɡræfɪk/",
        example: "graphic design",
        exampleTranslation: "thiết kế đồ họa"
    },
    {
        word: "graphics",
        meaning: "đồ họa, hình ảnh",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɡræfɪks/",
        example: "Text and graphics are prepared separately and then combined.",
        exampleTranslation: "Văn bản và đồ họa được chuẩn bị riêng biệt và sau đó kết hợp."
    },
    {
        word: "greatly",
        meaning: "rất nhiều, đáng kể",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈɡreɪtli/",
        example: "People's reaction to the film has varied greatly.",
        exampleTranslation: "Phản ứng của mọi người đối với bộ phim đã thay đổi rất nhiều."
    },
    {
        word: "greenhouse",
        meaning: "nhà kính",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɡriːnhaʊs/",
        example: "This is an example of greenhouse.",
        exampleTranslation: "Đây là một ví dụ về nhà kính."
    },
    {
        word: "grocery",
        meaning: "tạp hóa, cửa hàng tạp hóa",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɡrəʊsəri/",
        example: "the corner grocery store",
        exampleTranslation: "cửa hàng tạp hóa ở góc phố"
    },
    {
        word: "guarantee",
        meaning: "sự đảm bảo, bảo lãnh",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌɡærənˈtiː/",
        example: "They are demanding certain guarantees before they sign the treaty.",
        exampleTranslation: "Họ đang đòi hỏi những đảm bảo nhất định trước khi ký hiệp ước."
    },
    {
        word: "guideline",
        meaning: "hướng dẫn, quy tắc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɡaɪdlaɪn/",
        example: "The government has drawn up guidelines for schools during the pandemic.",
        exampleTranslation: "Chính phủ đã soạn thảo các hướng dẫn cho trường học trong thời kỳ đại dịch."
    },
    {
        word: "habitat",
        meaning: "môi trường sống, nơi sinh sống",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈhæbɪtæt/",
        example: "The panda's natural habitat is the bamboo forest.",
        exampleTranslation: "Môi trường sống tự nhiên của gấu trúc là rừng tre."
    },
    {
        word: "handle",
        meaning: "tay cầm, quai cầm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈhændl/",
        example: "She turned the handle and opened the door.",
        exampleTranslation: "Cô ấy nắm lấy tay cầm và mở cánh cửa."
    },
    {
        word: "harbour",
        meaning: "bến cảng, hải cảng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈhɑːrbər/",
        example: "Several boats lay at anchor in the harbour.",
        exampleTranslation: "Nhiều thuyền neo đậu trong bến cảng."
    },
    {
        word: "harm",
        meaning: "sự tổn hại, thiệt hại",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/hɑːrm/",
        example: "He would never frighten anyone or cause them any harm.",
        exampleTranslation: "Anh ấy sẽ không bao giờ dọa nạt ai hay gây hại cho họ."
    },
    {
        word: "harmful",
        meaning: "có hại",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈhɑːrmfl/",
        example: "the harmful effects of alcohol",
        exampleTranslation: "những tác động có hại của rượu bia"
    },
    {
        word: "headquarters",
        meaning: "trụ sở chính",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈhedkwɔːrtərz/",
        example: "The firm’s headquarters is/are in London.",
        exampleTranslation: "Trụ sở chính của công ty đặt tại London."
    },
    {
        word: "heal",
        meaning: "chữa lành, lành lại",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/hiːl/",
        example: "It took a long time for the wounds to heal.",
        exampleTranslation: "Cần nhiều thời gian để vết thương lành lại."
    },
    {
        word: "healthcare",
        meaning: "chăm sóc sức khỏe",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈhelθ ker/",
        example: "the costs of healthcare for the elderly",
        exampleTranslation: "chi phí chăm sóc sức khỏe cho người già"
    },
    {
        word: "hearing",
        meaning: "thính giác, buổi điều trần",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈhɪrɪŋ/",
        example: "Her hearing is poor.",
        exampleTranslation: "Thính giác của cô ấy kém."
    },
    {
        word: "heaven",
        meaning: "thiên đường",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈhevn/",
        example: "the kingdom of heaven",
        exampleTranslation: "vương quốc thiên đàng"
    },
    {
        word: "heel",
        meaning: "gót chân",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/hiːl/",
        example: "Apply the cream to dry, cracked heels before bed.",
        exampleTranslation: "Thoa kem lên gót chân khô, nứt nẻ trước khi đi ngủ."
    },
    {
        word: "hell",
        meaning: "địa ngục",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/hel/",
        example: "He was terrified of going to hell when he died.",
        exampleTranslation: "Anh ta sợ chết sẽ xuống địa ngục."
    },
    {
        word: "helmet",
        meaning: "mũ bảo hiểm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈhelmɪt/",
        example: "Police in riot helmets lined the streets.",
        exampleTranslation: "Cảnh sát đội mũ bảo hiểm chống bạo động dàn ra trên đường phố."
    },
    {
        word: "hence",
        meaning: "do đó, vì vậy",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/hens/",
        example: "We suspect they are trying to hide something, hence the need for an independent inquiry.",
        exampleTranslation: "Chúng tôi nghi ngờ họ đang cố che giấu điều gì đó, do đó cần có một cuộc điều tra độc lập."
    },
    {
        word: "herb",
        meaning: "thảo mộc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/hɜːrb/",
        example: "a herb garden",
        exampleTranslation: "khu vườn thảo mộc"
    },
    {
        word: "hesitate",
        meaning: "do dự, ngập ngừng",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈhezɪteɪt/",
        example: "She hesitated before replying.",
        exampleTranslation: "Cô ấy đã do dự trước khi trả lời."
    },
    {
        word: "hidden",
        meaning: "ẩn giấu",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈhɪdn/",
        example: "Hidden dangers lurk in the ocean depths.",
        exampleTranslation: "Những nguy hiểm ẩn giấu rình rập dưới đáy đại dương."
    },
    {
        word: "high",
        meaning: "mức cao",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/haɪ/",
        example: "to hit/reach a high",
        exampleTranslation: "đạt/chạm mức cao"
    },
    {
        word: "highway",
        meaning: "đường cao tốc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈhaɪweɪ/",
        example: "Plans were being made for the construction of a new interstate highway system.",
        exampleTranslation: "Các kế hoạch đang được thực hiện để xây dựng hệ thống đường cao tốc liên bang mới."
    },
    {
        word: "hilarious",
        meaning: "buồn cười, hài hước",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/hɪˈleriəs/",
        example: "a hilarious joke/story",
        exampleTranslation: "một câu chuyện/trò đùa hài hước"
    },
    {
        word: "hip",
        meaning: "hông",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/hɪp/",
        example: "She stood with her hands on her hips.",
        exampleTranslation: "Cô ấy đứng chống tay lên hông."
    },
    {
        word: "hire",
        meaning: "sự thuê mướn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈhaɪər/",
        example: "a hire car",
        exampleTranslation: "một chiếc xe thuê"
    },
    {
        word: "historian",
        meaning: "nhà sử học",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/hɪˈstɔːriən/",
        example: "No serious historian today accepts this theory.",
        exampleTranslation: "Không nhà sử học nghiêm túc nào ngày nay chấp nhận thuyết này."
    },
    {
        word: "hold",
        meaning: "sự nắm giữ, sự kiểm soát",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/həʊld/",
        example: "hold on somebody/something His hold on her arm tightened.",
        exampleTranslation: "Cú siết tay anh ta lên cánh tay cô ấy càng chặt hơn."
    },
    {
        word: "hollow",
        meaning: "rỗng, trống rỗng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈhɑːləʊ/",
        example: "a hollow ball/centre/tube/tree",
        exampleTranslation: "một quả bóng/trung tâm/ống/cây rỗng"
    },
    {
        word: "holy",
        meaning: "thánh, thiêng liêng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈhəʊli/",
        example: "the Holy Bible",
        exampleTranslation: "Kinh Thánh"
    },
    {
        word: "homeless",
        meaning: "vô gia cư",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈhəʊmləs/",
        example: "The scheme has been set up to help homeless people.",
        exampleTranslation: "Chương trình đã được thiết lập để giúp đỡ những người vô gia cư."
    },
    {
        word: "honesty",
        meaning: "sự trung thực, sự thành thật",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɑːnəsti/",
        example: "She answered all my questions with her usual honesty.",
        exampleTranslation: "Cô ấy đã trả lời tất cả các câu hỏi của tôi với sự thành thật thường lệ của mình."
    },
    {
        word: "honour",
        meaning: "danh dự, vinh dự, sự kính trọng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɑːnər/",
        example: "the guest of honour (= the most important one)",
        exampleTranslation: "vị khách danh dự (= người quan trọng nhất)"
    },
    {
        word: "hook",
        meaning: "móc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/hʊk/",
        example: "a picture/curtain/coat hook",
        exampleTranslation: "móc treo tranh/rèm cửa/áo khoác"
    },
    {
        word: "hopefully",
        meaning: "hy vọng là",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈhəʊpfəli/",
        example: "Hopefully, we'll arrive before dark.",
        exampleTranslation: "Hy vọng là chúng ta sẽ đến trước khi trời tối."
    },
    {
        word: "host",
        meaning: "tổ chức, đăng cai",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/həʊst/",
        example: "to host an event/a conference/a meeting",
        exampleTranslation: "tổ chức một sự kiện/hội nghị/cuộc họp"
    },
    {
        word: "house",
        meaning: "cung cấp nhà ở",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/haʊz/",
        example: "The government is committed to housing the refugees.",
        exampleTranslation: "Chính phủ cam kết cung cấp nhà ở cho những người tị nạn."
    },
    {
        word: "household",
        meaning: "hộ gia đình",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈhaʊshəʊld/",
        example: "Most households now own at least one car.",
        exampleTranslation: "Hầu hết các hộ gia đình hiện nay sở hữu ít nhất một chiếc ô tô."
    },
    {
        word: "housing",
        meaning: "nhà ở, chỗ ở",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈhaʊzɪŋ/",
        example: "rental/student housing",
        exampleTranslation: "nhà cho thuê/nhà cho sinh viên"
    },
    {
        word: "humorous",
        meaning: "hài hước, vui nhộn",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈhjuːmərəs/",
        example: "He gave a humorous account of their trip to Spain.",
        exampleTranslation: "Anh ấy đã kể lại một cách hài hước về chuyến đi của họ tới Tây Ban Nha."
    },
    {
        word: "humour",
        meaning: "sự hài hước, tính hài hước",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈhjuːmər/",
        example: "It was a story full of gentle humour.",
        exampleTranslation: "Đó là một câu chuyện đầy sự hài hước nhẹ nhàng."
    },
    {
        word: "hunger",
        meaning: "sự đói, nạn đói",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈhʌŋɡər/",
        example: "Around fifty people die of hunger every day in the camp.",
        exampleTranslation: "Khoảng năm mươi người chết vì đói mỗi ngày trong trại."
    },
    {
        word: "hunt",
        meaning: "cuộc săn lùng, sự tìm kiếm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/hʌnt/",
        example: "The hunt is on for a suitable candidate.",
        exampleTranslation: "Cuộc săn lùng đang diễn ra để tìm một ứng cử viên phù hợp."
    },
    {
        word: "hunting",
        meaning: "săn bắn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈhʌntɪŋ/",
        example: "He goes hunting every weekend.",
        exampleTranslation: "Anh ấy đi săn vào mỗi cuối tuần."
    },
    {
        word: "hurt",
        meaning: "sự tổn thương, nỗi đau, sự làm đau",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/hɜːrt/",
        example: "There was hurt and real anger in her voice.",
        exampleTranslation: "Có sự tổn thương và sự tức giận thực sự trong giọng nói của cô ấy."
    },
    {
        word: "hypothesis",
        meaning: "giả thuyết",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/haɪˈpɑːθəsɪs/",
        example: "to formulate/confirm a hypothesis",
        exampleTranslation: "đặt ra/xác nhận một giả thuyết"
    },
    {
        word: "icon",
        meaning: "biểu tượng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈaɪkɑːn/",
        example: "Click on the printer icon with the mouse.",
        exampleTranslation: "Nhấp vào biểu tượng máy in bằng chuột."
    },
    {
        word: "ID",
        meaning: "chứng minh thư, giấy tờ tùy thân",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌaɪ ˈdiː/",
        example: "You must carry ID at all times.",
        exampleTranslation: "Bạn phải mang theo giấy tờ tùy thân mọi lúc."
    },
    {
        word: "ideal",
        meaning: "lý tưởng, mẫu mực",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/aɪˈdiːəl/",
        example: "He was accused of betraying his political ideals.",
        exampleTranslation: "Anh ta bị buộc tội phản bội các lý tưởng chính trị của mình."
    },
    {
        word: "identical",
        meaning: "giống hệt, y hệt",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/aɪˈdentɪkl/",
        example: "a row of identical houses",
        exampleTranslation: "một dãy những ngôi nhà giống hệt nhau"
    },
    {
        word: "illusion",
        meaning: "ảo ảnh, ảo tưởng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪˈluːʒn/",
        example: "under the illusion that… She's under the illusion that (= believes wrongly that) she'll get the job.",
        exampleTranslation: "trong ảo tưởng rằng... Cô ấy có ảo tưởng rằng (= tin sai rằng) mình sẽ có được công việc đó."
    },
    {
        word: "illustrate",
        meaning: "minh họa, làm rõ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈɪləstreɪt/",
        example: "She illustrated her own books.",
        exampleTranslation: "Cô ấy đã minh họa cho những cuốn sách của chính mình."
    },
    {
        word: "illustration",
        meaning: "hình minh họa",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌɪləˈstreɪʃn/",
        example: "50 full-colour illustrations",
        exampleTranslation: "50 hình minh họa màu đầy đủ"
    },
    {
        word: "imagination",
        meaning: "trí tưởng tượng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪˌmædʒɪˈneɪʃn/",
        example: "a vivid/fertile imagination",
        exampleTranslation: "một trí tưởng tượng sống động/phong phú"
    },
    {
        word: "immigration",
        meaning: "sự nhập cư",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌɪmɪˈɡreɪʃn/",
        example: "legal/illegal immigration",
        exampleTranslation: "nhập cư hợp pháp/bất hợp pháp"
    },
    {
        word: "immune",
        meaning: "miễn dịch",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɪˈmjuːn/",
        example: "Adults are often immune to German measles.",
        exampleTranslation: "Người lớn thường miễn dịch với bệnh sởi Đức."
    },
    {
        word: "impatient",
        meaning: "thiếu kiên nhẫn, nóng ruột",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɪmˈpeɪʃnt/",
        example: "I'd been waiting for twenty minutes and I was getting impatient.",
        exampleTranslation: "Tôi đã đợi hai mươi phút và tôi bắt đầu thấy nóng ruột."
    },
    {
        word: "implement",
        meaning: "thực hiện, thi hành",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈɪmplɪment/",
        example: "to implement changes/decisions/policies/reforms",
        exampleTranslation: "thực hiện những thay đổi/quyết định/chính sách/cải cách"
    },
    {
        word: "implication",
        meaning: "sự hàm ý, sự ngụ ý",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌɪmplɪˈkeɪʃn/",
        example: "They failed to consider the wider implications of their actions.",
        exampleTranslation: "Họ đã không xem xét những hàm ý rộng lớn hơn trong hành động của mình."
    },
    {
        word: "imply",
        meaning: "ám chỉ, ngụ ý",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪmˈplaɪ/",
        example: "imply (that)… Are you implying (that) I am wrong?",
        exampleTranslation: "ám chỉ (rằng)... Bạn đang ám chỉ (rằng) tôi sai à?"
    },
    {
        word: "impose",
        meaning: "áp đặt",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪmˈpəʊz/",
        example: "The UN Security Council imposed sanctions in 1992.",
        exampleTranslation: "Hội đồng Bảo an LHQ đã áp đặt các biện pháp trừng phạt vào năm 1992."
    },
    {
        word: "impress",
        meaning: "gây ấn tượng, làm cho cảm phục",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪmˈpres/",
        example: "impress (somebody) We interviewed a number of candidates but none of them impressed us.",
        exampleTranslation: "gây ấn tượng (với ai đó) Chúng tôi đã phỏng vấn một số ứng cử viên nhưng không ai trong số họ gây ấn tượng với chúng tôi."
    },
    {
        word: "impressed",
        meaning: "ấn tượng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɪmˈprest/",
        example: "I must admit I am impressed.",
        exampleTranslation: "Tôi phải thừa nhận là tôi rất ấn tượng."
    },
    {
        word: "incentive",
        meaning: "sự khuyến khích, động lực",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪnˈsentɪv/",
        example: "There is no incentive for people to save fuel.",
        exampleTranslation: "Không có động lực nào để mọi người tiết kiệm nhiên liệu."
    },
    {
        word: "inch",
        meaning: "inch (đơn vị đo chiều dài)",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪntʃ/",
        example: "She's a few inches taller than me.",
        exampleTranslation: "Cô ấy cao hơn tôi vài inch."
    },
    {
        word: "incident",
        meaning: "sự cố, vụ việc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɪnsɪdənt/",
        example: "His bad behaviour was just an isolated incident.",
        exampleTranslation: "Hành vi tồi tệ của anh ta chỉ là một sự cố riêng lẻ."
    },
    {
        word: "income",
        meaning: "thu nhập",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɪnkəm/",
        example: "Average household income fell slightly.",
        exampleTranslation: "Thu nhập hộ gia đình trung bình giảm nhẹ."
    },
    {
        word: "incorporate",
        meaning: "kết hợp, tích hợp, lồng ghép",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪnˈkɔːrpəreɪt/",
        example: "The new car design incorporates all the latest safety features.",
        exampleTranslation: "Thiết kế xe hơi mới tích hợp tất cả các tính năng an toàn mới nhất."
    },
    {
        word: "incorrect",
        meaning: "sai, không đúng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌɪnkəˈrekt/",
        example: "incorrect information/spelling",
        exampleTranslation: "thông tin/chính tả sai"
    },
    {
        word: "increasingly",
        meaning: "ngày càng, càng ngày càng",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ɪnˈkriːsɪŋli/",
        example: "Tourism is playing an increasingly important role in the region's economy",
        exampleTranslation: "Du lịch đang đóng một vai trò ngày càng quan trọng trong nền kinh tế của khu vực."
    },
    {
        word: "independence",
        meaning: "sự độc lập",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌɪndɪˈpendəns/",
        example: "Cuba gained independence from Spain in 1898.",
        exampleTranslation: "Cuba giành độc lập từ Tây Ban Nha vào năm 1898."
    },
    {
        word: "index",
        meaning: "chỉ mục, danh mục",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɪndeks/",
        example: "Look it up in the index.",
        exampleTranslation: "Tìm nó trong danh mục."
    },
    {
        word: "indication",
        meaning: "dấu hiệu, sự chỉ dẫn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌɪndɪˈkeɪʃn/",
        example: "indication of something They gave no indication of how the work should be done.",
        exampleTranslation: "dấu hiệu của điều gì đó Họ không đưa ra bất kỳ dấu hiệu nào về cách thức công việc nên được thực hiện."
    },
    {
        word: "industrial",
        meaning: "công nghiệp",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɪnˈdʌstriəl/",
        example: "an industrial dispute",
        exampleTranslation: "một cuộc tranh chấp công nghiệp"
    },
    {
        word: "inevitable",
        meaning: "không thể tránh khỏi",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɪnˈevɪtəbl/",
        example: "It was an inevitable consequence of the decision.",
        exampleTranslation: "Đó là một hệ quả không thể tránh khỏi của quyết định đó."
    },
    {
        word: "inevitably",
        meaning: "một cách không thể tránh khỏi",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ɪnˈevɪtəbli/",
        example: "Inevitably, the press exaggerated the story.",
        exampleTranslation: "Một cách không thể tránh khỏi, báo chí đã phóng đại câu chuyện."
    },
    {
        word: "infection",
        meaning: "sự lây nhiễm, nhiễm trùng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪnˈfekʃn/",
        example: "to cause/prevent infection",
        exampleTranslation: "gây ra/ngăn ngừa nhiễm trùng"
    },
    {
        word: "infer",
        meaning: "suy ra, ngụ ý",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪnˈfɜːr/",
        example: "(from something) Much of the meaning must be inferred from the context.",
        exampleTranslation: "(từ điều gì đó) Phần lớn ý nghĩa phải được suy ra từ ngữ cảnh."
    },
    {
        word: "inflation",
        meaning: "lạm phát",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪnˈfleɪʃn/",
        example: "the fight against rising inflation",
        exampleTranslation: "cuộc chiến chống lạm phát gia tăng"
    },
    {
        word: "info",
        meaning: "thông tin (viết tắt)",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɪnfəʊ/",
        example: "For more info, click here.",
        exampleTranslation: "Để biết thêm thông tin, hãy nhấp vào đây."
    },
    {
        word: "inform",
        meaning: "thông báo, cho biết",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪnˈfɔːrm/",
        example: "The government took this decision without consulting Parliament or informing the public.",
        exampleTranslation: "Chính phủ đã đưa ra quyết định này mà không tham khảo ý kiến ​​Quốc hội hay thông báo cho công chúng."
    },
    {
        word: "infrastructure",
        meaning: "cơ sở hạ tầng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɪnfrəstrʌktʃər/",
        example: "This is an example of infrastructure.",
        exampleTranslation: "Đây là một ví dụ về cơ sở hạ tầng."
    },
    {
        word: "inhabitant",
        meaning: "cư dân",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪnˈhæbɪtənt/",
        example: "the oldest inhabitant of the village",
        exampleTranslation: "cư dân lớn tuổi nhất của làng"
    },
    {
        word: "inherit",
        meaning: "thừa kế",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪnˈherɪt/",
        example: "She inherited a fortune from her father.",
        exampleTranslation: "Cô ấy đã thừa kế một khối tài sản lớn từ cha mình."
    },
    {
        word: "initial",
        meaning: "ban đầu, lúc đầu",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɪˈnɪʃl/",
        example: "There is an initial payment of £60 followed by ten instalments of £25.",
        exampleTranslation: "Có một khoản thanh toán ban đầu là 60 bảng Anh, theo sau là mười đợt trả góp 25 bảng Anh."
    },
    {
        word: "initially",
        meaning: "ban đầu, lúc đầu",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ɪˈnɪʃəli/",
        example: "Initially, the system worked well.",
        exampleTranslation: "Ban đầu, hệ thống hoạt động tốt."
    },
    {
        word: "initiative",
        meaning: "sáng kiến, sự khởi xướng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪˈnɪʃətɪv/",
        example: "a United Nations peace initiative",
        exampleTranslation: "một sáng kiến ​​hòa bình của Liên Hợp Quốc"
    },
    {
        word: "ink",
        meaning: "mực",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪŋk/",
        example: "in ink written in ink",
        exampleTranslation: "bằng mực viết bằng mực"
    },
    {
        word: "inner",
        meaning: "bên trong, nội bộ",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈɪnər/",
        example: "an inner courtyard",
        exampleTranslation: "một sân trong"
    },
    {
        word: "innovation",
        meaning: "sự đổi mới, cải tiến",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌɪnəˈveɪʃn/",
        example: "an age of technological innovation",
        exampleTranslation: "một kỷ nguyên của sự đổi mới công nghệ"
    },
    {
        word: "innovative",
        meaning: "sáng tạo, đổi mới",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈɪnəveɪtɪv/",
        example: "There will be a prize for the most innovative design.",
        exampleTranslation: "Sẽ có một giải thưởng cho thiết kế sáng tạo nhất."
    },
    {
        word: "input",
        meaning: "đầu vào, đóng góp",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɪnpʊt/",
        example: "I'd appreciate your input on this.",
        exampleTranslation: "Tôi sẽ đánh giá cao sự đóng góp của bạn về vấn đề này."
    },
    {
        word: "inquiry",
        meaning: "cuộc điều tra, sự thẩm vấn, sự tìm hiểu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪnˈkwaɪəri/",
        example: "a murder inquiry",
        exampleTranslation: "một cuộc điều tra giết người"
    },
    {
        word: "insert",
        meaning: "chèn vào, gắn vào, đưa vào",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪnˈsɜːrt/",
        example: "(in/into something) Insert coins into the slot and press for a ticket.",
        exampleTranslation: "(vào/vào trong cái gì) Nhét tiền xu vào khe và nhấn để lấy vé."
    },
    {
        word: "insight",
        meaning: "sự thấu hiểu, cái nhìn sâu sắc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɪnsaɪt/",
        example: "There are many valuable insights in her book.",
        exampleTranslation: "Có rất nhiều cái nhìn sâu sắc có giá trị trong cuốn sách của cô ấy."
    },
    {
        word: "insist",
        meaning: "khẳng định, nhấn mạnh, đòi",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪnˈsɪst/",
        example: "I didn't really want to go but he insisted.",
        exampleTranslation: "Tôi không thực sự muốn đi nhưng anh ấy đã khăng khăng."
    },
    {
        word: "inspector",
        meaning: "thanh tra, kiểm tra viên",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪnˈspektər/",
        example: "Inspector Maggie Forbes",
        exampleTranslation: "Thanh tra Maggie Forbes"
    },
    {
        word: "inspire",
        meaning: "truyền cảm hứng, khơi dậy, thúc đẩy",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪnˈspaɪər/",
        example: "The actors' enthusiasm inspired the kids.",
        exampleTranslation: "Sự nhiệt tình của các diễn viên đã truyền cảm hứng cho bọn trẻ."
    },
    {
        word: "install",
        meaning: "lắp đặt, cài đặt",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪnˈstɔːl/",
        example: "They're planning to install a new drainage system.",
        exampleTranslation: "Họ đang lên kế hoạch lắp đặt một hệ thống thoát nước mới."
    },
    {
        word: "installation",
        meaning: "sự lắp đặt, sự cài đặt",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌɪnstəˈleɪʃn/",
        example: "installation costs",
        exampleTranslation: "chi phí lắp đặt"
    },
    {
        word: "instance",
        meaning: "trường hợp, ví dụ, tình huống",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɪnstəns/",
        example: "instance of somebody/something The report highlights a number of instances of injustice.",
        exampleTranslation: "trường hợp ai đó/cái gì Đó Báo cáo nêu bật một số trường hợp bất công."
    },
    {
        word: "instant",
        meaning: "tức thì, ngay lập tức",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈɪnstənt/",
        example: "This account gives you instant access to your money.",
        exampleTranslation: "Tài khoản này cho phép bạn truy cập tiền của mình ngay lập tức."
    },
    {
        word: "instantly",
        meaning: "ngay lập tức, tức thì",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈɪnstəntli/",
        example: "Her voice is instantly recognizable.",
        exampleTranslation: "Giọng nói của cô ấy có thể nhận ra ngay lập tức."
    },
    {
        word: "institute",
        meaning: "viện, học viện, tổ chức",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɪnstɪtuːt/",
        example: "The report was compiled by Germany's five leading economic research institutes.",
        exampleTranslation: "Báo cáo được biên soạn bởi năm viện nghiên cứu kinh tế hàng đầu của Đức."
    },
    {
        word: "institution",
        meaning: "tổ chức, thiết chế",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌɪnstɪˈtuːʃn/",
        example: "The deal is backed by one of the country's largest financial institutions.",
        exampleTranslation: "Thỏa thuận được bảo lãnh bởi một trong những tổ chức tài chính lớn nhất đất nước."
    },
    {
        word: "insurance",
        meaning: "bảo hiểm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪnˈʃʊrəns/",
        example: "health/medical insurance",
        exampleTranslation: "bảo hiểm y tế"
    },
    {
        word: "integrate",
        meaning: "hợp nhất, tích hợp, hội nhập",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈɪntɪɡreɪt/",
        example: "integrate into/with something These programs will integrate with your existing software.",
        exampleTranslation: "hợp nhất với/vào cái gì Đó Các chương trình này sẽ tích hợp với phần mềm hiện có của bạn."
    },
    {
        word: "intellectual",
        meaning: "trí tuệ, thuộc về trí tuệ",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌɪntəˈlektʃuəl/",
        example: "Gifted children typically show great intellectual curiosity and a wide range of interests.",
        exampleTranslation: "Trẻ em có năng khiếu thường thể hiện sự tò mò trí tuệ tuyệt vời và nhiều sở thích."
    },
    {
        word: "intended",
        meaning: "dự định, có ý định",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɪnˈtendɪd/",
        example: "the intended purpose",
        exampleTranslation: "mục đích dự định"
    },
    {
        word: "intense",
        meaning: "gay gắt, mãnh liệt, sâu sắc",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɪnˈtens/",
        example: "We were all suffering in the intense heat.",
        exampleTranslation: "Chúng tôi đều khổ sở trong cái nóng gay gắt."
    },
    {
        word: "interact",
        meaning: "tương tác",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˌɪntərˈækt/",
        example: "Teachers have a limited amount of time to interact with each child.",
        exampleTranslation: "Giáo viên có một lượng thời gian hạn chế để tương tác với mỗi học sinh."
    },
    {
        word: "interaction",
        meaning: "sự tương tác",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌɪntərˈækʃn/",
        example: "the interaction between performers and their audience",
        exampleTranslation: "sự tương tác giữa người biểu diễn và khán giả của họ"
    },
    {
        word: "internal",
        meaning: "nội bộ, bên trong",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɪnˈtɜːrnl/",
        example: "the internal structure of a building",
        exampleTranslation: "cấu trúc nội bộ của một tòa nhà"
    },
    {
        word: "interpret",
        meaning: "diễn giải, giải thích",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪnˈtɜːrprət/",
        example: "The students were asked to interpret the poem.",
        exampleTranslation: "Các sinh viên được yêu cầu diễn giải bài thơ."
    },
    {
        word: "interpretation",
        meaning: "sự diễn giải, sự giải thích",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪnˌtɜːrprəˈteɪʃn/",
        example: "Her evidence suggests a different interpretation of the events.",
        exampleTranslation: "Bằng chứng của cô ấy gợi ý một cách giải thích khác về các sự kiện."
    },
    {
        word: "interrupt",
        meaning: "ngắt lời, làm gián đoạn",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˌɪntəˈrʌpt/",
        example: "Sorry to interrupt, but there's someone to see you.",
        exampleTranslation: "Xin lỗi vì đã ngắt lời, nhưng có người muốn gặp bạn."
    },
    {
        word: "interval",
        meaning: "khoảng thời gian, quãng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɪntərvl/",
        example: "The interval between major earthquakes might be 200 years.",
        exampleTranslation: "Khoảng thời gian giữa các trận động đất lớn có thể là 200 năm."
    },
    {
        word: "invade",
        meaning: "xâm lược, xâm nhập",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɪnˈveɪd/",
        example: "Troops invaded on August 9th that year.",
        exampleTranslation: "Quân đội đã xâm lược vào ngày 9 tháng 8 năm đó."
    },
    {
        word: "invasion",
        meaning: "sự xâm lược",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪnˈveɪʒn/",
        example: "the German invasion of Poland in 1939",
        exampleTranslation: "cuộc xâm lược Ba Lan của Đức vào năm 1939"
    },
    {
        word: "investigation",
        meaning: "sự điều tra",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪnˌvestɪˈɡeɪʃn/",
        example: "a criminal/murder/police investigation",
        exampleTranslation: "một cuộc điều tra hình sự/giết người/cảnh sát"
    },
    {
        word: "investment",
        meaning: "sự đầu tư",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪnˈvestmənt/",
        example: "foreign/private investment",
        exampleTranslation: "đầu tư nước ngoài/tư nhân"
    },
    {
        word: "investor",
        meaning: "nhà đầu tư",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪnˈvestər/",
        example: "small investors (= private people)",
        exampleTranslation: "các nhà đầu tư nhỏ (= những người dân thường)"
    },
    {
        word: "isolate",
        meaning: "cô lập, cách ly",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈaɪsəleɪt/",
        example: "isolate somebody/yourself/something Patients with the disease should be isolated.",
        exampleTranslation: "Bệnh nhân mắc bệnh nên được cách ly."
    },
    {
        word: "isolated",
        meaning: "cô lập, hẻo lánh",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈaɪsəleɪtɪd/",
        example: "isolated rural areas",
        exampleTranslation: "các vùng nông thôn hẻo lánh"
    },
    {
        word: "issue",
        meaning: "ban hành, phát hành",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈɪʃuː/",
        example: "They issued a joint statement denying the charges.",
        exampleTranslation: "Họ đã đưa ra một tuyên bố chung bác bỏ các cáo buộc."
    },
    {
        word: "jail",
        meaning: "nhà tù, nhà giam",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dʒeɪl/",
        example: "She spent a year in jail.",
        exampleTranslation: "Cô ấy đã ở tù một năm."
    },
    {
        word: "jet",
        meaning: "máy bay phản lực",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dʒet/",
        example: "a jet aircraft/fighter/airliner",
        exampleTranslation: "máy bay phản lực/tiêm kích/hàng không"
    },
    {
        word: "joint",
        meaning: "chung, kết hợp",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/dʒɔɪnt/",
        example: "a joint account (= a bank account in the name of more than one person, for example shared by a couple)",
        exampleTranslation: "một tài khoản chung (= tài khoản ngân hàng đứng tên nhiều hơn một người, ví dụ: được chia sẻ bởi một cặp vợ chồng)"
    },
    {
        word: "journalism",
        meaning: "báo chí, ngành báo chí",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈdʒɜːrnəlɪzəm/",
        example: "I'd like a career in journalism.",
        exampleTranslation: "Tôi muốn có một sự nghiệp trong ngành báo chí."
    },
    {
        word: "joy",
        meaning: "niềm vui, sự vui mừng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/dʒɔɪ/",
        example: "Her books have brought joy to millions.",
        exampleTranslation: "Những cuốn sách của cô ấy đã mang lại niềm vui cho hàng triệu người."
    },
    {
        word: "judgement",
        meaning: "phán đoán, nhận định",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈdʒʌdʒmənt/",
        example: "good/poor/sound judgement",
        exampleTranslation: "phán đoán tốt/kém/sáng suốt"
    },
    {
        word: "junior",
        meaning: "trẻ hơn, cấp dưới",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈdʒuːniər/",
        example: "a junior partner/minister/officer",
        exampleTranslation: "một đối tác/bộ trưởng/sĩ quan cấp dưới"
    },
    {
        word: "jury",
        meaning: "bồi thẩm đoàn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈdʒʊri/",
        example: "members of the jury",
        exampleTranslation: "các thành viên của bồi thẩm đoàn"
    },
    {
        word: "justice",
        meaning: "công lý, sự công bằng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈdʒʌstɪs/",
        example: "She spent her life fighting for social justice and equality for women.",
        exampleTranslation: "Cô ấy đã dành cả đời để đấu tranh cho công lý xã hội và sự bình đẳng cho phụ nữ."
    },
    {
        word: "justify",
        meaning: "biện minh, bào chữa",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈdʒʌstɪfaɪ/",
        example: "justify doing something How can they justify paying such huge salaries?",
        exampleTranslation: "họ có thể biện minh cho việc trả lương cao như vậy sao?"
    },
    {
        word: "kit",
        meaning: "bộ dụng cụ, bộ đồ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/kɪt/",
        example: "a drum kit",
        exampleTranslation: "một bộ trống"
    },
    {
        word: "labour",
        meaning: "lao động, công sức",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈleɪbər/",
        example: "manual labour (= work using your hands)",
        exampleTranslation: "lao động chân tay (= công việc sử dụng tay của bạn)"
    },
    {
        word: "ladder",
        meaning: "cái thang",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈlædər/",
        example: "to climb up/fall off a ladder",
        exampleTranslation: "leo lên/ngã khỏi thang"
    },
    {
        word: "landing",
        meaning: "sự hạ cánh",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈlændɪŋ/",
        example: "a perfect/smooth/safe landing",
        exampleTranslation: "một lần hạ cánh hoàn hảo/êm ái/an toàn"
    },
    {
        word: "landscape",
        meaning: "phong cảnh, cảnh quan",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈlændskeɪp/",
        example: "the woods and fields that are typical features of the English landscape",
        exampleTranslation: "những khu rừng và cánh đồng là đặc điểm điển hình của cảnh quan nước Anh"
    },
    {
        word: "lane",
        meaning: "làn đường, con đường nhỏ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/leɪn/",
        example: "winding country lanes",
        exampleTranslation: "những con đường quê quanh co"
    },
    {
        word: "largely",
        meaning: "phần lớn, nhìn chung",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈlɑːrdʒli/",
        example: "The manager was largely responsible for the team’s victory.",
        exampleTranslation: "Người quản lý chịu phần lớn trách nhiệm cho chiến thắng của đội."
    },
    {
        word: "lately",
        meaning: "gần đây, vừa mới đây",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈleɪtli/",
        example: "Have you seen her lately?",
        exampleTranslation: "Bạn có gặp cô ấy gần đây không?"
    },
    {
        word: "latest",
        meaning: "mới nhất",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈleɪtɪst/",
        example: "the latest (in something) This is the latest in robot technology.",
        exampleTranslation: "điều mới nhất (trong lĩnh vực nào đó) Đây là công nghệ robot mới nhất."
    },
    {
        word: "launch",
        meaning: "buổi ra mắt, sự phóng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/lɔːntʃ/",
        example: "a missile/rocket launch",
        exampleTranslation: "vụ phóng tên lửa/tên lửa"
    },
    {
        word: "leadership",
        meaning: "sự lãnh đạo",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈliːdərʃɪp/",
        example: "a leadership role/position",
        exampleTranslation: "một vai trò/vị trí lãnh đạo"
    },
    {
        word: "leaflet",
        meaning: "tờ rơi, tờ bướm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈliːflət/",
        example: "We picked up a few leaflets on local places of interest.",
        exampleTranslation: "Chúng tôi đã nhặt một vài tờ rơi về các địa điểm du lịch địa phương."
    },
    {
        word: "league",
        meaning: "giải đấu, liên đoàn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/liːɡ/",
        example: "Castleford have led the league for most of the season.",
        exampleTranslation: "Castleford đã dẫn đầu giải đấu trong hầu hết mùa giải."
    },
    {
        word: "lean",
        meaning: "dựa vào, nghiêng về",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/liːn/",
        example: "I leaned back in my chair.",
        exampleTranslation: "Tôi ngả lưng vào ghế."
    },
    {
        word: "leave",
        meaning: "sự nghỉ phép, sự cho phép",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/liːv/",
        example: "to take a month’s paid/unpaid leave",
        exampleTranslation: "xin nghỉ phép một tháng có lương/không lương"
    },
    {
        word: "legend",
        meaning: "truyền thuyết, huyền thoại",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈledʒənd/",
        example: "The film is based on the legend of Robin Hood.",
        exampleTranslation: "Bộ phim dựa trên truyền thuyết về Robin Hood."
    },
    {
        word: "lens",
        meaning: "ống kính",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/lenz/",
        example: "a pair of glasses with tinted lenses",
        exampleTranslation: "một cặp kính có tròng kính màu"
    },
    {
        word: "level",
        meaning: "san bằng, làm phẳng",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈlevl/",
        example: "out The first coat of plaster levels out the surface of the wall.",
        exampleTranslation: "Lớp thạch cao đầu tiên làm phẳng bề mặt tường."
    },
    {
        word: "licence",
        meaning: "giấy phép, bằng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈlaɪsns/",
        example: "Applicants must hold a valid driving licence.",
        exampleTranslation: "Ứng viên phải có bằng lái xe hợp lệ."
    },
    {
        word: "lifetime",
        meaning: "suốt đời, cả đời",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈlaɪftaɪm/",
        example: "a lifetime of experience",
        exampleTranslation: "kinh nghiệm cả đời"
    },
    {
        word: "lighting",
        meaning: "hệ thống chiếu sáng, ánh sáng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈlaɪtɪŋ/",
        example: "electric/natural lighting",
        exampleTranslation: "ánh sáng điện/tự nhiên"
    },
    {
        word: "likewise",
        meaning: "tương tự, cũng vậy",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈlaɪkwaɪz/",
        example: "He voted for the change and he expected his colleagues to do likewise.",
        exampleTranslation: "Anh ấy đã bỏ phiếu cho sự thay đổi và anh ấy cũng mong đợi các đồng nghiệp của mình làm như vậy."
    },
    {
        word: "limitation",
        meaning: "sự hạn chế, giới hạn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌlɪmɪˈteɪʃn/",
        example: "They would resist any limitation of their powers.",
        exampleTranslation: "Họ sẽ chống lại bất kỳ sự hạn chế nào đối với quyền hạn của họ."
    },
    {
        word: "limited",
        meaning: "hạn chế, có giới hạn",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈlɪmɪtɪd/",
        example: "We are doing our best with the limited resources available.",
        exampleTranslation: "Chúng tôi đang cố gắng hết sức với nguồn lực hạn chế sẵn có."
    },
    {
        word: "line",
        meaning: "lót, xếp hàng",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/laɪn/",
        example: "Butter and line a 25 cm cake tin.",
        exampleTranslation: "Phết bơ và lót khuôn bánh 25 cm."
    },
    {
        word: "literally",
        meaning: "theo đúng nghĩa đen",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈlɪtərəli/",
        example: "The word ‘planet’ literally means ‘wandering body’.",
        exampleTranslation: "Từ ‘hành tinh’ theo nghĩa đen có nghĩa là ‘vật thể lang thang’."
    },
    {
        word: "literary",
        meaning: "văn học",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈlɪtəreri/",
        example: "literary criticism/theory",
        exampleTranslation: "phê bình/lý luận văn học"
    },
    {
        word: "litre",
        meaning: "lít",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈliːtər/",
        example: "3 litres of water",
        exampleTranslation: "3 lít nước"
    },
    {
        word: "litter",
        meaning: "rác, đồ rác",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈlɪtər/",
        example: "There will be fines for people who drop litter.",
        exampleTranslation: "Sẽ có tiền phạt đối với những người xả rác."
    },
    {
        word: "lively",
        meaning: "sống động, sôi nổi",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈlaɪvli/",
        example: "an intelligent and lively young woman",
        exampleTranslation: "một phụ nữ trẻ thông minh và sôi nổi"
    },
    {
        word: "load",
        meaning: "gánh nặng, tải trọng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ləʊd/",
        example: "The trucks waited at the warehouse to pick up their loads.",
        exampleTranslation: "Các xe tải đợi ở nhà kho để nhận hàng của họ."
    },
    {
        word: "loan",
        meaning: "khoản vay, tiền vay",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ləʊn/",
        example: "to take out/repay a loan (= to borrow money/pay it back)",
        exampleTranslation: "vay/trả nợ (tức là vay tiền/trả lại)"
    },
    {
        word: "logical",
        meaning: "hợp lý, logic",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈlɑːdʒɪkl/",
        example: "It was a logical conclusion from the child's point of view.",
        exampleTranslation: "Đó là một kết luận hợp lý theo quan điểm của đứa trẻ."
    },
    {
        word: "logo",
        meaning: "biểu trưng, logo",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈləʊɡəʊ/",
        example: "All over the world there are red and white paper cups bearing the company logo.",
        exampleTranslation: "Trên khắp thế giới có những cốc giấy đỏ trắng mang logo công ty."
    },
    {
        word: "long-term",
        meaning: "dài hạn",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌlɔːŋ ˈtɜːrm/",
        example: "Our long-term goal is to lower operating costs by 10 per cent.",
        exampleTranslation: "Mục tiêu dài hạn của chúng tôi là giảm chi phí hoạt động 10 phần trăm."
    },
    {
        word: "loose",
        meaning: "lỏng, rời",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/luːs/",
        example: "a loose button/tooth",
        exampleTranslation: "một cái cúc/răng lung lay"
    },
    {
        word: "lord",
        meaning: "ngài, chúa",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/lɔːrd/",
        example: "She's married to a lord.",
        exampleTranslation: "Cô ấy đã kết hôn với một ngài."
    },
    {
        word: "lottery",
        meaning: "xổ số",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈlɑːtəri/",
        example: "the national/state lottery",
        exampleTranslation: "xổ số quốc gia/tiểu bang"
    },
    {
        word: "low",
        meaning: "điểm thấp nhất, mức thấp nhất",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ləʊ/",
        example: "The temperature reached a record low in London last night.",
        exampleTranslation: "Nhiệt độ đã đạt mức thấp kỷ lục ở London đêm qua."
    },
    {
        word: "lower",
        meaning: "hạ xuống, làm giảm",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈləʊər/",
        example: "He lowered his voice to a whisper.",
        exampleTranslation: "Anh ấy hạ giọng xuống thành tiếng thì thầm."
    },
    {
        word: "loyal",
        meaning: "trung thành, trung kiên",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈlɔɪəl/",
        example: "a loyal friend/supporter",
        exampleTranslation: "một người bạn/người ủng hộ trung thành"
    },
    {
        word: "lung",
        meaning: "phổi",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/lʌŋ/",
        example: "Her father died of lung cancer.",
        exampleTranslation: "Cha cô ấy mất vì ung thư phổi."
    },
    {
        word: "lyric",
        meaning: "lời bài hát",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈlɪrɪk/",
        example: "music and lyrics by Rodgers and Hart",
        exampleTranslation: "nhạc và lời của Rodgers và Hart"
    },
    {
        word: "magnificent",
        meaning: "lộng lẫy, tráng lệ",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/mæɡˈnɪfɪsnt/",
        example: "The Taj Mahal is a magnificent building.",
        exampleTranslation: "Đền Taj Mahal là một tòa nhà tráng lệ."
    },
    {
        word: "maintain",
        meaning: "duy trì, giữ gìn",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/meɪnˈteɪn/",
        example: "to maintain law and order/standards/a balance/control",
        exampleTranslation: "duy trì luật pháp và trật tự/tiêu chuẩn/sự cân bằng/kiểm soát"
    },
    {
        word: "majority",
        meaning: "đa số, phần lớn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/məˈdʒɔːrəti/",
        example: "majority (of somebody/something) The majority of people interviewed prefer TV to radio.",
        exampleTranslation: "đa số (của ai đó/cái gì đó) Đa số người được phỏng vấn thích TV hơn radio."
    },
    {
        word: "make",
        meaning: "nhãn hiệu, loại",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/meɪk/",
        example: "make of something What make of car does he drive?",
        exampleTranslation: "loại xe gì Anh ấy lái loại xe gì?"
    },
    {
        word: "make-up",
        meaning: "trang điểm, mỹ phẩm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈmeɪk ʌp/",
        example: "eye make-up",
        exampleTranslation: "trang điểm mắt"
    },
    {
        word: "making",
        meaning: "việc tạo ra, việc làm ra, việc thực hiện",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈmeɪkɪŋ/",
        example: "strategic decision-making",
        exampleTranslation: "việc ra quyết định chiến lược"
    },
    {
        word: "manufacture",
        meaning: "sản xuất, chế tạo",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˌmænjuˈfæktʃər/",
        example: "manufactured goods",
        exampleTranslation: "hàng hóa sản xuất/chế tạo"
    },
    {
        word: "manufacturing",
        meaning: "ngành sản xuất, sự sản xuất",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌmænjuˈfæktʃərɪŋ/",
        example: "Many jobs in manufacturing were lost during the recession.",
        exampleTranslation: "Nhiều việc làm trong ngành sản xuất đã bị mất trong thời kỳ suy thoái."
    },
    {
        word: "map",
        meaning: "lập bản đồ, vẽ bản đồ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/mæp/",
        example: "an unexplored region that has not yet been mapped",
        exampleTranslation: "một vùng chưa được khám phá mà chưa được lập bản đồ"
    },
    {
        word: "marathon",
        meaning: "cuộc đua marathon, chạy marathon",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈmærəθɑːn/",
        example: "the London marathon",
        exampleTranslation: "cuộc đua marathon Luân Đôn"
    },
    {
        word: "margin",
        meaning: "lề, mép",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈmɑːrdʒɪn/",
        example: "the left-hand/right-hand margin",
        exampleTranslation: "lề trái/phải"
    },
    {
        word: "marker",
        meaning: "mốc, dấu hiệu, bút dạ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈmɑːrkər/",
        example: "a boundary marker",
        exampleTranslation: "một cột mốc biên giới"
    },
    {
        word: "martial",
        meaning: "(thuộc) quân sự, (thuộc) chiến tranh",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈmɑːrʃl/",
        example: "This is an example of martial.",
        exampleTranslation: "Đây là một ví dụ về quân sự."
    },
    {
        word: "mass",
        meaning: "đại chúng, đông đảo",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/mæs/",
        example: "The world faces the tremendous problem of mass unemployment.",
        exampleTranslation: "Thế giới đối mặt với vấn đề to lớn về thất nghiệp hàng loạt."
    },
    {
        word: "massive",
        meaning: "to lớn, đồ sộ, khổng lồ",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈmæsɪv/",
        example: "a massive rock",
        exampleTranslation: "một tảng đá khổng lồ"
    },
    {
        word: "master",
        meaning: "chủ, ông chủ, bậc thầy",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈmæstər/",
        example: "They lived in fear of their master.",
        exampleTranslation: "Họ sống trong nỗi sợ hãi của ông chủ mình."
    },
    {
        word: "matching",
        meaning: "hợp, phù hợp, đồng bộ",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈmætʃɪŋ/",
        example: "The two sisters wore matching outfits.",
        exampleTranslation: "Hai chị em mặc những bộ trang phục đồng bộ."
    },
    {
        word: "mate",
        meaning: "bạn, người bạn, bạn đời",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/meɪt/",
        example: "They've been best mates since school.",
        exampleTranslation: "Họ là bạn thân nhất từ thời đi học."
    },
    {
        word: "material",
        meaning: "vật chất, thuộc về vật chất",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/məˈtɪriəl/",
        example: "material possessions/wealth",
        exampleTranslation: "tài sản/của cải vật chất"
    },
    {
        word: "maximum",
        meaning: "tối đa",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈmæksɪməm/",
        example: "the maximum amount/number of something",
        exampleTranslation: "số lượng/con số tối đa của cái gì đó"
    },
    {
        word: "mayor",
        meaning: "thị trưởng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈmeɪər/",
        example: "the Mayor of New York",
        exampleTranslation: "Thị trưởng New York"
    },
    {
        word: "means",
        meaning: "phương tiện, cách thức",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/miːnz/",
        example: "means of something Email is a highly effective means of communication.",
        exampleTranslation: "Thư điện tử là một phương tiện giao tiếp cực kỳ hiệu quả."
    },
    {
        word: "measurement",
        meaning: "phép đo, sự đo lường",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈmeʒərmənt/",
        example: "the metric system of measurement",
        exampleTranslation: "hệ thống đo lường mét"
    },
    {
        word: "mechanic",
        meaning: "thợ máy, thợ cơ khí",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/məˈkænɪk/",
        example: "a car/motor mechanic",
        exampleTranslation: "thợ sửa ô tô/xe máy"
    },
    {
        word: "mechanical",
        meaning: "(thuộc) cơ khí, máy móc",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/məˈkænɪkl/",
        example: "a mechanical device/toy/clock",
        exampleTranslation: "một thiết bị/đồ chơi/đồng hồ cơ khí"
    },
    {
        word: "mechanism",
        meaning: "cơ chế, bộ máy, cơ cấu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈmekənɪzəm/",
        example: "a delicate watch mechanism",
        exampleTranslation: "một cơ chế đồng hồ tinh xảo"
    },
    {
        word: "medal",
        meaning: "huy chương",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈmedl/",
        example: "to win a gold medal in the Olympics",
        exampleTranslation: "giành huy chương vàng tại Thế vận hội"
    },
    {
        word: "medication",
        meaning: "thuốc, dược phẩm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌmedɪˈkeɪʃn/",
        example: "Are you currently taking any medication?",
        exampleTranslation: "Bạn hiện có đang dùng thuốc không?"
    },
    {
        word: "medium",
        meaning: "phương tiện, môi trường, trung bình",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈmiːdiəm/",
        example: "the medium of radio/television",
        exampleTranslation: "phương tiện radio/truyền hình"
    },
    {
        word: "melt",
        meaning: "tan chảy, làm tan chảy",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/melt/",
        example: "The snow showed no sign of melting.",
        exampleTranslation: "Tuyết không có dấu hiệu tan chảy."
    },
    {
        word: "membership",
        meaning: "tư cách thành viên, hội viên",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈmembərʃɪp/",
        example: "membership of something (British English) Who is eligible to apply for membership of the association?",
        exampleTranslation: "Ai đủ điều kiện nộp đơn xin gia nhập hội?"
    },
    {
        word: "memorable",
        meaning: "đáng nhớ, khó quên",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈmemərəbl/",
        example: "The holiday provided many memorable moments.",
        exampleTranslation: "Kỳ nghỉ đã mang lại nhiều khoảnh khắc đáng nhớ."
    },
    {
        word: "metaphor",
        meaning: "phép ẩn dụ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈmetəfɔːr/",
        example: "a game of football used as a metaphor for the competitive struggle of life",
        exampleTranslation: "một trận bóng đá được dùng làm phép ẩn dụ cho cuộc đấu tranh cạnh tranh của cuộc đời"
    },
    {
        word: "military",
        meaning: "(thuộc) quân sự",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈmɪləteri/",
        example: "We may have to take military action.",
        exampleTranslation: "Chúng ta có thể phải thực hiện hành động quân sự."
    },
    {
        word: "miner",
        meaning: "thợ mỏ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈmaɪnər/",
        example: "Rescuers are trying to save miners trapped underground after a gas explosion.",
        exampleTranslation: "Các nhân viên cứu hộ đang cố gắng giải cứu những thợ mỏ bị mắc kẹt dưới lòng đất sau vụ nổ khí."
    },
    {
        word: "mineral",
        meaning: "khoáng sản, khoáng vật",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈmɪnərəl/",
        example: "a country rich in mineral resources",
        exampleTranslation: "một quốc gia giàu tài nguyên khoáng sản"
    },
    {
        word: "minimum",
        meaning: "tối thiểu, nhỏ nhất",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈmɪnɪməm/",
        example: "a minimum charge/price",
        exampleTranslation: "một khoản phí/giá tối thiểu"
    },
    {
        word: "minister",
        meaning: "bộ trưởng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈmɪnɪstər/",
        example: "the Minister of Education",
        exampleTranslation: "Bộ trưởng Bộ Giáo dục"
    },
    {
        word: "minor",
        meaning: "nhỏ, thứ yếu, không quan trọng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈmaɪnər/",
        example: "The new plan involves widening a minor road through the valley.",
        exampleTranslation: "Kế hoạch mới bao gồm việc mở rộng một con đường nhỏ xuyên thung lũng."
    },
    {
        word: "minority",
        meaning: "thiểu số",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/maɪˈnɔːrəti/",
        example: "Only a small minority of students is/are interested in politics these days.",
        exampleTranslation: "Chỉ một bộ phận nhỏ sinh viên quan tâm đến chính trị trong những ngày này."
    },
    {
        word: "miserable",
        meaning: "khốn khổ, đáng thương, tồi tệ",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈmɪzrəbl/",
        example: "We were cold, wet and thoroughly miserable.",
        exampleTranslation: "Chúng tôi bị lạnh, ướt và vô cùng khốn khổ."
    },
    {
        word: "mission",
        meaning: "nhiệm vụ, sứ mệnh",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ɪmˈpɑːsəbl/",
        example: "almost/virtually/nearly impossible",
        exampleTranslation: "gần như không thể"
    },
    {
        word: "mistake",
        meaning: "nhầm lẫn, nhầm",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/mɪˈsteɪk/",
        example: "mistake somebody/something I admit that I mistook his intentions.",
        exampleTranslation: "nhầm lẫn ai đó/cái gì đó Tôi thừa nhận rằng tôi đã nhầm ý định của anh ấy."
    },
    {
        word: "mixed",
        meaning: "hỗn hợp, pha trộn",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/mɪkst/",
        example: "a mixed diet",
        exampleTranslation: "một chế độ ăn uống hỗn hợp"
    },
    {
        word: "mode",
        meaning: "kiểu, phương thức, cách thức",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/məʊd/",
        example: "a mode of communication",
        exampleTranslation: "một phương thức giao tiếp"
    },
    {
        word: "model",
        meaning: "làm mẫu, mô hình hóa",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈmɑːdl/",
        example: "The program can model a typical home page for you.",
        exampleTranslation: "Chương trình có thể mô hình hóa một trang chủ điển hình cho bạn."
    },
    {
        word: "modest",
        meaning: "khiêm tốn, vừa phải",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈmɑːdɪst/",
        example: "modest improvements/reforms",
        exampleTranslation: "những cải thiện/cải cách khiêm tốn"
    },
    {
        word: "modify",
        meaning: "sửa đổi, thay đổi",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈmɑːdɪfaɪ/",
        example: "Patients are taught how to modify their diet.",
        exampleTranslation: "Bệnh nhân được hướng dẫn cách điều chỉnh chế độ ăn uống của họ."
    },
    {
        word: "monitor",
        meaning: "màn hình, thiết bị giám sát",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈmɑːnɪtər/",
        example: "The details of today's flights are displayed on the monitor.",
        exampleTranslation: "Chi tiết các chuyến bay hôm nay được hiển thị trên màn hình."
    },
    {
        word: "monster",
        meaning: "quái vật, con quái vật",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈmɑːnstər/",
        example: "a monster with three heads",
        exampleTranslation: "một con quái vật có ba đầu"
    },
    {
        word: "monthly",
        meaning: "hàng tháng, mỗi tháng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈmʌnθli/",
        example: "a monthly meeting/visit/magazine",
        exampleTranslation: "một cuộc họp/chuyến thăm/tạp chí hàng tháng"
    },
    {
        word: "monument",
        meaning: "đài tưởng niệm, công trình kỷ niệm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈmɑːnjumənt/",
        example: "A monument to him was erected in St Paul's Cathedral.",
        exampleTranslation: "Một đài tưởng niệm ông đã được dựng lên trong Nhà thờ St Paul."
    },
    {
        word: "moral",
        meaning: "đạo đức, có đạo đức",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈmɔːrəl/",
        example: "a moral issue/dilemma",
        exampleTranslation: "một vấn đề/tình huống tiến thoái lưỡng nan về đạo đức"
    },
    {
        word: "moreover",
        meaning: "hơn nữa, vả lại",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/mɔːrˈəʊvər/",
        example: "A talented artist, he was, moreover, a writer of some note.",
        exampleTranslation: "Là một nghệ sĩ tài năng, hơn nữa, ông còn là một nhà văn đáng chú ý."
    },
    {
        word: "mortgage",
        meaning: "thế chấp",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈmɔːrɡɪdʒ/",
        example: "to apply for/take out/pay off a mortgage",
        exampleTranslation: "xin vay/thế chấp/trả hết khoản thế chấp"
    },
    {
        word: "mosque",
        meaning: "nhà thờ Hồi giáo",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/mɑːsk/",
        example: "I used to pray at the local mosque with my father and grandfather.",
        exampleTranslation: "Tôi đã từng cầu nguyện tại nhà thờ Hồi giáo địa phương cùng với cha và ông nội của mình."
    },
    {
        word: "motion",
        meaning: "chuyển động, sự di chuyển",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈməʊʃn/",
        example: "What was Newton's first law of motion?",
        exampleTranslation: "Định luật chuyển động đầu tiên của Newton là gì?"
    },
    {
        word: "motivate",
        meaning: "thúc đẩy, tạo động lực",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈməʊtɪveɪt/",
        example: "(to do something) What motivates people to carry out such attacks?",
        exampleTranslation: "(để làm gì đó) Điều gì thôi thúc mọi người thực hiện những cuộc tấn công như vậy?"
    },
    {
        word: "motivation",
        meaning: "sự thúc đẩy, động lực",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌməʊtɪˈveɪʃn/",
        example: "motivation (behind something) What is the motivation behind this sudden change?",
        exampleTranslation: "động lực (đằng sau điều gì đó) Động lực nào đằng sau sự thay đổi đột ngột này?"
    },
    {
        word: "motor",
        meaning: "động cơ, máy móc",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈməʊtər/",
        example: "The street is closed to motor vehicles.",
        exampleTranslation: "Đường phố cấm các phương tiện cơ giới."
    },
    {
        word: "mount",
        meaning: "lắp, đặt, tăng lên, tổ chức",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/maʊnt/",
        example: "Residents mounted a campaign to fight the plans.",
        exampleTranslation: "Cư dân đã phát động một chiến dịch để chống lại các kế hoạch."
    },
    {
        word: "moving",
        meaning: "xúc động, cảm động",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈmuːvɪŋ/",
        example: "a deeply moving experience",
        exampleTranslation: "một trải nghiệm sâu sắc cảm động"
    },
    {
        word: "multiple",
        meaning: "nhiều, đa dạng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈmʌltɪpl/",
        example: "The shape appears multiple times within each painting.",
        exampleTranslation: "Hình dạng xuất hiện nhiều lần trong mỗi bức tranh."
    },
    {
        word: "multiply",
        meaning: "nhân, nhân lên",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈmʌltɪplaɪ/",
        example: "The children are already learning to multiply and divide.",
        exampleTranslation: "Trẻ em đã bắt đầu học cách nhân và chia."
    },
    {
        word: "mysterious",
        meaning: "bí ẩn, huyền bí",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/mɪˈstɪriəs/",
        example: "He died in mysterious circumstances.",
        exampleTranslation: "Ông ấy qua đời trong hoàn cảnh bí ẩn."
    },
    {
        word: "myth",
        meaning: "thần thoại, truyền thuyết",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/mɪθ/",
        example: "ancient Greek myths",
        exampleTranslation: "thần thoại Hy Lạp cổ đại"
    },
    {
        word: "naked",
        meaning: "trần truồng, khỏa thân",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈneɪkɪd/",
        example: "She was clutching the sheet around her naked body.",
        exampleTranslation: "Cô ấy đang ôm chặt tấm ga trải giường quanh cơ thể trần truồng của mình."
    },
    {
        word: "narrow",
        meaning: "thu hẹp, co lại",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈnærəʊ/",
        example: "This is where the river narrows.",
        exampleTranslation: "Đây là nơi con sông thu hẹp lại."
    },
    {
        word: "nasty",
        meaning: "khó chịu, bẩn thỉu, tồi tệ",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈnæsti/",
        example: "He had a nasty accident.",
        exampleTranslation: "Anh ấy đã gặp một tai nạn tồi tệ."
    },
    {
        word: "national",
        meaning: "quốc tịch",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈnæʃnəl/",
        example: "Polish nationals living in Germany",
        exampleTranslation: "Những người mang quốc tịch Ba Lan sống ở Đức"
    },
    {
        word: "navigation",
        meaning: "hàng hải, hoa tiêu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌnævɪˈɡeɪʃn/",
        example: "a maker of in-car navigation systems",
        exampleTranslation: "một nhà sản xuất hệ thống định vị trên ô tô"
    },
    {
        word: "nearby",
        meaning: "gần, lân cận",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌnɪrˈbaɪ/",
        example: "Her mother lived in a nearby town.",
        exampleTranslation: "Mẹ cô ấy sống ở một thị trấn gần đó."
    },
    {
        word: "neat",
        meaning: "gọn gàng, ngăn nắp, sạch sẽ",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/niːt/",
        example: "She kept her desk extremely neat.",
        exampleTranslation: "Cô ấy giữ bàn làm việc của mình cực kỳ ngăn nắp."
    },
    {
        word: "necessity",
        meaning: "sự cần thiết, điều cần thiết",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/nəˈsesəti/",
        example: "necessity for something We recognize the necessity for a written agreement.",
        exampleTranslation: "sự cần thiết đối với cái gì đó Chúng tôi nhận thấy sự cần thiết của một thỏa thuận bằng văn bản."
    },
    {
        word: "negative",
        meaning: "sự phủ định, tiêu cực",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈneɡətɪv/",
        example: "in the negative (formal) She answered in the negative (= said ‘no’).",
        exampleTranslation: "phủ định (trang trọng) Cô ấy trả lời phủ định (= nói ‘không’)."
    },
    {
        word: "negotiate",
        meaning: "đàm phán",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/nɪˈɡəʊʃieɪt/",
        example: "negotiate (with somebody) (for something) The government will not negotiate with terrorists.",
        exampleTranslation: "Chính phủ sẽ không đàm phán với những kẻ khủng bố."
    },
    {
        word: "negotiation",
        meaning: "sự đàm phán",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/nɪˌɡəʊʃiˈeɪʃn/",
        example: "peace/trade/contract negotiations",
        exampleTranslation: "đàm phán hòa bình/thương mại/hợp đồng"
    },
    {
        word: "nerve",
        meaning: "thần kinh",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/nɜːrv/",
        example: "the optic nerve",
        exampleTranslation: "dây thần kinh thị giác"
    },
    {
        word: "neutral",
        meaning: "trung lập",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈnuːtrəl/",
        example: "Journalists are supposed to be politically neutral.",
        exampleTranslation: "Nhà báo được cho là trung lập về mặt chính trị."
    },
    {
        word: "nevertheless",
        meaning: "tuy nhiên, dù vậy",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˌnevərðəˈles/",
        example: "There is little chance that we will succeed in changing the law. Nevertheless, it is important that we try.",
        exampleTranslation: "Khả năng chúng ta thành công trong việc thay đổi luật là rất nhỏ. Tuy nhiên, điều quan trọng là chúng ta phải cố gắng."
    },
    {
        word: "newly",
        meaning: "mới, vừa mới",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈnuːli/",
        example: "a newly qualified doctor",
        exampleTranslation: "một bác sĩ mới được cấp chứng chỉ hành nghề"
    },
    {
        word: "nightmare",
        meaning: "ác mộng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈnaɪtmer/",
        example: "He still has nightmares about the accident.",
        exampleTranslation: "Anh ấy vẫn còn gặp ác mộng về tai nạn đó."
    },
    {
        word: "norm",
        meaning: "chuẩn mực, quy tắc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/nɔːrm/",
        example: "The new design is a departure from the norm.",
        exampleTranslation: "Thiết kế mới là một sự thay đổi so với quy chuẩn."
    },
    {
        word: "notebook",
        meaning: "sổ tay, tập ghi chép",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈnəʊtbʊk/",
        example: "The police officer wrote the details down in his notebook.",
        exampleTranslation: "Cảnh sát đã ghi lại chi tiết vào sổ tay của mình."
    },
    {
        word: "notion",
        meaning: "ý niệm, khái niệm, quan niệm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈnəʊʃn/",
        example: "notion of something a political system based on the notions of equality and liberty",
        exampleTranslation: "về cái gì đó một hệ thống chính trị dựa trên các quan niệm về bình đẳng và tự do"
    },
    {
        word: "novelist",
        meaning: "tiểu thuyết gia",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈnɑːvəlɪst/",
        example: "a romantic/historical novelist",
        exampleTranslation: "một tiểu thuyết gia lãng mạn/lịch sử"
    },
    {
        word: "nowadays",
        meaning: "ngày nay",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈnaʊədeɪz/",
        example: "Nowadays most kids prefer going online to reading books.",
        exampleTranslation: "Ngày nay hầu hết trẻ em thích lên mạng hơn là đọc sách."
    },
    {
        word: "numerous",
        meaning: "nhiều, vô số",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈnuːmərəs/",
        example: "He has been late on numerous occasions.",
        exampleTranslation: "Anh ấy đã trễ nhiều lần."
    },
    {
        word: "nursing",
        meaning: "y tá, điều dưỡng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈnɜːrsɪŋ/",
        example: "a career in nursing",
        exampleTranslation: "một sự nghiệp điều dưỡng"
    },
    {
        word: "nutrition",
        meaning: "dinh dưỡng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/nuˈtrɪʃn/",
        example: "advice on diet and nutrition",
        exampleTranslation: "lời khuyên về chế độ ăn uống và dinh dưỡng"
    },
    {
        word: "obesity",
        meaning: "bệnh béo phì",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/əʊˈbiːsəti/",
        example: "Obesity can increase the risk of heart disease.",
        exampleTranslation: "Bệnh béo phì có thể làm tăng nguy cơ mắc bệnh tim."
    },
    {
        word: "obey",
        meaning: "vâng lời, tuân theo",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əˈbeɪ/",
        example: "a command/an order/rules/the law",
        exampleTranslation: "một mệnh lệnh/một chỉ thị/những quy tắc/pháp luật"
    },
    {
        word: "object",
        meaning: "phản đối, phản bác",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əbˈdʒekt/",
        example: "If nobody objects, we'll postpone the meeting till next week.",
        exampleTranslation: "Nếu không ai phản đối, chúng ta sẽ hoãn cuộc họp đến tuần sau."
    },
    {
        word: "objective",
        meaning: "khách quan, không thiên vị",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/əbˈdʒektɪv/",
        example: "an objective assessment of the situation",
        exampleTranslation: "một đánh giá khách quan về tình hình"
    },
    {
        word: "obligation",
        meaning: "nghĩa vụ, bổn phận, trách nhiệm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌɑːblɪˈɡeɪʃn/",
        example: "obligation to do something You are under no obligation to buy anything.",
        exampleTranslation: "Bạn không có nghĩa vụ phải mua bất cứ thứ gì."
    },
    {
        word: "observation",
        meaning: "sự quan sát, sự theo dõi",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌɑːbzərˈveɪʃn/",
        example: "Most information was collected by direct observation of the animals' behaviour.",
        exampleTranslation: "Hầu hết thông tin được thu thập bằng cách quan sát trực tiếp hành vi của động vật."
    },
    {
        word: "observe",
        meaning: "quan sát, nhận thấy, theo dõi",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əbˈzɜːrv/",
        example: "observe somebody/something Have you observed any changes lately?",
        exampleTranslation: "Bạn có nhận thấy bất kỳ thay đổi nào gần đây không?"
    },
    {
        word: "observer",
        meaning: "người quan sát, người theo dõi",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/əbˈzɜːrvər/",
        example: "According to observers, the plane exploded shortly after take-off.",
        exampleTranslation: "Theo các nhà quan sát, chiếc máy bay đã phát nổ ngay sau khi cất cánh."
    },
    {
        word: "obstacle",
        meaning: "chướng ngại vật, trở ngại, khó khăn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɑːbstəkl/",
        example: "So far, we have managed to overcome all the obstacles that have been placed in our path.",
        exampleTranslation: "Cho đến nay, chúng ta đã quản lý để vượt qua tất cả những trở ngại đã đặt ra trên con đường của mình."
    },
    {
        word: "obtain",
        meaning: "đạt được, giành được, có được",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əbˈteɪn/",
        example: "to obtain information/data/results",
        exampleTranslation: "để có được thông tin/dữ liệu/kết quả"
    },
    {
        word: "occasionally",
        meaning: "thỉnh thoảng, đôi khi",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/əˈkeɪʒnəli/",
        example: "We occasionally meet for a drink after work.",
        exampleTranslation: "Chúng tôi thỉnh thoảng gặp nhau để uống nước sau giờ làm."
    },
    {
        word: "occupation",
        meaning: "nghề nghiệp, công việc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌɑːkjuˈpeɪʃn/",
        example: "Please state your name, age and occupation below.",
        exampleTranslation: "Vui lòng ghi rõ tên, tuổi và nghề nghiệp của bạn dưới đây."
    },
    {
        word: "occupy",
        meaning: "chiếm, cư ngụ, sử dụng",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈɑːkjupaɪ/",
        example: "The bed seemed to occupy most of the room.",
        exampleTranslation: "Chiếc giường dường như chiếm phần lớn căn phòng."
    },
    {
        word: "offence",
        meaning: "tội, hành vi phạm tội",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/əˈfens/",
        example: "a criminal/serious/minor/sexual offence",
        exampleTranslation: "một hành vi phạm tội hình sự/nghiêm trọng/nhẹ/tình dục"
    },
    {
        word: "offend",
        meaning: "xúc phạm, làm mất lòng, làm phiền lòng",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əˈfend/",
        example: "They'll be offended if you don't go to their wedding.",
        exampleTranslation: "Họ sẽ khó chịu nếu bạn không đến đám cưới của họ."
    },
    {
        word: "offender",
        meaning: "người phạm tội",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/əˈfendər/",
        example: "a persistent/serious/violent, etc. offender",
        exampleTranslation: "một kẻ phạm tội dai dẳng/nghiêm trọng/bạo lực, v.v."
    },
    {
        word: "offensive",
        meaning: "xúc phạm, gây khó chịu, công kích",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/əˈfensɪv/",
        example: "offensive remarks",
        exampleTranslation: "những lời lẽ xúc phạm"
    },
    {
        word: "official",
        meaning: "quan chức",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/əˈfɪʃl/",
        example: "She is the government official in charge of the project.",
        exampleTranslation: "Bà là quan chức chính phủ phụ trách dự án."
    },
    {
        word: "ongoing",
        meaning: "đang diễn ra, đang tiếp diễn",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈɑːnɡəʊɪŋ/",
        example: "an ongoing debate/discussion/process",
        exampleTranslation: "một cuộc tranh luận/thảo luận/quá trình đang diễn ra"
    },
    {
        word: "opening",
        meaning: "lỗ hở, chỗ hở, dịp",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈəʊpənɪŋ/",
        example: "We could see the stars through an opening in the roof.",
        exampleTranslation: "Chúng tôi có thể nhìn thấy các vì sao qua một lỗ hở trên mái nhà."
    },
    {
        word: "openly",
        meaning: "công khai, thẳng thắn",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈəʊpənli/",
        example: "Can you talk openly about sex with your parents?",
        exampleTranslation: "Bạn có thể nói chuyện thẳng thắn về tình dục với bố mẹ mình không?"
    },
    {
        word: "opera",
        meaning: "nhạc kịch",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɑːprə/",
        example: "Puccini’s operas",
        exampleTranslation: "các vở opera của Puccini"
    },
    {
        word: "operate",
        meaning: "vận hành, hoạt động, điều khiển",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈɑːpəreɪt/",
        example: "Most domestic freezers operate at below −18°C.",
        exampleTranslation: "Hầu hết các tủ đông gia dụng hoạt động ở nhiệt độ dưới -18°C."
    },
    {
        word: "operator",
        meaning: "người vận hành, người điều khiển",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɑːpəreɪtər/",
        example: "a computer/machine operator",
        exampleTranslation: "người vận hành máy tính/máy móc"
    },
    {
        word: "opponent",
        meaning: "đối thủ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/əˈpəʊnənt/",
        example: "a political opponent",
        exampleTranslation: "một đối thủ chính trị"
    },
    {
        word: "oppose",
        meaning: "phản đối, chống lại",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əˈpəʊz/",
        example: "oppose somebody/something This party would bitterly oppose the re-introduction of the death penalty.",
        exampleTranslation: "phản đối ai đó/điều gì đó Đảng này sẽ kịch liệt phản đối việc tái áp dụng hình phạt tử hình."
    },
    {
        word: "opposed",
        meaning: "phản đối",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/əˈpəʊzd/",
        example: "opposed to something He was strongly opposed to modernism in art.",
        exampleTranslation: "phản đối điều gì đó Ông ấy kịch liệt phản đối chủ nghĩa hiện đại trong nghệ thuật."
    },
    {
        word: "opposition",
        meaning: "sự phản đối, phe đối lập",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌɑːpəˈzɪʃn/",
        example: "Opposition came primarily from students.",
        exampleTranslation: "Sự phản đối chủ yếu đến từ sinh viên."
    },
    {
        word: "optimistic",
        meaning: "lạc quan",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌɑːptɪˈmɪstɪk/",
        example: "We are now taking a more optimistic view.",
        exampleTranslation: "Bây giờ chúng ta đang có một cái nhìn lạc quan hơn."
    },
    {
        word: "orchestra",
        meaning: "dàn nhạc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɔːrkɪstrə/",
        example: "She plays the flute in the school orchestra.",
        exampleTranslation: "Cô ấy chơi sáo trong dàn nhạc của trường."
    },
    {
        word: "organ",
        meaning: "cơ quan, bộ phận",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɔːrɡən/",
        example: "the internal organs",
        exampleTranslation: "các cơ quan nội tạng"
    },
    {
        word: "organic",
        meaning: "hữu cơ, tự nhiên",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ɔːrˈɡænɪk/",
        example: "organic cheese/vegetables/wine, etc.",
        exampleTranslation: "phô mai/rau củ/rượu vang hữu cơ, v.v."
    },
    {
        word: "origin",
        meaning: "nguồn gốc, khởi nguồn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɔːrɪdʒɪn/",
        example: "origin of something the origins of life on earth",
        exampleTranslation: "nguồn gốc của cái gì đó nguồn gốc của sự sống trên trái đất"
    },
    {
        word: "otherwise",
        meaning: "nếu không, mặt khác",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈʌðərwaɪz/",
        example: "My parents lent me the money. Otherwise, I couldn't have afforded the trip.",
        exampleTranslation: "Bố mẹ tôi đã cho tôi vay tiền. Nếu không, tôi đã không đủ tiền cho chuyến đi."
    },
    {
        word: "outcome",
        meaning: "kết quả, hệ quả",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈaʊtkʌm/",
        example: "The likely outcome is a compromise.",
        exampleTranslation: "Kết quả có khả năng là một sự thỏa hiệp."
    },
    {
        word: "outer",
        meaning: "ngoài, bên ngoài",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈaʊtər/",
        example: "the outer layers of the skin",
        exampleTranslation: "các lớp ngoài cùng của da"
    },
    {
        word: "outfit",
        meaning: "bộ trang phục, bộ quần áo",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈaʊtfɪt/",
        example: "She was wearing an expensive new outfit.",
        exampleTranslation: "Cô ấy mặc một bộ đồ mới đắt tiền."
    },
    {
        word: "outline",
        meaning: "dàn ý, đề cương",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈaʊtlaɪn/",
        example: "outline of something This is a brief outline of the events.",
        exampleTranslation: "Dàn ý về một cái gì đó. Đây là một dàn ý ngắn gọn về các sự kiện."
    },
    {
        word: "output",
        meaning: "sản lượng, đầu ra",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈaʊtpʊt/",
        example: "Manufacturing output has increased by 8 per cent.",
        exampleTranslation: "Sản lượng sản xuất đã tăng 8%."
    },
    {
        word: "outstanding",
        meaning: "nổi bật, xuất sắc",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/aʊtˈstændɪŋ/",
        example: "an outstanding player/achievement/success",
        exampleTranslation: "một cầu thủ/thành tích/thành công xuất sắc"
    },
    {
        word: "overall",
        meaning: "tổng thể, chung cuộc",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌəʊvərˈɔːl/",
        example: "There will be winners in each of three age groups, and one overall winner.",
        exampleTranslation: "Sẽ có những người chiến thắng ở mỗi trong ba nhóm tuổi, và một người chiến thắng chung cuộc."
    },
    {
        word: "overcome",
        meaning: "vượt qua",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˌəʊvərˈkʌm/",
        example: "She overcame injury to win the Olympic gold medal.",
        exampleTranslation: "Cô ấy đã vượt qua chấn thương để giành huy chương vàng Olympic."
    },
    {
        word: "overnight",
        meaning: "qua đêm, đột ngột",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˌəʊvərˈnaɪt/",
        example: "We stayed overnight in London after the theatre.",
        exampleTranslation: "Chúng tôi đã ở lại qua đêm ở London sau buổi kịch."
    },
    {
        word: "overseas",
        meaning: "nước ngoài",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌəʊvərˈsiːz/",
        example: "The firm is expanding into overseas markets.",
        exampleTranslation: "Công ty đang mở rộng sang các thị trường nước ngoài."
    },
    {
        word: "owe",
        meaning: "nợ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/əʊ/",
        example: "She still owes her father £3 000.",
        exampleTranslation: "Cô ấy vẫn còn nợ cha mình 3.000 bảng Anh."
    },
    {
        word: "ownership",
        meaning: "quyền sở hữu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈəʊnərʃɪp/",
        example: "a growth in home ownership",
        exampleTranslation: "sự gia tăng quyền sở hữu nhà"
    },
    {
        word: "oxygen",
        meaning: "oxy",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈɑːksɪdʒən/",
        example: "The patient didn't seem to be getting enough oxygen.",
        exampleTranslation: "Bệnh nhân dường như không nhận đủ oxy."
    },
    {
        word: "pace",
        meaning: "nhịp độ, tốc độ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/peɪs/",
        example: "at a… pace to set off at a steady/gentle/leisurely pace",
        exampleTranslation: "với tốc độ... đi với tốc độ đều đặn/nhẹ nhàng/thong thả"
    },
    {
        word: "package",
        meaning: "đóng gói",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈpækɪdʒ/",
        example: "packaged food/goods",
        exampleTranslation: "thực phẩm/hàng hóa đóng gói"
    },
    {
        word: "packet",
        meaning: "gói nhỏ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈpækɪt/",
        example: "a packet of biscuits/cigarettes/crisps",
        exampleTranslation: "một gói bánh quy/thuốc lá/khoai tây chiên"
    },
    {
        word: "palm",
        meaning: "lòng bàn tay",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/pɑːm/",
        example: "a date palm",
        exampleTranslation: "một cây chà là"
    },
    {
        word: "panel",
        meaning: "tấm, bảng điều khiển",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈpænl/",
        example: "One of the glass panels in the front door was cracked.",
        exampleTranslation: "Một trong những tấm kính ở cửa trước bị nứt."
    },
    {
        word: "panic",
        meaning: "sự hoảng loạn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈpænɪk/",
        example: "a moment of panic",
        exampleTranslation: "một khoảnh khắc hoảng loạn"
    },
    {
        word: "parade",
        meaning: "cuộc diễu hành",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/pəˈreɪd/",
        example: "the Lord Mayor’s parade",
        exampleTranslation: "cuộc diễu hành của Thị trưởng"
    },
    {
        word: "parallel",
        meaning: "song song",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈpærəlel/",
        example: "parallel lines",
        exampleTranslation: "các đường thẳng song song"
    },
    {
        word: "parliament",
        meaning: "nghị viện",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈpɑːrləmənt/",
        example: "The German parliament is called the ‘Bundestag’.",
        exampleTranslation: "Nghị viện Đức có tên là 'Bundestag'."
    },
    {
        word: "part-time",
        meaning: "bán thời gian",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌpɑːrt ˈtaɪm/",
        example: "She's looking for a part-time job.",
        exampleTranslation: "Cô ấy đang tìm một công việc bán thời gian."
    },
    {
        word: "participant",
        meaning: "người tham gia",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/pɑːrˈtɪsɪpənt/",
        example: "The average age of study participants was 48 years.",
        exampleTranslation: "Tuổi trung bình của những người tham gia nghiên cứu là 48 tuổi."
    },
    {
        word: "participation",
        meaning: "sự tham gia",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/pɑːrˌtɪsɪˈpeɪʃn/",
        example: "a show with lots of audience participation",
        exampleTranslation: "một chương trình có nhiều sự tham gia của khán giả"
    },
    {
        word: "partly",
        meaning: "một phần, phần nào",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈpɑːrtli/",
        example: "Some people are unwilling to attend the classes partly because of the cost involved.",
        exampleTranslation: "Một số người không muốn tham gia các lớp học một phần vì chi phí liên quan."
    },
    {
        word: "partnership",
        meaning: "sự hợp tác, liên doanh",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈpɑːrtnərʃɪp/",
        example: "to be in/to go into partnership",
        exampleTranslation: "hợp tác/thành lập liên doanh"
    },
    {
        word: "passage",
        meaning: "lối đi, hành lang",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈpæsɪdʒ/",
        example: "A dark narrow passage led to the main hall.",
        exampleTranslation: "Một lối đi tối và hẹp dẫn đến sảnh chính."
    },
    {
        word: "passionate",
        meaning: "đam mê, nồng nhiệt",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈpæʃənət/",
        example: "to have a passionate nature",
        exampleTranslation: "có một bản chất đam mê"
    },
    {
        word: "password",
        meaning: "mật khẩu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈpæswɜːrd/",
        example: "Enter a username and password to get into the system.",
        exampleTranslation: "Nhập tên người dùng và mật khẩu để vào hệ thống."
    },
    {
        word: "patience",
        meaning: "sự kiên nhẫn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈpeɪʃns/",
        example: "She has little patience with (= will not accept or consider) such views.",
        exampleTranslation: "Cô ấy rất ít kiên nhẫn với những quan điểm như vậy."
    },
    {
        word: "patient",
        meaning: "kiên nhẫn",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈpeɪʃnt/",
        example: "You'll just have to be patient and wait till I'm finished.",
        exampleTranslation: "Bạn chỉ cần kiên nhẫn chờ đợi cho đến khi tôi làm xong."
    },
    {
        word: "pause",
        meaning: "sự tạm dừng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/pɔːz/",
        example: "There was a long pause before she answered.",
        exampleTranslation: "Có một khoảng lặng dài trước khi cô ấy trả lời."
    },
    {
        word: "peer",
        meaning: "người đồng trang lứa, người ngang hàng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/pɪr/",
        example: "She enjoys the respect of her peers.",
        exampleTranslation: "Cô ấy được những người đồng trang lứa kính trọng."
    },
    {
        word: "penalty",
        meaning: "hình phạt, khoản phạt",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈpenəlti/",
        example: "to impose a penalty",
        exampleTranslation: "áp đặt một khoản phạt"
    },
    {
        word: "pension",
        meaning: "lương hưu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈpenʃn/",
        example: "to receive a retirement pension",
        exampleTranslation: "nhận lương hưu hưu trí"
    },
    {
        word: "perceive",
        meaning: "nhận thấy, nhận thức",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/pərˈsiːv/",
        example: "perceive somebody/something/yourself (as something) This discovery was perceived as a major breakthrough.",
        exampleTranslation: "Khám phá này được nhìn nhận là một bước đột phá lớn."
    },
    {
        word: "perception",
        meaning: "sự nhận thức, nhận thức",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/pərˈsepʃn/",
        example: "a campaign to change public perception of the police",
        exampleTranslation: "một chiến dịch thay đổi nhận thức của công chúng về cảnh sát"
    },
    {
        word: "permanent",
        meaning: "vĩnh viễn, thường trực",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈpɜːrmənənt/",
        example: "She was unable to find a permanent job.",
        exampleTranslation: "Cô ấy không thể tìm được một công việc ổn định."
    },
    {
        word: "permanently",
        meaning: "vĩnh viễn, luôn luôn",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈpɜːrmənəntli/",
        example: "The stroke left his right side permanently damaged.",
        exampleTranslation: "Cú đột quỵ đã làm tổn thương vĩnh viễn bên phải của anh ấy."
    },
    {
        word: "permit",
        meaning: "giấy phép",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈpɜːrmɪt/",
        example: "a parking/building permit",
        exampleTranslation: "giấy phép đỗ xe/xây dựng"
    },
    {
        word: "perspective",
        meaning: "góc nhìn, quan điểm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/pərˈspektɪv/",
        example: "a global perspective",
        exampleTranslation: "một góc nhìn toàn cầu"
    },
    {
        word: "phase",
        meaning: "giai đoạn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/feɪz/",
        example: "during the initial/final phase",
        exampleTranslation: "trong giai đoạn đầu/cuối"
    },
    {
        word: "phenomenon",
        meaning: "hiện tượng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/fəˈnɑːmɪnən/",
        example: "cultural/natural phenomena",
        exampleTranslation: "các hiện tượng văn hóa/tự nhiên"
    },
    {
        word: "philosophy",
        meaning: "triết học",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/fəˈlɑːsəfi/",
        example: "philosophy of something the philosophy of science",
        exampleTranslation: "triết học về khoa học"
    },
    {
        word: "pick",
        meaning: "cái pick",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/pɪk/",
        example: "Take your pick (= choose).",
        exampleTranslation: "Chọn lấy thứ bạn muốn."
    },
    {
        word: "picture",
        meaning: "hình dung, tưởng tượng",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈpɪktʃər/",
        example: "picture somebody/something I could picture the scene clearly.",
        exampleTranslation: "Tôi có thể hình dung rõ ràng cảnh tượng đó."
    },
    {
        word: "pile",
        meaning: "đống, chồng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/paɪl/",
        example: "pile of something a pile of clothes/paper",
        exampleTranslation: "một đống quần áo/giấy"
    },
    {
        word: "pill",
        meaning: "viên thuốc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/pɪl/",
        example: "a vitamin pill",
        exampleTranslation: "một viên vitamin"
    },
    {
        word: "pitch",
        meaning: "sân (bóng đá, v.v.)",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/pɪtʃ/",
        example: "a football pitch",
        exampleTranslation: "một sân bóng đá"
    },
    {
        word: "pity",
        meaning: "sự thương hại, điều đáng tiếc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈpɪti/",
        example: "a pity (that…) It's a pity that you can't stay longer.",
        exampleTranslation: "Thật đáng tiếc là bạn không thể ở lại lâu hơn."
    },
    {
        word: "placement",
        meaning: "sự sắp đặt, vị trí",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈpleɪsmənt/",
        example: "a job placement service",
        exampleTranslation: "một dịch vụ giới thiệu việc làm"
    },
    {
        word: "plain",
        meaning: "đơn giản, rõ ràng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/pleɪn/",
        example: "a plain but elegant dress",
        exampleTranslation: "một chiếc váy đơn giản nhưng thanh lịch"
    },
    {
        word: "plot",
        meaning: "âm mưu, lập kế hoạch",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/plɑːt/",
        example: "plot with somebody It is claimed he plotted with the country's enemies.",
        exampleTranslation: "Người ta tuyên bố anh ta đã âm mưu với kẻ thù của đất nước."
    },
    {
        word: "plus",
        meaning: "thêm vào, cộng thêm",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/plʌs/",
        example: "The work will cost £10 000 plus.",
        exampleTranslation: "Công việc sẽ tốn 10.000 bảng Anh cộng thêm."
    },
    {
        word: "pointed",
        meaning: "nhọn, sắc",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈpɔɪntɪd/",
        example: "a pointed chin",
        exampleTranslation: "một chiếc cằm nhọn"
    },
    {
        word: "popularity",
        meaning: "sự phổ biến",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌpɑːpjuˈlærəti/",
        example: "the increasing popularity of cycling",
        exampleTranslation: "sự phổ biến ngày càng tăng của xe đạp"
    },
    {
        word: "portion",
        meaning: "phần, bộ phận",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈpɔːrʃn/",
        example: "a substantial/significant portion of the population",
        exampleTranslation: "một phần đáng kể/quan trọng của dân số"
    },
    {
        word: "pose",
        meaning: "tạo ra, gây ra",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/pəʊz/",
        example: "to pose a threat/risk/challenge/danger",
        exampleTranslation: "gây ra mối đe dọa/rủi ro/thách thức/nguy hiểm"
    },
    {
        word: "position",
        meaning: "đặt ở vị trí, định vị",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/pəˈzɪʃn/",
        example: "position somebody/something/yourself + adv./prep. She quickly positioned herself behind the desk.",
        exampleTranslation: "Cô ấy nhanh chóng đặt mình sau bàn làm việc."
    },
    {
        word: "positive",
        meaning: "mặt tích cực, điểm cộng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈpɑːzətɪv/",
        example: "What are the positives and negatives of going this route?",
        exampleTranslation: "Đâu là những điểm tích cực và tiêu cực của việc đi theo con đường này?"
    },
    {
        word: "possess",
        meaning: "sở hữu, có",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/pəˈzes/",
        example: "He was charged with possessing a shotgun without a licence.",
        exampleTranslation: "Anh ta bị buộc tội sở hữu súng săn mà không có giấy phép."
    },
    {
        word: "potential",
        meaning: "tiềm năng, có khả năng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/pəˈtenʃl/",
        example: "potential customers/buyers/investors/clients",
        exampleTranslation: "khách hàng/người mua/nhà đầu tư/đối tác tiềm năng"
    },
    {
        word: "potentially",
        meaning: "có khả năng, tiềm ẩn",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/pəˈtenʃəli/",
        example: "a potentially dangerous situation",
        exampleTranslation: "một tình huống tiềm ẩn nguy hiểm"
    },
    {
        word: "power",
        meaning: "cung cấp năng lượng, vận hành",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈpaʊər/",
        example: "be powered (by something) The aircraft is powered by a jet engine.",
        exampleTranslation: "Máy bay được vận hành (bởi) động cơ phản lực."
    },
    {
        word: "praise",
        meaning: "sự ca ngợi, lời khen",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/preɪz/",
        example: "The team coach singled out two players for special praise.",
        exampleTranslation: "Huấn luyện viên đội đã nêu đích danh hai cầu thủ để khen ngợi đặc biệt."
    },
    {
        word: "precede",
        meaning: "đi trước, xảy ra trước",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/prɪˈsiːd/",
        example: "the years preceding the war",
        exampleTranslation: "những năm trước chiến tranh"
    },
    {
        word: "precious",
        meaning: "quý giá, quý báu",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈpreʃəs/",
        example: "a precious vase",
        exampleTranslation: "một chiếc bình quý giá"
    },
    {
        word: "precise",
        meaning: "chính xác, rõ ràng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/prɪˈsaɪs/",
        example: "precise details/instructions/measurements",
        exampleTranslation: "các chi tiết/hướng dẫn/đo lường chính xác"
    },
    {
        word: "precisely",
        meaning: "chính xác, đúng",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/prɪˈsaɪsli/",
        example: "They look precisely the same to me.",
        exampleTranslation: "Đối với tôi, chúng trông hoàn toàn giống nhau."
    },
    {
        word: "predictable",
        meaning: "có thể đoán trước, dễ đoán",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/prɪˈdɪktəbl/",
        example: "a predictable result",
        exampleTranslation: "một kết quả có thể đoán trước"
    },
    {
        word: "preference",
        meaning: "sự ưa thích, sự ưu tiên",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈprefrəns/",
        example: "It's a matter of personal preference.",
        exampleTranslation: "Đó là vấn đề sở thích cá nhân."
    },
    {
        word: "pregnant",
        meaning: "mang thai",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈpreɡnənt/",
        example: "My wife is pregnant.",
        exampleTranslation: "Vợ tôi đang mang thai."
    },
    {
        word: "preparation",
        meaning: "sự chuẩn bị",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌprepəˈreɪʃn/",
        example: "food preparation",
        exampleTranslation: "chuẩn bị thức ăn"
    },
    {
        word: "presence",
        meaning: "sự hiện diện, sự có mặt",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈprezns/",
        example: "He hardly seemed to notice my presence.",
        exampleTranslation: "Anh ta hầu như không nhận ra sự có mặt của tôi."
    },
    {
        word: "preserve",
        meaning: "bảo tồn, gìn giữ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/prɪˈzɜːrv/",
        example: "He was anxious to preserve his reputation.",
        exampleTranslation: "Anh ta lo lắng muốn giữ gìn danh tiếng của mình."
    },
    {
        word: "price",
        meaning: "định giá, có giá",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/praɪs/",
        example: "be priced + adv./prep. The main courses are all reasonably priced.",
        exampleTranslation: "Các món chính đều có mức giá hợp lý."
    },
    {
        word: "pride",
        meaning: "niềm tự hào, sự kiêu hãnh",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/praɪd/",
        example: "The sight of her son graduating filled her with pride.",
        exampleTranslation: "Cảnh tượng con trai bà tốt nghiệp khiến bà đầy tự hào."
    },
    {
        word: "primarily",
        meaning: "chủ yếu, chính yếu",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/praɪˈmerəli/",
        example: "a course designed primarily for specialists",
        exampleTranslation: "một khóa học được thiết kế chủ yếu cho các chuyên gia"
    },
    {
        word: "prime",
        meaning: "chính, quan trọng nhất",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/praɪm/",
        example: "My prime concern is to protect my property.",
        exampleTranslation: "Mối quan tâm chính của tôi là bảo vệ tài sản của mình."
    },
    {
        word: "principal",
        meaning: "chính, chủ yếu",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈprɪnsəpl/",
        example: "The principal reason for this omission is lack of time.",
        exampleTranslation: "Lý do chính cho sự thiếu sót này là thiếu thời gian."
    },
    {
        word: "principle",
        meaning: "nguyên tắc, nguyên lý",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈprɪnsəpl/",
        example: "He has high moral principles.",
        exampleTranslation: "Anh ấy có những nguyên tắc đạo đức cao."
    },
    {
        word: "print",
        meaning: "bản in, chữ in",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/prɪnt/",
        example: "The tiny print was hard to read without my glasses.",
        exampleTranslation: "Chữ in nhỏ khó đọc nếu không có kính của tôi."
    },
    {
        word: "prior",
        meaning: "trước, trước đó",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈpraɪər/",
        example: "Although not essential, some prior knowledge of statistics is desirable.",
        exampleTranslation: "Mặc dù không cần thiết, nhưng có một số kiến thức trước đó về thống kê là mong muốn."
    },
    {
        word: "priority",
        meaning: "sự ưu tiên, thứ tự ưu tiên",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/praɪˈɔːrəti/",
        example: "a high/low priority",
        exampleTranslation: "ưu tiên cao/thấp"
    },
    {
        word: "privacy",
        meaning: "sự riêng tư",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈpraɪvəsi/",
        example: "She was longing for some peace and privacy.",
        exampleTranslation: "Cô ấy khao khát có một chút yên bình và riêng tư."
    },
    {
        word: "probability",
        meaning: "khả năng, xác suất",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌprɑːbəˈbɪləti/",
        example: "The probability is that prices will rise rapidly.",
        exampleTranslation: "Khả năng giá cả sẽ tăng nhanh."
    },
    {
        word: "probable",
        meaning: "có khả năng, có lẽ",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈprɑːbəbl/",
        example: "the probable cause/explanation/outcome",
        exampleTranslation: "nguyên nhân/giải thích/kết quả có khả năng xảy ra"
    },
    {
        word: "procedure",
        meaning: "thủ tục, quy trình",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/prəˈsiːdʒər/",
        example: "emergency/safety/disciplinary procedures",
        exampleTranslation: "thủ tục khẩn cấp/an toàn/kỷ luật"
    },
    {
        word: "proceed",
        meaning: "tiếp tục, tiến hành",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/prəʊˈsiːd/",
        example: "We're not sure whether we still want to proceed with the sale.",
        exampleTranslation: "Chúng tôi không chắc liệu chúng tôi có còn muốn tiếp tục giao dịch với việc bán hàng hay không."
    },
    {
        word: "process",
        meaning: "xử lý, chế biến",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈprɑːses/",
        example: "(be) processed Most of the food we buy is processed in some way.",
        exampleTranslation: "Hầu hết thực phẩm chúng ta mua đều được chế biến theo một cách nào đó."
    },
    {
        word: "produce",
        meaning: "nông sản, sản phẩm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈprɑːduːs/",
        example: "The market is full of farm produce.",
        exampleTranslation: "Chợ đầy nông sản."
    },
    {
        word: "professional",
        meaning: "chuyên gia, người chuyên nghiệp",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/prəˈfeʃənl/",
        example: "You need a professional to sort out your finances.",
        exampleTranslation: "Bạn cần một chuyên gia để sắp xếp tài chính của mình."
    },
    {
        word: "programming",
        meaning: "lập trình",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈprəʊɡræmɪŋ/",
        example: "programming languages",
        exampleTranslation: "ngôn ngữ lập trình"
    },
    {
        word: "progress",
        meaning: "tiến bộ, phát triển",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/prəˈɡres/",
        example: "The course allows students to progress at their own speed.",
        exampleTranslation: "Khóa học cho phép sinh viên tiến bộ theo tốc độ của riêng mình."
    },
    {
        word: "progressive",
        meaning: "tiến bộ, cấp tiến",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/prəˈɡresɪv/",
        example: "progressive schools",
        exampleTranslation: "trường học tiến bộ"
    },
    {
        word: "prohibit",
        meaning: "cấm, ngăn cấm",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/prəʊˈhɪbɪt/",
        example: "a law prohibiting the sale of alcohol",
        exampleTranslation: "một luật cấm bán rượu"
    },
    {
        word: "project",
        meaning: "dự kiến, ước tính",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/prəˈdʒekt/",
        example: "be projected A growth rate of 4 per cent is projected for next year.",
        exampleTranslation: "Tốc độ tăng trưởng 4% được dự kiến cho năm tới."
    },
    {
        word: "promising",
        meaning: "hứa hẹn, triển vọng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈprɑːmɪsɪŋ/",
        example: "He was voted the most promising new actor for his part in the movie.",
        exampleTranslation: "Anh ấy đã được bình chọn là diễn viên mới triển vọng nhất nhờ vai diễn trong bộ phim."
    },
    {
        word: "promotion",
        meaning: "thăng chức, khuyến mãi",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/prəˈməʊʃn/",
        example: "The new job is a promotion for him.",
        exampleTranslation: "Công việc mới là một sự thăng tiến đối với anh ấy."
    },
    {
        word: "prompt",
        meaning: "nhắc nhở, thúc đẩy",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/prɑːmpt/",
        example: "The discovery of the bomb prompted an increase in security.",
        exampleTranslation: "Việc phát hiện ra quả bom đã thúc đẩy việc tăng cường an ninh."
    },
    {
        word: "proof",
        meaning: "bằng chứng, chứng cứ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/pruːf/",
        example: "conclusive/definitive/scientific proof",
        exampleTranslation: "bằng chứng thuyết phục/cuối cùng/khoa học"
    },
    {
        word: "proportion",
        meaning: "tỷ lệ, phần",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/prəˈpɔːrʃn/",
        example: "Water covers a large proportion of the earth's surface.",
        exampleTranslation: "Nước chiếm một phần lớn bề mặt trái đất."
    },
    {
        word: "proposal",
        meaning: "đề xuất, đề nghị",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/prəˈpəʊzl/",
        example: "to submit/present/put forward a proposal",
        exampleTranslation: "nộp/trình bày/đưa ra một đề xuất"
    },
    {
        word: "propose",
        meaning: "đề nghị, đề xuất",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/prəˈpəʊz/",
        example: "The government proposed changes to the voting system.",
        exampleTranslation: "Chính phủ đã đề xuất những thay đổi đối với hệ thống bầu cử."
    },
    {
        word: "prospect",
        meaning: "triển vọng, viễn cảnh",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈprɑːspekt/",
        example: "prospect of something There is no immediate prospect of peace.",
        exampleTranslation: "triển vọng về điều gì đó Không có triển vọng hòa bình ngay lập tức."
    },
    {
        word: "protection",
        meaning: "bảo vệ, sự bảo vệ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/prəˈtekʃn/",
        example: "protection against something Wear clothes that provide adequate protection against the wind and rain.",
        exampleTranslation: "bảo vệ khỏi cái gì Mặc quần áo đủ để bảo vệ bạn khỏi gió và mưa."
    },
    {
        word: "protein",
        meaning: "protein",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈprəʊtiːn/",
        example: "essential proteins and vitamins",
        exampleTranslation: "các protein và vitamin thiết yếu"
    },
    {
        word: "protester",
        meaning: "người biểu tình",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈprəʊtestər/",
        example: "Thousands of protesters marched through the city.",
        exampleTranslation: "Hàng ngàn người biểu tình đã tuần hành qua thành phố."
    },
    {
        word: "psychological",
        meaning: "tâm lý",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌsaɪkəˈlɑːdʒɪkl/",
        example: "the psychological development of children",
        exampleTranslation: "sự phát triển tâm lý của trẻ em"
    },
    {
        word: "psychologist",
        meaning: "nhà tâm lý học",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/saɪˈkɑːlədʒɪst/",
        example: "to see a psychologist",
        exampleTranslation: "gặp một nhà tâm lý học"
    },
    {
        word: "psychology",
        meaning: "tâm lý học",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/saɪˈkɑːlədʒi/",
        example: "clinical/educational/child/sport psychology",
        exampleTranslation: "tâm lý học lâm sàng/giáo dục/trẻ em/thể thao"
    },
    {
        word: "publication",
        meaning: "ấn phẩm, xuất bản phẩm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌpʌblɪˈkeɪʃn/",
        example: "specialist publications",
        exampleTranslation: "các ấn phẩm chuyên ngành"
    },
    {
        word: "publicity",
        meaning: "quảng cáo, sự công khai",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/pʌbˈlɪsəti/",
        example: "good/bad/adverse publicity",
        exampleTranslation: "quảng cáo tốt/xấu/bất lợi"
    },
    {
        word: "publishing",
        meaning: "xuất bản",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈpʌblɪʃɪŋ/",
        example: "a job in publishing",
        exampleTranslation: "một công việc trong lĩnh vực xuất bản"
    },
    {
        word: "punk",
        meaning: "người theo nhạc punk, phong cách punk",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/pʌŋk/",
        example: "a punk band",
        exampleTranslation: "một ban nhạc punk"
    },
    {
        word: "pupil",
        meaning: "học sinh",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈpjuːpl/",
        example: "school pupils",
        exampleTranslation: "học sinh trường học"
    },
    {
        word: "purchase",
        meaning: "sự mua",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈpɜːrtʃəs/",
        example: "to make a purchase (= buy something)",
        exampleTranslation: "thực hiện một giao dịch mua (= mua thứ gì đó)"
    },
    {
        word: "pure",
        meaning: "thuần khiết, tinh khiết",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/pjʊr/",
        example: "pure gold",
        exampleTranslation: "vàng nguyên chất"
    },
    {
        word: "purely",
        meaning: "hoàn toàn, chỉ",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈpjʊrli/",
        example: "I saw the letter purely by chance.",
        exampleTranslation: "Tôi nhìn thấy lá thư hoàn toàn là do tình cờ."
    },
    {
        word: "pursue",
        meaning: "theo đuổi, mưu cầu",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/pərˈsuː/",
        example: "to pursue a goal",
        exampleTranslation: "theo đuổi một mục tiêu"
    },
    {
        word: "pursuit",
        meaning: "sự theo đuổi, sự mưu cầu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/pərˈsuːt/",
        example: "pursuit of something the pursuit of happiness/knowledge/profit",
        exampleTranslation: "sự theo đuổi hạnh phúc/kiến thức/lợi nhuận"
    },
    {
        word: "puzzle",
        meaning: "câu đố, trò chơi trí tuệ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈpʌzl/",
        example: "a crossword puzzle",
        exampleTranslation: "câu đố ô chữ"
    },
    {
        word: "questionnaire",
        meaning: "bảng câu hỏi",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌkwestʃəˈner/",
        example: "(British English) to fill in a questionnaire",
        exampleTranslation: "điền vào một bảng câu hỏi"
    },
    {
        word: "racial",
        meaning: "chủng tộc, sắc tộc",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈreɪʃl/",
        example: "racial hatred/prejudice/tension/violence",
        exampleTranslation: "hận thù/thành kiến/căng thẳng/bạo lực chủng tộc"
    },
    {
        word: "racism",
        meaning: "chủ nghĩa phân biệt chủng tộc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈreɪsɪzəm/",
        example: "a victim of racism",
        exampleTranslation: "nạn nhân của chủ nghĩa phân biệt chủng tộc"
    },
    {
        word: "racist",
        meaning: "phân biệt chủng tộc",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈreɪsɪst/",
        example: "racist attitudes/remarks",
        exampleTranslation: "thái độ/nhận xét phân biệt chủng tộc"
    },
    {
        word: "radiation",
        meaning: "bức xạ, phóng xạ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌreɪdiˈeɪʃn/",
        example: "high levels/doses of radiation that damage cells",
        exampleTranslation: "mức độ/liều lượng bức xạ cao gây tổn thương tế bào"
    },
    {
        word: "rail",
        meaning: "thanh chắn, lan can",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/reɪl/",
        example: "She leaned on the ship's rail and gazed out to sea.",
        exampleTranslation: "Cô dựa vào lan can tàu và nhìn ra biển."
    },
    {
        word: "random",
        meaning: "ngẫu nhiên, tùy tiện",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈrændəm/",
        example: "the random killing of innocent people",
        exampleTranslation: "vụ giết người ngẫu nhiên những người vô tội"
    },
    {
        word: "range",
        meaning: "trải dài, có phạm vi",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/reɪndʒ/",
        example: "range from A to B Accommodation ranges from tourist class to luxury hotels.",
        exampleTranslation: "trải dài từ A đến B Chỗ ở có nhiều loại, từ bình dân đến sang trọng."
    },
    {
        word: "rank",
        meaning: "hạng, cấp bậc, thứ hạng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ræŋk/",
        example: "She was not used to mixing with people of high social rank.",
        exampleTranslation: "Cô không quen giao du với những người có địa vị xã hội cao."
    },
    {
        word: "rapid",
        meaning: "nhanh chóng, mau lẹ",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈræpɪd/",
        example: "rapid change/expansion/growth/development",
        exampleTranslation: "thay đổi/mở rộng/tăng trưởng/phát triển nhanh chóng"
    },
    {
        word: "rapidly",
        meaning: "nhanh chóng, mau lẹ",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈræpɪdli/",
        example: "to increase/spread/expand rapidly",
        exampleTranslation: "tăng/lan truyền/mở rộng nhanh chóng"
    },
    {
        word: "rat",
        meaning: "chuột",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ræt/",
        example: "rat poison",
        exampleTranslation: "thuốc diệt chuột"
    },
    {
        word: "rate",
        meaning: "đánh giá, xếp hạng",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/reɪt/",
        example: "rate somebody/something + adv./prep. The university is highly rated for its research.",
        exampleTranslation: "Trường đại học được đánh giá cao về nghiên cứu."
    },
    {
        word: "rating",
        meaning: "sự đánh giá, sự xếp hạng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈreɪtɪŋ/",
        example: "Education has been given a high-priority rating by the new administration.",
        exampleTranslation: "Giáo dục được chính quyền mới ưu tiên hàng đầu."
    },
    {
        word: "raw",
        meaning: "sống, thô",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/rɔː/",
        example: "raw meat",
        exampleTranslation: "thịt sống"
    },
    {
        word: "reach",
        meaning: "tầm với, phạm vi",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/riːtʃ/",
        example: "beyond somebody's reach The shot was well beyond the reach of the goalkeeper.",
        exampleTranslation: "ngoài tầm với của ai đó Cú sút đã vượt xa tầm với của thủ môn."
    },
    {
        word: "realistic",
        meaning: "thực tế",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌriːəˈlɪstɪk/",
        example: "a realistic assessment/approach/view",
        exampleTranslation: "sự đánh giá/tiếp cận/quan điểm thực tế"
    },
    {
        word: "reasonable",
        meaning: "hợp lý, phải chăng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈriːznəbl/",
        example: "it is reasonable to do something It is reasonable to assume that he knew beforehand that this would happen.",
        exampleTranslation: "có lý khi làm điều gì đó Có thể hợp lý khi giả định rằng anh ấy đã biết trước điều này sẽ xảy ra."
    },
    {
        word: "reasonably",
        meaning: "khá, tương đối",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈriːznəbli/",
        example: "The instructions are reasonably straightforward.",
        exampleTranslation: "Các hướng dẫn khá đơn giản."
    },
    {
        word: "rebuild",
        meaning: "xây dựng lại",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˌriːˈbɪld/",
        example: "After the earthquake, the people set about rebuilding their homes.",
        exampleTranslation: "Sau trận động đất, người dân bắt tay vào xây dựng lại nhà cửa."
    },
    {
        word: "recall",
        meaning: "nhớ lại, gọi lại",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/rɪˈkɔːl/",
        example: "She could not recall his name.",
        exampleTranslation: "Cô không thể nhớ lại tên anh ấy."
    },
    {
        word: "receiver",
        meaning: "ống nghe",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/rɪˈsiːvər/",
        example: "to pick up/lift/put down/replace the receiver",
        exampleTranslation: "nhấc/nhấc máy/đặt xuống/lắp lại ống nghe"
    },
    {
        word: "recession",
        meaning: "suy thoái kinh tế",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/rɪˈseʃn/",
        example: "How do you assess the impact of the current recession on manufacturing?",
        exampleTranslation: "Bạn đánh giá tác động của suy thoái kinh tế hiện tại đối với ngành sản xuất như thế nào?"
    },
    {
        word: "reckon",
        meaning: "cho rằng, tính toán",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈrekən/",
        example: "I reckon (that) I’m going to get that job.",
        exampleTranslation: "Tôi đoán là tôi sẽ có được công việc đó."
    },
    {
        word: "recognition",
        meaning: "sự nhận ra, sự công nhận",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌrekəɡˈnɪʃn/",
        example: "He glanced briefly towards her but there was no sign of recognition.",
        exampleTranslation: "Anh thoáng nhìn về phía cô nhưng không có dấu hiệu nhận ra."
    },
    {
        word: "recover",
        meaning: "hồi phục, lấy lại",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/rɪˈkʌvər/",
        example: "recover from something He's still recovering from his operation.",
        exampleTranslation: "hồi phục sau chuyện gì đó Anh ấy vẫn đang hồi phục sau ca phẫu thuật."
    },
    {
        word: "recovery",
        meaning: "sự hồi phục, sự lấy lại",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/rɪˈkʌvəri/",
        example: "My father has made a full recovery from the operation.",
        exampleTranslation: "Cha tôi đã hoàn toàn hồi phục sau ca phẫu thuật."
    },
    {
        word: "recruit",
        meaning: "tân binh, người mới tuyển",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/rɪˈkruːt/",
        example: "the training of new recruits",
        exampleTranslation: "việc đào tạo các tân binh mới"
    },
    {
        word: "recruitment",
        meaning: "sự tuyển dụng, sự chiêu mộ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/rɪˈkruːtmənt/",
        example: "the recruitment of new members",
        exampleTranslation: "việc tuyển dụng thành viên mới"
    },
    {
        word: "reduction",
        meaning: "sự giảm bớt, sự cắt giảm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/rɪˈdʌkʃn/",
        example: "Some staff received wage rises, while others experienced a reduction.",
        exampleTranslation: "Một số nhân viên được tăng lương, trong khi những người khác lại bị cắt giảm."
    },
    {
        word: "referee",
        meaning: "trọng tài",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌrefəˈriː/",
        example: "He was sent off for arguing with the referee.",
        exampleTranslation: "Anh ấy bị đuổi khỏi sân vì tranh cãi với trọng tài."
    },
    {
        word: "refugee",
        meaning: "người tị nạn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌrefjuˈdʒiː/",
        example: "There has been a steady flow of refugees from the war zone.",
        exampleTranslation: "Đã có một dòng người tị nạn liên tục từ vùng chiến sự."
    },
    {
        word: "regard",
        meaning: "sự tôn trọng, sự quan tâm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/rɪˈɡɑːrd/",
        example: "regard for somebody/something to have scant/little/no regard for somebody/something",
        exampleTranslation: "coi thường ai đó/điều gì đó rất ít/không quan tâm đến ai đó/điều gì đó"
    },
    {
        word: "regional",
        meaning: "theo vùng, khu vực",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈriːdʒənl/",
        example: "services available at a local and regional level",
        exampleTranslation: "các dịch vụ có sẵn ở cấp địa phương và khu vực"
    },
    {
        word: "register",
        meaning: "sổ đăng ký, sổ ghi chép",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈredʒɪstər/",
        example: "The bride and groom signed the register.",
        exampleTranslation: "Cô dâu và chú rể đã ký vào sổ đăng ký."
    },
    {
        word: "registration",
        meaning: "sự đăng ký",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌredʒɪˈstreɪʃn/",
        example: "the registration of letters and parcels",
        exampleTranslation: "việc đăng ký thư và bưu kiện"
    },
    {
        word: "regret",
        meaning: "sự hối tiếc, sự ân hận",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/rɪˈɡret/",
        example: "a feeling/pang/twinge of regret",
        exampleTranslation: "một cảm giác/cú đau/sự day dứt của sự hối tiếc"
    },
    {
        word: "regulate",
        meaning: "điều chỉnh, quy định",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈreɡjuleɪt/",
        example: "The department is responsible for regulating the insurance industry.",
        exampleTranslation: "Bộ phận chịu trách nhiệm điều chỉnh ngành bảo hiểm."
    },
    {
        word: "regulation",
        meaning: "sự điều chỉnh, quy định",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌreɡjuˈleɪʃn/",
        example: "too many rules and regulations",
        exampleTranslation: "quá nhiều quy tắc và quy định"
    },
    {
        word: "reinforce",
        meaning: "củng cố, tăng cường",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˌriːɪnˈfɔːrs/",
        example: "The experience reinforced my sense of loss.",
        exampleTranslation: "Kinh nghiệm đó càng củng cố cảm giác mất mát của tôi."
    },
    {
        word: "relatively",
        meaning: "tương đối",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈrelətɪvli/",
        example: "relatively large/small/high/low",
        exampleTranslation: "lớn/nhỏ/cao/thấp một cách tương đối"
    },
    {
        word: "relevant",
        meaning: "liên quan, thích hợp",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈreləvənt/",
        example: "relevant information/facts/documents/factors",
        exampleTranslation: "thông tin/sự kiện/tài liệu/yếu tố liên quan"
    },
    {
        word: "relief",
        meaning: "sự nhẹ nhõm, sự khuây khỏa",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/rɪˈliːf/",
        example: "I felt a huge sense of relief when I heard they were all OK.",
        exampleTranslation: "Tôi cảm thấy vô cùng nhẹ nhõm khi nghe tin tất cả họ đều ổn."
    },
    {
        word: "relieve",
        meaning: "làm nhẹ bớt, giảm bớt",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/rɪˈliːv/",
        example: "to relieve the symptoms of a cold",
        exampleTranslation: "làm nhẹ các triệu chứng cảm lạnh"
    },
    {
        word: "relieved",
        meaning: "nhẹ nhõm, bớt lo lắng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/rɪˈliːvd/",
        example: "She sounded relieved.",
        exampleTranslation: "Giọng cô ấy nghe có vẻ nhẹ nhõm."
    },
    {
        word: "rely",
        meaning: "dựa vào, tin cậy",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/rɪˈlaɪ/",
        example: "This is an example of rely.",
        exampleTranslation: "Đây là một ví dụ về sự tin cậy."
    },
    {
        word: "remark",
        meaning: "lời nhận xét, lời ghi chú",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/rɪˈmɑːrk/",
        example: "to make a remark",
        exampleTranslation: "đưa ra một lời nhận xét"
    },
    {
        word: "remarkable",
        meaning: "đáng chú ý, phi thường",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/rɪˈmɑːrkəbl/",
        example: "a remarkable achievement/career/talent",
        exampleTranslation: "một thành tích/sự nghiệp/tài năng đáng chú ý"
    },
    {
        word: "remarkably",
        meaning: "đáng chú ý, phi thường",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/rɪˈmɑːrkəbli/",
        example: "The car is in remarkably good condition for its age.",
        exampleTranslation: "Chiếc xe trong tình trạng tốt đáng kinh ngạc so với tuổi của nó."
    },
    {
        word: "reporting",
        meaning: "việc báo cáo",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/rɪˈpɔːrtɪŋ/",
        example: "accurate/balanced/objective reporting",
        exampleTranslation: "báo cáo chính xác/cân bằng/khách quan"
    },
    {
        word: "representative",
        meaning: "đại diện",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌreprɪˈzentətɪv/",
        example: "Is a questionnaire answered by 500 people truly representative of the population as a whole?",
        exampleTranslation: "Một bảng câu hỏi được trả lời bởi 500 người có thực sự đại diện cho toàn bộ dân số không?"
    },
    {
        word: "reputation",
        meaning: "danh tiếng, tiếng tăm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌrepjuˈteɪʃn/",
        example: "to have a good/bad reputation",
        exampleTranslation: "có danh tiếng tốt/xấu"
    },
    {
        word: "requirement",
        meaning: "yêu cầu, điều kiện",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/rɪˈkwaɪərmənt/",
        example: "the basic requirements of life",
        exampleTranslation: "các yêu cầu cơ bản của cuộc sống"
    },
    {
        word: "rescue",
        meaning: "sự giải cứu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈreskjuː/",
        example: "We had given up hope of rescue.",
        exampleTranslation: "Chúng tôi đã từ bỏ hy vọng được giải cứu."
    },
    {
        word: "reserve",
        meaning: "dự trữ, tiền đặt cọc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/rɪˈzɜːrv/",
        example: "cash/foreign currency reserves",
        exampleTranslation: "dự trữ tiền mặt/ngoại tệ"
    },
    {
        word: "resident",
        meaning: "thường trú, cố định",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈrezɪdənt/",
        example: "the town’s resident population (= not tourists or visitors)",
        exampleTranslation: "dân số thường trú của thị trấn (= không phải khách du lịch hoặc du khách)"
    },
    {
        word: "resign",
        meaning: "từ chức",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/rɪˈzaɪn/",
        example: "She was forced to resign due to ill health.",
        exampleTranslation: "Cô ấy buộc phải từ chức vì lý do sức khỏe."
    },
    {
        word: "resist",
        meaning: "chống cự, cưỡng lại",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/rɪˈzɪst/",
        example: "They are determined to resist pressure to change the law.",
        exampleTranslation: "Họ quyết tâm chống lại áp lực thay đổi luật."
    },
    {
        word: "resolution",
        meaning: "quyết tâm, nghị quyết; (lời) tuyên bố",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌrezəˈluːʃn/",
        example: "Have you made any New Year's resolutions (= for example, to give up smoking from 1 January)?",
        exampleTranslation: "Bạn đã đặt ra quyết tâm nào cho Năm mới chưa (= ví dụ, bỏ thuốc lá từ ngày 1 tháng 1)?"
    },
    {
        word: "resolve",
        meaning: "giải quyết",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/rɪˈzɑːlv/",
        example: "an issue/a dispute/a conflict/a crisis",
        exampleTranslation: "giải quyết một vấn đề/một tranh chấp/một xung đột/một khủng hoảng"
    },
    {
        word: "resort",
        meaning: "nơi nghỉ dưỡng, khu nghỉ dưỡng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/rɪˈzɔːrt/",
        example: "seaside/mountain resorts",
        exampleTranslation: "khu nghỉ dưỡng ven biển/khu nghỉ dưỡng trên núi"
    },
    {
        word: "restore",
        meaning: "khôi phục, phục hồi",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/rɪˈstɔːr/",
        example: "The measures are intended to restore public confidence in the economy.",
        exampleTranslation: "Các biện pháp này nhằm khôi phục niềm tin của công chúng vào nền kinh tế."
    },
    {
        word: "restrict",
        meaning: "hạn chế, giới hạn",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/rɪˈstrɪkt/",
        example: "Speed is restricted to 30 mph in towns.",
        exampleTranslation: "Tốc độ bị giới hạn ở mức 30 dặm/giờ trong các thị trấn."
    },
    {
        word: "restriction",
        meaning: "sự hạn chế, giới hạn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/rɪˈstrɪkʃn/",
        example: "import/speed/travel restrictions",
        exampleTranslation: "hạn chế nhập khẩu/tốc độ/đi lại"
    },
    {
        word: "retail",
        meaning: "bán lẻ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈriːteɪl/",
        example: "The recommended retail price is £9.99.",
        exampleTranslation: "Giá bán lẻ đề xuất là 9,99 bảng Anh."
    },
    {
        word: "retain",
        meaning: "giữ lại, duy trì",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/rɪˈteɪn/",
        example: "to retain your independence",
        exampleTranslation: "giữ gìn sự độc lập của bạn"
    },
    {
        word: "retirement",
        meaning: "sự nghỉ hưu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/rɪˈtaɪərmənt/",
        example: "At 60, he was now approaching retirement.",
        exampleTranslation: "Ở tuổi 60, giờ đây ông đang chuẩn bị nghỉ hưu."
    },
    {
        word: "reveal",
        meaning: "tiết lộ, bộc lộ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/rɪˈviːl/",
        example: "a secret",
        exampleTranslation: "một bí mật"
    },
    {
        word: "revenue",
        meaning: "doanh thu, thu nhập",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈrevənuː/",
        example: "The government is currently facing a shortfall in tax revenue.",
        exampleTranslation: "Chính phủ hiện đang đối mặt với khoản thiếu hụt doanh thu thuế."
    },
    {
        word: "revision",
        meaning: "sự xem lại, bản sửa đổi",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/rɪˈvɪʒn/",
        example: "He made some minor revisions to the report before printing it out.",
        exampleTranslation: "Ông ấy đã có một vài sửa đổi nhỏ đối với báo cáo trước khi in ra."
    },
    {
        word: "revolution",
        meaning: "cuộc cách mạng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌrevəˈluːʃn/",
        example: "a socialist revolution",
        exampleTranslation: "một cuộc cách mạng xã hội chủ nghĩa"
    },
    {
        word: "reward",
        meaning: "phần thưởng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/rɪˈwɔːrd/",
        example: "a financial reward",
        exampleTranslation: "một phần thưởng tài chính"
    },
    {
        word: "rhythm",
        meaning: "nhịp điệu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈrɪðəm/",
        example: "to dance to the rhythm of the music",
        exampleTranslation: "nhảy theo nhịp điệu của âm nhạc"
    },
    {
        word: "rid",
        meaning: "thoát khỏi, loại bỏ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/rɪd/",
        example: "This is an example of rid.",
        exampleTranslation: "Đây là một ví dụ về loại bỏ."
    },
    {
        word: "ridiculous",
        meaning: "buồn cười, lố bịch",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/rɪˈdɪkjələs/",
        example: "I look ridiculous in this hat.",
        exampleTranslation: "Tôi trông thật lố bịch trong chiếc mũ này."
    },
    {
        word: "risky",
        meaning: "rủi ro, mạo hiểm",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈrɪski/",
        example: "Life as an aid worker can be a risky business (= dangerous).",
        exampleTranslation: "Cuộc sống của một nhân viên cứu trợ có thể là một công việc đầy rủi ro (= nguy hiểm)."
    },
    {
        word: "rival",
        meaning: "đối thủ cạnh tranh",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈraɪvl/",
        example: "a rival bid/claim/offer",
        exampleTranslation: "một đề nghị/yêu cầu/lời chào mời của đối thủ cạnh tranh"
    },
    {
        word: "rob",
        meaning: "cướp, trộm",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/rɑːb/",
        example: "to rob a bank",
        exampleTranslation: "cướp ngân hàng"
    },
    {
        word: "robbery",
        meaning: "vụ cướp",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈrɑːbəri/",
        example: "armed robbery (= using a gun, knife, etc.)",
        exampleTranslation: "vụ cướp có vũ trang (= sử dụng súng, dao, v.v.)"
    },
    {
        word: "rocket",
        meaning: "tên lửa",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈrɑːkɪt/",
        example: "a space rocket",
        exampleTranslation: "một tên lửa vũ trụ"
    },
    {
        word: "romance",
        meaning: "chuyện tình cảm, sự lãng mạn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈrəʊmæns/",
        example: "a holiday romance",
        exampleTranslation: "một chuyện tình lãng mạn ngày nghỉ"
    },
    {
        word: "root",
        meaning: "gốc, rễ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ruːt/",
        example: "deep spreading roots",
        exampleTranslation: "những rễ lan rộng sâu"
    },
    {
        word: "rose",
        meaning: "hoa hồng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/rəʊz/",
        example: "a bunch of red roses",
        exampleTranslation: "một bó hoa hồng đỏ"
    },
    {
        word: "roughly",
        meaning: "khoảng, xấp xỉ",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈrʌfli/",
        example: "Sales are up by roughly 10 per cent.",
        exampleTranslation: "Doanh số bán hàng đã tăng khoảng 10 phần trăm."
    },
    {
        word: "round",
        meaning: "vòng, lượt",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/raʊnd/",
        example: "the qualifying rounds of the National Championships",
        exampleTranslation: "các vòng loại của Giải vô địch quốc gia"
    },
    {
        word: "routine",
        meaning: "thông thường, thường lệ",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ruːˈtiːn/",
        example: "routine enquiries/questions/tests/screening",
        exampleTranslation: "các yêu cầu/câu hỏi/bài kiểm tra/sàng lọc thông thường"
    },
    {
        word: "rub",
        meaning: "xoa, cọ xát",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/rʌb/",
        example: "He sat up on the hard bunk and rubbed his eyes.",
        exampleTranslation: "Anh ấy ngồi dậy trên chiếc giường cứng và dụi mắt."
    },
    {
        word: "rubber",
        meaning: "cao su",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈrʌbər/",
        example: "a rubber ball",
        exampleTranslation: "một quả bóng cao su"
    },
    {
        word: "ruin",
        meaning: "sự đổ nát, tàn tích",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈruːɪn/",
        example: "A large number of churches fell into ruin after the revolution.",
        exampleTranslation: "Một số lượng lớn nhà thờ đã rơi vào cảnh đổ nát sau cuộc cách mạng."
    },
    {
        word: "rural",
        meaning: "nông thôn, thôn quê",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈrʊrəl/",
        example: "rural areas",
        exampleTranslation: "các khu vực nông thôn"
    },
    {
        word: "rush",
        meaning: "sự vội vã, sự đổ xô",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/rʌʃ/",
        example: "rush for something Shoppers made a rush for the exits.",
        exampleTranslation: "Người mua hàng đổ xô ra cửa thoát hiểm."
    },
    {
        word: "sample",
        meaning: "nếm thử, thử nghiệm",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈsæmpl/",
        example: "I sampled the delights of Greek cooking for the first time.",
        exampleTranslation: "Tôi lần đầu tiên nếm thử những món ăn ngon của ẩm thực Hy Lạp."
    },
    {
        word: "satellite",
        meaning: "vệ tinh",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈsætəlaɪt/",
        example: "a weather/communications/spy satellite",
        exampleTranslation: "một vệ tinh thời tiết/truyền thông/gián điệp"
    },
    {
        word: "satisfaction",
        meaning: "sự hài lòng, sự thỏa mãn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌsætɪsˈfækʃn/",
        example: "to gain/get/derive satisfaction from something",
        exampleTranslation: "có được/thu được/tìm thấy sự hài lòng từ điều gì đó"
    },
    {
        word: "satisfied",
        meaning: "hài lòng, thỏa mãn",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈsætɪsfaɪd/",
        example: "a satisfied customer",
        exampleTranslation: "một khách hàng hài lòng"
    },
    {
        word: "satisfy",
        meaning: "làm hài lòng, thỏa mãn",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈsætɪsfaɪ/",
        example: "Nothing satisfies him—he's always complaining.",
        exampleTranslation: "Không có gì làm anh ấy hài lòng — anh ấy luôn phàn nàn."
    },
    {
        word: "saving",
        meaning: "sự tiết kiệm, tiền tiết kiệm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈseɪvɪŋ/",
        example: "saving of something Buy three and make a saving of 55p.",
        exampleTranslation: "Mua ba cái và tiết kiệm được 55 xu."
    },
    {
        word: "scale",
        meaning: "quy mô, tầm cỡ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/skeɪl/",
        example: "on a … scale They entertain on a large scale (= they hold expensive parties with a lot of guests).",
        exampleTranslation: "Họ tổ chức tiệc trên quy mô lớn (= họ tổ chức những bữa tiệc tốn kém với nhiều khách mời)."
    },
    {
        word: "scandal",
        meaning: "vụ bê bối, xì căng đan",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈskændl/",
        example: "a series of sex scandals",
        exampleTranslation: "một loạt các vụ bê bối tình dục"
    },
    {
        word: "scare",
        meaning: "sự hoảng sợ, sự lo lắng (thường ngắn hạn)",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/sker/",
        example: "a health scare",
        exampleTranslation: "một mối lo ngại về sức khỏe"
    },
    {
        word: "scenario",
        meaning: "kịch bản, viễn cảnh",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/səˈnæriəʊ/",
        example: "Let me suggest a possible scenario.",
        exampleTranslation: "Hãy để tôi gợi ý một kịch bản khả thi."
    },
    {
        word: "schedule",
        meaning: "lên lịch, sắp xếp",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈskedʒuːl/",
        example: "The meeting is scheduled for Friday afternoon.",
        exampleTranslation: "Cuộc họp được lên lịch vào chiều thứ Sáu."
    },
    {
        word: "scheme",
        meaning: "kế hoạch, đề án",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/skiːm/",
        example: "a training scheme",
        exampleTranslation: "một kế hoạch đào tạo"
    },
    {
        word: "scholar",
        meaning: "học giả, nhà nghiên cứu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈskɑːlər/",
        example: "a classical scholar",
        exampleTranslation: "một học giả cổ điển"
    },
    {
        word: "scholarship",
        meaning: "học bổng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈskɑːlərʃɪp/",
        example: "She won a scholarship to study at Stanford.",
        exampleTranslation: "Cô ấy đã giành được học bổng để học tại Stanford."
    },
    {
        word: "scratch",
        meaning: "vết xước, vết cào",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/skrætʃ/",
        example: "Her hands were covered in scratches from the brambles.",
        exampleTranslation: "Tay cô ấy đầy những vết xước do gai dâm bụt."
    },
    {
        word: "scream",
        meaning: "tiếng thét, tiếng la",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/skriːm/",
        example: "scream of something She let out a scream of pain.",
        exampleTranslation: "Cô ấy phát ra một tiếng thét đau đớn."
    },
    {
        word: "screen",
        meaning: "chiếu (phim), sàng lọc",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/skriːn/",
        example: "a list of films to be screened as part of the festival",
        exampleTranslation: "một danh sách các bộ phim sẽ được chiếu như một phần của lễ hội"
    },
    {
        word: "screening",
        meaning: "buổi chiếu, sự sàng lọc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈskriːnɪŋ/",
        example: "This will be the movie's first screening in this country.",
        exampleTranslation: "Đây sẽ là buổi chiếu đầu tiên của bộ phim này tại quốc gia này."
    },
    {
        word: "seat",
        meaning: "xếp chỗ, đặt chỗ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/siːt/",
        example: "Please wait to be seated (= in a restaurant, etc.).",
        exampleTranslation: "Vui lòng đợi được xếp chỗ ngồi."
    },
    {
        word: "sector",
        meaning: "khu vực, lĩnh vực",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈsektər/",
        example: "the service/banking/manufacturing/financial sector",
        exampleTranslation: "khu vực dịch vụ/ngân hàng/sản xuất/tài chính"
    },
    {
        word: "secure",
        meaning: "an toàn, vững chắc, ổn định",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/sɪˈkjʊr/",
        example: "a secure job/income",
        exampleTranslation: "một công việc/thu nhập ổn định"
    },
    {
        word: "seek",
        meaning: "tìm kiếm, mưu cầu",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/siːk/",
        example: "seek something/somebody Drivers are advised to seek alternative routes.",
        exampleTranslation: "Các tài xế được khuyên nên tìm các tuyến đường thay thế."
    },
    {
        word: "seeker",
        meaning: "người tìm kiếm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈsiːkər/",
        example: "an attention/a publicity seeker",
        exampleTranslation: "người tìm kiếm sự chú ý/sự nổi tiếng"
    },
    {
        word: "select",
        meaning: "chọn, tuyển chọn",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/sɪˈlekt/",
        example: "select somebody/something for something He hasn't been selected for the team.",
        exampleTranslation: "Anh ấy chưa được chọn vào đội."
    },
    {
        word: "selection",
        meaning: "sự lựa chọn, tuyển chọn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/sɪˈlekʃn/",
        example: "She took a long time to make her selection.",
        exampleTranslation: "Cô ấy mất nhiều thời gian để đưa ra lựa chọn của mình."
    },
    {
        word: "self",
        meaning: "bản thân, con người",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/self/",
        example: "You'll soon be feeling your old self again (= feeling well or happy again).",
        exampleTranslation: "Bạn sẽ sớm cảm thấy mình lại là con người cũ (= cảm thấy khỏe mạnh hoặc hạnh phúc trở lại)."
    },
    {
        word: "seminar",
        meaning: "hội thảo, chuyên đề",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈsemɪnɑːr/",
        example: "Teaching is by lectures and seminars.",
        exampleTranslation: "Việc giảng dạy thông qua các bài giảng và hội thảo."
    },
    {
        word: "senior",
        meaning: "cấp cao, thâm niên",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈsiːniər/",
        example: "a senior official/officer/manager/executive",
        exampleTranslation: "một quan chức/sĩ quan/quản lý/điều hành cấp cao"
    },
    {
        word: "sense",
        meaning: "cảm thấy, nhận thấy",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/sens/",
        example: "Sensing danger, they started to run.",
        exampleTranslation: "Cảm thấy nguy hiểm, họ bắt đầu bỏ chạy."
    },
    {
        word: "sensitive",
        meaning: "nhạy cảm, tinh tế",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈsensətɪv/",
        example: "a sensitive and caring man",
        exampleTranslation: "một người đàn ông nhạy cảm và chu đáo"
    },
    {
        word: "sentence",
        meaning: "kết án, tuyên án",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈsentəns/",
        example: "He sentenced the defendant to life in prison.",
        exampleTranslation: "Ông ta đã kết án bị cáo tù chung thân."
    },
    {
        word: "sequence",
        meaning: "chuỗi, trình tự",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈsiːkwəns/",
        example: "He described the sequence of events leading up to the robbery.",
        exampleTranslation: "Anh ấy đã mô tả trình tự các sự kiện dẫn đến vụ cướp."
    },
    {
        word: "session",
        meaning: "buổi, phiên",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈseʃn/",
        example: "a training/practice session",
        exampleTranslation: "một buổi tập huấn/luyện tập"
    },
    {
        word: "settle",
        meaning: "giải quyết, dàn xếp",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈsetl/",
        example: "a dispute/a matter/an issue",
        exampleTranslation: "một vụ tranh chấp/một vấn đề/một vấn đề cần giải quyết"
    },
    {
        word: "settler",
        meaning: "người định cư",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈsetlər/",
        example: "Most of the settlers came from England.",
        exampleTranslation: "Hầu hết những người định cư đến từ Anh."
    },
    {
        word: "severe",
        meaning: "nghiêm trọng, nặng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/sɪˈvɪr/",
        example: "His injuries are severe.",
        exampleTranslation: "Vết thương của anh ấy rất nặng."
    },
    {
        word: "severely",
        meaning: "nghiêm trọng, nặng nề",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/sɪˈvɪrli/",
        example: "severely injured",
        exampleTranslation: "bị thương nặng"
    },
    {
        word: "sexy",
        meaning: "gợi cảm, quyến rũ",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈseksi/",
        example: "the sexy lead singer",
        exampleTranslation: "ca sĩ chính gợi cảm"
    },
    {
        word: "shade",
        meaning: "bóng râm, bóng mát",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ʃeɪd/",
        example: "shade of something The shade of the pine tree provided some protection from the sun.",
        exampleTranslation: "Bóng mát của cây thông đã che chắn một phần khỏi ánh nắng mặt trời."
    },
    {
        word: "shadow",
        meaning: "bóng, cái bóng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈʃædəʊ/",
        example: "The children were having fun, chasing each other's shadows.",
        exampleTranslation: "Bọn trẻ đang vui vẻ đuổi theo bóng của nhau."
    },
    {
        word: "shallow",
        meaning: "nông",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈʃæləʊ/",
        example: "a shallow dish/pan/bowl",
        exampleTranslation: "một cái đĩa/chảo/bát nông"
    },
    {
        word: "shame",
        meaning: "đáng tiếc, xấu hổ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ʃeɪm/",
        example: "She's retiring because of ill health, which is a great shame.",
        exampleTranslation: "Cô ấy nghỉ hưu vì sức khỏe kém, đó là một điều rất đáng tiếc."
    },
    {
        word: "shape",
        meaning: "nặn, định hình",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ʃeɪp/",
        example: "shape A into B Shape the dough into a ball.",
        exampleTranslation: "Nặn bột thành một viên tròn."
    },
    {
        word: "shaped",
        meaning: "có hình dạng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ʃeɪpt/",
        example: "a huge balloon shaped like a giant cow",
        exampleTranslation: "một quả bóng bay khổng lồ có hình dạng giống một con bò khổng lồ"
    },
    {
        word: "shelter",
        meaning: "nơi trú ẩn, chỗ ở",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈʃeltər/",
        example: "Human beings need food, clothing and shelter.",
        exampleTranslation: "Con người cần thức ăn, quần áo và chỗ ở."
    },
    {
        word: "shift",
        meaning: "dịch chuyển, di chuyển",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ʃɪft/",
        example: "Lydia shifted uncomfortably in her chair.",
        exampleTranslation: "Lydia khó chịu dịch chuyển trên ghế của mình."
    },
    {
        word: "ship",
        meaning: "vận chuyển, gửi",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ʃɪp/",
        example: "The company ships its goods all over the world.",
        exampleTranslation: "Công ty vận chuyển hàng hóa của mình đi khắp thế giới."
    },
    {
        word: "shock",
        meaning: "cú sốc, sự choáng váng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ʃɑːk/",
        example: "I got a terrible shock the other day.",
        exampleTranslation: "Tôi đã bị một cú sốc khủng khiếp vào hôm nọ."
    },
    {
        word: "shocked",
        meaning: "bị sốc, choáng váng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ʃɑːkt/",
        example: "I was quite shocked when I found out what he'd done.",
        exampleTranslation: "Tôi khá sốc khi biết anh ta đã làm gì."
    },
    {
        word: "shocking",
        meaning: "gây sốc, kinh hoàng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈʃɑːkɪŋ/",
        example: "shocking behaviour",
        exampleTranslation: "hành vi gây sốc"
    },
    {
        word: "shooting",
        meaning: "vụ xả súng, vụ nổ súng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈʃuːtɪŋ/",
        example: "Terrorist groups claimed responsibility for the shootings and bomb attacks.",
        exampleTranslation: "Các nhóm khủng bố đã nhận trách nhiệm về các vụ xả súng và đánh bom."
    },
    {
        word: "shore",
        meaning: "bờ biển, bờ hồ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ʃɔːr/",
        example: "a rocky/sandy shore",
        exampleTranslation: "một bờ biển đá/cát"
    },
    {
        word: "short-term",
        meaning: "ngắn hạn",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌʃɔːrt ˈtɜːrm/",
        example: "a short-term loan",
        exampleTranslation: "một khoản vay ngắn hạn"
    },
    {
        word: "shortage",
        meaning: "sự thiếu hụt, tình trạng thiếu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈʃɔːrtɪdʒ/",
        example: "food/housing/water shortages",
        exampleTranslation: "tình trạng thiếu lương thực/nhà ở/nước"
    },
    {
        word: "shortly",
        meaning: "chẳng bao lâu, ngay sau đó",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈʃɔːrtli/",
        example: "She arrived shortly after us.",
        exampleTranslation: "Cô ấy đến ngay sau chúng tôi."
    },
    {
        word: "shot",
        meaning: "tiếng súng, phát súng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ʃɑːt/",
        example: "We heard some shots in the distance.",
        exampleTranslation: "Chúng tôi nghe thấy vài tiếng súng từ xa."
    },
    {
        word: "sibling",
        meaning: "anh chị em",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈsɪblɪŋ/",
        example: "squabbles between siblings",
        exampleTranslation: "những cuộc cãi vã giữa anh chị em"
    },
    {
        word: "signature",
        meaning: "chữ ký",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈsɪɡnətʃər/",
        example: "Someone had forged her signature on the cheque.",
        exampleTranslation: "Ai đó đã giả mạo chữ ký của cô ấy trên tấm séc."
    },
    {
        word: "significance",
        meaning: "ý nghĩa, tầm quan trọng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/sɪɡˈnɪfɪkəns/",
        example: "a decision of major political significance",
        exampleTranslation: "một quyết định có ý nghĩa chính trị lớn"
    },
    {
        word: "significant",
        meaning: "có ý nghĩa, đáng kể, quan trọng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/sɪɡˈnɪfɪkənt/",
        example: "There are no significant differences between the two groups of students.",
        exampleTranslation: "Không có sự khác biệt đáng kể nào giữa hai nhóm sinh viên."
    },
    {
        word: "significantly",
        meaning: "một cách đáng kể, có ý nghĩa",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/sɪɡˈnɪfɪkəntli/",
        example: "significantly higher/lower/larger/smaller",
        exampleTranslation: "cao hơn/thấp hơn/lớn hơn/nhỏ hơn đáng kể"
    },
    {
        word: "silence",
        meaning: "sự im lặng, tĩnh lặng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈsaɪləns/",
        example: "Their footsteps echoed in the silence.",
        exampleTranslation: "Tiếng bước chân của họ vang vọng trong sự tĩnh lặng."
    },
    {
        word: "silk",
        meaning: "lụa, tơ tằm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/sɪlk/",
        example: "The caterpillar spins the silk around its entire body.",
        exampleTranslation: "Con sâu bướm nhả tơ quanh toàn bộ cơ thể của nó."
    },
    {
        word: "sincere",
        meaning: "chân thành, thành thật",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/sɪnˈsɪr/",
        example: "a sincere apology",
        exampleTranslation: "một lời xin lỗi chân thành"
    },
    {
        word: "skilled",
        meaning: "có kỹ năng, lành nghề",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/skɪld/",
        example: "a skilled engineer/negotiator/craftsman",
        exampleTranslation: "một kỹ sư/nhà đàm phán/thợ thủ công lành nghề"
    },
    {
        word: "skull",
        meaning: "xương sọ, sọ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/skʌl/",
        example: "a fractured skull",
        exampleTranslation: "một hộp sọ bị nứt"
    },
    {
        word: "slave",
        meaning: "nô lệ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/sleɪv/",
        example: "A former slave, he graduated from Claflin University in South Carolina.",
        exampleTranslation: "Từng là một nô lệ, ông tốt nghiệp Đại học Claflin ở South Carolina."
    },
    {
        word: "slide",
        meaning: "trang trình chiếu, bản chiếu, cầu trượt",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/slaɪd/",
        example: "Here's a slide showing target markets.",
        exampleTranslation: "Đây là một trang trình chiếu thể hiện các thị trường mục tiêu."
    },
    {
        word: "slight",
        meaning: "nhỏ, nhẹ, không đáng kể",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/slaɪt/",
        example: "a slight increase/change/difference",
        exampleTranslation: "một sự tăng/thay đổi/khác biệt nhỏ"
    },
    {
        word: "slip",
        meaning: "trượt, vấp ngã",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/slɪp/",
        example: "She slipped and landed flat on her back.",
        exampleTranslation: "Cô ấy bị trượt chân và ngã ngửa ra sau."
    },
    {
        word: "slogan",
        meaning: "khẩu hiệu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈsləʊɡən/",
        example: "an advertising slogan",
        exampleTranslation: "một khẩu hiệu quảng cáo"
    },
    {
        word: "slope",
        meaning: "dốc, độ dốc, sườn dốc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/sləʊp/",
        example: "on a slope The town is built on a slope.",
        exampleTranslation: "Thị trấn được xây dựng trên một sườn dốc."
    },
    {
        word: "so-called",
        meaning: "cái gọi là",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌsəʊ ˈkɔːld/",
        example: "the opinion of a so-called ‘expert’",
        exampleTranslation: "ý kiến của cái gọi là ‘chuyên gia’"
    },
    {
        word: "solar",
        meaning: "thuộc về mặt trời, năng lượng mặt trời",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈsəʊlər/",
        example: "solar radiation",
        exampleTranslation: "bức xạ mặt trời"
    },
    {
        word: "somehow",
        meaning: "bằng cách nào đó",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈsʌmhaʊ/",
        example: "We must stop him from seeing her somehow.",
        exampleTranslation: "Chúng ta phải bằng cách nào đó ngăn anh ta gặp cô ấy."
    },
    {
        word: "sometime",
        meaning: "lúc nào đó, vào một lúc nào đó",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈsʌmtaɪm/",
        example: "I saw him sometime last summer.",
        exampleTranslation: "Tôi đã gặp anh ấy vào một lúc nào đó mùa hè năm ngoái."
    },
    {
        word: "somewhat",
        meaning: "phần nào, hơi, một chút",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈsʌmwʌt/",
        example: "somewhat different/similar",
        exampleTranslation: "hơi khác/tương tự một chút"
    },
    {
        word: "sophisticated",
        meaning: "tinh vi, phức tạp, sành điệu",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/səˈfɪstɪkeɪtɪd/",
        example: "highly sophisticated computer systems",
        exampleTranslation: "hệ thống máy tính cực kỳ tinh vi"
    },
    {
        word: "soul",
        meaning: "linh hồn, tâm hồn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/səʊl/",
        example: "He believed his immortal soul was in peril.",
        exampleTranslation: "Anh tin rằng linh hồn bất tử của mình đang gặp nguy hiểm."
    },
    {
        word: "spare",
        meaning: "rảnh rỗi, dự phòng, thừa",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/sper/",
        example: "He's studying music in his spare time.",
        exampleTranslation: "Anh ấy đang học nhạc trong thời gian rảnh rỗi."
    },
    {
        word: "specialist",
        meaning: "chuyên gia, chuyên môn",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈspeʃəlɪst/",
        example: "specialist knowledge/training/skills",
        exampleTranslation: "kiến thức/đào tạo/kỹ năng chuyên môn"
    },
    {
        word: "specialize",
        meaning: "chuyên về, chuyên môn hóa",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈspeʃəlaɪz/",
        example: "Many students prefer not to specialize too soon.",
        exampleTranslation: "Nhiều sinh viên thích không chuyên sâu quá sớm."
    },
    {
        word: "species",
        meaning: "loài",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈspiːʃiːz/",
        example: "a conservation area for endangered species",
        exampleTranslation: "một khu bảo tồn cho các loài có nguy cơ tuyệt chủng"
    },
    {
        word: "specify",
        meaning: "chỉ rõ, ghi rõ, định rõ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈspesɪfaɪ/",
        example: "Remember to specify your size when ordering clothes.",
        exampleTranslation: "Hãy nhớ ghi rõ kích thước của bạn khi đặt quần áo."
    },
    {
        word: "spectacular",
        meaning: "ngoạn mục, đẹp mắt, hùng vĩ",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/spekˈtækjələr/",
        example: "The coastal road has spectacular scenery.",
        exampleTranslation: "Con đường ven biển có phong cảnh ngoạn mục."
    },
    {
        word: "spectator",
        meaning: "khán giả, người xem",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈspekteɪtər/",
        example: "The new football stadium will hold 75 000 spectators.",
        exampleTranslation: "Sân vận động bóng đá mới sẽ chứa được 75.000 khán giả."
    },
    {
        word: "speculate",
        meaning: "suy đoán, phỏng đoán",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈspekjuleɪt/",
        example: "speculate (about/on/as to something) We all speculated about the reasons for her resignation.",
        exampleTranslation: "Tất cả chúng tôi đều suy đoán về những lý do cô ấy từ chức."
    },
    {
        word: "speculation",
        meaning: "sự suy đoán, sự phỏng đoán",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌspekjuˈleɪʃn/",
        example: "His private life is the subject of much speculation.",
        exampleTranslation: "Đời tư của anh ấy là chủ đề của nhiều đồn đoán."
    },
    {
        word: "speed",
        meaning: "tăng tốc, phóng nhanh",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/spiːd/",
        example: "They sped off to get help.",
        exampleTranslation: "Họ phóng nhanh đi tìm sự giúp đỡ."
    },
    {
        word: "spice",
        meaning: "gia vị",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/spaɪs/",
        example: "common spices such as ginger and cinnamon",
        exampleTranslation: "các loại gia vị thông thường như gừng và quế"
    },
    {
        word: "spill",
        meaning: "làm đổ, tràn",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/spɪl/",
        example: "Water had spilled out of the bucket onto the floor.",
        exampleTranslation: "Nước đã tràn ra khỏi xô xuống sàn nhà."
    },
    {
        word: "spiritual",
        meaning: "thuộc về tinh thần, tâm linh",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈspɪrɪtʃuəl/",
        example: "a spiritual experience",
        exampleTranslation: "một trải nghiệm tâm linh"
    },
    {
        word: "spite",
        meaning: "sự ác ý, sự thù hằn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/spaɪt/",
        example: "out of spite I'm sure he only said it out of spite.",
        exampleTranslation: "Tôi chắc chắn anh ấy chỉ nói điều đó vì ác ý."
    },
    {
        word: "split",
        meaning: "sự chia rẽ, sự tách rời",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/splɪt/",
        example: "Ten years after their acrimonious split, the band has reformed.",
        exampleTranslation: "Mười năm sau cuộc chia rẽ gay gắt, ban nhạc đã tái hợp."
    },
    {
        word: "spoil",
        meaning: "làm hỏng, làm hư",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/spɔɪl/",
        example: "Our camping trip was spoilt by bad weather.",
        exampleTranslation: "Chuyến đi cắm trại của chúng tôi bị thời tiết xấu làm hỏng."
    },
    {
        word: "spokesman",
        meaning: "người phát ngôn (nam)",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈspəʊksmən/",
        example: "a police spokesman",
        exampleTranslation: "một người phát ngôn của cảnh sát"
    },
    {
        word: "spokesperson",
        meaning: "người phát ngôn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈspəʊkspɜːrsn/",
        example: "a council spokesperson",
        exampleTranslation: "một người phát ngôn của hội đồng"
    },
    {
        word: "spokeswoman",
        meaning: "người phát ngôn (nữ)",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈspəʊkswʊmən/",
        example: "a government spokeswoman",
        exampleTranslation: "một người phát ngôn của chính phủ"
    },
    {
        word: "sponsor",
        meaning: "nhà tài trợ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈspɑːnsər/",
        example: "The programme is funded by a number of corporate sponsors.",
        exampleTranslation: "Chương trình được tài trợ bởi một số nhà tài trợ doanh nghiệp."
    },
    {
        word: "sponsorship",
        meaning: "sự tài trợ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈspɑːnsərʃɪp/",
        example: "a $50 million sponsorship deal",
        exampleTranslation: "một thỏa thuận tài trợ 50 triệu đô la"
    },
    {
        word: "sporting",
        meaning: "thuộc về thể thao",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈspɔːrtɪŋ/",
        example: "a major sporting event",
        exampleTranslation: "một sự kiện thể thao lớn"
    },
    {
        word: "spot",
        meaning: "phát hiện, nhìn thấy",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/spɑːt/",
        example: "spot somebody/something Can you spot the difference between these two pictures?",
        exampleTranslation: "Bạn có thể phát hiện sự khác biệt giữa hai bức tranh này không?"
    },
    {
        word: "spread",
        meaning: "sự lây lan, sự lan truyền",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/spred/",
        example: "measures to halt the spread of the disease",
        exampleTranslation: "các biện pháp ngăn chặn sự lây lan của dịch bệnh"
    },
    {
        word: "spring",
        meaning: "nhảy vọt, lao tới",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/sprɪŋ/",
        example: "The cat crouched ready to spring.",
        exampleTranslation: "Con mèo ẩn mình sẵn sàng lao tới."
    },
    {
        word: "stable",
        meaning: "ổn định, vững chắc",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈsteɪbl/",
        example: "The patient's condition is stable (= it is not getting worse).",
        exampleTranslation: "Tình trạng của bệnh nhân ổn định (= không xấu đi)."
    },
    {
        word: "stage",
        meaning: "dàn dựng, tổ chức",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/steɪdʒ/",
        example: "to stage a play/an event/an exhibition",
        exampleTranslation: "dàn dựng một vở kịch/tổ chức một sự kiện/một triển lãm"
    },
    {
        word: "stall",
        meaning: "quầy hàng, gian hàng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/stɔːl/",
        example: "He works on a market stall in the Square.",
        exampleTranslation: "Anh ấy làm việc ở một quầy hàng trong chợ tại Quảng trường."
    },
    {
        word: "stance",
        meaning: "lập trường, quan điểm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/stæns/",
        example: "What is the newspaper's stance on the war?",
        exampleTranslation: "Lập trường của tờ báo về cuộc chiến là gì?"
    },
    {
        word: "stand",
        meaning: "lập trường, quan điểm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/stænd/",
        example: "He has avoided taking a firm stand.",
        exampleTranslation: "Anh ấy đã tránh đưa ra một lập trường vững chắc."
    },
    {
        word: "stare",
        meaning: "nhìn chằm chằm",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ster/",
        example: "I screamed and everyone stared.",
        exampleTranslation: "Tôi hét lên và mọi người đều nhìn chằm chằm."
    },
    {
        word: "starve",
        meaning: "chết đói, bỏ đói",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/stɑːrv/",
        example: "The animals were left to starve to death.",
        exampleTranslation: "Những con vật bị bỏ mặc cho đến chết đói."
    },
    {
        word: "status",
        meaning: "tình trạng, địa vị",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈstætəs/",
        example: "They were granted refugee status.",
        exampleTranslation: "Họ được cấp tình trạng tị nạn."
    },
    {
        word: "steadily",
        meaning: "đều đặn, ổn định",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈstedəli/",
        example: "The company's exports have been increasing steadily.",
        exampleTranslation: "Xuất khẩu của công ty đã tăng đều đặn."
    },
    {
        word: "steady",
        meaning: "ổn định, vững chắc",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈstedi/",
        example: "We've had five years of steady economic growth.",
        exampleTranslation: "Chúng ta đã có năm năm tăng trưởng kinh tế ổn định."
    },
    {
        word: "steam",
        meaning: "hơi nước",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/stiːm/",
        example: "Steam rose from the boiling kettle.",
        exampleTranslation: "Hơi nước bốc lên từ ấm đun sôi."
    },
    {
        word: "steel",
        meaning: "thép",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/stiːl/",
        example: "the iron and steel industry",
        exampleTranslation: "ngành công nghiệp sắt và thép"
    },
    {
        word: "steep",
        meaning: "dốc, dựng đứng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/stiːp/",
        example: "a steep hill/slope",
        exampleTranslation: "một ngọn đồi/sườn dốc"
    },
    {
        word: "step",
        meaning: "bước, đi bộ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/step/",
        example: "to step onto/off a bus",
        exampleTranslation: "bước lên/xuống xe buýt"
    },
    {
        word: "sticky",
        meaning: "dính, nhớt",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈstɪki/",
        example: "sticky fingers covered in jam",
        exampleTranslation: "những ngón tay dính đầy mứt"
    },
    {
        word: "stiff",
        meaning: "cứng, rắn",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/stɪf/",
        example: "a sheet of stiff black cardboard",
        exampleTranslation: "một tấm bìa cứng màu đen"
    },
    {
        word: "stimulate",
        meaning: "kích thích, thúc đẩy",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈstɪmjuleɪt/",
        example: "The exhibition has stimulated interest in her work.",
        exampleTranslation: "Triển lãm đã kích thích sự quan tâm đến tác phẩm của cô ấy."
    },
    {
        word: "stock",
        meaning: "hàng hóa, kho dự trữ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/stɑːk/",
        example: "We have a fast turnover of stock.",
        exampleTranslation: "Chúng tôi có tốc độ quay vòng hàng tồn kho nhanh."
    },
    {
        word: "stream",
        meaning: "suối, dòng chảy",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/striːm/",
        example: "a mountain stream",
        exampleTranslation: "một con suối trên núi"
    },
    {
        word: "strengthen",
        meaning: "củng cố, tăng cường",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈstreŋkθn/",
        example: "Her position in the party has strengthened in recent weeks.",
        exampleTranslation: "Vị trí của cô ấy trong đảng đã được củng cố trong những tuần gần đây."
    },
    {
        word: "stretch",
        meaning: "đoạn, khoảng (không gian)",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/stretʃ/",
        example: "a particularly dangerous stretch of road",
        exampleTranslation: "một đoạn đường đặc biệt nguy hiểm"
    },
    {
        word: "strict",
        meaning: "nghiêm khắc, chặt chẽ",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/strɪkt/",
        example: "strict rules/regulations",
        exampleTranslation: "các quy tắc/quy định nghiêm ngặt"
    },
    {
        word: "strictly",
        meaning: "nghiêm khắc, chặt chẽ",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈstrɪktli/",
        example: "She was brought up very strictly.",
        exampleTranslation: "Cô ấy được nuôi dạy rất nghiêm khắc."
    },
    {
        word: "strike",
        meaning: "cuộc đình công",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/straɪk/",
        example: "the miners'/firefighters'/teachers' strike",
        exampleTranslation: "cuộc đình công của công nhân mỏ/lính cứu hỏa/giáo viên"
    },
    {
        word: "stroke",
        meaning: "nét vẽ, cú đánh",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/strəʊk/",
        example: "What a beautiful stroke!",
        exampleTranslation: "Một nét vẽ thật đẹp!"
    },
    {
        word: "structure",
        meaning: "cấu trúc, tổ chức",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈstrʌktʃər/",
        example: "How well does the teacher structure the lessons?",
        exampleTranslation: "Giáo viên tổ chức các bài học tốt đến mức nào?"
    },
    {
        word: "struggle",
        meaning: "cuộc đấu tranh, sự vật lộn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈstrʌɡl/",
        example: "Marx wrote about the class struggle.",
        exampleTranslation: "Marx đã viết về đấu tranh giai cấp."
    },
    {
        word: "stuff",
        meaning: "nhồi nhét, lấp đầy",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/stʌf/",
        example: "stuff A with B She had 500 envelopes to stuff with leaflets.",
        exampleTranslation: "Cô ấy có 500 phong bì để nhét đầy tờ rơi."
    },
    {
        word: "stunning",
        meaning: "tuyệt đẹp, choáng váng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈstʌnɪŋ/",
        example: "You look absolutely stunning!",
        exampleTranslation: "Bạn trông hoàn toàn tuyệt đẹp!"
    },
    {
        word: "subject",
        meaning: "chịu, lệ thuộc, tùy thuộc",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈsʌbdʒekt/",
        example: "At this stage these are proposals and are still subject to change.",
        exampleTranslation: "Ở giai đoạn này, đây là những đề xuất và vẫn có thể thay đổi."
    },
    {
        word: "submit",
        meaning: "nộp, đệ trình",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/səbˈmɪt/",
        example: "an application/a claim/a proposal",
        exampleTranslation: "một đơn xin/một yêu cầu/một đề xuất"
    },
    {
        word: "subsequent",
        meaning: "tiếp theo, sau đó",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈsʌbsɪkwənt/",
        example: "subsequent generations",
        exampleTranslation: "các thế hệ tiếp theo"
    },
    {
        word: "subsequently",
        meaning: "sau đó, kế tiếp",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈsʌbsɪkwəntli/",
        example: "The original interview notes were subsequently lost.",
        exampleTranslation: "Các ghi chú phỏng vấn ban đầu sau đó đã bị mất."
    },
    {
        word: "suburb",
        meaning: "ngoại ô",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈsʌbɜːrb/",
        example: "a suburb of London",
        exampleTranslation: "một vùng ngoại ô của London"
    },
    {
        word: "suffering",
        meaning: "sự đau khổ, sự chịu đựng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈsʌfərɪŋ/",
        example: "Death finally brought an end to her suffering.",
        exampleTranslation: "Cái chết cuối cùng đã chấm dứt sự đau khổ của cô ấy."
    },
    {
        word: "sufficient",
        meaning: "đủ",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/səˈfɪʃnt/",
        example: "Allow sufficient time to get there.",
        exampleTranslation: "Hãy dành đủ thời gian để đến đó."
    },
    {
        word: "sufficiently",
        meaning: "đủ, một cách đầy đủ",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/səˈfɪʃntli/",
        example: "The following day she felt sufficiently well to go to work.",
        exampleTranslation: "Ngày hôm sau cô ấy cảm thấy đủ khỏe để đi làm."
    },
    {
        word: "sum",
        meaning: "tổng số tiền",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/sʌm/",
        example: "You will be fined the sum of £200.",
        exampleTranslation: "Bạn sẽ bị phạt số tiền 200 bảng Anh."
    },
    {
        word: "super",
        meaning: "siêu, tuyệt vời",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈsuːpər/",
        example: "a super meal",
        exampleTranslation: "một bữa ăn tuyệt vời"
    },
    {
        word: "surgeon",
        meaning: "bác sĩ phẫu thuật",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈsɜːrdʒən/",
        example: "a brain/heart surgeon",
        exampleTranslation: "bác sĩ phẫu thuật não/tim"
    },
    {
        word: "surgery",
        meaning: "phẫu thuật, ca mổ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈsɜːrdʒəri/",
        example: "major/minor surgery",
        exampleTranslation: "phẫu thuật lớn/nhỏ"
    },
    {
        word: "surround",
        meaning: "bao quanh, vây quanh",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/səˈraʊnd/",
        example: "surround something/somebody Tall trees surround the lake.",
        exampleTranslation: "Những cây cao bao quanh hồ."
    },
    {
        word: "surrounding",
        meaning: "xung quanh, kế cận",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/səˈraʊndɪŋ/",
        example: "Oxford and the surrounding area",
        exampleTranslation: "Oxford và khu vực xung quanh"
    },
    {
        word: "survey",
        meaning: "khảo sát, kiểm tra",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/sərˈveɪ/",
        example: "The next morning we surveyed the damage caused by the fire.",
        exampleTranslation: "Sáng hôm sau chúng tôi kiểm tra thiệt hại do vụ cháy gây ra."
    },
    {
        word: "survival",
        meaning: "sự sống sót, sự tồn tại",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/sərˈvaɪvl/",
        example: "the struggle/battle/fight for survival",
        exampleTranslation: "cuộc đấu tranh/chiến đấu/trận chiến để sinh tồn"
    },
    {
        word: "survivor",
        meaning: "người sống sót",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/sərˈvaɪvər/",
        example: "the sole/only survivor of the massacre",
        exampleTranslation: "người sống sót duy nhất của vụ thảm sát"
    },
    {
        word: "suspect",
        meaning: "nghi phạm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈsʌspekt/",
        example: "a murder suspect",
        exampleTranslation: "một nghi phạm giết người"
    },
    {
        word: "suspend",
        meaning: "treo, đình chỉ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/səˈspend/",
        example: "be suspended from something A lamp was suspended from the ceiling.",
        exampleTranslation: "một chiếc đèn được treo từ trần nhà."
    },
    {
        word: "sustainable",
        meaning: "bền vững",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/səˈsteɪnəbl/",
        example: "sustainable forest management",
        exampleTranslation: "quản lý rừng bền vững"
    },
    {
        word: "swallow",
        meaning: "nuốt",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈswɑːləʊ/",
        example: "swallow (something) Always chew food well before swallowing it.",
        exampleTranslation: "Luôn nhai kỹ thức ăn trước khi nuốt."
    },
    {
        word: "swear",
        meaning: "thề, chửi thề",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/swer/",
        example: "She fell over and swore loudly.",
        exampleTranslation: "Cô ấy ngã và chửi thề ầm ĩ."
    },
    {
        word: "sweep",
        meaning: "quét",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/swiːp/",
        example: "sweep (something) to sweep the floor",
        exampleTranslation: "quét sàn nhà"
    },
    {
        word: "switch",
        meaning: "công tắc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/swɪtʃ/",
        example: "a light switch",
        exampleTranslation: "công tắc đèn"
    },
    {
        word: "sympathetic",
        meaning: "thông cảm, đồng cảm",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌsɪmpəˈθetɪk/",
        example: "a sympathetic listener",
        exampleTranslation: "một người lắng nghe đầy thông cảm"
    },
    {
        word: "sympathy",
        meaning: "sự thông cảm, lòng trắc ẩn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈsɪmpəθi/",
        example: "sympathy for somebody to express/feel sympathy for somebody",
        exampleTranslation: "bày tỏ/cảm thấy thông cảm với ai đó"
    },
    {
        word: "tackle",
        meaning: "giải quyết, xử lý",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈtækl/",
        example: "The government is determined to tackle inflation.",
        exampleTranslation: "Chính phủ quyết tâm giải quyết lạm phát."
    },
    {
        word: "tag",
        meaning: "thẻ, nhãn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/tæɡ/",
        example: "He put name tags on all his shirts.",
        exampleTranslation: "Anh ấy dán thẻ tên lên tất cả áo sơ mi của mình."
    },
    {
        word: "tale",
        meaning: "chuyện kể, câu chuyện",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/teɪl/",
        example: "a coming-of-age/morality tale",
        exampleTranslation: "một câu chuyện tuổi mới lớn/đạo đức"
    },
    {
        word: "tank",
        meaning: "bể, thùng, xe tăng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/tæŋk/",
        example: "a fuel/water/storage tank",
        exampleTranslation: "bể chứa nhiên liệu/nước/bể chứa"
    },
    {
        word: "tap",
        meaning: "vòi nước",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/tæp/",
        example: "bath taps",
        exampleTranslation: "vòi nước bồn tắm"
    },
    {
        word: "target",
        meaning: "nhắm mục tiêu, hướng tới",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈtɑːrɡɪt/",
        example: "target somebody/something He accused the group of deliberately targeting civilians.",
        exampleTranslation: "Anh ta buộc tội nhóm này cố tình nhắm vào dân thường."
    },
    {
        word: "tear",
        meaning: "vết rách",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ter/",
        example: "This sheet has a tear in it.",
        exampleTranslation: "Tấm ga này có một vết rách."
    },
    {
        word: "technological",
        meaning: "thuộc công nghệ",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌteknəˈlɑːdʒɪkl/",
        example: "technological advances",
        exampleTranslation: "những tiến bộ công nghệ"
    },
    {
        word: "teens",
        meaning: "tuổi thiếu niên",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/tiːnz/",
        example: "in your teens She began writing poetry in her teens.",
        exampleTranslation: "ở tuổi thiếu niên của cô ấy Cô ấy bắt đầu viết thơ khi còn ở tuổi thiếu niên."
    },
    {
        word: "temple",
        meaning: "đền thờ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈtempl/",
        example: "the Temple of Diana at Ephesus",
        exampleTranslation: "Đền thờ Diana tại Ephesus"
    },
    {
        word: "temporarily",
        meaning: "tạm thời",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˌtempəˈrerəli/",
        example: "We regret this service is temporarily unavailable.",
        exampleTranslation: "Chúng tôi rất tiếc dịch vụ này tạm thời không khả dụng."
    },
    {
        word: "temporary",
        meaning: "tạm thời",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈtempəreri/",
        example: "to hire temporary workers",
        exampleTranslation: "thuê công nhân tạm thời"
    },
    {
        word: "tendency",
        meaning: "xu hướng, khuynh hướng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈtendənsi/",
        example: "to display artistic tendencies",
        exampleTranslation: "thể hiện khuynh hướng nghệ thuật"
    },
    {
        word: "tension",
        meaning: "căng thẳng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈtenʃn/",
        example: "There is mounting tension along the border.",
        exampleTranslation: "Căng thẳng đang gia tăng dọc biên giới."
    },
    {
        word: "term",
        meaning: "gọi là, đặt tên",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/tɜːrm/",
        example: "term somebody/something + adj. At his age, he can hardly be termed young.",
        exampleTranslation: "Ở tuổi của anh ấy, khó có thể gọi anh ấy là trẻ."
    },
    {
        word: "terminal",
        meaning: "nhà ga, ga cuối, bến cuối",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈtɜːrmɪnl/",
        example: "A second terminal was opened last year.",
        exampleTranslation: "Một nhà ga thứ hai đã được mở vào năm ngoái."
    },
    {
        word: "terms",
        meaning: "điều khoản, điều kiện",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/tɜːrmz/",
        example: "peace terms",
        exampleTranslation: "các điều khoản hòa bình"
    },
    {
        word: "terribly",
        meaning: "rất, cực kỳ, kinh khủng",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈterəbli/",
        example: "I'm terribly sorry—did I hurt you?",
        exampleTranslation: "Tôi vô cùng xin lỗi—tôi có làm bạn đau không?"
    },
    {
        word: "terrify",
        meaning: "làm khiếp sợ, làm kinh hoàng",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈterɪfaɪ/",
        example: "Flying terrifies her.",
        exampleTranslation: "Việc bay làm cô ấy khiếp sợ."
    },
    {
        word: "territory",
        meaning: "lãnh thổ, khu vực, vùng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈterətɔːri/",
        example: "enemy/disputed/foreign territory",
        exampleTranslation: "lãnh thổ của địch/tranh chấp/nước ngoài"
    },
    {
        word: "terror",
        meaning: "sự kinh hoàng, sự khiếp sợ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈterər/",
        example: "a feeling of sheer/pure terror",
        exampleTranslation: "một cảm giác kinh hoàng tột độ/thuần túy"
    },
    {
        word: "terrorism",
        meaning: "chủ nghĩa khủng bố, khủng bố",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈterərɪzəm/",
        example: "an act of terrorism",
        exampleTranslation: "một hành động khủng bố"
    },
    {
        word: "terrorist",
        meaning: "kẻ khủng bố, khủng bố",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈterərɪst/",
        example: "The terrorists are threatening to blow up the plane.",
        exampleTranslation: "Những kẻ khủng bố đang đe dọa đánh bom máy bay."
    },
    {
        word: "testing",
        meaning: "sự thử nghiệm, sự kiểm tra",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈtestɪŋ/",
        example: "nuclear testing",
        exampleTranslation: "thử nghiệm hạt nhân"
    },
    {
        word: "textbook",
        meaning: "sách giáo khoa",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈtekstbʊk/",
        example: "a school/medical/history textbook",
        exampleTranslation: "một cuốn sách giáo khoa trường học/y học/lịch sử"
    },
    {
        word: "theft",
        meaning: "sự trộm cắp, vụ trộm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/θeft/",
        example: "car theft",
        exampleTranslation: "trộm ô tô"
    },
    {
        word: "therapist",
        meaning: "nhà trị liệu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈθerəpɪst/",
        example: "a speech therapist",
        exampleTranslation: "một nhà trị liệu ngôn ngữ"
    },
    {
        word: "therapy",
        meaning: "liệu pháp, sự điều trị",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈθerəpi/",
        example: "He is receiving therapy for cancer.",
        exampleTranslation: "Anh ấy đang điều trị ung thư."
    },
    {
        word: "thesis",
        meaning: "luận văn, luận điểm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈθiːsɪs/",
        example: "Students must submit a thesis on an agreed subject within four years.",
        exampleTranslation: "Sinh viên phải nộp luận văn về một đề tài đã thống nhất trong vòng bốn năm."
    },
    {
        word: "thorough",
        meaning: "kỹ lưỡng, triệt để, hoàn toàn",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈθɜːrəʊ/",
        example: "a thorough knowledge of the subject",
        exampleTranslation: "một kiến thức kỹ lưỡng về chủ đề này"
    },
    {
        word: "thoroughly",
        meaning: "kỹ lưỡng, hoàn toàn, triệt để",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈθɜːrəli/",
        example: "We thoroughly enjoyed ourselves.",
        exampleTranslation: "Chúng tôi đã hoàn toàn vui vẻ."
    },
    {
        word: "threat",
        meaning: "mối đe dọa, lời đe dọa",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/θret/",
        example: "threat against somebody/something to make threats against somebody",
        exampleTranslation: "đe dọa ai đó/cái gì đó; đưa ra những lời đe dọa chống lại ai đó"
    },
    {
        word: "threaten",
        meaning: "đe dọa, hăm dọa",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈθretn/",
        example: "threaten somebody/something They broke my windows and threatened me.",
        exampleTranslation: "đe dọa ai đó/cái gì đó; Họ đã đập vỡ cửa sổ của tôi và đe dọa tôi."
    },
    {
        word: "thumb",
        meaning: "ngón cái",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/θʌm/",
        example: "She still sucks her thumb when she's worried.",
        exampleTranslation: "Cô ấy vẫn mút ngón tay cái khi lo lắng."
    },
    {
        word: "thus",
        meaning: "do đó, vì vậy, như vậy",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ðʌs/",
        example: "Many scholars have argued thus.",
        exampleTranslation: "Nhiều học giả đã lập luận như vậy."
    },
    {
        word: "time",
        meaning: "tính giờ, bấm giờ, định thời gian",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/taɪm/",
        example: "‘How long does it take to get to Leeds from here?’ ‘I don’t know, I’ve never timed it.’",
        exampleTranslation: "'Mất bao lâu để đến Leeds từ đây?' 'Tôi không biết, tôi chưa bao giờ bấm giờ.'"
    },
    {
        word: "timing",
        meaning: "thời điểm, sự định thời gian",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈtaɪmɪŋ/",
        example: "The timing of the decision was a complete surprise.",
        exampleTranslation: "Thời điểm của quyết định là một bất ngờ hoàn toàn."
    },
    {
        word: "tissue",
        meaning: "khăn giấy, mô (sinh học)",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈtɪʃuː/",
        example: "a box of tissues",
        exampleTranslation: "một hộp khăn giấy"
    },
    {
        word: "title",
        meaning: "đặt tên, có tựa đề là",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈtaɪtl/",
        example: "be titled… Their first album was titled ‘Made in Valmez’.",
        exampleTranslation: "có tựa đề là… Album đầu tiên của họ có tựa đề ‘Made in Valmez’."
    },
    {
        word: "ton",
        meaning: "tấn (đơn vị đo lường), rất nhiều (không trang trọng)",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/tʌn/",
        example: "(informal) What have you got in this bag? It weighs a ton (= is very heavy).",
        exampleTranslation: "(không trang trọng) Bạn có gì trong túi này vậy? Nó nặng một tấn (= rất nặng)."
    },
    {
        word: "tone",
        meaning: "giọng điệu, sắc thái, tông màu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/təʊn/",
        example: "speaking in hushed/low/clipped/measured, etc. tones",
        exampleTranslation: "nói bằng giọng điệu nhỏ/thấp/ngắt quãng/có chừng mực, v.v."
    },
    {
        word: "tonne",
        meaning: "tấn (đơn vị đo lường, tương đương 1000kg)",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/tʌn/",
        example: "a record grain harvest of 236m tonnes",
        exampleTranslation: "một vụ thu hoạch ngũ cốc kỷ lục 236 triệu tấn"
    },
    {
        word: "tough",
        meaning: "khó khăn, dai, cứng rắn",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/tʌf/",
        example: "a tough childhood",
        exampleTranslation: "một tuổi thơ khó khăn"
    },
    {
        word: "tournament",
        meaning: "giải đấu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈtʊrnəmənt/",
        example: "a golf/tennis/soccer/chess tournament",
        exampleTranslation: "một giải đấu gôn/quần vợt/bóng đá/cờ vua"
    },
    {
        word: "trace",
        meaning: "tìm thấy, theo dõi, truy tìm",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/treɪs/",
        example: "We finally traced him to an address in Chicago.",
        exampleTranslation: "Cuối cùng chúng tôi đã truy tìm được anh ấy đến một địa chỉ ở Chicago."
    },
    {
        word: "track",
        meaning: "theo dõi, truy lùng, lần theo dấu vết",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/træk/",
        example: "track somebody/something hunters tracking and shooting bears",
        exampleTranslation: "theo dõi ai đó/cái gì đó; thợ săn theo dõi và bắn gấu"
    },
    {
        word: "trading",
        meaning: "sự buôn bán, giao dịch",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈtreɪdɪŋ/",
        example: "new laws on Sunday trading (= shops being open on Sundays)",
        exampleTranslation: "luật mới về việc buôn bán vào Chủ Nhật (= các cửa hàng mở cửa vào Chủ Nhật)"
    },
    {
        word: "tragedy",
        meaning: "bi kịch, thảm kịch",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈtrædʒədi/",
        example: "It's a tragedy that she died so young.",
        exampleTranslation: "Thật là một bi kịch khi cô ấy mất khi còn quá trẻ."
    },
    {
        word: "tragic",
        meaning: "bi thảm, bi kịch",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈtrædʒɪk/",
        example: "He was killed in a tragic accident at the age of 24.",
        exampleTranslation: "Anh ấy đã thiệt mạng trong một tai nạn bi thảm ở tuổi 24."
    },
    {
        word: "trait",
        meaning: "đặc điểm, nét tính cách",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/treɪt/",
        example: "personality traits",
        exampleTranslation: "những đặc điểm tính cách"
    },
    {
        word: "transfer",
        meaning: "sự chuyển giao, sự truyền tải, sự di chuyển",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈtrænsfɜːr/",
        example: "electronic data transfer",
        exampleTranslation: "truyền dữ liệu điện tử"
    },
    {
        word: "transform",
        meaning: "biến đổi, thay đổi",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/trænsˈfɔːrm/",
        example: "transform something/somebody (into something) The photochemical reactions transform the light into electrical impulses.",
        exampleTranslation: "biến đổi cái gì/ai đó (thành cái gì) Các phản ứng quang hóa biến ánh sáng thành xung điện."
    },
    {
        word: "transition",
        meaning: "sự chuyển đổi, quá trình chuyển tiếp",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/trænˈzɪʃn/",
        example: "transition from something to something the transition from school to full-time work",
        exampleTranslation: "sự chuyển đổi từ cái gì sang cái gì; quá trình chuyển tiếp từ trường học sang công việc toàn thời gian."
    },
    {
        word: "transmit",
        meaning: "truyền tải, phát",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/trænzˈmɪt/",
        example: "signals transmitted from a satellite",
        exampleTranslation: "tín hiệu được truyền từ vệ tinh"
    },
    {
        word: "transportation",
        meaning: "giao thông vận tải, phương tiện đi lại",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌtrænspərˈteɪʃn/",
        example: "public transportation (= the system of buses, trains, etc. provided for people to travel from one place to another)",
        exampleTranslation: "phương tiện giao thông công cộng (= hệ thống xe buýt, xe lửa, v.v. được cung cấp để mọi người đi lại từ nơi này đến nơi khác)"
    },
    {
        word: "trap",
        meaning: "cái bẫy, cạm bẫy",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/træp/",
        example: "a fox with its leg in a trap",
        exampleTranslation: "một con cáo bị kẹt chân trong bẫy"
    },
    {
        word: "treasure",
        meaning: "kho báu, châu báu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈtreʒər/",
        example: "buried treasure",
        exampleTranslation: "kho báu bị chôn vùi"
    },
    {
        word: "trial",
        meaning: "phiên tòa xét xử, thử nghiệm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈtraɪəl/",
        example: "a murder/criminal trial",
        exampleTranslation: "phiên tòa xét xử tội giết người/hình sự"
    },
    {
        word: "tribe",
        meaning: "bộ lạc, bộ tộc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/traɪb/",
        example: "They were a nomadic horse-riding tribe.",
        exampleTranslation: "Họ là một bộ lạc du mục cưỡi ngựa."
    },
    {
        word: "trigger",
        meaning: "gây ra, kích hoạt",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈtrɪɡər/",
        example: "Nuts can trigger off a violent allergic reaction.",
        exampleTranslation: "Các loại hạt có thể gây ra phản ứng dị ứng dữ dội."
    },
    {
        word: "trillion",
        meaning: "nghìn tỷ",
        partOfSpeech: "number",
        level: "B2",
        phonetic: "/ˈtrɪljən/",
        example: "This is an example of trillion.",
        exampleTranslation: "Đây là một ví dụ về nghìn tỷ."
    },
    {
        word: "trip",
        meaning: "vấp ngã, làm vấp",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/trɪp/",
        example: "She tripped and fell.",
        exampleTranslation: "Cô ấy vấp ngã."
    },
    {
        word: "troop",
        meaning: "quân đội, binh lính (số nhiều)",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/truːp/",
        example: "They announced the withdrawal of 12 000 troops from the area.",
        exampleTranslation: "Họ đã thông báo rút 12.000 quân khỏi khu vực."
    },
    {
        word: "tropical",
        meaning: "nhiệt đới",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈtrɑːpɪkl/",
        example: "tropical fish/birds/fruit",
        exampleTranslation: "cá/chim/hoa quả nhiệt đới"
    },
    {
        word: "trouble",
        meaning: "làm phiền, gây lo lắng",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈtrʌbl/",
        example: "What is it that's troubling you?",
        exampleTranslation: "Điều gì đang làm phiền bạn vậy?"
    },
    {
        word: "truly",
        meaning: "thực sự, thật sự",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈtruːli/",
        example: "She truly believes that none of this is her fault.",
        exampleTranslation: "Cô ấy thực sự tin rằng không có điều gì trong số này là lỗi của cô ấy."
    },
    {
        word: "trust",
        meaning: "lòng tin, sự tin tưởng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/trʌst/",
        example: "Our partnership is based on trust.",
        exampleTranslation: "Mối quan hệ đối tác của chúng tôi dựa trên sự tin tưởng."
    },
    {
        word: "try",
        meaning: "sự cố gắng, thử",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/traɪ/",
        example: "I doubt they'll be able to help but it's worth a try (= worth asking them).",
        exampleTranslation: "Tôi nghi ngờ họ có thể giúp được nhưng cũng đáng thử (= đáng để hỏi họ)."
    },
    {
        word: "tsunami",
        meaning: "sóng thần",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/tsuːˈnɑːmi/",
        example: "A tsunami early warning system was set up in Hawaii.",
        exampleTranslation: "Một hệ thống cảnh báo sớm sóng thần đã được thiết lập ở Hawaii."
    },
    {
        word: "tune",
        meaning: "giai điệu, điệu nhạc",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/tuːn/",
        example: "to sing/whistle a tune",
        exampleTranslation: "hát/huýt sáo một giai điệu"
    },
    {
        word: "tunnel",
        meaning: "đường hầm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈtʌnl/",
        example: "a railway/railroad tunnel",
        exampleTranslation: "đường hầm xe lửa"
    },
    {
        word: "ultimate",
        meaning: "cuối cùng, tối hậu",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈʌltɪmət/",
        example: "our ultimate goal/aim/objective/target",
        exampleTranslation: "mục tiêu/mục đích cuối cùng của chúng ta"
    },
    {
        word: "ultimately",
        meaning: "cuối cùng thì, rốt cuộc",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈʌltɪmətli/",
        example: "A poor diet will ultimately lead to illness.",
        exampleTranslation: "Chế độ ăn uống kém cuối cùng sẽ dẫn đến bệnh tật."
    },
    {
        word: "unacceptable",
        meaning: "không thể chấp nhận được",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌʌnəkˈseptəbl/",
        example: "Such behaviour is totally unacceptable in a civilized society.",
        exampleTranslation: "Hành vi như vậy hoàn toàn không thể chấp nhận được trong một xã hội văn minh."
    },
    {
        word: "uncertainty",
        meaning: "sự không chắc chắn, sự bấp bênh",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ʌnˈsɜːrtnti/",
        example: "There is considerable uncertainty about the company's future.",
        exampleTranslation: "Có sự không chắc chắn đáng kể về tương lai của công ty."
    },
    {
        word: "unconscious",
        meaning: "bất tỉnh, vô thức",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ʌnˈkɑːnʃəs/",
        example: "They found him lying unconscious on the floor.",
        exampleTranslation: "Họ tìm thấy anh ấy nằm bất tỉnh trên sàn nhà."
    },
    {
        word: "undergo",
        meaning: "trải qua, chịu đựng",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˌʌndərˈɡəʊ/",
        example: "to undergo tests/trials/repairs",
        exampleTranslation: "trải qua các cuộc kiểm tra/thử nghiệm/sửa chữa"
    },
    {
        word: "undertake",
        meaning: "đảm nhận, thực hiện, cam kết",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˌʌndərˈteɪk/",
        example: "to undertake a task/project",
        exampleTranslation: "đảm nhận một nhiệm vụ/dự án"
    },
    {
        word: "unexpected",
        meaning: "bất ngờ, không mong đợi",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌʌnɪkˈspektɪd/",
        example: "Things took an unexpected turn.",
        exampleTranslation: "Mọi thứ đã rẽ một hướng bất ngờ."
    },
    {
        word: "unfold",
        meaning: "mở ra, trải ra, hé lộ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ʌnˈfəʊld/",
        example: "to unfold a map",
        exampleTranslation: "mở một tấm bản đồ"
    },
    {
        word: "unfortunate",
        meaning: "không may, bất hạnh, đáng tiếc",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ʌnˈfɔːrtʃənət/",
        example: "He was unfortunate to lose in the final round.",
        exampleTranslation: "Anh ấy không may mắn thua ở vòng chung kết."
    },
    {
        word: "unique",
        meaning: "độc đáo, độc nhất vô nhị",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/juˈniːk/",
        example: "Everyone's fingerprints are unique.",
        exampleTranslation: "Dấu vân tay của mỗi người là độc nhất."
    },
    {
        word: "unite",
        meaning: "đoàn kết, thống nhất, hợp nhất",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/juˈnaɪt/",
        example: "Nationalist parties united to oppose the government's plans.",
        exampleTranslation: "Các đảng theo chủ nghĩa dân tộc đã đoàn kết để phản đối các kế hoạch của chính phủ."
    },
    {
        word: "unity",
        meaning: "sự đoàn kết, sự thống nhất",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈjuːnəti/",
        example: "European unity",
        exampleTranslation: "Sự đoàn kết của châu Âu"
    },
    {
        word: "universal",
        meaning: "phổ quát, phổ biến, toàn cầu",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌjuːnɪˈvɜːrsl/",
        example: "Such problems are a universal feature of old age.",
        exampleTranslation: "Những vấn đề như vậy là một đặc điểm phổ biến của tuổi già."
    },
    {
        word: "universe",
        meaning: "vũ trụ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈjuːnɪvɜːrs/",
        example: "in the universe Could there be intelligent life elsewhere in the universe?",
        exampleTranslation: "Liệu có thể có sự sống thông minh ở nơi nào khác trong vũ trụ không?"
    },
    {
        word: "unknown",
        meaning: "không rõ, chưa biết",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˌʌnˈnəʊn/",
        example: "A previously unknown group claimed responsibility for the bombing.",
        exampleTranslation: "Một nhóm trước đây chưa được biết đến đã nhận trách nhiệm về vụ đánh bom."
    },
    {
        word: "upper",
        meaning: "trên, phía trên",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈʌpər/",
        example: "her upper lip",
        exampleTranslation: "môi trên của cô ấy"
    },
    {
        word: "upwards",
        meaning: "hướng lên, lên trên",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈʌpwərdz/",
        example: "Place your hands on the table with the palms facing upwards.",
        exampleTranslation: "Đặt tay của bạn lên bàn với lòng bàn tay hướng lên trên."
    },
    {
        word: "urban",
        meaning: "đô thị, thành thị",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈɜːrbən/",
        example: "urban and rural communities",
        exampleTranslation: "các cộng đồng đô thị và nông thôn"
    },
    {
        word: "urge",
        meaning: "thúc giục, khuyên nhủ mạnh mẽ",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ɜːrdʒ/",
        example: "If you ever get the chance to visit this place, I strongly urge you to do so.",
        exampleTranslation: "Nếu bạn có cơ hội đến thăm nơi này, tôi thực sự khuyên bạn nên làm vậy."
    },
    {
        word: "urgent",
        meaning: "khẩn cấp, cấp bách",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈɜːrdʒənt/",
        example: "The police have issued an urgent appeal for information.",
        exampleTranslation: "Cảnh sát đã đưa ra lời kêu gọi khẩn cấp để tìm kiếm thông tin."
    },
    {
        word: "usage",
        meaning: "sự sử dụng, cách dùng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈjuːzɪdʒ/",
        example: "a book on current English usage",
        exampleTranslation: "một cuốn sách về cách sử dụng tiếng Anh hiện hành"
    },
    {
        word: "useless",
        meaning: "vô dụng, không ích gì",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈjuːsləs/",
        example: "This pen is useless.",
        exampleTranslation: "Cây bút này vô dụng."
    },
    {
        word: "valid",
        meaning: "hợp lệ, có giá trị",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈvælɪd/",
        example: "Do you have a valid passport?",
        exampleTranslation: "Bạn có hộ chiếu hợp lệ không?"
    },
    {
        word: "value",
        meaning: "đánh giá cao, coi trọng",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈvæljuː/",
        example: "value somebody/something He has come to value her advice and support.",
        exampleTranslation: "Anh ấy đã bắt đầu đánh giá cao lời khuyên và sự hỗ trợ của cô ấy."
    },
    {
        word: "variation",
        meaning: "sự biến đổi, sự thay đổi",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˌveriˈeɪʃn/",
        example: "The dial records very slight variations in pressure.",
        exampleTranslation: "Mặt số ghi lại những biến đổi rất nhỏ về áp suất."
    },
    {
        word: "vary",
        meaning: "thay đổi, biến đổi",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈværi/",
        example: "New techniques were introduced with varying degrees of success.",
        exampleTranslation: "Các kỹ thuật mới được giới thiệu với các mức độ thành công khác nhau."
    },
    {
        word: "vast",
        meaning: "rộng lớn, bao la",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/væst/",
        example: "a vast area of forest",
        exampleTranslation: "một khu rừng rộng lớn"
    },
    {
        word: "venue",
        meaning: "địa điểm (tổ chức sự kiện)",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈvenjuː/",
        example: "The band will be playing at 20 different venues on their UK tour.",
        exampleTranslation: "Ban nhạc sẽ biểu diễn tại 20 địa điểm khác nhau trong chuyến lưu diễn ở Vương quốc Anh của họ."
    },
    {
        word: "vertical",
        meaning: "thẳng đứng, dọc",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈvɜːrtɪkl/",
        example: "the vertical axis of the graph",
        exampleTranslation: "trục dọc của biểu đồ"
    },
    {
        word: "very",
        meaning: "chính, đúng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈveri/",
        example: "He might be phoning her at this very moment.",
        exampleTranslation: "Anh ấy có thể đang gọi điện cho cô ấy vào đúng khoảnh khắc này."
    },
    {
        word: "via",
        meaning: "qua, thông qua",
        partOfSpeech: "preposition",
        level: "B2",
        phonetic: "/ˈviːə/",
        example: "We flew home via Dubai.",
        exampleTranslation: "Chúng tôi bay về nhà qua Dubai."
    },
    {
        word: "victory",
        meaning: "chiến thắng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈvɪktəri/",
        example: "to win a narrow victory",
        exampleTranslation: "giành một chiến thắng sít sao"
    },
    {
        word: "viewpoint",
        meaning: "quan điểm, góc nhìn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈvjuːpɔɪnt/",
        example: "from a… viewpoint Try looking at things from a different viewpoint.",
        exampleTranslation: "Hãy thử nhìn mọi thứ từ một quan điểm khác."
    },
    {
        word: "violence",
        meaning: "bạo lực",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈvaɪələns/",
        example: "Police do not think this killing was a random act of violence.",
        exampleTranslation: "Cảnh sát không nghĩ vụ giết người này là một hành động bạo lực ngẫu nhiên."
    },
    {
        word: "virtual",
        meaning: "ảo",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈvɜːrtʃuəl/",
        example: "a system to help programmers create virtual environments",
        exampleTranslation: "một hệ thống giúp lập trình viên tạo ra môi trường ảo"
    },
    {
        word: "visa",
        meaning: "thị thực, visa",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈviːzə/",
        example: "to apply for a visa",
        exampleTranslation: "xin thị thực"
    },
    {
        word: "visible",
        meaning: "có thể nhìn thấy, rõ ràng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈvɪzəbl/",
        example: "The house is clearly visible from the beach.",
        exampleTranslation: "Ngôi nhà có thể nhìn thấy rõ ràng từ bãi biển."
    },
    {
        word: "vision",
        meaning: "thị lực, tầm nhìn, viễn cảnh",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈvɪʒn/",
        example: "to have good/perfect/poor/blurred/normal vision",
        exampleTranslation: "có thị lực tốt/hoàn hảo/kém/mờ/bình thường"
    },
    {
        word: "visual",
        meaning: "thuộc về thị giác, trực quan",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈvɪʒuəl/",
        example: "the visual arts",
        exampleTranslation: "các loại hình nghệ thuật thị giác"
    },
    {
        word: "vital",
        meaning: "thiết yếu, quan trọng sống còn",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈvaɪtl/",
        example: "vital for somebody/something the vitamins that are vital for health",
        exampleTranslation: "các vitamin thiết yếu cho sức khỏe"
    },
    {
        word: "vitamin",
        meaning: "vitamin",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈvaɪtəmɪn/",
        example: "vitamin A/B/D/E",
        exampleTranslation: "vitamin A/B/D/E"
    },
    {
        word: "volume",
        meaning: "thể tích, khối lượng, âm lượng, tập (sách)",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈvɑːljəm/",
        example: "volume of something How do you measure the volume of a gas?",
        exampleTranslation: "Bạn đo thể tích của một chất khí như thế nào?"
    },
    {
        word: "voluntary",
        meaning: "tự nguyện, tình nguyện",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈvɑːlənteri/",
        example: "a voluntary agreement",
        exampleTranslation: "một thỏa thuận tự nguyện"
    },
    {
        word: "voting",
        meaning: "việc bỏ phiếu, sự bầu cử",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈvəʊtɪŋ/",
        example: "He was eliminated in the first round of voting.",
        exampleTranslation: "Anh ấy đã bị loại ở vòng bỏ phiếu đầu tiên."
    },
    {
        word: "wage",
        meaning: "tiền lương (thường theo tuần/giờ)",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/weɪdʒ/",
        example: "wage/wages of something wages of £300 a week",
        exampleTranslation: "tiền lương 300 bảng một tuần"
    },
    {
        word: "wander",
        meaning: "đi lang thang, đi dạo",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ˈwɑːndər/",
        example: "+ adv./prep. She wandered aimlessly around the streets.",
        exampleTranslation: "Cô ấy đi lang thang vô định trên đường phố."
    },
    {
        word: "warming",
        meaning: "sự nóng lên, sự ấm lên",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈwɔːrmɪŋ/",
        example: "atmospheric warming",
        exampleTranslation: "sự nóng lên của khí quyển"
    },
    {
        word: "way",
        meaning: "rất xa, nhiều (dùng để nhấn mạnh)",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/weɪ/",
        example: "She finished the race way ahead of the other runners.",
        exampleTranslation: "Cô ấy về đích trước các vận động viên khác rất xa."
    },
    {
        word: "weakness",
        meaning: "điểm yếu, sự yếu ớt",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈwiːknəs/",
        example: "The disease causes progressive muscle weakness.",
        exampleTranslation: "Căn bệnh gây ra tình trạng yếu cơ tiến triển."
    },
    {
        word: "wealth",
        meaning: "của cải, sự giàu có, tài sản",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/welθ/",
        example: "the desire to gain wealth and power",
        exampleTranslation: "khát vọng đạt được của cải và quyền lực"
    },
    {
        word: "wealthy",
        meaning: "giàu có, sung túc",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈwelθi/",
        example: "a wealthy businessman/individual/family",
        exampleTranslation: "một doanh nhân/cá nhân/gia đình giàu có"
    },
    {
        word: "weekly",
        meaning: "hàng tuần, mỗi tuần một lần",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈwiːkli/",
        example: "weekly meetings",
        exampleTranslation: "các cuộc họp hàng tuần"
    },
    {
        word: "weird",
        meaning: "kỳ lạ, kỳ quái",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/wɪrd/",
        example: "I had a really weird dream last night.",
        exampleTranslation: "Đêm qua tôi đã có một giấc mơ thực sự kỳ lạ."
    },
    {
        word: "welfare",
        meaning: "phúc lợi, an sinh",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈwelfer/",
        example: "We are concerned about the child's welfare.",
        exampleTranslation: "Chúng tôi lo lắng về phúc lợi của đứa trẻ."
    },
    {
        word: "wheat",
        meaning: "lúa mì",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/wiːt/",
        example: "wheat flour",
        exampleTranslation: "bột mì"
    },
    {
        word: "whereas",
        meaning: "trong khi, trái lại",
        partOfSpeech: "conjunction",
        level: "B2",
        phonetic: "/ˌwerˈæz/",
        example: "Some of the studies show positive results, whereas others do not.",
        exampleTranslation: "Một số nghiên cứu cho thấy kết quả tích cực, trong khi những nghiên cứu khác thì không."
    },
    {
        word: "wherever",
        meaning: "bất cứ nơi nào, dù ở đâu",
        partOfSpeech: "conjunction",
        level: "B2",
        phonetic: "/werˈevər/",
        example: "Sit wherever you like.",
        exampleTranslation: "Cứ ngồi bất cứ nơi nào bạn thích."
    },
    {
        word: "whisper",
        meaning: "tiếng thì thầm, lời thì thầm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈwɪspər/",
        example: "in a whisper ‘I love you,’ he said in a whisper.",
        exampleTranslation: "'Anh yêu em,' anh ấy nói thầm."
    },
    {
        word: "whoever",
        meaning: "bất cứ ai, ai đó",
        partOfSpeech: "pronoun",
        level: "B2",
        phonetic: "/huːˈevər/",
        example: "Whoever says that is a liar.",
        exampleTranslation: "Bất cứ ai nói điều đó đều là kẻ nói dối."
    },
    {
        word: "whom",
        meaning: "ai (tân ngữ), người mà",
        partOfSpeech: "pronoun",
        level: "B2",
        phonetic: "/huːm/",
        example: "Whom did they invite?",
        exampleTranslation: "Họ đã mời ai?"
    },
    {
        word: "widely",
        meaning: "rộng rãi, phổ biến",
        partOfSpeech: "adverb",
        level: "B2",
        phonetic: "/ˈwaɪdli/",
        example: "The term is widely used in everyday speech.",
        exampleTranslation: "Thuật ngữ này được sử dụng rộng rãi trong giao tiếp hàng ngày."
    },
    {
        word: "widespread",
        meaning: "lan rộng, phổ biến rộng khắp",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈwaɪdspred/",
        example: "The storm caused widespread damage.",
        exampleTranslation: "Cơn bão đã gây ra thiệt hại trên diện rộng."
    },
    {
        word: "wildlife",
        meaning: "động vật hoang dã, đời sống hoang dã",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈwaɪldlaɪf/",
        example: "policies designed to protect wildlife",
        exampleTranslation: "các chính sách được thiết kế để bảo vệ động vật hoang dã"
    },
    {
        word: "willing",
        meaning: "sẵn lòng, sẵn sàng",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/ˈwɪlɪŋ/",
        example: "Many consumers are willing to pay more for organic food",
        exampleTranslation: "Nhiều người tiêu dùng sẵn lòng trả nhiều tiền hơn cho thực phẩm hữu cơ"
    },
    {
        word: "wind",
        meaning: "uốn lượn, quanh co",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/waɪnd/",
        example: "wind + adv./prep. The path wound down to the beach.",
        exampleTranslation: "Con đường uốn lượn xuống bãi biển."
    },
    {
        word: "wire",
        meaning: "dây điện, dây cáp, dây kim loại",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈwaɪər/",
        example: "a coil of copper wire",
        exampleTranslation: "một cuộn dây đồng"
    },
    {
        word: "wisdom",
        meaning: "sự khôn ngoan, trí tuệ",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈwɪzdəm/",
        example: "She was known to be a woman of great wisdom.",
        exampleTranslation: "Cô ấy được biết đến là một người phụ nữ có trí tuệ tuyệt vời."
    },
    {
        word: "wise",
        meaning: "khôn ngoan, sáng suốt",
        partOfSpeech: "adjective",
        level: "B2",
        phonetic: "/waɪz/",
        example: "a wise man",
        exampleTranslation: "một người đàn ông khôn ngoan"
    },
    {
        word: "withdraw",
        meaning: "rút tiền, rút lại, rút lui",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/wɪθˈdrɔː/",
        example: "With this account, you can withdraw up to £300 a day.",
        exampleTranslation: "Với tài khoản này, bạn có thể rút tối đa 300 bảng một ngày."
    },
    {
        word: "witness",
        meaning: "nhân chứng, người chứng kiến",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈwɪtnəs/",
        example: "He failed to interview a key witness.",
        exampleTranslation: "Anh ta đã không phỏng vấn một nhân chứng chủ chốt."
    },
    {
        word: "workforce",
        meaning: "lực lượng lao động, công nhân viên",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈwɜːrkfɔːrs/",
        example: "The factory has a 1 000-strong workforce.",
        exampleTranslation: "Nhà máy có một lực lượng lao động gồm 1.000 người."
    },
    {
        word: "workplace",
        meaning: "nơi làm việc, chỗ làm",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈwɜːrkpleɪs/",
        example: "the introduction of new technology into the workplace",
        exampleTranslation: "sự giới thiệu công nghệ mới vào nơi làm việc"
    },
    {
        word: "workshop",
        meaning: "xưởng, hội thảo",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/ˈwɜːrkʃɑːp/",
        example: "There will be the opportunity for practical theatre work in drama workshops.",
        exampleTranslation: "Sẽ có cơ hội thực hành công việc sân khấu trong các buổi hội thảo kịch nghệ."
    },
    {
        word: "worm",
        meaning: "giun, sâu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/wɜːrm/",
        example: "birds looking for worms",
        exampleTranslation: "những con chim đang tìm giun"
    },
    {
        word: "worse",
        meaning: "điều tồi tệ hơn, cái tệ hơn",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/wɜːrs/",
        example: "I'm afraid there is worse to come.",
        exampleTranslation: "Tôi e rằng điều tồi tệ hơn vẫn chưa đến."
    },
    {
        word: "worst",
        meaning: "điều tồi tệ nhất, cái tệ nhất",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/wɜːrst/",
        example: "When they did not hear from her, they feared the worst.",
        exampleTranslation: "Khi họ không nghe tin gì từ cô ấy, họ đã lo sợ điều tồi tệ nhất."
    },
    {
        word: "worth",
        meaning: "giá trị, trị giá",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/wɜːrθ/",
        example: "The winner will receive fifty pounds' worth of books.",
        exampleTranslation: "Người thắng cuộc sẽ nhận được sách trị giá năm mươi bảng Anh."
    },
    {
        word: "wound",
        meaning: "vết thương",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/wuːnd/",
        example: "a gunshot/stab wound",
        exampleTranslation: "vết thương do đạn bắn/đâm"
    },
    {
        word: "wrap",
        meaning: "gói, bọc",
        partOfSpeech: "verb",
        level: "B2",
        phonetic: "/ræp/",
        example: "up He spent the evening wrapping up the Christmas presents.",
        exampleTranslation: "Anh ấy đã dành cả buổi tối để gói quà Giáng sinh."
    },
    {
        word: "wrist",
        meaning: "cổ tay",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/rɪst/",
        example: "She's broken her wrist.",
        exampleTranslation: "Cô ấy đã bị gãy cổ tay."
    },
    {
        word: "wrong",
        meaning: "điều sai, điều xấu",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/rɔːŋ/",
        example: "Children must be taught the difference between right and wrong.",
        exampleTranslation: "Trẻ em phải được dạy sự khác biệt giữa đúng và sai."
    },
    {
        word: "yet",
        meaning: "tuy nhiên, nhưng mà, vậy mà",
        partOfSpeech: "conjunction",
        level: "B2",
        phonetic: "/jet/",
        example: "It's a small car, yet it's surprisingly spacious.",
        exampleTranslation: "Đó là một chiếc xe nhỏ, tuy nhiên nó rộng rãi một cách đáng ngạc nhiên."
    },
    {
        word: "zone",
        meaning: "khu vực, vùng",
        partOfSpeech: "noun",
        level: "B2",
        phonetic: "/zəʊn/",
        example: "a war/combat/demilitarized/exclusion zone",
        exampleTranslation: "một khu vực chiến tranh/chiến đấu/phi quân sự/cấm vào"
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
