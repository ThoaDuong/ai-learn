/**
 * B1 Level Vocabulary Seed Script
 * Auto-generated from b1-words-raw.json by enrich-b1-words.ts
 * Run: npx tsx scripts/b1-vocabulary-seed.ts
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

const b1Vocabulary: Omit<VocabularySeed, "userId" | "createdAt">[] = [
    {
        word: "absolutely",
        meaning: "hoàn toàn, chắc chắn",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈæbsəluːtli/",
        example: "You're absolutely right.",
        exampleTranslation: "Bạn hoàn toàn đúng."
    },
    {
        word: "academic",
        meaning: "thuộc học thuật, hàn lâm",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˌækəˈdemɪk/",
        example: "high/low academic standards",
        exampleTranslation: "tiêu chuẩn học thuật cao/thấp"
    },
    {
        word: "access",
        meaning: "sự tiếp cận, quyền truy cập",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈækses/",
        example: "High-speed internet access has become a necessity.",
        exampleTranslation: "Truy cập internet tốc độ cao đã trở thành một nhu cầu thiết yếu."
    },
    {
        word: "accommodation",
        meaning: "chỗ ở",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/əˌkɑːməˈdeɪʃn/",
        example: "rented/temporary accommodation",
        exampleTranslation: "chỗ ở cho thuê/tạm thời"
    },
    {
        word: "account",
        meaning: "tài khoản",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/əˈkaʊnt/",
        example: "I don't have a bank account.",
        exampleTranslation: "Tôi không có tài khoản ngân hàng."
    },
    {
        word: "achievement",
        meaning: "thành tích, sự đạt được",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/əˈtʃiːvmənt/",
        example: "the greatest scientific achievement of the decade",
        exampleTranslation: "thành tựu khoa học vĩ đại nhất của thập kỷ"
    },
    {
        word: "act",
        meaning: "hành động, đạo luật",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ækt/",
        example: "You have committed a serious criminal act.",
        exampleTranslation: "Bạn đã thực hiện một hành vi phạm tội nghiêm trọng."
    },
    {
        word: "ad",
        meaning: "quảng cáo",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/æd/",
        example: "The TV ads were first run last year.",
        exampleTranslation: "Các quảng cáo trên TV lần đầu được phát sóng vào năm ngoái."
    },
    {
        word: "addition",
        meaning: "sự bổ sung, phụ lục",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/əˈdɪʃn/",
        example: "All of these technologies are fairly recent additions.",
        exampleTranslation: "Tất cả những công nghệ này đều là những bổ sung khá mới."
    },
    {
        word: "admire",
        meaning: "ngưỡng mộ, thán phục",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ədˈmaɪər/",
        example: "admire somebody/something I really admire your enthusiasm.",
        exampleTranslation: "ngưỡng mộ ai/cái gì Tôi thực sự ngưỡng mộ sự nhiệt tình của bạn."
    },
    {
        word: "admit",
        meaning: "thừa nhận, thú nhận",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ədˈmɪt/",
        example: "It was a stupid thing to do, I admit.",
        exampleTranslation: "Đó là một việc ngu ngốc phải làm, tôi thừa nhận."
    },
    {
        word: "advanced",
        meaning: "tiên tiến, hiện đại",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ədˈvænst/",
        example: "Scientists are working on highly advanced technology to replace fossil fuels.",
        exampleTranslation: "Các nhà khoa học đang làm việc với công nghệ cực kỳ tiên tiến để thay thế nhiên liệu hóa thạch."
    },
    {
        word: "advise",
        meaning: "khuyên, tư vấn",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ədˈvaɪz/",
        example: "advise against doing something I would strongly advise against going out on your own.",
        exampleTranslation: "khuyên không nên làm gì Tôi thực sự khuyên bạn không nên đi ra ngoài một mình."
    },
    {
        word: "afford",
        meaning: "có đủ khả năng (chi trả)",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/əˈfɔːrd/",
        example: "Can we afford a new car?",
        exampleTranslation: "Chúng ta có đủ khả năng mua một chiếc xe mới không?"
    },
    {
        word: "age",
        meaning: "già đi, lớn tuổi",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/eɪdʒ/",
        example: "As he aged, his memory got worse.",
        exampleTranslation: "Khi ông ấy già đi, trí nhớ của ông ấy trở nên tồi tệ hơn."
    },
    {
        word: "aged",
        meaning: "ở độ tuổi, đã được (năm)",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "",
        example: "They have two children aged six and nine.",
        exampleTranslation: "Họ có hai đứa con sáu và chín tuổi."
    },
    {
        word: "agent",
        meaning: "đại lý, tác nhân",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈeɪdʒənt/",
        example: "Our agent in New York deals with all US sales.",
        exampleTranslation: "Đại lý của chúng tôi tại New York phụ trách tất cả các đơn hàng bán tại Mỹ."
    },
    {
        word: "agreement",
        meaning: "sự đồng ý, thỏa thuận",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/əˈɡriːmənt/",
        example: "an international peace agreement",
        exampleTranslation: "một hiệp định hòa bình quốc tế"
    },
    {
        word: "ahead",
        meaning: "phía trước, trước",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/əˈhed/",
        example: "I'll run ahead and warn them.",
        exampleTranslation: "Tôi sẽ chạy trước để báo trước cho họ."
    },
    {
        word: "aim",
        meaning: "mục tiêu, ý định",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/eɪm/",
        example: "the stated aims of the study",
        exampleTranslation: "các mục tiêu đã nêu của nghiên cứu"
    },
    {
        word: "alarm",
        meaning: "báo động, chuông báo động",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/əˈlɑːrm/",
        example: "She decided to sound the alarm (= warn people that the situation was dangerous).",
        exampleTranslation: "Cô ấy quyết định gióng lên hồi chuông cảnh báo (= cảnh báo mọi người rằng tình hình rất nguy hiểm)."
    },
    {
        word: "album",
        meaning: "album",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈælbəm/",
        example: "a photo album",
        exampleTranslation: "một album ảnh"
    },
    {
        word: "alcohol",
        meaning: "rượu, cồn",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈælkəhɔːl/",
        example: "He never drinks alcohol.",
        exampleTranslation: "Anh ấy không bao giờ uống rượu."
    },
    {
        word: "alcoholic",
        meaning: "có cồn",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˌælkəˈhɑːlɪk/",
        example: "alcoholic drinks/beverages",
        exampleTranslation: "đồ uống có cồn/rượu"
    },
    {
        word: "alternative",
        meaning: "khác, thay thế",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ɔːlˈtɜːrnətɪv/",
        example: "The road was closed so we had to find an alternative route.",
        exampleTranslation: "Con đường đã bị đóng nên chúng tôi phải tìm một con đường khác."
    },
    {
        word: "amazed",
        meaning: "kinh ngạc, sững sờ",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/əˈmeɪzd/",
        example: "an amazed look",
        exampleTranslation: "một vẻ mặt kinh ngạc"
    },
    {
        word: "ambition",
        meaning: "tham vọng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/æmˈbɪʃn/",
        example: "She had fulfilled her lifelong ambition.",
        exampleTranslation: "Cô ấy đã thực hiện được tham vọng cả đời mình."
    },
    {
        word: "ambitious",
        meaning: "tham vọng",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/æmˈbɪʃəs/",
        example: "a fiercely ambitious young manager",
        exampleTranslation: "một quản lý trẻ đầy tham vọng"
    },
    {
        word: "analyse",
        meaning: "phân tích",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈænəlaɪz/",
        example: "The job involves collecting and analysing data.",
        exampleTranslation: "Công việc bao gồm thu thập và phân tích dữ liệu."
    },
    {
        word: "analysis",
        meaning: "sự phân tích",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/əˈnæləsɪs/",
        example: "statistical/data analysis",
        exampleTranslation: "phân tích thống kê/dữ liệu"
    },
    {
        word: "announce",
        meaning: "thông báo, công bố",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/əˈnaʊns/",
        example: "He officially announced his intention to resign at today's press conference.",
        exampleTranslation: "Ông ấy chính thức công bố ý định từ chức tại buổi họp báo hôm nay."
    },
    {
        word: "announcement",
        meaning: "thông báo, lời tuyên bố",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/əˈnaʊnsmənt/",
        example: "to make an announcement",
        exampleTranslation: "đưa ra một thông báo"
    },
    {
        word: "annoy",
        meaning: "làm phiền, gây khó chịu",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/əˈnɔɪ/",
        example: "His constant joking was beginning to annoy her.",
        exampleTranslation: "Sự đùa cợt không ngừng của anh ấy bắt đầu làm cô ấy khó chịu."
    },
    {
        word: "annoyed",
        meaning: "khó chịu, bực mình",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/əˈnɔɪd/",
        example: "annoyed with somebody at/about something He was beginning to get very annoyed with me about my carelessness.",
        exampleTranslation: "khó chịu với ai đó về điều gì đó Anh ấy bắt đầu rất khó chịu với tôi về sự bất cẩn của mình."
    },
    {
        word: "annoying",
        meaning: "khó chịu, phiền toái",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/əˈnɔɪɪŋ/",
        example: "This interruption is very annoying.",
        exampleTranslation: "Sự gián đoạn này thật khó chịu."
    },
    {
        word: "apart",
        meaning: "cách nhau, tách biệt",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/əˈpɑːrt/",
        example: "The two houses stood 500 metres apart.",
        exampleTranslation: "Hai ngôi nhà đứng cách nhau 500 mét."
    },
    {
        word: "apologize",
        meaning: "xin lỗi",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/əˈpɑːlədʒaɪz/",
        example: "Why should I apologize?",
        exampleTranslation: "Tại sao tôi phải xin lỗi?"
    },
    {
        word: "application",
        meaning: "đơn xin, ứng dụng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˌæplɪˈkeɪʃn/",
        example: "a planning/patent/visa application",
        exampleTranslation: "đơn xin phép xây dựng/bằng sáng chế/visa"
    },
    {
        word: "appointment",
        meaning: "cuộc hẹn, sự bổ nhiệm",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/əˈpɔɪntmənt/",
        example: "I've got a dental appointment at 3 o'clock.",
        exampleTranslation: "Tôi có một cuộc hẹn nha sĩ lúc 3 giờ."
    },
    {
        word: "appreciate",
        meaning: "đánh giá cao, nhận thức rõ",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/əˈpriːʃieɪt/",
        example: "Over the years he came to appreciate the beauty and tranquillity of the river.",
        exampleTranslation: "Qua nhiều năm, ông ấy đã dần nhận thức rõ vẻ đẹp và sự yên tĩnh của dòng sông."
    },
    {
        word: "approximately",
        meaning: "khoảng, xấp xỉ",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/əˈprɑːksɪmətli/",
        example: "The journey took approximately seven hours.",
        exampleTranslation: "Chuyến đi kéo dài khoảng bảy giờ."
    },
    {
        word: "arrest",
        meaning: "vụ bắt giữ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/əˈrest/",
        example: "The police made several arrests.",
        exampleTranslation: "Cảnh sát đã tiến hành nhiều vụ bắt giữ."
    },
    {
        word: "arrival",
        meaning: "sự đến, sự tới",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/əˈraɪvl/",
        example: "We apologize for the late arrival of the train.",
        exampleTranslation: "Chúng tôi xin lỗi vì tàu đến muộn."
    },
    {
        word: "assignment",
        meaning: "bài tập, nhiệm vụ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/əˈsaɪnmənt/",
        example: "Students are required to complete all homework assignments.",
        exampleTranslation: "Học sinh được yêu cầu hoàn thành tất cả các bài tập về nhà."
    },
    {
        word: "assist",
        meaning: "giúp đỡ, hỗ trợ",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/əˈsɪst/",
        example: "Anyone willing to assist can contact this number.",
        exampleTranslation: "Bất kỳ ai sẵn lòng giúp đỡ có thể liên hệ số này."
    },
    {
        word: "atmosphere",
        meaning: "bầu không khí, không khí",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈætməsfɪr/",
        example: "Wind power doesn't release carbon dioxide into the atmosphere.",
        exampleTranslation: "Năng lượng gió không thải carbon dioxide vào bầu khí quyển."
    },
    {
        word: "attach",
        meaning: "gắn, đính kèm",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/əˈtætʃ/",
        example: "I attach a copy of my notes for your information.",
        exampleTranslation: "Tôi đính kèm một bản sao ghi chú của tôi để bạn tham khảo."
    },
    {
        word: "attitude",
        meaning: "thái độ, lập trường",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈætɪtuːd/",
        example: "attitude towards somebody/something These societies have to change their attitudes towards women.",
        exampleTranslation: "thái độ đối với ai/cái gì Các xã hội này phải thay đổi thái độ của họ đối với phụ nữ."
    },
    {
        word: "attract",
        meaning: "thu hút",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/əˈtrækt/",
        example: "be attracted by somebody/something I had always been attracted by the idea of working abroad.",
        exampleTranslation: "bị thu hút bởi ai/cái gì Tôi luôn bị thu hút bởi ý tưởng làm việc ở nước ngoài."
    },
    {
        word: "attraction",
        meaning: "sự hấp dẫn, điểm thu hút",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/əˈtrækʃn/",
        example: "Buckingham Palace is a major tourist attraction.",
        exampleTranslation: "Cung điện Buckingham là một điểm thu hút du lịch lớn."
    },
    {
        word: "authority",
        meaning: "quyền lực, thẩm quyền",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/əˈθɔːrəti/",
        example: "in a position of authority",
        exampleTranslation: "ở vị trí có thẩm quyền"
    },
    {
        word: "average",
        meaning: "trung bình, đạt mức trung bình",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈævərɪdʒ/",
        example: "Economic growth is expected to average 2% next year.",
        exampleTranslation: "Tăng trưởng kinh tế dự kiến sẽ đạt trung bình 2% vào năm tới."
    },
    {
        word: "award",
        meaning: "trao giải, ban thưởng",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/əˈwɔːrd/",
        example: "Knowing why and how corporations award contracts is vitally important.",
        exampleTranslation: "Biết lý do và cách các tập đoàn trao hợp đồng là vô cùng quan trọng."
    },
    {
        word: "aware",
        meaning: "nhận thức được, biết được",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/əˈwer/",
        example: "As you're aware, this is not a new problem.",
        exampleTranslation: "Như bạn đã biết, đây không phải là một vấn đề mới."
    },
    {
        word: "backwards",
        meaning: "ngược lại, lùi lại",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈbækwərdz/",
        example: "I lost my balance and fell backwards.",
        exampleTranslation: "Tôi mất thăng bằng và ngã ngửa ra sau."
    },
    {
        word: "bake",
        meaning: "nướng",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/beɪk/",
        example: "bake (something) to bake bread/biscuits/cookies",
        exampleTranslation: "nướng (cái gì đó) nướng bánh mì/bánh quy/bánh quy sô cô la"
    },
    {
        word: "balance",
        meaning: "sự cân bằng, trạng thái cân bằng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈbæləns/",
        example: "This newspaper maintains a good balance in its presentation of different opinions.",
        exampleTranslation: "Tờ báo này duy trì sự cân bằng tốt trong việc trình bày các ý kiến khác nhau."
    },
    {
        word: "ban",
        meaning: "lệnh cấm",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/bæn/",
        example: "a smoking ban",
        exampleTranslation: "lệnh cấm hút thuốc"
    },
    {
        word: "base",
        meaning: "chân đế, đáy",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/beɪs/",
        example: "The lamp has a heavy base.",
        exampleTranslation: "Chiếc đèn có chân đế nặng."
    },
    {
        word: "basic",
        meaning: "cơ bản, thiết yếu",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈbeɪsɪk/",
        example: "basic information/facts/ideas",
        exampleTranslation: "thông tin/sự kiện/ý tưởng cơ bản"
    },
    {
        word: "basis",
        meaning: "cơ sở, nền tảng, phương thức",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈbeɪsɪs/",
        example: "We are in contact on a regular basis.",
        exampleTranslation: "Chúng tôi liên lạc với nhau thường xuyên."
    },
    {
        word: "battery",
        meaning: "pin, ắc quy",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈbætəri/",
        example: "to replace the batteries",
        exampleTranslation: "thay pin"
    },
    {
        word: "battle",
        meaning: "trận chiến, cuộc chiến đấu",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈbætl/",
        example: "Napoleon was defeated at the Battle of Waterloo.",
        exampleTranslation: "Napoleon đã bị đánh bại tại Trận Waterloo."
    },
    {
        word: "beauty",
        meaning: "vẻ đẹp, sự xinh đẹp",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈbjuːti/",
        example: "beauty of something the beauty of the sunset/of poetry/of his singing",
        exampleTranslation: "vẻ đẹp của hoàng hôn/của thơ ca/của giọng hát của anh ấy"
    },
    {
        word: "bee",
        meaning: "con ong",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/biː/",
        example: "Bees were buzzing in the clover.",
        exampleTranslation: "Những con ong vo ve trong đám cỏ ba lá."
    },
    {
        word: "belief",
        meaning: "niềm tin, sự tin tưởng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/bɪˈliːf/",
        example: "belief in something/somebody I admire his passionate belief in what he is doing.",
        exampleTranslation: "niềm tin vào điều gì đó/ai đó Tôi ngưỡng mộ niềm tin mãnh liệt của anh ấy vào những gì anh ấy đang làm."
    },
    {
        word: "bell",
        meaning: "chuông",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/bel/",
        example: "A peal of church bells rang out in the distance.",
        exampleTranslation: "Một hồi chuông nhà thờ vang vọng từ xa."
    },
    {
        word: "bend",
        meaning: "chỗ rẽ, khúc cua",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/bend/",
        example: "a sharp bend in the road",
        exampleTranslation: "một khúc cua gấp trên đường"
    },
    {
        word: "benefit",
        meaning: "mang lại lợi ích, làm lợi",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈbenɪfɪt/",
        example: "We should spend the money on something that will benefit everyone.",
        exampleTranslation: "Chúng ta nên chi tiền vào một thứ gì đó mang lại lợi ích cho tất cả mọi người."
    },
    {
        word: "better",
        meaning: "cái tốt hơn",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈbetər/",
        example: "the better of the two books",
        exampleTranslation: "cuốn sách tốt hơn trong hai cuốn"
    },
    {
        word: "bite",
        meaning: "cú cắn",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/baɪt/",
        example: "The dog gave me a playful bite.",
        exampleTranslation: "Con chó đã cho tôi một cú cắn đùa giỡn."
    },
    {
        word: "block",
        meaning: "khối, cục, tòa nhà",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/blɑːk/",
        example: "The houses are made of concrete blocks with tin roofs.",
        exampleTranslation: "Những ngôi nhà được làm bằng gạch bê tông với mái tôn."
    },
    {
        word: "board",
        meaning: "lên (tàu, máy bay)",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/bɔːrd/",
        example: "Passengers are waiting to board.",
        exampleTranslation: "Hành khách đang chờ lên máy bay."
    },
    {
        word: "bomb",
        meaning: "quả bom",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/bɑːm/",
        example: "a bomb goes off/explodes",
        exampleTranslation: "bom nổ"
    },
    {
        word: "border",
        meaning: "biên giới",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈbɔːrdər/",
        example: "I live in a small town in the US, near the Canadian border.",
        exampleTranslation: "Tôi sống ở một thị trấn nhỏ ở Mỹ, gần biên giới Canada."
    },
    {
        word: "bother",
        meaning: "bận tâm, phiền hà",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈbɑːðər/",
        example: "‘Shall I wait?’ ‘No, don't bother’.",
        exampleTranslation: "‘Tôi có nên đợi không?’ ‘Không, đừng bận tâm’."
    },
    {
        word: "branch",
        meaning: "cành cây",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/bræntʃ/",
        example: "She climbed the tree and hid in the branches.",
        exampleTranslation: "Cô ấy trèo lên cây và trốn trong những cành cây."
    },
    {
        word: "brand",
        meaning: "thương hiệu",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/brænd/",
        example: "a well-known brand of toothpaste",
        exampleTranslation: "một thương hiệu kem đánh răng nổi tiếng"
    },
    {
        word: "brave",
        meaning: "dũng cảm, gan dạ",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/breɪv/",
        example: "brave men and women",
        exampleTranslation: "những người đàn ông và phụ nữ dũng cảm"
    },
    {
        word: "breath",
        meaning: "hơi thở",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/breθ/",
        example: "His breath smelt of garlic.",
        exampleTranslation: "Hơi thở của anh ấy có mùi tỏi."
    },
    {
        word: "breathe",
        meaning: "thở",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/briːð/",
        example: "He breathed deeply before speaking again.",
        exampleTranslation: "Anh ấy thở sâu trước khi nói lại."
    },
    {
        word: "breathing",
        meaning: "sự thở",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈbriːðɪŋ/",
        example: "Her breathing became steady and she fell asleep.",
        exampleTranslation: "Nhịp thở của cô ấy trở nên đều đặn và cô ấy chìm vào giấc ngủ."
    },
    {
        word: "bride",
        meaning: "cô dâu",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/braɪd/",
        example: "a toast to the bride and groom",
        exampleTranslation: "một lời chúc mừng cô dâu và chú rể"
    },
    {
        word: "bubble",
        meaning: "bọt",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈbʌbl/",
        example: "champagne bubbles",
        exampleTranslation: "bọt sâm panh"
    },
    {
        word: "bury",
        meaning: "chôn cất, mai táng",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈberi/",
        example: "bury somebody/something They killed her and buried her body.",
        exampleTranslation: "chôn cất ai đó/điều gì đó Họ đã giết cô ấy và chôn xác cô ấy."
    },
    {
        word: "by",
        meaning: "bằng, ngang qua",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/baɪ/",
        example: "Just drive by. Don't stop.",
        exampleTranslation: "Cứ chạy ngang qua đi. Đừng dừng lại."
    },
    {
        word: "calm",
        meaning: "bình tĩnh, điềm tĩnh",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/kɑːm/",
        example: "It is important to keep calm in an emergency.",
        exampleTranslation: "Điều quan trọng là phải giữ bình tĩnh trong trường hợp khẩn cấp."
    },
    {
        word: "campaign",
        meaning: "chiến dịch",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/kæmˈpeɪn/",
        example: "an anti-smoking campaign",
        exampleTranslation: "một chiến dịch chống hút thuốc"
    },
    {
        word: "campus",
        meaning: "khuôn viên trường",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈkæmpəs/",
        example: "university/college campuses",
        exampleTranslation: "khuôn viên trường đại học"
    },
    {
        word: "candidate",
        meaning: "ứng cử viên",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈkændɪdeɪt/",
        example: "a presidential candidate",
        exampleTranslation: "một ứng cử viên tổng thống"
    },
    {
        word: "cap",
        meaning: "mũ lưỡi trai",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/kæp/",
        example: "to wear a cap.",
        exampleTranslation: "đội mũ lưỡi trai."
    },
    {
        word: "captain",
        meaning: "thuyền trưởng, đội trưởng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈkæptɪn/",
        example: "Captain Cook",
        exampleTranslation: "Thuyền trưởng Cook"
    },
    {
        word: "careless",
        meaning: "bất cẩn, thiếu thận trọng",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈkerləs/",
        example: "careless driving",
        exampleTranslation: "lái xe bất cẩn"
    },
    {
        word: "category",
        meaning: "thể loại, loại",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈkætəɡɔːri/",
        example: "These are the nominees from each category.",
        exampleTranslation: "Đây là những ứng cử viên từ mỗi hạng mục."
    },
    {
        word: "ceiling",
        meaning: "trần nhà",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈsiːlɪŋ/",
        example: "a large room with a high ceiling",
        exampleTranslation: "một căn phòng lớn với trần nhà cao"
    },
    {
        word: "celebration",
        meaning: "lễ kỷ niệm, sự kỷ niệm",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˌselɪˈbreɪʃn/",
        example: "The occasion was the 40th anniversary celebrations of the orchestra.",
        exampleTranslation: "Dịp đó là lễ kỷ niệm 40 năm thành lập dàn nhạc."
    },
    {
        word: "central",
        meaning: "trung tâm, ở giữa",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈsentrəl/",
        example: "central London",
        exampleTranslation: "trung tâm Luân Đôn"
    },
    {
        word: "centre",
        meaning: "tập trung vào, xoay quanh",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈsentər/",
        example: "centre around/round somebody/something State occasions always centred around the king.",
        exampleTranslation: "Các sự kiện nhà nước luôn xoay quanh nhà vua."
    },
    {
        word: "ceremony",
        meaning: "lễ, nghi thức",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈserəməʊni/",
        example: "More than 1 000 people attended the ceremony.",
        exampleTranslation: "Hơn 1000 người đã tham dự buổi lễ."
    },
    {
        word: "chain",
        meaning: "chuỗi, dây chuyền",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/tʃeɪn/",
        example: "She wore a heavy gold chain around her neck.",
        exampleTranslation: "Cô đeo một sợi dây chuyền vàng nặng trên cổ."
    },
    {
        word: "challenge",
        meaning: "thử thách, thách thức",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈtʃælɪndʒ/",
        example: "a tough/major/significant challenge",
        exampleTranslation: "một thử thách khó khăn/lớn/quan trọng"
    },
    {
        word: "champion",
        meaning: "nhà vô địch",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈtʃæmpiən/",
        example: "the world/European/national/Olympic champion",
        exampleTranslation: "nhà vô địch thế giới/châu Âu/quốc gia/Olympic"
    },
    {
        word: "channel",
        meaning: "kênh",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈtʃænl/",
        example: "a television/TV channel",
        exampleTranslation: "một kênh truyền hình/TV"
    },
    {
        word: "chapter",
        meaning: "chương",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈtʃæptər/",
        example: "to read/write a chapter",
        exampleTranslation: "đọc/viết một chương"
    },
    {
        word: "charge",
        meaning: "phí, chi phí, tiền phải trả",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/tʃɑːrdʒ/",
        example: "admission charges",
        exampleTranslation: "phí vào cửa"
    },
    {
        word: "cheap",
        meaning: "rẻ",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/tʃiːp/",
        example: "I got this dress cheap in a sale.",
        exampleTranslation: "Tôi mua chiếc váy này với giá rẻ trong đợt giảm giá."
    },
    {
        word: "cheat",
        meaning: "kẻ gian lận",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/tʃiːt/",
        example: "You little cheat!",
        exampleTranslation: "Cậu bé lừa đảo!"
    },
    {
        word: "cheerful",
        meaning: "vui vẻ, vui mừng",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈtʃɪrfl/",
        example: "You're not your usual cheerful self today.",
        exampleTranslation: "Hôm nay bạn không được vui vẻ như thường lệ."
    },
    {
        word: "chemical",
        meaning: "hóa học",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈkemɪkl/",
        example: "changes in the chemical composition of the atmosphere",
        exampleTranslation: "những thay đổi trong thành phần hóa học của khí quyển"
    },
    {
        word: "chest",
        meaning: "ngực",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/tʃest/",
        example: "chest pains",
        exampleTranslation: "đau ngực"
    },
    {
        word: "childhood",
        meaning: "thời thơ ấu",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈtʃaɪldhʊd/",
        example: "childhood, adolescence, and adulthood",
        exampleTranslation: "thời thơ ấu, tuổi thanh thiếu niên và tuổi trưởng thành"
    },
    {
        word: "claim",
        meaning: "yêu cầu, tuyên bố, khía cạnh",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/kleɪm/",
        example: "claim about somebody/something The company had made false claims about its products.",
        exampleTranslation: "tuyên bố về ai đó/điều gì đó Công ty đã đưa ra những tuyên bố sai về sản phẩm của mình."
    },
    {
        word: "clause",
        meaning: "mệnh đề",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/klɔːz/",
        example: "in a clause There are languages that require the subject to come before the object in a clause.",
        exampleTranslation: "trong một mệnh đề Có những ngôn ngữ yêu cầu chủ ngữ đứng trước tân ngữ trong một mệnh đề."
    },
    {
        word: "clear",
        meaning: "dọn sạch, khai hoang, xóa bỏ",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/klɪr/",
        example: "The settlers cleared the land and planted crops.",
        exampleTranslation: "Những người định cư đã khai hoang đất và trồng trọt."
    },
    {
        word: "click",
        meaning: "tiếng lách cách, âm thanh lách cách",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/klɪk/",
        example: "a mouse click",
        exampleTranslation: "tiếng lách cách chuột"
    },
    {
        word: "client",
        meaning: "khách hàng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈklaɪənt/",
        example: "She's a well-known lawyer with many famous clients.",
        exampleTranslation: "Cô ấy là một luật sư nổi tiếng với nhiều khách hàng danh tiếng."
    },
    {
        word: "climb",
        meaning: "cuộc leo lên, sự leo lên",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/klaɪm/",
        example: "an exhausting climb",
        exampleTranslation: "một cuộc leo núi mệt mỏi"
    },
    {
        word: "close",
        meaning: "gần",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/kləʊs/",
        example: "+ adv./prep. They sat close together.",
        exampleTranslation: "họ ngồi gần nhau."
    },
    {
        word: "cloth",
        meaning: "vải",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/klɔːθ/",
        example: "woollen/cotton/linen cloth",
        exampleTranslation: "vải len/bông/lanh"
    },
    {
        word: "clue",
        meaning: "manh mối, gợi ý",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/kluː/",
        example: "The burglar left no clues.",
        exampleTranslation: "Kẻ trộm không để lại manh mối nào."
    },
    {
        word: "coach",
        meaning: "huấn luyện viên, người hướng dẫn, người kèm cặp",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/kəʊtʃ/",
        example: "He has coached the team for five years.",
        exampleTranslation: "Ông ấy đã huấn luyện đội bóng được năm năm."
    },
    {
        word: "coal",
        meaning: "than đá",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/kəʊl/",
        example: "I put more coal on the fire.",
        exampleTranslation: "Tôi cho thêm than vào lửa."
    },
    {
        word: "coin",
        meaning: "đồng xu",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/kɔɪn/",
        example: "gold coins",
        exampleTranslation: "những đồng xu vàng"
    },
    {
        word: "collection",
        meaning: "bộ sưu tập, sự thu thập",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/kəˈlekʃn/",
        example: "He wanted to share his vast art collection with the world.",
        exampleTranslation: "Ông ấy muốn chia sẻ bộ sưu tập nghệ thuật đồ sộ của mình với thế giới."
    },
    {
        word: "coloured",
        meaning: "có màu, sặc sỡ",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈkʌlərd/",
        example: "brightly coloured balloons",
        exampleTranslation: "những quả bóng bay nhiều màu sắc"
    },
    {
        word: "combine",
        meaning: "kết hợp, hợp nhất",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/kəmˈbaɪn/",
        example: "combine to do something Hydrogen and oxygen combine to form water.",
        exampleTranslation: "Hydro và oxy kết hợp với nhau tạo thành nước."
    },
    {
        word: "comment",
        meaning: "bình luận, nhận xét",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈkɑːment/",
        example: "He refused to comment until after the trial.",
        exampleTranslation: "Ông ấy từ chối bình luận cho đến sau phiên tòa."
    },
    {
        word: "commercial",
        meaning: "thương mại, quảng cáo",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/kəˈmɜːrʃl/",
        example: "residential and commercial properties",
        exampleTranslation: "bất động sản dân cư và thương mại"
    },
    {
        word: "commit",
        meaning: "cam kết, phạm tội",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/kəˈmɪt/",
        example: "to commit a crime/an offence",
        exampleTranslation: "phạm tội/vi phạm"
    },
    {
        word: "communication",
        meaning: "giao tiếp, liên lạc",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/kəˌmjuːnɪˈkeɪʃn/",
        example: "communication between A and B Good communication between team leaders and members is essential.",
        exampleTranslation: "Giao tiếp tốt giữa trưởng nhóm và các thành viên là điều cần thiết."
    },
    {
        word: "comparison",
        meaning: "sự so sánh",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/kəmˈpærɪsn/",
        example: "For Durkheim, comparison was the most important method of analysis in sociology.",
        exampleTranslation: "Đối với Durkheim, so sánh là phương pháp phân tích quan trọng nhất trong xã hội học."
    },
    {
        word: "competitive",
        meaning: "cạnh tranh",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/kəmˈpetətɪv/",
        example: "competitive games/sports",
        exampleTranslation: "các trò chơi/môn thể thao cạnh tranh"
    },
    {
        word: "competitor",
        meaning: "đối thủ cạnh tranh",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/kəmˈpetɪtər/",
        example: "Over 200 competitors entered the race.",
        exampleTranslation: "Hơn 200 đối thủ cạnh tranh đã tham gia cuộc đua."
    },
    {
        word: "complaint",
        meaning: "sự phàn nàn, lời khiếu nại",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/kəmˈpleɪnt/",
        example: "a formal complaint",
        exampleTranslation: "một lời phàn nàn chính thức"
    },
    {
        word: "complex",
        meaning: "phức tạp, rắc rối",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈkɑːmpleks/",
        example: "a complex problem/issue/process/system",
        exampleTranslation: "một vấn đề/vấn đề/quy trình/hệ thống phức tạp"
    },
    {
        word: "concentrate",
        meaning: "tập trung",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈkɑːnsntreɪt/",
        example: "I can't concentrate with all that noise going on.",
        exampleTranslation: "Tôi không thể tập trung với tất cả tiếng ồn đó."
    },
    {
        word: "conclude",
        meaning: "kết luận, đi đến kết luận",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/kənˈkluːd/",
        example: "It is too early for us to conclude anything.",
        exampleTranslation: "Còn quá sớm để chúng ta kết luận bất cứ điều gì."
    },
    {
        word: "conclusion",
        meaning: "kết luận, sự kết thúc",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/kənˈkluːʒn/",
        example: "We can safely draw some conclusions from our discussion.",
        exampleTranslation: "Chúng ta có thể rút ra một số kết luận an toàn từ cuộc thảo luận của mình."
    },
    {
        word: "confident",
        meaning: "tự tin",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈkɑːnfɪdənt/",
        example: "She was in a relaxed, confident mood.",
        exampleTranslation: "Cô ấy đang trong một tâm trạng thoải mái, tự tin."
    },
    {
        word: "confirm",
        meaning: "xác nhận, khẳng định",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/kənˈfɜːrm/",
        example: "His guilty expression confirmed my suspicions.",
        exampleTranslation: "Vẻ mặt tội lỗi của anh ấy đã xác nhận những nghi ngờ của tôi."
    },
    {
        word: "confuse",
        meaning: "làm bối rối, gây nhầm lẫn",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/kənˈfjuːz/",
        example: "These two sets of statistics are guaranteed to confuse the public.",
        exampleTranslation: "Hai bộ số liệu này chắc chắn sẽ làm bối rối công chúng."
    },
    {
        word: "confused",
        meaning: "bối rối, lúng túng",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/kənˈfjuːzd/",
        example: "I'm confused—say all that again.",
        exampleTranslation: "Tôi bối rối—nói lại tất cả lần nữa."
    },
    {
        word: "connection",
        meaning: "sự kết nối, mối liên hệ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/kəˈnekʃn/",
        example: "connection between A and B Scientists have established a connection between cholesterol levels and heart disease.",
        exampleTranslation: "Các nhà khoa học đã thiết lập mối liên hệ giữa mức cholesterol và bệnh tim."
    },
    {
        word: "consequence",
        meaning: "hậu quả, hệ quả",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈkɑːnsɪkwens/",
        example: "Remember that actions have consequences.",
        exampleTranslation: "Hãy nhớ rằng hành động có hậu quả."
    },
    {
        word: "consist",
        meaning: "bao gồm, gồm có",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/kənˈsɪst/",
        example: "",
        exampleTranslation: ""
    },
    {
        word: "consume",
        meaning: "tiêu thụ, sử dụng",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/kənˈsuːm/",
        example: "The electricity industry consumes large amounts of fossil fuels.",
        exampleTranslation: "Ngành công nghiệp điện tiêu thụ một lượng lớn nhiên liệu hóa thạch."
    },
    {
        word: "consumer",
        meaning: "người tiêu dùng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/kənˈsuːmər/",
        example: "consumer spending/demand",
        exampleTranslation: "chi tiêu/nhu cầu của người tiêu dùng"
    },
    {
        word: "contact",
        meaning: "sự tiếp xúc, liên lạc",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈkɑːntækt/",
        example: "contact with somebody I don't have much contact with my uncle.",
        exampleTranslation: "Tôi không có nhiều liên lạc với chú tôi."
    },
    {
        word: "container",
        meaning: "cái chứa, vật đựng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/kənˈteɪnər/",
        example: "a plastic container",
        exampleTranslation: "một cái hộp nhựa"
    },
    {
        word: "content",
        meaning: "hàm ý, nội dung",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈkɑːntent/",
        example: "He tipped the contents of the bag onto the table.",
        exampleTranslation: "Ông ấy đổ toàn bộ đồ trong túi lên bàn."
    },
    {
        word: "continuous",
        meaning: "liên tục, không ngừng, tiếp diễn",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/kənˈtɪnjuəs/",
        example: "Recovery after the accident will be a continuous process that may take several months.",
        exampleTranslation: "Quá trình phục hồi sau tai nạn sẽ là một quá trình liên tục có thể mất vài tháng."
    },
    {
        word: "contrast",
        meaning: "sự tương phản, sự khác biệt",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈkɑːntræst/",
        example: "The two cities make an interesting contrast.",
        exampleTranslation: "Hai thành phố tạo nên một sự tương phản thú vị."
    },
    {
        word: "convenient",
        meaning: "tiện lợi, thuận tiện",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/kənˈviːniənt/",
        example: "Fruit is a convenient source of vitamins and energy.",
        exampleTranslation: "Trái cây là nguồn cung cấp vitamin và năng lượng tiện lợi."
    },
    {
        word: "convince",
        meaning: "thuyết phục, làm cho tin tưởng",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/kənˈvɪns/",
        example: "convince somebody/yourself Are the prime minister's assurances enough to convince the public?",
        exampleTranslation: "Những lời đảm bảo của thủ tướng có đủ để thuyết phục công chúng không?"
    },
    {
        word: "cool",
        meaning: "làm nguội, làm mát",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/kuːl/",
        example: "Glass contracts as it cools.",
        exampleTranslation: "Thủy tinh co lại khi nguội đi."
    },
    {
        word: "costume",
        meaning: "trang phục, quần áo (đặc biệt là trang phục biểu diễn, lễ hội)",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈkɑːstuːm/",
        example: "an exhibition of Victorian costumes",
        exampleTranslation: "một cuộc triển lãm trang phục thời Victoria"
    },
    {
        word: "cottage",
        meaning: "nhà nhỏ, nhà tranh",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈkɑːtɪdʒ/",
        example: "a thatched cottage",
        exampleTranslation: "một ngôi nhà tranh"
    },
    {
        word: "cotton",
        meaning: "bông, vải bông",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈkɑːtn/",
        example: "They grew cotton, tobacco, corn and fruit.",
        exampleTranslation: "Họ trồng bông, thuốc lá, ngô và trái cây."
    },
    {
        word: "count",
        meaning: "sự đếm, số lượng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/kaʊnt/",
        example: "If the election result is close, there will be a second count.",
        exampleTranslation: "Nếu kết quả bầu cử sít sao, sẽ có lần đếm thứ hai."
    },
    {
        word: "countryside",
        meaning: "vùng nông thôn, miền quê",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈkʌntrisaɪd/",
        example: "The surrounding countryside is windswept and rocky.",
        exampleTranslation: "Vùng nông thôn xung quanh lộng gió và nhiều đá."
    },
    {
        word: "court",
        meaning: "tòa án, sân",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/kɔːrt/",
        example: "the civil/criminal courts",
        exampleTranslation: "tòa án dân sự/hình sự"
    },
    {
        word: "cover",
        meaning: "vỏ bọc, áo khoác, chăn",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈkʌvər/",
        example: "Brighten up your room with some colourful cushion covers.",
        exampleTranslation: "Làm bừng sáng căn phòng của bạn với một vài chiếc vỏ gối đầy màu sắc."
    },
    {
        word: "covered",
        meaning: "được che phủ, bao phủ",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈkʌvərd/",
        example: "His face was covered in blood.",
        exampleTranslation: "Mặt anh ấy đầy máu."
    },
    {
        word: "cream",
        meaning: "màu kem",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/kriːm/",
        example: "a cream linen suit",
        exampleTranslation: "một bộ vest lanh màu kem"
    },
    {
        word: "criminal",
        meaning: "tội phạm, phạm tội",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈkrɪmɪnl/",
        example: "criminal offences/activities",
        exampleTranslation: "các tội/hoạt động phạm tội"
    },
    {
        word: "cruel",
        meaning: "tàn nhẫn, độc ác",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈkruːəl/",
        example: "He was known to be a cruel dictator.",
        exampleTranslation: "Ông ta nổi tiếng là một nhà độc tài tàn nhẫn."
    },
    {
        word: "cultural",
        meaning: "thuộc về văn hóa, văn hóa",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈkʌltʃərəl/",
        example: "Teachers need to be aware of cultural differences.",
        exampleTranslation: "Giáo viên cần nhận thức được sự khác biệt về văn hóa."
    },
    {
        word: "currency",
        meaning: "tiền tệ, đơn vị tiền tệ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈkɜːrənsi/",
        example: "trading in foreign currencies",
        exampleTranslation: "giao dịch ngoại tệ"
    },
    {
        word: "current",
        meaning: "hiện hành, hiện tại",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈkɜːrənt/",
        example: "The necklace would be worth over $5 000 at current prices.",
        exampleTranslation: "Chiếc vòng cổ này có giá trị hơn 5.000 đô la với giá hiện tại."
    },
    {
        word: "currently",
        meaning: "hiện tại, hiện nay",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈkɜːrəntli/",
        example: "The hourly charge is currently £35.",
        exampleTranslation: "Phí theo giờ hiện tại là 35 bảng Anh."
    },
    {
        word: "curtain",
        meaning: "màn cửa, rèm",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈkɜːrtn/",
        example: "to draw/pull/close the curtains (= to pull them across the window so they cover it)",
        exampleTranslation: "kéo/đóng rèm cửa (= kéo chúng che cửa sổ)"
    },
    {
        word: "custom",
        meaning: "phong tục, tập quán",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈkʌstəm/",
        example: "It's a local custom.",
        exampleTranslation: "Đó là một phong tục địa phương."
    },
    {
        word: "cut",
        meaning: "vết cắt, vết rạch",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/kʌt/",
        example: "cuts and bruises on the face",
        exampleTranslation: "vết cắt và vết bầm tím trên mặt"
    },
    {
        word: "daily",
        meaning: "hàng ngày",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈdeɪli/",
        example: "The machines are inspected twice daily.",
        exampleTranslation: "Các máy móc được kiểm tra hai lần mỗi ngày."
    },
    {
        word: "damage",
        meaning: "thiệt hại, hư hại",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈdæmɪdʒ/",
        example: "serious/severe damage",
        exampleTranslation: "thiệt hại nghiêm trọng/nặng nề"
    },
    {
        word: "deal",
        meaning: "thỏa thuận, giao dịch",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/diːl/",
        example: "to sign/strike/finalize/close a deal",
        exampleTranslation: "ký kết/đạt được/hoàn tất/chốt một thỏa thuận"
    },
    {
        word: "decade",
        meaning: "thập kỷ, mười năm",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/dɪˈkeɪd/",
        example: "the early decades of the nineteenth century",
        exampleTranslation: "những thập kỷ đầu của thế kỷ mười chín"
    },
    {
        word: "decorate",
        meaning: "trang trí",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈdekəreɪt/",
        example: "with something They decorated the room with flowers and balloons.",
        exampleTranslation: "Họ đã trang trí căn phòng bằng hoa và bóng bay."
    },
    {
        word: "deep",
        meaning: "sâu",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/diːp/",
        example: "Dig deeper!",
        exampleTranslation: "Đào sâu hơn!"
    },
    {
        word: "define",
        meaning: "định nghĩa, xác định",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/dɪˈfaɪn/",
        example: "The term ‘normal’ is difficult to define.",
        exampleTranslation: "Thuật ngữ 'bình thường' rất khó để định nghĩa."
    },
    {
        word: "definite",
        meaning: "rõ ràng, chắc chắn, dứt khoát",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈdefɪnət/",
        example: "Can you give me a definite answer by tomorrow?",
        exampleTranslation: "Bạn có thể cho tôi một câu trả lời dứt khoát vào ngày mai không?"
    },
    {
        word: "definition",
        meaning: "định nghĩa, khái niệm",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˌdefɪˈnɪʃn/",
        example: "The dictionary provides clear, simple definitions.",
        exampleTranslation: "Cuốn từ điển cung cấp các định nghĩa rõ ràng, đơn giản."
    },
    {
        word: "deliver",
        meaning: "giao, chuyển giao, cứu",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/dɪˈlɪvər/",
        example: "I get my food delivered from the supermarket to save time.",
        exampleTranslation: "Tôi nhận đồ ăn được giao từ siêu thị để tiết kiệm thời gian."
    },
    {
        word: "departure",
        meaning: "sự rời đi, sự khởi hành",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/dɪˈpɑːrtʃər/",
        example: "His sudden departure threw the office into chaos.",
        exampleTranslation: "Sự ra đi đột ngột của anh ấy đã khiến văn phòng rơi vào hỗn loạn."
    },
    {
        word: "despite",
        meaning: "mặc dù, bất chấp",
        partOfSpeech: "preposition",
        level: "B1",
        phonetic: "/dɪˈspaɪt/",
        example: "Her voice was shaking despite all her efforts to control it.",
        exampleTranslation: "Giọng cô run rẩy mặc dù đã cố gắng hết sức để kiềm chế."
    },
    {
        word: "destination",
        meaning: "điểm đến",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˌdestɪˈneɪʃn/",
        example: "popular tourist/holiday destinations like the Bahamas",
        exampleTranslation: "những điểm đến du lịch/nghỉ mát nổi tiếng như Bahamas"
    },
    {
        word: "determine",
        meaning: "xác định, quyết định, phân giải",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/dɪˈtɜːrmɪn/",
        example: "An inquiry was set up to determine the cause of the accident.",
        exampleTranslation: "Một cuộc điều tra đã được thành lập để xác định nguyên nhân của vụ tai nạn."
    },
    {
        word: "determined",
        meaning: "quyết tâm, kiên quyết",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/dɪˈtɜːrmɪnd/",
        example: "The opposition to her plan made her more determined than ever.",
        exampleTranslation: "Sự phản đối kế hoạch của cô khiến cô càng quyết tâm hơn bao giờ hết."
    },
    {
        word: "development",
        meaning: "sự phát triển, sự tiến triển",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/dɪˈveləpmənt/",
        example: "a baby’s development in the womb",
        exampleTranslation: "sự phát triển của trẻ trong bụng mẹ"
    },
    {
        word: "diagram",
        meaning: "biểu đồ, sơ đồ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈdaɪəɡræm/",
        example: "The results are shown in diagram 2.",
        exampleTranslation: "Kết quả được thể hiện trong biểu đồ 2."
    },
    {
        word: "diamond",
        meaning: "kim cương",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈdaɪmənd/",
        example: "a diamond ring/necklace",
        exampleTranslation: "một chiếc nhẫn/dây chuyền kim cương"
    },
    {
        word: "difficulty",
        meaning: "khó khăn, trở ngại",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈdɪfɪkəlti/",
        example: "the difficulties of English syntax",
        exampleTranslation: "những khó khăn của ngữ pháp tiếng Anh"
    },
    {
        word: "direct",
        meaning: "trực tiếp (chỉ đường đi)",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/daɪˈrekt/",
        example: "direct to something We flew direct to Hong Kong.",
        exampleTranslation: "Chúng tôi bay thẳng đến Hồng Kông."
    },
    {
        word: "directly",
        meaning: "trực tiếp, thẳng",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/daɪˈrektli/",
        example: "The path leads directly to the river.",
        exampleTranslation: "Con đường dẫn thẳng đến con sông."
    },
    {
        word: "dirt",
        meaning: "bùn, đất",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/dɜːrt/",
        example: "His clothes were covered in dirt.",
        exampleTranslation: "Quần áo của anh ấy dính đầy bùn."
    },
    {
        word: "disadvantage",
        meaning: "bất lợi, thiệt thòi",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˌdɪsədˈvæntɪdʒ/",
        example: "a serious/severe/significant disadvantage",
        exampleTranslation: "một bất lợi nghiêm trọng/rất lớn/đáng kể"
    },
    {
        word: "disappointed",
        meaning: "thất vọng",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˌdɪsəˈpɔɪntɪd/",
        example: "The singer has promised to refund any disappointed fans.",
        exampleTranslation: "Ca sĩ đã hứa sẽ hoàn tiền cho bất kỳ người hâm mộ nào thất vọng."
    },
    {
        word: "disappointing",
        meaning: "gây thất vọng",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˌdɪsəˈpɔɪntɪŋ/",
        example: "a disappointing result/performance/defeat",
        exampleTranslation: "một kết quả/màn trình diễn/thất bại gây thất vọng"
    },
    {
        word: "discount",
        meaning: "giảm giá, chiết khấu",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈdɪskaʊnt/",
        example: "to get/offer a discount",
        exampleTranslation: "để nhận/đưa ra một khoản giảm giá"
    },
    {
        word: "dislike",
        meaning: "sự không thích",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/dɪsˈlaɪk/",
        example: "dislike of somebody/something He did not try to hide his dislike of his boss.",
        exampleTranslation: "sự không thích ai/cái gì đó Anh ấy đã không cố gắng che giấu sự không thích đối với sếp của mình."
    },
    {
        word: "divide",
        meaning: "chia, phân chia",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/dɪˈvaɪd/",
        example: "The cells began to divide rapidly.",
        exampleTranslation: "Các tế bào bắt đầu phân chia nhanh chóng."
    },
    {
        word: "documentary",
        meaning: "phim tài liệu",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˌdɑːkjuˈmentri/",
        example: "There were some interesting interviews in the documentary.",
        exampleTranslation: "Có một vài cuộc phỏng vấn thú vị trong bộ phim tài liệu."
    },
    {
        word: "donate",
        meaning: "quyên góp",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈdəʊneɪt/",
        example: "to somebody/something He donated thousands of pounds to charity.",
        exampleTranslation: "cho ai/cái gì đó Anh ấy đã quyên góp hàng nghìn bảng cho tổ chức từ thiện."
    },
    {
        word: "double",
        meaning: "gấp đôi",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈdʌbl/",
        example: "I thought I was seeing double (= seeing two of something).",
        exampleTranslation: "Tôi tưởng tôi đang nhìn gấp đôi (= nhìn thấy hai cái gì đó)."
    },
    {
        word: "doubt",
        meaning: "sự nghi ngờ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/daʊt/",
        example: "a feeling of doubt and uncertainty",
        exampleTranslation: "cảm giác nghi ngờ và không chắc chắn"
    },
    {
        word: "dressed",
        meaning: "mặc (quần áo)",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/drest/",
        example: "Hurry up and get dressed.",
        exampleTranslation: "Nhanh lên và mặc quần áo vào."
    },
    {
        word: "drop",
        meaning: "giọt",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/drɑːp/",
        example: "The first drops of rain fell.",
        exampleTranslation: "Những giọt mưa đầu tiên rơi xuống."
    },
    {
        word: "drum",
        meaning: "trống (nhạc cụ)",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/drʌm/",
        example: "to play the drum",
        exampleTranslation: "chơi trống"
    },
    {
        word: "drunk",
        meaning: "say rượu",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/drʌŋk/",
        example: "They were clearly too drunk to drive.",
        exampleTranslation: "Họ rõ ràng là quá say để lái xe."
    },
    {
        word: "due",
        meaning: "do, bởi vì",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/duː/",
        example: "The team's success was largely due to her efforts.",
        exampleTranslation: "Thành công của đội phần lớn là do những nỗ lực của cô ấy."
    },
    {
        word: "dust",
        meaning: "bụi",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/dʌst/",
        example: "A cloud of dust rose as the truck drove off.",
        exampleTranslation: "Một đám bụi bốc lên khi chiếc xe tải chạy đi."
    },
    {
        word: "duty",
        meaning: "nhiệm vụ, bổn phận",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈduːti/",
        example: "duty to do something It is my duty to report it to the police.",
        exampleTranslation: "Đó là nhiệm vụ của tôi phải báo cáo việc đó với cảnh sát."
    },
    {
        word: "earthquake",
        meaning: "động đất",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈɜːrθkweɪk/",
        example: "a devastating/massive/powerful earthquake",
        exampleTranslation: "một trận động đất tàn khốc/khổng lồ/mạnh"
    },
    {
        word: "eastern",
        meaning: "phía đông",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈiːstərn/",
        example: "eastern Spain",
        exampleTranslation: "miền đông Tây Ban Nha"
    },
    {
        word: "economic",
        meaning: "kinh tế",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˌekəˈnɑːmɪk/",
        example: "They discussed social, economic and political issues.",
        exampleTranslation: "Họ đã thảo luận các vấn đề xã hội, kinh tế và chính trị."
    },
    {
        word: "economy",
        meaning: "nền kinh tế, kinh tế",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ɪˈkɑːnəmi/",
        example: "The economy is in recession.",
        exampleTranslation: "Nền kinh tế đang suy thoái."
    },
    {
        word: "edge",
        meaning: "cạnh, lề, mép",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/edʒ/",
        example: "I gripped the edge of my desk to steady myself.",
        exampleTranslation: "Tôi nắm chặt mép bàn để giữ thăng bằng."
    },
    {
        word: "editor",
        meaning: "biên tập viên, người hiệu đính",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈedɪtər/",
        example: "the editor of the Washington Post",
        exampleTranslation: "biên tập viên của Washington Post"
    },
    {
        word: "educate",
        meaning: "giáo dục, huấn luyện",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈedʒukeɪt/",
        example: "be educated She was educated in the US.",
        exampleTranslation: "Cô ấy đã được giáo dục ở Mỹ."
    },
    {
        word: "educated",
        meaning: "có giáo dục, được giáo dục tốt",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈedʒukeɪtɪd/",
        example: "privately educated children",
        exampleTranslation: "những đứa trẻ được giáo dục tư nhân"
    },
    {
        word: "educational",
        meaning: "mang tính giáo dục, giáo dục",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˌedʒuˈkeɪʃənl/",
        example: "children with special educational needs",
        exampleTranslation: "trẻ em có nhu cầu giáo dục đặc biệt"
    },
    {
        word: "effective",
        meaning: "hiệu quả, có hiệu lực",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ɪˈfektɪv/",
        example: "Aspirin is a simple but highly effective treatment.",
        exampleTranslation: "Aspirin là một phương pháp điều trị đơn giản nhưng rất hiệu quả."
    },
    {
        word: "effectively",
        meaning: "một cách hiệu quả, có hiệu lực",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ɪˈfektɪvli/",
        example: "The company must reduce costs to compete effectively.",
        exampleTranslation: "Công ty phải cắt giảm chi phí để cạnh tranh hiệu quả."
    },
    {
        word: "effort",
        meaning: "nỗ lực, cố gắng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈefərt/",
        example: "The project was a team effort.",
        exampleTranslation: "Dự án này là một nỗ lực của cả đội."
    },
    {
        word: "election",
        meaning: "cuộc bầu cử",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ɪˈlekʃn/",
        example: "presidential/parliamentary/local elections",
        exampleTranslation: "cuộc bầu cử tổng thống/quốc hội/địa phương"
    },
    {
        word: "element",
        meaning: "yếu tố, nguyên tố",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈelɪmənt/",
        example: "There are three important elements to consider.",
        exampleTranslation: "Có ba yếu tố quan trọng cần xem xét."
    },
    {
        word: "embarrassed",
        meaning: "bối rối, ngượng ngùng",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ɪmˈbærəst/",
        example: "I've never felt so embarrassed in my life!",
        exampleTranslation: "Tôi chưa bao giờ cảm thấy xấu hổ như vậy trong đời!"
    },
    {
        word: "embarrassing",
        meaning: "gây bối rối, khó xử, ngượng ngùng",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ɪmˈbærəsɪŋ/",
        example: "an embarrassing moment/situation",
        exampleTranslation: "một khoảnh khắc/tình huống khó xử"
    },
    {
        word: "emergency",
        meaning: "tình trạng khẩn cấp, sự cố khẩn cấp",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ɪˈmɜːrdʒənsi/",
        example: "This is a medical emergency needing urgent treatment with antibiotics.",
        exampleTranslation: "Đây là một tình trạng khẩn cấp y tế cần điều trị khẩn cấp bằng kháng sinh."
    },
    {
        word: "emotion",
        meaning: "cảm xúc, tình cảm",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ɪˈməʊʃn/",
        example: "to show/express your emotions",
        exampleTranslation: "thể hiện/bộc lộ cảm xúc của bạn"
    },
    {
        word: "employment",
        meaning: "việc làm, sự thuê mướn",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ɪmˈplɔɪmənt/",
        example: "full-time/part-time employment",
        exampleTranslation: "việc làm toàn thời gian/bán thời gian"
    },
    {
        word: "empty",
        meaning: "làm trống, đổ, trút",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈempti/",
        example: "She emptied the bins, washed the glasses and went to bed.",
        exampleTranslation: "Cô ấy đổ rác, rửa ly và đi ngủ."
    },
    {
        word: "encourage",
        meaning: "khuyến khích, động viên",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ɪnˈkɜːrɪdʒ/",
        example: "We were greatly encouraged by the positive response of the public.",
        exampleTranslation: "Chúng tôi đã rất được khuyến khích bởi phản ứng tích cực của công chúng."
    },
    {
        word: "enemy",
        meaning: "kẻ thù, địch",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈenəmi/",
        example: "She didn't have an enemy in the world.",
        exampleTranslation: "Cô ấy không có kẻ thù nào trên đời."
    },
    {
        word: "engaged",
        meaning: "đã đính hôn",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ɪnˈɡeɪdʒd/",
        example: "When did you get engaged?",
        exampleTranslation: "Bạn đính hôn khi nào?"
    },
    {
        word: "engineering",
        meaning: "kỹ thuật, kỹ sư",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˌendʒɪˈnɪrɪŋ/",
        example: "The bridge is a triumph of modern engineering.",
        exampleTranslation: "Cây cầu là một thành tựu của kỹ thuật hiện đại."
    },
    {
        word: "entertain",
        meaning: "giải trí, mua vui",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˌentərˈteɪn/",
        example: "The aim of the series is both to entertain and inform.",
        exampleTranslation: "Mục đích của loạt phim là vừa giải trí vừa cung cấp thông tin."
    },
    {
        word: "entertainment",
        meaning: "sự giải trí, hoạt động giải trí",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˌentərˈteɪnmənt/",
        example: "radio, television and other forms of entertainment",
        exampleTranslation: "radio, truyền hình và các hình thức giải trí khác"
    },
    {
        word: "entrance",
        meaning: "lối vào, cửa vào",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈentrəns/",
        example: "the front/back/side entrance of the house",
        exampleTranslation: "lối vào phía trước/sau/bên của ngôi nhà"
    },
    {
        word: "entry",
        meaning: "lối vào, sự gia nhập, sự xuất hiện",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈentri/",
        example: "She made her entry to the sound of thunderous applause.",
        exampleTranslation: "Cô ấy xuất hiện trong tiếng vỗ tay vang dội."
    },
    {
        word: "environmental",
        meaning: "môi trường, liên quan đến môi trường",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ɪnˌvaɪrənˈmentl/",
        example: "the environmental impact of pollution",
        exampleTranslation: "tác động môi trường của ô nhiễm"
    },
    {
        word: "episode",
        meaning: "tập (phim, truyện), phần, kỳ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈepɪsəʊd/",
        example: "The next episode has not yet been filmed.",
        exampleTranslation: "Tập tiếp theo vẫn chưa được quay."
    },
    {
        word: "equal",
        meaning: "bằng, ngang bằng, tương đương",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈiːkwəl/",
        example: "There is an equal number of boys and girls in the class.",
        exampleTranslation: "Có số lượng nam và nữ trong lớp bằng nhau."
    },
    {
        word: "equally",
        meaning: "một cách bằng nhau, tương đương",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈiːkwəli/",
        example: "Diet and exercise are equally important.",
        exampleTranslation: "Chế độ ăn uống và tập thể dục quan trọng như nhau."
    },
    {
        word: "escape",
        meaning: "sự thoát khỏi, sự trốn thoát",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ɪˈskeɪp/",
        example: "I had a narrow escape (= I was lucky to have escaped).",
        exampleTranslation: "Tôi đã thoát chết trong gang tấc (= Tôi may mắn đã thoát được)."
    },
    {
        word: "essential",
        meaning: "thiết yếu, cần thiết, cốt yếu",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ɪˈsenʃl/",
        example: "an essential part/feature of something",
        exampleTranslation: "một phần/tính năng thiết yếu của cái gì đó"
    },
    {
        word: "eventually",
        meaning: "cuối cùng, sau cùng, rốt cuộc",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ɪˈventʃuəli/",
        example: "Our flight eventually left five hours late.",
        exampleTranslation: "Chuyến bay của chúng tôi cuối cùng đã cất cánh trễ năm giờ."
    },
    {
        word: "examine",
        meaning: "kiểm tra, xem xét, khảo sát",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ɪɡˈzæmɪn/",
        example: "This study sets out to examine in detail the possible effects of climate change.",
        exampleTranslation: "Nghiên cứu này nhằm mục đích xem xét chi tiết các tác động có thể có của biến đổi khí hậu."
    },
    {
        word: "except",
        meaning: "ngoại trừ, trừ ra",
        partOfSpeech: "conjunction",
        level: "B1",
        phonetic: "/ɪkˈsept/",
        example: "I didn't tell him anything except that I needed the money.",
        exampleTranslation: "Tôi không nói với anh ấy bất cứ điều gì ngoại trừ việc tôi cần tiền."
    },
    {
        word: "exchange",
        meaning: "sự trao đổi, sự giao dịch",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ɪksˈtʃeɪndʒ/",
        example: "The exchange of prisoners took place this morning.",
        exampleTranslation: "Việc trao đổi tù nhân diễn ra vào sáng nay."
    },
    {
        word: "excitement",
        meaning: "sự hào hứng, sự phấn khích, sự sôi nổi",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ɪkˈsaɪtmənt/",
        example: "The news caused great excitement among her friends.",
        exampleTranslation: "Tin tức đã gây ra sự phấn khích lớn trong số bạn bè của cô ấy."
    },
    {
        word: "exhibition",
        meaning: "cuộc triển lãm, sự trưng bày",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˌeksɪˈbɪʃn/",
        example: "Have you seen the Picasso exhibition?",
        exampleTranslation: "Bạn đã xem triển lãm Picasso chưa?"
    },
    {
        word: "expand",
        meaning: "mở rộng, tăng lên, phát triển",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ɪkˈspænd/",
        example: "Metals expand when they are heated.",
        exampleTranslation: "Kim loại nở ra khi bị nung nóng."
    },
    {
        word: "expected",
        meaning: "được mong đợi, dự kiến",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ɪkˈspektɪd/",
        example: "Double the expected number of people came to the meeting.",
        exampleTranslation: "Số người đến cuộc họp gấp đôi dự kiến."
    },
    {
        word: "expedition",
        meaning: "chuyến thám hiểm, đoàn thám hiểm",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˌekspəˈdɪʃn/",
        example: "to plan/lead/go on an expedition",
        exampleTranslation: "lập kế hoạch/dẫn đầu/đi một chuyến thám hiểm"
    },
    {
        word: "experience",
        meaning: "trải qua, trải nghiệm",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ɪkˈspɪriəns/",
        example: "Many people have never experienced these difficulties first-hand.",
        exampleTranslation: "Nhiều người chưa bao giờ tự mình trải qua những khó khăn này."
    },
    {
        word: "experienced",
        meaning: "có kinh nghiệm, dày dạn kinh nghiệm",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ɪkˈspɪriənst/",
        example: "an experienced player/teacher",
        exampleTranslation: "một cầu thủ/giáo viên có kinh nghiệm"
    },
    {
        word: "experiment",
        meaning: "thử nghiệm, làm thí nghiệm",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ɪkˈsperɪment/",
        example: "After experimenting at Columbia University, he realized that fission was the key to releasing nuclear energy.",
        exampleTranslation: "Sau khi thử nghiệm tại Đại học Columbia, anh nhận ra rằng phân hạch là chìa khóa để giải phóng năng lượng hạt nhân."
    },
    {
        word: "explode",
        meaning: "nổ tung",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ɪkˈspləʊd/",
        example: "A second bomb exploded in a crowded market.",
        exampleTranslation: "Một quả bom thứ hai đã nổ tung ở một khu chợ đông đúc."
    },
    {
        word: "explore",
        meaning: "khám phá, thăm dò",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ɪkˈsplɔːr/",
        example: "As soon as we arrived on the island we were eager to explore.",
        exampleTranslation: "Ngay khi chúng tôi đến đảo, chúng tôi đã háo hức muốn khám phá."
    },
    {
        word: "explosion",
        meaning: "vụ nổ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ɪkˈspləʊʒn/",
        example: "a bomb/nuclear/gas explosion",
        exampleTranslation: "một vụ nổ bom/hạt nhân/gas"
    },
    {
        word: "export",
        meaning: "hàng xuất khẩu",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈekspɔːrt/",
        example: "a ban on the export of live cattle",
        exampleTranslation: "lệnh cấm xuất khẩu gia súc sống"
    },
    {
        word: "extra",
        meaning: "thêm, phụ trội",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈekstrə/",
        example: "to pay/cost extra",
        exampleTranslation: "trả/chi phí thêm"
    },
    {
        word: "face",
        meaning: "đối mặt, đương đầu",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/feɪs/",
        example: "face somebody/something She turned and faced him.",
        exampleTranslation: "đối mặt với ai đó/cái gì đó Cô ấy quay lại và đối mặt với anh ấy."
    },
    {
        word: "fairly",
        meaning: "khá, tương đối",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈferli/",
        example: "fairly simple/easy/straightforward",
        exampleTranslation: "khá đơn giản/dễ dàng/thẳng thắn"
    },
    {
        word: "familiar",
        meaning: "quen thuộc, thân quen",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/fəˈmɪliər/",
        example: "to look/sound/seem familiar",
        exampleTranslation: "trông/nghe/có vẻ quen thuộc"
    },
    {
        word: "fancy",
        meaning: "tinh vi, cầu kỳ, sang trọng",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈfænsi/",
        example: "a kitchen full of fancy gadgets",
        exampleTranslation: "một nhà bếp đầy những thiết bị sang trọng"
    },
    {
        word: "far",
        meaning: "xa, đằng xa",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/fɑːr/",
        example: "I saw her on the far side of the road.",
        exampleTranslation: "Tôi nhìn thấy cô ấy ở phía xa của con đường."
    },
    {
        word: "fascinating",
        meaning: "hấp dẫn, lôi cuốn",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈfæsɪneɪtɪŋ/",
        example: "a fascinating story",
        exampleTranslation: "một câu chuyện hấp dẫn"
    },
    {
        word: "fashionable",
        meaning: "hợp thời trang, mốt",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈfæʃnəbl/",
        example: "fashionable clothes/ideas/styles",
        exampleTranslation: "quần áo/ý tưởng/phong cách hợp thời trang"
    },
    {
        word: "fasten",
        meaning: "buộc, cài, thắt chặt",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈfæsn/",
        example: "Fasten your seat belts, please.",
        exampleTranslation: "Xin hãy thắt dây an toàn."
    },
    {
        word: "favour",
        meaning: "sự giúp đỡ, ân huệ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈfeɪvər/",
        example: "Could you do me a favour and pick up Sam from school today?",
        exampleTranslation: "Bạn có thể giúp tôi một việc được không, đó là đón Sam ở trường hôm nay?"
    },
    {
        word: "fear",
        meaning: "sợ, lo sợ",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/fɪr/",
        example: "fear somebody/something All his employees fear him.",
        exampleTranslation: "Tất cả nhân viên của ông ấy đều sợ ông ấy."
    },
    {
        word: "feature",
        meaning: "có đặc điểm, có tính năng, đóng vai trò",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈfiːtʃər/",
        example: "feature somebody/something as somebody/something The film features Cary Grant as a professor.",
        exampleTranslation: "Bộ phim có sự góp mặt của Cary Grant trong vai một giáo sư."
    },
    {
        word: "fence",
        meaning: "hàng rào",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/fens/",
        example: "The two women chatted over the garden fence.",
        exampleTranslation: "Hai người phụ nữ trò chuyện qua hàng rào vườn."
    },
    {
        word: "fighting",
        meaning: "sự đánh nhau, cuộc chiến, xung đột",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈfaɪtɪŋ/",
        example: "Fighting broke out in three districts of the city last night.",
        exampleTranslation: "Đã xảy ra giao tranh ở ba quận của thành phố đêm qua."
    },
    {
        word: "file",
        meaning: "tập hồ sơ, tài liệu, cặp đựng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/faɪl/",
        example: "a box file",
        exampleTranslation: "một cặp hồ sơ"
    },
    {
        word: "financial",
        meaning: "tài chính, về tài chính",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/fəˈnænʃl/",
        example: "the world's major financial markets/institutions",
        exampleTranslation: "các thị trường/tổ chức tài chính lớn nhất thế giới"
    },
    {
        word: "fire",
        meaning: "bắn, sa thải",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈfaɪər/",
        example: "The officer ordered his men to fire.",
        exampleTranslation: "Sĩ quan ra lệnh cho binh lính của mình khai hỏa."
    },
    {
        word: "fitness",
        meaning: "sức khỏe tốt, thể lực",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈfɪtnəs/",
        example: "a magazine on health and fitness",
        exampleTranslation: "một tạp chí về sức khỏe và thể lực"
    },
    {
        word: "fixed",
        meaning: "cố định, đã được sửa",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/fɪkst/",
        example: "These fixed prices give farmers a degree of financial security.",
        exampleTranslation: "Những mức giá cố định này mang lại cho nông dân một mức độ an ninh tài chính nhất định."
    },
    {
        word: "flag",
        meaning: "cờ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/flæɡ/",
        example: "the Italian flag",
        exampleTranslation: "cờ Ý"
    },
    {
        word: "flood",
        meaning: "lũ lụt, trận lụt",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/flʌd/",
        example: "The heavy rain has caused floods in many parts of the country.",
        exampleTranslation: "Trận mưa lớn đã gây ra lũ lụt ở nhiều nơi trên cả nước."
    },
    {
        word: "flour",
        meaning: "bột",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈflaʊər/",
        example: "Sift the flour and salt into a bowl.",
        exampleTranslation: "Rây bột mì và muối vào một cái bát."
    },
    {
        word: "flow",
        meaning: "dòng chảy, luồng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/fləʊ/",
        example: "the flow of an electric current",
        exampleTranslation: "dòng điện"
    },
    {
        word: "fold",
        meaning: "gấp",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/fəʊld/",
        example: "First, fold the paper in half/in two.",
        exampleTranslation: "Trước tiên, gấp tờ giấy làm đôi."
    },
    {
        word: "folk",
        meaning: "dân gian, thuộc về nhân dân",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/fəʊk/",
        example: "We visited an exhibition of folk art.",
        exampleTranslation: "Chúng tôi đã tham quan một triển lãm nghệ thuật dân gian."
    },
    {
        word: "following",
        meaning: "sau đây, tiếp theo",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈfɑːləʊɪŋ/",
        example: "The following is a summary of events.",
        exampleTranslation: "Sau đây là bản tóm tắt các sự kiện."
    },
    {
        word: "force",
        meaning: "lực lượng, vũ lực",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/fɔːrs/",
        example: "The release of the hostages could not be achieved without the use of force.",
        exampleTranslation: "Việc giải cứu con tin không thể đạt được nếu không sử dụng vũ lực."
    },
    {
        word: "forever",
        meaning: "mãi mãi, vĩnh viễn",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/fərˈevər/",
        example: "I'll love you forever!",
        exampleTranslation: "Anh sẽ yêu em mãi mãi!"
    },
    {
        word: "frame",
        meaning: "khung",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/freɪm/",
        example: "a picture/photo frame",
        exampleTranslation: "một khung ảnh/tranh"
    },
    {
        word: "freeze",
        meaning: "đóng băng",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/friːz/",
        example: "Water freezes at 0°C.",
        exampleTranslation: "Nước đóng băng ở 0°C."
    },
    {
        word: "frequently",
        meaning: "thường xuyên, hay",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈfriːkwəntli/",
        example: "Buses run frequently between the city and the airport.",
        exampleTranslation: "Xe buýt chạy thường xuyên giữa thành phố và sân bay."
    },
    {
        word: "friendship",
        meaning: "tình bạn",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈfrendʃɪp/",
        example: "They formed a close friendship at college.",
        exampleTranslation: "Họ đã hình thành một tình bạn thân thiết ở trường đại học."
    },
    {
        word: "frighten",
        meaning: "làm cho sợ hãi",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈfraɪtn/",
        example: "frighten (somebody) Sorry, I didn't mean to frighten you.",
        exampleTranslation: "Xin lỗi, tôi không cố ý làm bạn sợ."
    },
    {
        word: "frightened",
        meaning: "sợ hãi, hoảng sợ",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈfraɪtnd/",
        example: "a frightened child",
        exampleTranslation: "một đứa trẻ sợ hãi"
    },
    {
        word: "frightening",
        meaning: "sợ hãi, đáng sợ",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈfraɪtnɪŋ/",
        example: "a frightening experience/prospect/thought",
        exampleTranslation: "một trải nghiệm/viễn cảnh/suy nghĩ đáng sợ"
    },
    {
        word: "frozen",
        meaning: "đông lạnh",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈfrəʊzn/",
        example: "frozen peas/fish/pizza",
        exampleTranslation: "đậu Hà Lan/cá/pizza đông lạnh"
    },
    {
        word: "fry",
        meaning: "rán",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/fraɪ/",
        example: "fry (something) fried fish",
        exampleTranslation: "cá rán"
    },
    {
        word: "fuel",
        meaning: "nhiên liệu",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈfjuːəl/",
        example: "diesel/jet/rocket fuel",
        exampleTranslation: "nhiên liệu diesel/phản lực/tên lửa"
    },
    {
        word: "function",
        meaning: "chức năng, vai trò",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈfʌŋkʃn/",
        example: "The club serves a useful function as a meeting place.",
        exampleTranslation: "Câu lạc bộ có chức năng hữu ích như một nơi gặp gỡ."
    },
    {
        word: "fur",
        meaning: "lông (động vật)",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/fɜːr/",
        example: "The cat carefully licked its fur.",
        exampleTranslation: "Con mèo cẩn thận liếm bộ lông của mình."
    },
    {
        word: "further",
        meaning: "xa hơn nữa, hơn nữa",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈfɜːrðər/",
        example: "We had walked a bit further than I had realized.",
        exampleTranslation: "Chúng tôi đã đi bộ xa hơn một chút so với tôi nghĩ."
    },
    {
        word: "garage",
        meaning: "nhà để xe, ga-ra",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ɡəˈrɑːdʒ/",
        example: "a double garage (= one for two cars)",
        exampleTranslation: "một nhà để xe đôi (= một cho hai ô tô)"
    },
    {
        word: "gather",
        meaning: "tụ tập, tập hợp",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈɡæðər/",
        example: "A crowd soon gathered.",
        exampleTranslation: "Một đám đông nhanh chóng tụ tập."
    },
    {
        word: "generally",
        meaning: "nhìn chung, nói chung, thường",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈdʒenrəli/",
        example: "The initiative was generally considered a success.",
        exampleTranslation: "Sáng kiến này nhìn chung được coi là một thành công."
    },
    {
        word: "generation",
        meaning: "thế hệ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˌdʒenəˈreɪʃn/",
        example: "the younger/older generation",
        exampleTranslation: "thế hệ trẻ hơn/lớn tuổi hơn"
    },
    {
        word: "generous",
        meaning: "hào phóng, rộng lượng",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈdʒenərəs/",
        example: "The gallery was named after its most generous benefactor.",
        exampleTranslation: "Phòng trưng bày được đặt tên theo nhà hảo tâm hào phóng nhất của nó."
    },
    {
        word: "gentle",
        meaning: "hiền lành, dịu dàng",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈdʒentl/",
        example: "a kind and gentle man",
        exampleTranslation: "một người đàn ông tốt bụng và hiền lành"
    },
    {
        word: "gentleman",
        meaning: "quý ông, người lịch sự",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈdʒentlmən/",
        example: "You acted like a true gentleman.",
        exampleTranslation: "Anh đã hành xử như một quý ông thực sự."
    },
    {
        word: "ghost",
        meaning: "ma",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ɡəʊst/",
        example: "Do you believe in ghosts (= believe that they exist)?",
        exampleTranslation: "Bạn có tin vào ma không (= tin rằng chúng tồn tại)?"
    },
    {
        word: "giant",
        meaning: "khổng lồ, to lớn",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈdʒaɪənt/",
        example: "The match was shown on a giant screen outside the town hall.",
        exampleTranslation: "Trận đấu được chiếu trên một màn hình khổng lồ bên ngoài tòa thị chính."
    },
    {
        word: "glad",
        meaning: "vui mừng, vui vẻ",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ɡlæd/",
        example: "‘I passed the test!’ ‘I’m so glad.’",
        exampleTranslation: "‘Tôi đã vượt qua bài kiểm tra!’ ‘Tôi rất vui.’"
    },
    {
        word: "global",
        meaning: "toàn cầu",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈɡləʊbl/",
        example: "This year the global economy will grow by about 4 per cent.",
        exampleTranslation: "Năm nay, kinh tế toàn cầu sẽ tăng trưởng khoảng 4 phần trăm."
    },
    {
        word: "glove",
        meaning: "găng tay",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ɡlʌv/",
        example: "a pair of gloves",
        exampleTranslation: "một đôi găng tay"
    },
    {
        word: "go",
        meaning: "lượt (chơi), phiên",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ɡəʊ/",
        example: "Whose go is it?",
        exampleTranslation: "Đến lượt ai?"
    },
    {
        word: "goods",
        meaning: "hàng hóa",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ɡʊdz/",
        example: "to produce/buy/sell goods",
        exampleTranslation: "sản xuất/mua/bán hàng hóa"
    },
    {
        word: "grade",
        meaning: "điểm số, cấp độ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ɡreɪd/",
        example: "(British English) She got good grades in her exams.",
        exampleTranslation: "Cô ấy đạt điểm cao trong các kỳ thi của mình."
    },
    {
        word: "graduate",
        meaning: "sinh viên tốt nghiệp, người đã tốt nghiệp",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈɡrædʒuət/",
        example: "job prospects for graduates",
        exampleTranslation: "triển vọng việc làm cho sinh viên tốt nghiệp"
    },
    {
        word: "grain",
        meaning: "ngũ cốc, hạt",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ɡreɪn/",
        example: "Russia sold 12 million tons of grain abroad last year.",
        exampleTranslation: "Nga đã bán 12 triệu tấn ngũ cốc ra nước ngoài vào năm ngoái."
    },
    {
        word: "grateful",
        meaning: "biết ơn, cảm kích",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈɡreɪtfl/",
        example: "Thank you for doing this. I really am so grateful.",
        exampleTranslation: "Cảm ơn bạn đã làm điều này. Tôi thực sự rất biết ơn."
    },
    {
        word: "growth",
        meaning: "sự phát triển, sự tăng trưởng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ɡrəʊθ/",
        example: "Lack of water will stunt the plant's growth.",
        exampleTranslation: "Thiếu nước sẽ cản trở sự phát triển của cây."
    },
    {
        word: "guard",
        meaning: "lính gác, bảo vệ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ɡɑːrd/",
        example: "prison/border guards",
        exampleTranslation: "lính canh nhà tù/biên phòng"
    },
    {
        word: "guilty",
        meaning: "có tội, cảm thấy tội lỗi",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈɡɪlti/",
        example: "Matt and Chrissy both looked equally guilty.",
        exampleTranslation: "Matt và Chrissy cả hai đều trông có vẻ tội lỗi như nhau."
    },
    {
        word: "hand",
        meaning: "đưa, trao",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/hænd/",
        example: "She handed the letter to me.",
        exampleTranslation: "Cô ấy đưa lá thư cho tôi."
    },
    {
        word: "hang",
        meaning: "treo",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/hæŋ/",
        example: "+ adv./prep. Hang your coat on the hook.",
        exampleTranslation: "Treo áo khoác của bạn lên móc."
    },
    {
        word: "happiness",
        meaning: "hạnh phúc, sự hạnh phúc",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈhæpinəs/",
        example: "to find true happiness",
        exampleTranslation: "tìm thấy hạnh phúc đích thực"
    },
    {
        word: "hardly",
        meaning: "hầu như không",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈhɑːrdli/",
        example: "There's hardly any tea left.",
        exampleTranslation: "Hầu như không còn chút trà nào."
    },
    {
        word: "hate",
        meaning: "sự căm ghét, lòng thù hận",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/heɪt/",
        example: "She gave him a look of real hate.",
        exampleTranslation: "Cô ấy nhìn anh ta bằng ánh mắt đầy căm ghét thực sự."
    },
    {
        word: "head",
        meaning: "đi về phía, hướng về",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/hed/",
        example: "Where are we heading?",
        exampleTranslation: "Chúng ta đang đi về đâu?"
    },
    {
        word: "headline",
        meaning: "tiêu đề, đề mục",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈhedlaɪn/",
        example: "a newspaper headline",
        exampleTranslation: "một tiêu đề báo"
    },
    {
        word: "heating",
        meaning: "hệ thống sưởi",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈhiːtɪŋ/",
        example: "to put/turn the heating on",
        exampleTranslation: "bật hệ thống sưởi lên"
    },
    {
        word: "heavily",
        meaning: "nặng nề, dữ dội",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈhevɪli/",
        example: "It was raining heavily.",
        exampleTranslation: "Trời mưa rất to."
    },
    {
        word: "helicopter",
        meaning: "máy bay trực thăng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈhelɪkɑːptər/",
        example: "a police/rescue helicopter",
        exampleTranslation: "một máy bay trực thăng cảnh sát/cứu hộ"
    },
    {
        word: "highlight",
        meaning: "điểm nổi bật, điểm nhấn",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈhaɪlaɪt/",
        example: "One of the highlights of the trip was seeing the Taj Mahal.",
        exampleTranslation: "Một trong những điểm nổi bật của chuyến đi là được nhìn thấy đền Taj Mahal."
    },
    {
        word: "highly",
        meaning: "cao độ, rất",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈhaɪli/",
        example: "It is highly unlikely that she'll be late.",
        exampleTranslation: "Rất khó có khả năng cô ấy sẽ bị muộn."
    },
    {
        word: "hire",
        meaning: "thuê, tuyển dụng",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈhaɪər/",
        example: "She was hired three years ago.",
        exampleTranslation: "Cô ấy được tuyển dụng ba năm trước."
    },
    {
        word: "historic",
        meaning: "cổ xưa, lịch sử",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/hɪˈstɔːrɪk/",
        example: "the restoration of historic buildings",
        exampleTranslation: "việc phục hồi các tòa nhà lịch sử"
    },
    {
        word: "historical",
        meaning: "thuộc lịch sử, có tính lịch sử",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/hɪˈstɔːrɪkl/",
        example: "You must place these events in their historical context.",
        exampleTranslation: "Bạn phải đặt những sự kiện này vào bối cảnh lịch sử của chúng."
    },
    {
        word: "honest",
        meaning: "thật thà, trung thực",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈɑːnɪst/",
        example: "an honest man/woman",
        exampleTranslation: "một người đàn ông/phụ nữ trung thực"
    },
    {
        word: "horrible",
        meaning: "kinh khủng, tồi tệ",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈhɔːrəbl/",
        example: "What horrible weather!",
        exampleTranslation: "Thời tiết gì mà kinh khủng vậy!"
    },
    {
        word: "horror",
        meaning: "sự kinh hoàng, nỗi sợ hãi",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈhɔːrər/",
        example: "The thought of being left alone filled her with horror.",
        exampleTranslation: "Suy nghĩ bị bỏ lại một mình khiến cô ấy kinh hoàng."
    },
    {
        word: "host",
        meaning: "người chủ, người dẫn chương trình",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/həʊst/",
        example: "Ian, our host, introduced us to the other guests.",
        exampleTranslation: "Ian, người chủ nhà của chúng tôi, đã giới thiệu chúng tôi với những vị khách khác."
    },
    {
        word: "hunt",
        meaning: "săn bắt",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/hʌnt/",
        example: "Lions sometimes hunt alone.",
        exampleTranslation: "Sư tử đôi khi săn một mình."
    },
    {
        word: "hurricane",
        meaning: "cơn bão lớn, cuồng phong",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈhɜːrəkeɪn/",
        example: "A powerful hurricane hit the Florida coast.",
        exampleTranslation: "Một cơn bão lớn mạnh đã đổ bộ vào bờ biển Florida."
    },
    {
        word: "hurry",
        meaning: "sự vội vã, vội vàng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈhɜːri/",
        example: "Take your time—there's no hurry.",
        exampleTranslation: "Cứ từ từ thôi—không có gì phải vội cả."
    },
    {
        word: "identity",
        meaning: "danh tính, căn cước",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/aɪˈdentəti/",
        example: "The police are trying to discover the identity of the killer.",
        exampleTranslation: "Cảnh sát đang cố gắng tìm ra danh tính của kẻ sát nhân."
    },
    {
        word: "ignore",
        meaning: "phớt lờ, bỏ qua",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ɪɡˈnɔːr/",
        example: "He ignored all the ‘No Smoking’ signs and lit up a cigarette.",
        exampleTranslation: "Anh ta phớt lờ tất cả các biển báo ‘Cấm hút thuốc’ và châm một điếu thuốc."
    },
    {
        word: "illegal",
        meaning: "bất hợp pháp, trái pháp luật",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ɪˈliːɡl/",
        example: "illegal drugs/firearms/substances",
        exampleTranslation: "ma túy/vũ khí/chất cấm"
    },
    {
        word: "imaginary",
        meaning: "tưởng tượng, hư cấu",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ɪˈmædʒɪneri/",
        example: "The equator is an imaginary line around the middle of the earth.",
        exampleTranslation: "Xích đạo là một đường tưởng tượng quanh giữa trái đất."
    },
    {
        word: "immediate",
        meaning: "ngay lập tức, tức thì",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ɪˈmiːdiət/",
        example: "an immediate reaction/response",
        exampleTranslation: "một phản ứng/phản hồi tức thì"
    },
    {
        word: "immigrant",
        meaning: "người nhập cư",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈɪmɪɡrənt/",
        example: "immigrant from… immigrants from other European countries",
        exampleTranslation: "người nhập cư từ... những người nhập cư từ các quốc gia châu Âu khác"
    },
    {
        word: "impact",
        meaning: "tác động, ảnh hưởng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈɪmpækt/",
        example: "a positive/a negative/an adverse impact",
        exampleTranslation: "tác động tích cực/tiêu cực/xấu"
    },
    {
        word: "import",
        meaning: "hàng nhập khẩu",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈɪmpɔːrt/",
        example: "import from… food imports from abroad",
        exampleTranslation: "nhập khẩu từ... nhập khẩu thực phẩm từ nước ngoài"
    },
    {
        word: "importance",
        meaning: "tầm quan trọng, sự quan trọng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ɪmˈpɔːrtns/",
        example: "She stressed the importance of careful preparation.",
        exampleTranslation: "Cô ấy nhấn mạnh tầm quan trọng của việc chuẩn bị kỹ lưỡng."
    },
    {
        word: "impression",
        meaning: "ấn tượng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ɪmˈpreʃn/",
        example: "My first impression of him was favourable.",
        exampleTranslation: "Ấn tượng đầu tiên của tôi về anh ấy là thuận lợi."
    },
    {
        word: "impressive",
        meaning: "ấn tượng, đáng ngưỡng mộ",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ɪmˈpresɪv/",
        example: "an impressive performance",
        exampleTranslation: "một màn trình diễn ấn tượng"
    },
    {
        word: "improvement",
        meaning: "sự cải thiện, sự tiến bộ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ɪmˈpruːvmənt/",
        example: "The economy has shown significant improvement over the past 9 months.",
        exampleTranslation: "Nền kinh tế đã cho thấy sự cải thiện đáng kể trong 9 tháng qua."
    },
    {
        word: "incredibly",
        meaning: "vô cùng, cực kỳ",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ɪnˈkredəbli/",
        example: "It was all incredibly difficult.",
        exampleTranslation: "Mọi thứ đều cực kỳ khó khăn."
    },
    {
        word: "indeed",
        meaning: "thực sự, quả thật",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ɪnˈdiːd/",
        example: "Thank you very much indeed!",
        exampleTranslation: "Cảm ơn bạn rất nhiều!"
    },
    {
        word: "indicate",
        meaning: "chỉ ra, cho thấy",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈɪndɪkeɪt/",
        example: "Initial tests indicate the presence of oxygen.",
        exampleTranslation: "Các thử nghiệm ban đầu chỉ ra sự hiện diện của oxy."
    },
    {
        word: "indirect",
        meaning: "gián tiếp",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˌɪndaɪˈrekt/",
        example: "the indirect effects of the war",
        exampleTranslation: "những ảnh hưởng gián tiếp của chiến tranh"
    },
    {
        word: "indoor",
        meaning: "trong nhà",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈɪndɔːr/",
        example: "an indoor swimming pool",
        exampleTranslation: "một bể bơi trong nhà"
    },
    {
        word: "indoors",
        meaning: "trong nhà",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˌɪnˈdɔːrz/",
        example: "I prefer to stay indoors in this really hot weather.",
        exampleTranslation: "Tôi thích ở trong nhà hơn trong thời tiết rất nóng này."
    },
    {
        word: "influence",
        meaning: "ảnh hưởng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈɪnfluəns/",
        example: "His early work shows the influence of Cézanne and Matisse.",
        exampleTranslation: "Tác phẩm ban đầu của ông thể hiện ảnh hưởng của Cézanne và Matisse."
    },
    {
        word: "ingredient",
        meaning: "thành phần",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ɪnˈɡriːdiənt/",
        example: "Mix all the ingredients in a bowl.",
        exampleTranslation: "Trộn tất cả các thành phần trong một cái bát."
    },
    {
        word: "injure",
        meaning: "làm bị thương, gây thương tích",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈɪndʒər/",
        example: "He injured his knee playing hockey.",
        exampleTranslation: "Anh ấy đã bị thương đầu gối khi chơi khúc côn cầu."
    },
    {
        word: "injured",
        meaning: "bị thương",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈɪndʒərd/",
        example: "His injured leg prevented him from walking.",
        exampleTranslation: "Chân bị thương của anh ấy đã ngăn anh ấy đi bộ."
    },
    {
        word: "innocent",
        meaning: "vô tội",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈɪnəsnt/",
        example: "They have imprisoned an innocent man.",
        exampleTranslation: "Họ đã bỏ tù một người đàn ông vô tội."
    },
    {
        word: "intelligence",
        meaning: "trí thông minh",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ɪnˈtelɪdʒəns/",
        example: "a person of high/average/low intelligence",
        exampleTranslation: "một người có trí thông minh cao/trung bình/thấp"
    },
    {
        word: "intend",
        meaning: "dự định, có ý định",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ɪnˈtend/",
        example: "We finished later than we had intended.",
        exampleTranslation: "Chúng tôi đã kết thúc muộn hơn dự định."
    },
    {
        word: "intention",
        meaning: "ý định",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ɪnˈtenʃn/",
        example: "intention of doing something I have no intention of going to the wedding.",
        exampleTranslation: "ý định làm gì đó Tôi không có ý định đi đám cưới."
    },
    {
        word: "invest",
        meaning: "đầu tư",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ɪnˈvest/",
        example: "Now is a good time to invest.",
        exampleTranslation: "Bây giờ là thời điểm tốt để đầu tư."
    },
    {
        word: "investigate",
        meaning: "điều tra",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ɪnˈvestɪɡeɪt/",
        example: "The FBI has been called in to investigate.",
        exampleTranslation: "FBI đã được gọi đến để điều tra."
    },
    {
        word: "involved",
        meaning: "dính líu, liên quan",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ɪnˈvɑːlvd/",
        example: "Some people tried to stop the fight but I didn't want to get involved.",
        exampleTranslation: "Một số người đã cố gắng ngăn chặn vụ ẩu đả nhưng tôi không muốn dính líu."
    },
    {
        word: "iron",
        meaning: "sắt",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈaɪərn/",
        example: "iron gates/bars/railings",
        exampleTranslation: "cổng/thanh/lan can bằng sắt"
    },
    {
        word: "issue",
        meaning: "vấn đề, sự kiện",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈɪʃuː/",
        example: "a key/major issue",
        exampleTranslation: "một vấn đề/sự kiện quan trọng/chính"
    },
    {
        word: "IT",
        meaning: "Công nghệ thông tin",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˌaɪ ˈtiː/",
        example: "the increasing use of IT in all aspects of today's society",
        exampleTranslation: "sự gia tăng sử dụng CNTT trong mọi khía cạnh của xã hội ngày nay"
    },
    {
        word: "journal",
        meaning: "tạp chí",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈdʒɜːrnl/",
        example: "a scientific/an academic journal",
        exampleTranslation: "một tạp chí khoa học/học thuật"
    },
    {
        word: "judge",
        meaning: "thẩm phán",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/dʒʌdʒ/",
        example: "a High Court judge",
        exampleTranslation: "một thẩm phán Tòa án Tối cao"
    },
    {
        word: "keen",
        meaning: "say mê, háo hức",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/kiːn/",
        example: "keen to do something John was very keen to help.",
        exampleTranslation: "háo hức làm gì đó John rất háo hức giúp đỡ."
    },
    {
        word: "key",
        meaning: "nhập (dữ liệu)",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/kiː/",
        example: "I was busy keying data.",
        exampleTranslation: "Tôi đang bận nhập dữ liệu."
    },
    {
        word: "keyboard",
        meaning: "bàn phím",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈkiːbɔːrd/",
        example: "The program locks the keyboard until a password is given.",
        exampleTranslation: "Chương trình sẽ khóa bàn phím cho đến khi có mật khẩu."
    },
    {
        word: "kick",
        meaning: "cú đá",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/kɪk/",
        example: "the first kick of the game",
        exampleTranslation: "cú đá đầu tiên của trận đấu"
    },
    {
        word: "killing",
        meaning: "vụ giết người",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈkɪlɪŋ/",
        example: "Their leader condemned the torture and killing of innocent civilians.",
        exampleTranslation: "Thủ lĩnh của họ đã lên án hành động tra tấn và giết hại dân thường vô tội."
    },
    {
        word: "kind",
        meaning: "tốt bụng, tử tế",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/kaɪnd/",
        example: "a very kind and helpful person",
        exampleTranslation: "một người rất tốt bụng và hay giúp đỡ"
    },
    {
        word: "kiss",
        meaning: "nụ hôn",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/kɪs/",
        example: "Come here and give me a kiss!",
        exampleTranslation: "Lại đây hôn mẹ một cái nào!"
    },
    {
        word: "knock",
        meaning: "cú gõ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/nɑːk/",
        example: "knock on/at something There was a knock at the door.",
        exampleTranslation: "có tiếng gõ cửa"
    },
    {
        word: "label",
        meaning: "nhãn, nhãn mác",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈleɪbl/",
        example: "Always read the label carefully.",
        exampleTranslation: "Luôn đọc nhãn cẩn thận."
    },
    {
        word: "laboratory",
        meaning: "phòng thí nghiệm",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈlæbrətɔːri/",
        example: "a clinical/research laboratory",
        exampleTranslation: "một phòng thí nghiệm lâm sàng/nghiên cứu"
    },
    {
        word: "lack",
        meaning: "sự thiếu, sự không đủ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/læk/",
        example: "lack of something a lack of understanding/knowledge",
        exampleTranslation: "sự thiếu hiểu biết/kiến thức"
    },
    {
        word: "latest",
        meaning: "mới nhất, gần đây nhất",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈleɪtɪst/",
        example: "the latest craze/fashion/trend",
        exampleTranslation: "mốt/thời trang/xu hướng mới nhất"
    },
    {
        word: "lay",
        meaning: "đặt, để, để xuống",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/leɪ/",
        example: "lay somebody/something + adv./prep. He laid a hand on my arm.",
        exampleTranslation: "Anh ấy đặt tay lên cánh tay tôi."
    },
    {
        word: "layer",
        meaning: "lớp, tầng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈleɪər/",
        example: "layer (of something) A thin layer of dust covered everything.",
        exampleTranslation: "Một lớp bụi mỏng phủ lên mọi thứ."
    },
    {
        word: "lead",
        meaning: "sự dẫn đầu, vị trí dẫn đầu",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/liːd/",
        example: "She took the lead in the second lap.",
        exampleTranslation: "Cô ấy đã dẫn đầu trong vòng đua thứ hai."
    },
    {
        word: "leading",
        meaning: "hàng đầu, dẫn đầu",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈliːdɪŋ/",
        example: "a leading expert/authority/figure/member",
        exampleTranslation: "một chuyên gia/thẩm quyền/nhân vật/thành viên hàng đầu"
    },
    {
        word: "leaf",
        meaning: "lá",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/liːf/",
        example: "lettuce/cabbage/oak leaves",
        exampleTranslation: "lá rau diếp/bắp cải/sồi"
    },
    {
        word: "leather",
        meaning: "da, da thuộc",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈleðər/",
        example: "a leather jacket",
        exampleTranslation: "một chiếc áo khoác da"
    },
    {
        word: "legal",
        meaning: "hợp pháp, hợp luật",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈliːɡl/",
        example: "the legal profession/system",
        exampleTranslation: "ngành luật/hệ thống pháp luật"
    },
    {
        word: "leisure",
        meaning: "sự nhàn rỗi, thì giờ rảnh rỗi",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈliːʒər/",
        example: "These days we have more money and more leisure to enjoy it.",
        exampleTranslation: "Ngày nay chúng ta có nhiều tiền hơn và nhiều thời gian rảnh rỗi hơn để tận hưởng nó."
    },
    {
        word: "length",
        meaning: "chiều dài, độ dài",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/leŋkθ/",
        example: "Measure the length of the line from A to B.",
        exampleTranslation: "Đo chiều dài của đường thẳng từ A đến B."
    },
    {
        word: "level",
        meaning: "bằng phẳng, ngang bằng",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈlevl/",
        example: "Pitch the tent on level ground.",
        exampleTranslation: "Cắm trại trên mặt đất bằng phẳng."
    },
    {
        word: "lie",
        meaning: "lời nói dối",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/laɪ/",
        example: "to tell a lie",
        exampleTranslation: "nói dối"
    },
    {
        word: "like",
        meaning: "điều thích, sở thích",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/laɪk/",
        example: "We all have different likes and dislikes.",
        exampleTranslation: "Tất cả chúng ta đều có những điều thích và không thích khác nhau."
    },
    {
        word: "limit",
        meaning: "giới hạn, hạn chế",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈlɪmɪt/",
        example: "They imposed a strict spending limit.",
        exampleTranslation: "Họ áp đặt một giới hạn chi tiêu nghiêm ngặt."
    },
    {
        word: "lip",
        meaning: "môi",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/lɪp/",
        example: "The assistant pursed her lips.",
        exampleTranslation: "Người trợ lý mím chặt môi."
    },
    {
        word: "liquid",
        meaning: "lỏng, dạng lỏng",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈlɪkwɪd/",
        example: "liquid nitrogen",
        exampleTranslation: "nitơ lỏng"
    },
    {
        word: "literature",
        meaning: "văn học",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈlɪtrətʃʊr/",
        example: "English/American/French literature",
        exampleTranslation: "văn học Anh/Mỹ/Pháp"
    },
    {
        word: "live",
        meaning: "sống, trực tiếp",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/laɪv/",
        example: "live animals",
        exampleTranslation: "động vật sống"
    },
    {
        word: "living",
        meaning: "sự sống, đang sống",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈlɪvɪŋ/",
        example: "all living things",
        exampleTranslation: "tất cả các sinh vật sống"
    },
    {
        word: "local",
        meaning: "người địa phương",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈləʊkl/",
        example: "The locals are very friendly.",
        exampleTranslation: "Người dân địa phương rất thân thiện."
    },
    {
        word: "locate",
        meaning: "xác định vị trí, định vị",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈləʊkeɪt/",
        example: "The mechanic located the fault immediately.",
        exampleTranslation: "Người thợ máy đã xác định ngay lỗi."
    },
    {
        word: "located",
        meaning: "đặt tại, nằm ở",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈləʊkeɪtɪd/",
        example: "a small town located 30 miles south of Chicago",
        exampleTranslation: "một thị trấn nhỏ nằm cách Chicago 30 dặm về phía nam"
    },
    {
        word: "location",
        meaning: "vị trí, địa điểm",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ləʊˈkeɪʃn/",
        example: "a honeymoon in a secret location",
        exampleTranslation: "kỳ nghỉ trăng mật tại một địa điểm bí mật"
    },
    {
        word: "lonely",
        meaning: "cô đơn, lẻ loi",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈləʊnli/",
        example: "She lives alone and often feels lonely.",
        exampleTranslation: "Cô ấy sống một mình và thường cảm thấy cô đơn."
    },
    {
        word: "loss",
        meaning: "sự mất mát, sự thiệt hại",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/lɔːs/",
        example: "I want to report the loss of a package.",
        exampleTranslation: "Tôi muốn báo mất một gói hàng."
    },
    {
        word: "luxury",
        meaning: "sang trọng, xa xỉ",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈlʌkʃəri/",
        example: "a luxury hotel/car/apartment",
        exampleTranslation: "khách sạn/xe hơi/căn hộ sang trọng"
    },
    {
        word: "mad",
        meaning: "điên rồ, phát điên",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/mæd/",
        example: "You must be mad to risk it.",
        exampleTranslation: "Bạn phải điên thì mới dám mạo hiểm như vậy."
    },
    {
        word: "magic",
        meaning: "ma thuật, kỳ diệu",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈmædʒɪk/",
        example: "a magic spell/charm/potion",
        exampleTranslation: "bùa/bùa chú/thuốc ma thuật"
    },
    {
        word: "mainly",
        meaning: "chủ yếu, phần lớn",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈmeɪnli/",
        example: "They eat mainly fruit and nuts.",
        exampleTranslation: "Họ chủ yếu ăn trái cây và các loại hạt."
    },
    {
        word: "mall",
        meaning: "trung tâm thương mại, siêu thị",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/mɔːl/",
        example: "Let's go to the mall.",
        exampleTranslation: "Đi tới trung tâm mua sắm nào."
    },
    {
        word: "management",
        meaning: "sự quản lý, ban quản lý",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈmænɪdʒmənt/",
        example: "a career in management",
        exampleTranslation: "một sự nghiệp trong lĩnh vực quản lý"
    },
    {
        word: "market",
        meaning: "tiếp thị, quảng bá",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈmɑːrkɪt/",
        example: "The company utilizes every media tool available to market its products.",
        exampleTranslation: "Công ty sử dụng mọi phương tiện truyền thông có sẵn để tiếp thị sản phẩm của mình."
    },
    {
        word: "marketing",
        meaning: "tiếp thị, hoạt động tiếp thị",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈmɑːrkɪtɪŋ/",
        example: "a marketing campaign/strategy",
        exampleTranslation: "một chiến dịch/chiến lược tiếp thị"
    },
    {
        word: "marriage",
        meaning: "hôn nhân",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈmærɪdʒ/",
        example: "a happy/an unhappy marriage",
        exampleTranslation: "một cuộc hôn nhân hạnh phúc/bất hạnh"
    },
    {
        word: "meanwhile",
        meaning: "trong khi đó, đồng thời",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈmiːnwaɪl/",
        example: "Leave the cake to cool completely. Meanwhile, make the topping.",
        exampleTranslation: "Để bánh nguội hoàn toàn. Trong khi đó, làm lớp phủ."
    },
    {
        word: "measure",
        meaning: "biện pháp, sự đo lường",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈmeʒər/",
        example: "safety/austerity measures",
        exampleTranslation: "các biện pháp an toàn/thắt lưng buộc bụng"
    },
    {
        word: "medium",
        meaning: "trung bình, cỡ vừa",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈmiːdiəm/",
        example: "There are three sizes—small, medium and large.",
        exampleTranslation: "Có ba kích cỡ—nhỏ, trung bình và lớn."
    },
    {
        word: "mental",
        meaning: "tinh thần, thuộc về trí óc",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈmentl/",
        example: "the mental process of remembering",
        exampleTranslation: "quá trình tinh thần của việc ghi nhớ"
    },
    {
        word: "mention",
        meaning: "sự đề cập, lời nhắc tới",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈmenʃn/",
        example: "He made no mention of her work.",
        exampleTranslation: "Anh ấy không đề cập gì đến công việc của cô ấy."
    },
    {
        word: "mess",
        meaning: "sự bừa bộn, tình trạng lộn xộn",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/mes/",
        example: "in a mess The room was in a mess.",
        exampleTranslation: "trong tình trạng lộn xộn Căn phòng đang rất bừa bộn."
    },
    {
        word: "mild",
        meaning: "nhẹ, dịu",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/maɪld/",
        example: "a mild form of the disease",
        exampleTranslation: "một dạng nhẹ của bệnh"
    },
    {
        word: "mine",
        meaning: "mỏ (khoáng sản)",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/maɪn/",
        example: "a copper/diamond mine",
        exampleTranslation: "một mỏ đồng/kim cương"
    },
    {
        word: "mix",
        meaning: "sự pha trộn, sự kết hợp",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/mɪks/",
        example: "It's a school with a good social and ethnic mix of children.",
        exampleTranslation: "Đó là một trường học có sự pha trộn tốt về xã hội và dân tộc của trẻ em."
    },
    {
        word: "mixture",
        meaning: "sự pha trộn, hỗn hợp",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈmɪkstʃər/",
        example: "She was a curious mixture, part grand lady, part wild child.",
        exampleTranslation: "Cô ấy là một sự pha trộn kỳ lạ, một nửa nữ bá tước, một nửa cô gái hoang dã."
    },
    {
        word: "mood",
        meaning: "tâm trạng, tinh thần",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/muːd/",
        example: "in a … mood She's in a good mood today (= happy and friendly).",
        exampleTranslation: "trong tâm trạng… Cô ấy đang có tâm trạng tốt hôm nay (= vui vẻ và thân thiện)."
    },
    {
        word: "move",
        meaning: "sự di chuyển, hành động",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/muːv/",
        example: "Don't make a move!",
        exampleTranslation: "Đừng cử động!"
    },
    {
        word: "mud",
        meaning: "bùn",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/mʌd/",
        example: "The car wheels got stuck in the mud.",
        exampleTranslation: "Bánh xe ô tô bị mắc kẹt trong bùn."
    },
    {
        word: "murder",
        meaning: "vụ giết người, án mạng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈmɜːrdər/",
        example: "He was found guilty of murder.",
        exampleTranslation: "Anh ta bị kết tội giết người."
    },
    {
        word: "muscle",
        meaning: "cơ bắp",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈmʌsl/",
        example: "a calf/neck/thigh muscle",
        exampleTranslation: "cơ bắp bắp chân/cổ/đùi"
    },
    {
        word: "musical",
        meaning: "nhạc kịch",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈmjuːzɪkl/",
        example: "a Broadway/Hollywood musical",
        exampleTranslation: "một vở nhạc kịch trên sân khấu Broadway/Hollywood"
    },
    {
        word: "mystery",
        meaning: "bí ẩn, điều kỳ lạ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈmɪstəri/",
        example: "It is one of the great unsolved mysteries of this century.",
        exampleTranslation: "Đó là một trong những bí ẩn lớn chưa được giải đáp của thế kỷ này."
    },
    {
        word: "nail",
        meaning: "móng tay, đinh",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/neɪl/",
        example: "Stop biting your nails!",
        exampleTranslation: "Đừng cắn móng tay!"
    },
    {
        word: "narrative",
        meaning: "tự sự, tường thuật",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈnærətɪv/",
        example: "narrative fiction",
        exampleTranslation: "tiểu thuyết tự sự"
    },
    {
        word: "nation",
        meaning: "quốc gia, dân tộc",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈneɪʃn/",
        example: "European/Arab/Asian nations",
        exampleTranslation: "các quốc gia châu Âu/Ả Rập/châu Á"
    },
    {
        word: "native",
        meaning: "bản địa, quê hương",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈneɪtɪv/",
        example: "your native land/country/city",
        exampleTranslation: "quê hương/đất nước/thành phố quê hương của bạn"
    },
    {
        word: "naturally",
        meaning: "một cách tự nhiên, dĩ nhiên",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈnætʃrəli/",
        example: "Naturally, I get upset when things go wrong.",
        exampleTranslation: "Dĩ nhiên, tôi sẽ khó chịu khi mọi thứ diễn ra không suôn sẻ."
    },
    {
        word: "necessarily",
        meaning: "nhất thiết, nhất định",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˌnesəˈserəli/",
        example: "The number of places available is necessarily limited.",
        exampleTranslation: "Số lượng chỗ có sẵn nhất thiết là có hạn."
    },
    {
        word: "need",
        meaning: "cần, phải",
        partOfSpeech: "modal verb",
        level: "B1",
        phonetic: "/niːd/",
        example: "need (not) do something You needn't bother asking Rick—I know he's too busy.",
        exampleTranslation: "cần (không) làm gì Bạn không cần phải bận tâm hỏi Rick—tôi biết anh ấy quá bận."
    },
    {
        word: "needle",
        meaning: "kim (may vá, tiêm)",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈniːdl/",
        example: "a needle and thread",
        exampleTranslation: "một cây kim và chỉ"
    },
    {
        word: "neighbourhood",
        meaning: "khu phố, hàng xóm",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈneɪbərhʊd/",
        example: "We grew up in the same neighbourhood.",
        exampleTranslation: "Chúng tôi lớn lên cùng một khu phố."
    },
    {
        word: "neither",
        meaning: "cũng không, không ai/cái gì khác",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈnaɪðər/",
        example: "He didn't remember and neither did I.",
        exampleTranslation: "Anh ấy không nhớ và tôi cũng không."
    },
    {
        word: "net",
        meaning: "lưới",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/net/",
        example: "Unfortunately the animals are often caught in fishing nets.",
        exampleTranslation: "Thật không may, động vật thường bị mắc vào lưới đánh cá."
    },
    {
        word: "next",
        meaning: "tiếp theo, sau đó",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/nekst/",
        example: "One moment he wasn't there, the next he was.",
        exampleTranslation: "Lúc trước anh ấy không ở đây, lúc sau thì anh ấy đã có mặt."
    },
    {
        word: "nor",
        meaning: "cũng không",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/nɔːr/",
        example: "She seemed neither surprised nor worried.",
        exampleTranslation: "Cô ấy dường như không ngạc nhiên cũng không lo lắng."
    },
    {
        word: "normal",
        meaning: "bình thường",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈnɔːrml/",
        example: "above/below normal The rainfall has been above normal for the time of year.",
        exampleTranslation: "lượng mưa cao hơn mức bình thường so với thời điểm này trong năm."
    },
    {
        word: "northern",
        meaning: "phía bắc",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈnɔːrðərn/",
        example: "the northern slopes of the mountains",
        exampleTranslation: "sườn núi phía bắc"
    },
    {
        word: "note",
        meaning: "ghi lại, lưu ý",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/nəʊt/",
        example: "Note the fine early Baroque altar inside the chapel.",
        exampleTranslation: "Hãy lưu ý đến bàn thờ Baroque sớm tinh xảo bên trong nhà nguyện."
    },
    {
        word: "now",
        meaning: "bây giờ, bởi vì bây giờ",
        partOfSpeech: "conjunction",
        level: "B1",
        phonetic: "/naʊ/",
        example: "Now that the kids have left home we've got a lot of extra space.",
        exampleTranslation: "Bây giờ bọn trẻ đã rời nhà, chúng ta có rất nhiều không gian trống."
    },
    {
        word: "nuclear",
        meaning: "hạt nhân",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈnuːkliər/",
        example: "a nuclear power plant/station",
        exampleTranslation: "một nhà máy/trạm điện hạt nhân"
    },
    {
        word: "obvious",
        meaning: "rõ ràng, hiển nhiên",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈɑːbviəs/",
        example: "I know you don't like her but try not to make it so obvious.",
        exampleTranslation: "Tôi biết bạn không thích cô ấy nhưng cố gắng đừng thể hiện nó ra rõ ràng như vậy."
    },
    {
        word: "obviously",
        meaning: "rõ ràng, hiển nhiên",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈɑːbviəsli/",
        example: "Obviously, we don't want to spend too much money.",
        exampleTranslation: "Rõ ràng, chúng ta không muốn chi tiêu quá nhiều tiền."
    },
    {
        word: "occasion",
        meaning: "dịp, sự kiện",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/əˈkeɪʒn/",
        example: "on an occasion on this/that occasion",
        exampleTranslation: "vào một dịp nhân dịp này/dịp đó"
    },
    {
        word: "occur",
        meaning: "xảy ra, xảy đến",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/əˈkɜːr/",
        example: "When exactly did the incident occur?",
        exampleTranslation: "Sự cố đó xảy ra chính xác khi nào?"
    },
    {
        word: "odd",
        meaning: "lạ, kỳ lạ, lẻ",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ɑːd/",
        example: "They're very odd people.",
        exampleTranslation: "Họ là những người rất kỳ lạ."
    },
    {
        word: "official",
        meaning: "chính thức",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/əˈfɪʃl/",
        example: "an official announcement/decision/statement",
        exampleTranslation: "một thông báo/quyết định/tuyên bố chính thức"
    },
    {
        word: "old-fashioned",
        meaning: "lỗi thời, cổ điển",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˌəʊld ˈfæʃnd/",
        example: "old-fashioned clothes/styles/methods/equipment",
        exampleTranslation: "quần áo/phong cách/phương pháp/thiết bị lỗi thời"
    },
    {
        word: "once",
        meaning: "một khi, khi mà",
        partOfSpeech: "conjunction",
        level: "B1",
        phonetic: "/wʌns/",
        example: "We didn't know how we would cope once the money had gone.",
        exampleTranslation: "Chúng tôi không biết sẽ xoay sở thế nào khi tiền đã hết."
    },
    {
        word: "operation",
        meaning: "ca phẫu thuật",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˌɑːpəˈreɪʃn/",
        example: "Will I need to have an operation?",
        exampleTranslation: "Tôi có cần phải phẫu thuật không?"
    },
    {
        word: "organized",
        meaning: "có tổ chức, có ngăn nắp",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈɔːrɡənaɪzd/",
        example: "an organized body of workers",
        exampleTranslation: "một nhóm công nhân có tổ chức"
    },
    {
        word: "organizer",
        meaning: "người tổ chức",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈɔːrɡənaɪzər/",
        example: "the organizers of the festival",
        exampleTranslation: "những người tổ chức lễ hội"
    },
    {
        word: "original",
        meaning: "bản gốc",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/əˈrɪdʒənl/",
        example: "This painting is a copy; the original is in Madrid.",
        exampleTranslation: "Bức tranh này là bản sao; bản gốc ở Madrid."
    },
    {
        word: "originally",
        meaning: "ban đầu, lúc đầu",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/əˈrɪdʒənəli/",
        example: "The school was originally very small.",
        exampleTranslation: "Trường học ban đầu rất nhỏ."
    },
    {
        word: "ought",
        meaning: "nên, lẽ ra nên",
        partOfSpeech: "modal verb",
        level: "B1",
        phonetic: "/ˈɔːt tu/",
        example: "They ought to apologize.",
        exampleTranslation: "Họ nên xin lỗi."
    },
    {
        word: "ours",
        meaning: "của chúng tôi",
        partOfSpeech: "pronoun",
        level: "B1",
        phonetic: "/ˈaʊərz/",
        example: "Their house is very similar to ours, but ours is bigger.",
        exampleTranslation: "Ngôi nhà của họ rất giống nhà chúng tôi, nhưng nhà chúng tôi lớn hơn."
    },
    {
        word: "outdoor",
        meaning: "ngoài trời",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈaʊtdɔːr/",
        example: "outdoor pursuits/recreation/activities",
        exampleTranslation: "các hoạt động ngoài trời/giải trí/hoạt động"
    },
    {
        word: "outdoors",
        meaning: "ngoài trời",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˌaʊtˈdɔːrz/",
        example: "The rain prevented them from eating outdoors.",
        exampleTranslation: "Trận mưa đã ngăn cản họ ăn uống ngoài trời."
    },
    {
        word: "pack",
        meaning: "gói, bọc",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/pæk/",
        example: "pack of something a pack of cigarettes/gum",
        exampleTranslation: "gói thuốc lá/kẹo cao su"
    },
    {
        word: "package",
        meaning: "gói hàng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈpækɪdʒ/",
        example: "A large package has arrived for you.",
        exampleTranslation: "Một gói hàng lớn đã đến cho bạn."
    },
    {
        word: "painful",
        meaning: "đau đớn, khó chịu",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈpeɪnfl/",
        example: "Is your back still painful?",
        exampleTranslation: "Lưng bạn vẫn còn đau chứ?"
    },
    {
        word: "pale",
        meaning: "nhợt nhạt, tái",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/peɪl/",
        example: "a pale complexion",
        exampleTranslation: "làn da trắng nhợt"
    },
    {
        word: "pan",
        meaning: "chảo, nồi",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/pæn/",
        example: "pots and pans",
        exampleTranslation: "nồi và chảo"
    },
    {
        word: "participate",
        meaning: "tham gia, dự",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/pɑːrˈtɪsɪpeɪt/",
        example: "Anyone who wishes to participate is welcome.",
        exampleTranslation: "Bất cứ ai muốn tham gia đều được chào đón."
    },
    {
        word: "particularly",
        meaning: "đặc biệt, nhất là",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/pərˈtɪkjələrli/",
        example: "particularly useful/important/interesting",
        exampleTranslation: "đặc biệt hữu ích/quan trọng/thú vị"
    },
    {
        word: "pass",
        meaning: "vé (máy bay)",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/pæs/",
        example: "a boarding pass (= for a plane)",
        exampleTranslation: "vé lên máy bay"
    },
    {
        word: "passion",
        meaning: "niềm đam mê, sự say mê",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈpæʃn/",
        example: "I admire the passion and commitment shown by the players.",
        exampleTranslation: "Tôi ngưỡng mộ niềm đam mê và sự cống hiến của các cầu thủ."
    },
    {
        word: "path",
        meaning: "đường mòn, lối đi",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/pæθ/",
        example: "a dirt/gravel/concrete path",
        exampleTranslation: "lối đi bằng đất/sỏi/bê tông"
    },
    {
        word: "payment",
        meaning: "sự thanh toán, khoản thanh toán",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈpeɪmənt/",
        example: "What method of payment do you prefer?",
        exampleTranslation: "Bạn thích phương thức thanh toán nào?"
    },
    {
        word: "peaceful",
        meaning: "hòa bình, yên bình",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈpiːsfl/",
        example: "a peaceful protest/demonstration",
        exampleTranslation: "một cuộc biểu tình/thăm dò ôn hòa"
    },
    {
        word: "percentage",
        meaning: "phần trăm",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/pərˈsentɪdʒ/",
        example: "percentage of something/somebody What percentage of the population is/are overweight?",
        exampleTranslation: "Phần trăm dân số bị thừa cân là bao nhiêu?"
    },
    {
        word: "perfectly",
        meaning: "hoàn hảo, hoàn toàn",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈpɜːrfɪktli/",
        example: "It's perfectly normal to feel like this.",
        exampleTranslation: "Hoàn toàn bình thường khi cảm thấy như thế này."
    },
    {
        word: "performance",
        meaning: "màn trình diễn, buổi biểu diễn",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/pərˈfɔːrməns/",
        example: "The performance starts at seven.",
        exampleTranslation: "Buổi biểu diễn bắt đầu lúc bảy giờ."
    },
    {
        word: "personally",
        meaning: "cá nhân, riêng tôi",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈpɜːrsənəli/",
        example: "Personally, I prefer the second option.",
        exampleTranslation: "Cá nhân tôi thích lựa chọn thứ hai."
    },
    {
        word: "persuade",
        meaning: "thuyết phục",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/pərˈsweɪd/",
        example: "Try to persuade him to come.",
        exampleTranslation: "Cố gắng thuyết phục anh ấy đến."
    },
    {
        word: "photographer",
        meaning: "nhiếp ảnh gia",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/fəˈtɑːɡrəfər/",
        example: "a wedding/wildlife/fashion photographer",
        exampleTranslation: "nhiếp ảnh gia đám cưới/thiên nhiên/thời trang"
    },
    {
        word: "photography",
        meaning: "nhiếp ảnh",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/fəˈtɑːɡrəfi/",
        example: "Her hobbies include hiking and photography.",
        exampleTranslation: "Sở thích của cô ấy bao gồm đi bộ đường dài và nhiếp ảnh."
    },
    {
        word: "pin",
        meaning: "ghim, cái ghim",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/pɪn/",
        example: "Use pins to keep the patch in place while you sew it on.",
        exampleTranslation: "Dùng ghim để giữ miếng vá cố định trong khi bạn khâu nó."
    },
    {
        word: "pipe",
        meaning: "ống, đường ống",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/paɪp/",
        example: "Both hot and cold water pipes should be properly insulated.",
        exampleTranslation: "Cả ống nước nóng và lạnh đều nên được cách nhiệt đúng cách."
    },
    {
        word: "place",
        meaning: "đặt, để",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/pleɪs/",
        example: "He placed his hand on her shoulder.",
        exampleTranslation: "Anh ấy đặt tay lên vai cô ấy."
    },
    {
        word: "planning",
        meaning: "kế hoạch, quy hoạch",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈplænɪŋ/",
        example: "The department is responsible for all financial planning.",
        exampleTranslation: "Bộ phận chịu trách nhiệm về tất cả các kế hoạch tài chính."
    },
    {
        word: "pleasant",
        meaning: "dễ chịu, thú vị",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈpleznt/",
        example: "a pleasant evening/atmosphere/walk",
        exampleTranslation: "một buổi tối/bầu không khí/cuộc đi dạo dễ chịu"
    },
    {
        word: "pleasure",
        meaning: "niềm vui, sự thích thú",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈpleʒər/",
        example: "His eyes lit up with pleasure.",
        exampleTranslation: "Mắt anh sáng lên vì thích thú."
    },
    {
        word: "plenty",
        meaning: "nhiều, đủ",
        partOfSpeech: "pronoun",
        level: "B1",
        phonetic: "/ˈplenti/",
        example: "plenty of eggs/money/time",
        exampleTranslation: "nhiều trứng/tiền/thời gian"
    },
    {
        word: "plot",
        meaning: "cốt truyện",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/plɑːt/",
        example: "It's hard to follow the plot of the film.",
        exampleTranslation: "Rất khó để theo dõi cốt truyện của bộ phim."
    },
    {
        word: "plus",
        meaning: "cộng, cộng với",
        partOfSpeech: "preposition",
        level: "B1",
        phonetic: "/plʌs/",
        example: "Two plus five is seven.",
        exampleTranslation: "Hai cộng năm bằng bảy."
    },
    {
        word: "poem",
        meaning: "bài thơ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈpəʊəm/",
        example: "His collected poems were published after the war.",
        exampleTranslation: "Tuyển tập thơ của ông được xuất bản sau chiến tranh."
    },
    {
        word: "poet",
        meaning: "nhà thơ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈpəʊət/",
        example: "an internationally renowned poet",
        exampleTranslation: "một nhà thơ nổi tiếng quốc tế"
    },
    {
        word: "poetry",
        meaning: "thơ ca",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈpəʊətri/",
        example: "lyric/epic poetry",
        exampleTranslation: "thơ trữ tình/sử thi"
    },
    {
        word: "point",
        meaning: "chỉ, trỏ",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/pɔɪnt/",
        example: "point at somebody/something ‘What's your name?’ he asked, pointing at the child with his pen.",
        exampleTranslation: "‘Tên em là gì?’ anh ấy hỏi, chỉ vào đứa trẻ bằng cây bút của mình."
    },
    {
        word: "poison",
        meaning: "chất độc",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈpɔɪzn/",
        example: "Some mushrooms contain a deadly poison.",
        exampleTranslation: "Một số loại nấm chứa chất độc chết người."
    },
    {
        word: "poisonous",
        meaning: "độc, có độc",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈpɔɪzənəs/",
        example: "poisonous chemicals/fumes/plants",
        exampleTranslation: "hóa chất/khí độc/thực vật độc hại"
    },
    {
        word: "policy",
        meaning: "chính sách",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈpɑːləsi/",
        example: "policy on something the present government’s policy on education",
        exampleTranslation: "chính sách về một vấn đề nào đó chính sách của chính phủ hiện tại về giáo dục"
    },
    {
        word: "political",
        meaning: "chính trị, thuộc về chính trị",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/pəˈlɪtɪkl/",
        example: "a monarch without political power",
        exampleTranslation: "một quân chủ không có quyền lực chính trị"
    },
    {
        word: "politician",
        meaning: "chính trị gia, nhà chính trị",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˌpɑːləˈtɪʃn/",
        example: "democratically elected politicians",
        exampleTranslation: "các chính trị gia được bầu cử dân chủ"
    },
    {
        word: "politics",
        meaning: "chính trị",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈpɑːlətɪks/",
        example: "world/international politics",
        exampleTranslation: "chính trị thế giới/quốc tế"
    },
    {
        word: "port",
        meaning: "cảng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/pɔːrt/",
        example: "a container/fishing port",
        exampleTranslation: "cảng container/cảng cá"
    },
    {
        word: "portrait",
        meaning: "chân dung",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈpɔːrtrət/",
        example: "portrait of somebody a portrait of his wife",
        exampleTranslation: "chân dung của ai đó một bức chân dung của vợ ông ấy"
    },
    {
        word: "possibly",
        meaning: "có lẽ, có thể",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈpɑːsəbli/",
        example: "It was possibly their worst performance ever.",
        exampleTranslation: "Đó có lẽ là màn trình diễn tệ nhất của họ từ trước đến nay."
    },
    {
        word: "pot",
        meaning: "nồi, chậu",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/pɑːt/",
        example: "pots and pans",
        exampleTranslation: "nồi và chảo"
    },
    {
        word: "pour",
        meaning: "rót, đổ",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/pɔːr/",
        example: "+ adv./prep. Pour the sauce over the pasta.",
        exampleTranslation: "Rưới nước sốt lên mì ống."
    },
    {
        word: "poverty",
        meaning: "nghèo đói, sự nghèo khó",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈpɑːvərti/",
        example: "conditions of extreme/abject poverty",
        exampleTranslation: "tình cảnh nghèo đói cùng cực/nghèo đói thảm hại"
    },
    {
        word: "powder",
        meaning: "bột",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈpaʊdər/",
        example: "milk/chilli/cocoa powder",
        exampleTranslation: "bột sữa/ớt/ca cao"
    },
    {
        word: "powerful",
        meaning: "mạnh mẽ, quyền lực",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈpaʊərfl/",
        example: "an incredibly powerful organization",
        exampleTranslation: "một tổ chức cực kỳ quyền lực"
    },
    {
        word: "practical",
        meaning: "thực tế, thực tiễn",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈpræktɪkl/",
        example: "to have gained practical experience of the work",
        exampleTranslation: "đã có kinh nghiệm thực tế về công việc"
    },
    {
        word: "pray",
        meaning: "cầu nguyện",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/preɪ/",
        example: "They knelt down and prayed.",
        exampleTranslation: "Họ quỳ xuống và cầu nguyện."
    },
    {
        word: "prayer",
        meaning: "lời cầu nguyện",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/prer/",
        example: "to say your prayers",
        exampleTranslation: "đọc kinh cầu nguyện"
    },
    {
        word: "prediction",
        meaning: "sự dự đoán, lời tiên đoán",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/prɪˈdɪkʃn/",
        example: "The results of the experiment confirmed our predictions.",
        exampleTranslation: "Kết quả của thí nghiệm đã xác nhận những dự đoán của chúng tôi."
    },
    {
        word: "prepared",
        meaning: "chuẩn bị, sẵn sàng",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/prɪˈperd/",
        example: "We'll be better prepared next time.",
        exampleTranslation: "Chúng tôi sẽ chuẩn bị tốt hơn vào lần tới."
    },
    {
        word: "presentation",
        meaning: "bài thuyết trình",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˌpriːznˈteɪʃn/",
        example: "presentation on/about somebody/something The sales manager will give a presentation on the new products.",
        exampleTranslation: "Bài thuyết trình về ai đó/điều gì đó Quản lý bán hàng sẽ có một bài thuyết trình về các sản phẩm mới."
    },
    {
        word: "press",
        meaning: "báo chí",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/pres/",
        example: "the local/national/foreign press",
        exampleTranslation: "báo chí địa phương/quốc gia/nước ngoài"
    },
    {
        word: "pressure",
        meaning: "áp lực, sức ép",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈpreʃər/",
        example: "pressure for something The pressure for change continued to mount.",
        exampleTranslation: "áp lực cho điều gì đó Áp lực đòi hỏi sự thay đổi tiếp tục gia tăng."
    },
    {
        word: "pretend",
        meaning: "giả vờ, giả bộ",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/prɪˈtend/",
        example: "I'm tired of having to pretend all the time.",
        exampleTranslation: "Tôi mệt mỏi vì phải giả vờ suốt ngày."
    },
    {
        word: "previous",
        meaning: "trước, trước đó",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈpriːviəs/",
        example: "No previous experience is necessary for this job.",
        exampleTranslation: "Không yêu cầu kinh nghiệm trước đó cho công việc này."
    },
    {
        word: "previously",
        meaning: "trước đây, trước đó",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈpriːviəsli/",
        example: "The building had previously been used as a hotel.",
        exampleTranslation: "Tòa nhà này trước đây được dùng làm khách sạn."
    },
    {
        word: "priest",
        meaning: "linh mục",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/priːst/",
        example: "a parish priest",
        exampleTranslation: "một linh mục xứ"
    },
    {
        word: "primary",
        meaning: "chính, chủ yếu, sơ cấp",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈpraɪmeri/",
        example: "primary teachers",
        exampleTranslation: "giáo viên tiểu học"
    },
    {
        word: "prince",
        meaning: "hoàng tử",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/prɪns/",
        example: "the royal princes",
        exampleTranslation: "các hoàng tử hoàng gia"
    },
    {
        word: "princess",
        meaning: "công chúa",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈprɪnses/",
        example: "the royal princesses",
        exampleTranslation: "các công chúa hoàng gia"
    },
    {
        word: "printing",
        meaning: "in ấn",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈprɪntɪŋ/",
        example: "the invention of printing",
        exampleTranslation: "sự phát minh ra nghề in"
    },
    {
        word: "prisoner",
        meaning: "tù nhân",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈprɪznər/",
        example: "The number of prisoners serving life sentences has fallen.",
        exampleTranslation: "Số lượng tù nhân thụ án chung thân đã giảm."
    },
    {
        word: "private",
        meaning: "riêng tư, cá nhân, kín đáo",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈpraɪvət/",
        example: "The sign said, ‘Private property. Keep out.’",
        exampleTranslation: "Tấm biển ghi: ‘Tài sản riêng. Cấm vào.’"
    },
    {
        word: "producer",
        meaning: "nhà sản xuất, người sản xuất",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/prəˈduːsər/",
        example: "French wine producers",
        exampleTranslation: "Các nhà sản xuất rượu vang Pháp"
    },
    {
        word: "production",
        meaning: "sản xuất, sự sản xuất",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/prəˈdʌkʃn/",
        example: "food/oil production",
        exampleTranslation: "sản xuất lương thực/dầu mỏ"
    },
    {
        word: "profession",
        meaning: "nghề nghiệp, công việc",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/prəˈfeʃn/",
        example: "the medical/legal/teaching profession",
        exampleTranslation: "ngành nghề y tế/luật/giáo viên"
    },
    {
        word: "profit",
        meaning: "lợi nhuận, lãi",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈprɑːfɪt/",
        example: "annual/pre-tax/corporate profits",
        exampleTranslation: "lợi nhuận hàng năm/trước thuế/của công ty"
    },
    {
        word: "program",
        meaning: "lập trình",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈprəʊɡræm/",
        example: "In this class, students will learn how to program.",
        exampleTranslation: "Trong lớp học này, học sinh sẽ học cách lập trình."
    },
    {
        word: "promote",
        meaning: "quảng bá, thúc đẩy",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/prəˈməʊt/",
        example: "The band has gone on tour to promote their new album.",
        exampleTranslation: "Ban nhạc đã đi lưu diễn để quảng bá album mới của họ."
    },
    {
        word: "proper",
        meaning: "thích hợp, đúng đắn, nghiêm túc",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈprɑːpər/",
        example: "We should have had a proper discussion before voting.",
        exampleTranslation: "Lẽ ra chúng ta nên có một cuộc thảo luận nghiêm túc trước khi bỏ phiếu."
    },
    {
        word: "properly",
        meaning: "đúng cách, thích hợp",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈprɑːpərli/",
        example: "How much money do we need to do the job properly?",
        exampleTranslation: "Chúng ta cần bao nhiêu tiền để làm công việc này đúng cách?"
    },
    {
        word: "property",
        meaning: "tài sản, của cải",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈprɑːpərti/",
        example: "personal/stolen property",
        exampleTranslation: "tài sản cá nhân/bị đánh cắp"
    },
    {
        word: "protest",
        meaning: "cuộc biểu tình",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈprəʊtest/",
        example: "to hold/organize/join a protest",
        exampleTranslation: "tổ chức/tham gia một cuộc biểu tình"
    },
    {
        word: "proud",
        meaning: "tự hào, hãnh diện",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/praʊd/",
        example: "proud parents",
        exampleTranslation: "những người cha mẹ tự hào"
    },
    {
        word: "prove",
        meaning: "chứng minh, chứng tỏ",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/pruːv/",
        example: "They hope this new evidence will prove her innocence.",
        exampleTranslation: "Họ hy vọng bằng chứng mới này sẽ chứng minh sự vô tội của cô ấy."
    },
    {
        word: "pull",
        meaning: "cú kéo, sự kéo",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/pʊl/",
        example: "I gave the door a sharp pull and it opened.",
        exampleTranslation: "Tôi đã giật mạnh cánh cửa và nó mở ra."
    },
    {
        word: "punish",
        meaning: "trừng phạt, phạt",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈpʌnɪʃ/",
        example: "Those responsible for this crime will be severely punished.",
        exampleTranslation: "Những người chịu trách nhiệm về tội ác này sẽ bị trừng phạt nghiêm khắc."
    },
    {
        word: "punishment",
        meaning: "sự trừng phạt, hình phạt",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈpʌnɪʃmənt/",
        example: "to inflict/impose/mete out punishment",
        exampleTranslation: "áp đặt/thi hành sự trừng phạt"
    },
    {
        word: "push",
        meaning: "cú đẩy, sự đẩy",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/pʊʃ/",
        example: "She gave him a gentle push.",
        exampleTranslation: "Cô ấy đã đẩy nhẹ anh ta."
    },
    {
        word: "qualification",
        meaning: "bằng cấp, trình độ chuyên môn, phẩm chất",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˌkwɑːlɪfɪˈkeɪʃn/",
        example: "academic/educational/professional/vocational qualifications",
        exampleTranslation: "bằng cấp học vấn/chuyên môn/nghề nghiệp"
    },
    {
        word: "qualified",
        meaning: "đủ tiêu chuẩn, có trình độ, có bằng cấp",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈkwɑːlɪfaɪd/",
        example: "a qualified teacher",
        exampleTranslation: "một giáo viên có trình độ"
    },
    {
        word: "qualify",
        meaning: "đủ điều kiện, đủ tiêu chuẩn",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈkwɑːlɪfaɪ/",
        example: "How long does it take to qualify?",
        exampleTranslation: "Mất bao lâu để đủ điều kiện?"
    },
    {
        word: "queue",
        meaning: "hàng đợi, sự xếp hàng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/kjuː/",
        example: "There were long queues at polling stations.",
        exampleTranslation: "Có những hàng dài tại các điểm bỏ phiếu."
    },
    {
        word: "quit",
        meaning: "nghỉ việc, bỏ việc",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/kwɪt/",
        example: "If I don't get more money I'll quit.",
        exampleTranslation: "Nếu tôi không nhận được nhiều tiền hơn, tôi sẽ nghỉ việc."
    },
    {
        word: "quotation",
        meaning: "trích dẫn, câu trích dẫn",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/kwəʊˈteɪʃn/",
        example: "a dictionary of quotations",
        exampleTranslation: "một cuốn từ điển các câu trích dẫn"
    },
    {
        word: "quote",
        meaning: "trích dẫn, câu nói",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/kwəʊt/",
        example: "The essay was full of quotes.",
        exampleTranslation: "Bài luận đầy những câu trích dẫn."
    },
    {
        word: "racing",
        meaning: "đua xe",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈreɪsɪŋ/",
        example: "He used to watch the racing on TV in the afternoons.",
        exampleTranslation: "Anh ấy từng xem đua xe trên TV vào các buổi chiều."
    },
    {
        word: "range",
        meaning: "phạm vi, giới hạn, loại",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/reɪndʒ/",
        example: "range of something The hotel offers a wide range of facilities.",
        exampleTranslation: "khách sạn cung cấp nhiều loại tiện nghi."
    },
    {
        word: "rare",
        meaning: "hiếm, ít có",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/rer/",
        example: "a rare disease/occurrence/event",
        exampleTranslation: "một căn bệnh/sự kiện/hiện tượng hiếm"
    },
    {
        word: "rarely",
        meaning: "hiếm khi, ít khi",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈrerli/",
        example: "She is rarely seen in public nowadays.",
        exampleTranslation: "Ngày nay cô ấy hiếm khi xuất hiện ở nơi công cộng."
    },
    {
        word: "reaction",
        meaning: "sự phản ứng, phản ứng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/riˈækʃn/",
        example: "to provoke/cause/get a reaction",
        exampleTranslation: "kích động/gây ra/nhận được một phản ứng"
    },
    {
        word: "reality",
        meaning: "thực tế, hiện thực",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/riˈæləti/",
        example: "She refuses to face reality.",
        exampleTranslation: "Cô ấy từ chối đối mặt với thực tế."
    },
    {
        word: "receipt",
        meaning: "biên lai, hóa đơn",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/rɪˈsiːt/",
        example: "Can I have a receipt, please?",
        exampleTranslation: "Làm ơn cho tôi xin biên lai ạ?"
    },
    {
        word: "recommendation",
        meaning: "sự giới thiệu, lời khuyên",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˌrekəmenˈdeɪʃn/",
        example: "to accept/reject a recommendation",
        exampleTranslation: "chấp nhận/từ chối một lời giới thiệu"
    },
    {
        word: "reference",
        meaning: "sự ám chỉ, liên quan, tham khảo",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈrefrəns/",
        example: "reference to somebody/something She made no reference to her illness but only to her future plans.",
        exampleTranslation: "liên quan đến ai/cái gì Bà ấy không ám chỉ đến bệnh tật của mình mà chỉ nói về kế hoạch tương lai của bà."
    },
    {
        word: "reflect",
        meaning: "phản chiếu, suy nghĩ",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/rɪˈflekt/",
        example: "be reflected (in something) His face was reflected in the mirror.",
        exampleTranslation: "được phản chiếu (trong cái gì) Khuôn mặt anh ấy phản chiếu trong gương."
    },
    {
        word: "regularly",
        meaning: "thường xuyên, đều đặn",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈreɡjələrli/",
        example: "We meet regularly to discuss the progress of the project.",
        exampleTranslation: "Chúng tôi họp thường xuyên để thảo luận về tiến độ dự án."
    },
    {
        word: "reject",
        meaning: "từ chối, bác bỏ",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/rɪˈdʒekt/",
        example: "to reject an argument/a hypothesis/a notion/a plan",
        exampleTranslation: "từ chối một lập luận/giả thuyết/khái niệm/kế hoạch"
    },
    {
        word: "relate",
        meaning: "kể lại, liên hệ, kết nối",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/rɪˈleɪt/",
        example: "I found it difficult to relate the two ideas in my mind.",
        exampleTranslation: "Tôi thấy khó khăn khi liên hệ hai ý tưởng đó trong đầu."
    },
    {
        word: "related",
        meaning: "có liên quan, liên quan đến",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/rɪˈleɪtɪd/",
        example: "related to something/somebody The amount of protein you need is directly related to your lifestyle.",
        exampleTranslation: "Lượng protein bạn cần liên quan trực tiếp đến lối sống của bạn."
    },
    {
        word: "relation",
        meaning: "mối quan hệ, liên quan",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/rɪˈleɪʃn/",
        example: "diplomatic/international/foreign relations",
        exampleTranslation: "quan hệ ngoại giao/quốc tế/đối ngoại"
    },
    {
        word: "relative",
        meaning: "tương đối, có liên quan",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈrelətɪv/",
        example: "You must consider the relative merits of the two plans.",
        exampleTranslation: "Bạn phải xem xét những điểm mạnh tương đối của hai kế hoạch."
    },
    {
        word: "relaxed",
        meaning: "thư giãn, thoải mái",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/rɪˈlækst/",
        example: "He appeared relaxed and confident before the match.",
        exampleTranslation: "Anh ấy trông có vẻ thư giãn và tự tin trước trận đấu."
    },
    {
        word: "relaxing",
        meaning: "thư giãn, êm dịu",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/rɪˈlæksɪŋ/",
        example: "a relaxing evening with friends",
        exampleTranslation: "một buổi tối thư giãn bên bạn bè"
    },
    {
        word: "release",
        meaning: "sự phát hành, sự phóng thích",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/rɪˈliːs/",
        example: "release of somebody/something The government has been working to secure the release of the hostages.",
        exampleTranslation: "sự thả người/vật gì đó Chính phủ đang nỗ lực để đảm bảo việc thả con tin."
    },
    {
        word: "reliable",
        meaning: "đáng tin cậy, chắc chắn",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/rɪˈlaɪəbl/",
        example: "We are looking for someone who is reliable and hard-working.",
        exampleTranslation: "Chúng tôi đang tìm kiếm một người đáng tin cậy và chăm chỉ."
    },
    {
        word: "religion",
        meaning: "tôn giáo, tín ngưỡng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/rɪˈlɪdʒən/",
        example: "Is there always a conflict between science and religion?",
        exampleTranslation: "Khoa học và tôn giáo có luôn mâu thuẫn không?"
    },
    {
        word: "religious",
        meaning: "thuộc về tôn giáo, sùng đạo",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/rɪˈlɪdʒəs/",
        example: "religious beliefs/convictions/faith",
        exampleTranslation: "niềm tin/sự xác tín/đức tin tôn giáo"
    },
    {
        word: "remain",
        meaning: "còn lại, duy trì",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/rɪˈmeɪn/",
        example: "remain + adj. to remain silent",
        exampleTranslation: "còn lại + tính từ. giữ im lặng"
    },
    {
        word: "remind",
        meaning: "nhắc nhở",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/rɪˈmaɪnd/",
        example: "remind somebody/yourself I'm sorry, I've forgotten your name. Can you remind me?",
        exampleTranslation: "nhắc nhở ai đó/chính mình Xin lỗi, tôi quên tên bạn rồi. Bạn có thể nhắc tôi được không?"
    },
    {
        word: "remote",
        meaning: "xa xôi, hẻo lánh",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/rɪˈməʊt/",
        example: "a remote village/island/location/region",
        exampleTranslation: "một ngôi làng/hòn đảo/địa điểm/vùng đất xa xôi"
    },
    {
        word: "rent",
        meaning: "tiền thuê",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/rent/",
        example: "I earn just about enough to pay the rent.",
        exampleTranslation: "Tôi kiếm đủ sống để trả tiền thuê nhà."
    },
    {
        word: "repair",
        meaning: "sự sửa chữa",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/rɪˈper/",
        example: "They agreed to pay the costs of any repairs.",
        exampleTranslation: "Họ đồng ý chi trả chi phí sửa chữa."
    },
    {
        word: "repeat",
        meaning: "sự lặp lại",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/rɪˈpiːt/",
        example: "repeat of something She didn't want a repeat performance of what had happened the night before.",
        exampleTranslation: "sự lặp lại của cái gì đó Cô ấy không muốn một màn trình diễn lặp lại những gì đã xảy ra đêm trước."
    },
    {
        word: "repeated",
        meaning: "lặp đi lặp lại, tái diễn",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/rɪˈpiːtɪd/",
        example: "repeated absences from work",
        exampleTranslation: "sự vắng mặt lặp đi lặp lại ở nơi làm việc"
    },
    {
        word: "represent",
        meaning: "đại diện, tượng trưng cho",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˌreprɪˈzent/",
        example: "The competition attracted over 500 contestants representing eight different countries.",
        exampleTranslation: "Cuộc thi thu hút hơn 500 thí sinh đại diện cho tám quốc gia khác nhau."
    },
    {
        word: "request",
        meaning: "yêu cầu, đề nghị",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/rɪˈkwest/",
        example: "She requested permission to film at the White House.",
        exampleTranslation: "Cô ấy đã yêu cầu được phép quay phim tại Nhà Trắng."
    },
    {
        word: "require",
        meaning: "yêu cầu, đòi hỏi",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/rɪˈkwaɪər/",
        example: "These pets require a lot of care and attention.",
        exampleTranslation: "Những thú cưng này đòi hỏi nhiều sự chăm sóc và chú ý."
    },
    {
        word: "reservation",
        meaning: "sự đặt trước, sự giữ chỗ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˌrezərˈveɪʃn/",
        example: "I'll call the restaurant and make a reservation.",
        exampleTranslation: "Tôi sẽ gọi điện cho nhà hàng và đặt bàn."
    },
    {
        word: "resource",
        meaning: "tài nguyên",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/rɪˈsɔːrs/",
        example: "the exploitation of minerals and other natural resources",
        exampleTranslation: "việc khai thác khoáng sản và các tài nguyên thiên nhiên khác"
    },
    {
        word: "respect",
        meaning: "sự tôn trọng, kính trọng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/rɪˈspekt/",
        example: "I have the utmost respect for her and her work.",
        exampleTranslation: "Tôi vô cùng kính trọng bà ấy và công việc của bà ấy."
    },
    {
        word: "responsibility",
        meaning: "trách nhiệm",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/rɪˌspɑːnsəˈbɪləti/",
        example: "to be in a position of responsibility",
        exampleTranslation: "ở vào một vị trí có trách nhiệm"
    },
    {
        word: "responsible",
        meaning: "chịu trách nhiệm",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/rɪˈspɑːnsəbl/",
        example: "responsible for doing something Mike is responsible for designing the entire project.",
        exampleTranslation: "Mike chịu trách nhiệm thiết kế toàn bộ dự án."
    },
    {
        word: "result",
        meaning: "dẫn đến, gây ra",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/rɪˈzʌlt/",
        example: "A heavy frost could result in loss of the crop.",
        exampleTranslation: "Sương giá nặng có thể dẫn đến mất mùa."
    },
    {
        word: "retire",
        meaning: "về hưu, nghỉ hưu",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/rɪˈtaɪər/",
        example: "He is retiring next year after 30 years with the company.",
        exampleTranslation: "Anh ấy sẽ nghỉ hưu vào năm tới sau 30 năm làm việc cho công ty."
    },
    {
        word: "retired",
        meaning: "đã nghỉ hưu",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/rɪˈtaɪərd/",
        example: "a retired doctor/teacher/officer/general",
        exampleTranslation: "một bác sĩ/giáo viên/cán bộ/tướng lĩnh đã nghỉ hưu"
    },
    {
        word: "revise",
        meaning: "sửa đổi, xem lại",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/rɪˈvaɪz/",
        example: "I can see I will have to revise my opinions of his abilities now.",
        exampleTranslation: "Tôi nhận thấy mình sẽ phải xem lại quan điểm của mình về khả năng của anh ấy bây giờ."
    },
    {
        word: "rise",
        meaning: "sự tăng lên",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/raɪz/",
        example: "The industry is feeling the effects of recent price rises.",
        exampleTranslation: "Ngành công nghiệp đang cảm nhận được tác động của việc tăng giá gần đây."
    },
    {
        word: "risk",
        meaning: "rủi ro, nguy cơ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/rɪsk/",
        example: "The health risks are very low.",
        exampleTranslation: "Các rủi ro về sức khỏe là rất thấp."
    },
    {
        word: "robot",
        meaning: "robot",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈrəʊbɑːt/",
        example: "These cars are built by robots.",
        exampleTranslation: "Những chiếc xe này được chế tạo bởi robot."
    },
    {
        word: "roll",
        meaning: "ổ bánh mì",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/rəʊl/",
        example: "Soup and a roll: £3.50",
        exampleTranslation: "Súp và một ổ bánh mì: £3.50"
    },
    {
        word: "romantic",
        meaning: "lãng mạn",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/rəʊˈmæntɪk/",
        example: "a romantic candlelit dinner",
        exampleTranslation: "một bữa tối lãng mạn dưới ánh nến"
    },
    {
        word: "rope",
        meaning: "dây thừng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/rəʊp/",
        example: "The rope broke and she fell 50 metres onto the rocks.",
        exampleTranslation: "Sợi dây thừng bị đứt và cô ấy đã rơi xuống vách đá cách đó 50 mét."
    },
    {
        word: "rough",
        meaning: "gồ ghề, xấu xí, thô lỗ",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/rʌf/",
        example: "rough ground",
        exampleTranslation: "mặt đất gồ ghề"
    },
    {
        word: "row",
        meaning: "hàng, dãy",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/rəʊ/",
        example: "row of somebody/something There is a row of trees in front of the house.",
        exampleTranslation: "một hàng cây phía trước ngôi nhà."
    },
    {
        word: "royal",
        meaning: "hoàng gia, thuộc về vua chúa",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈrɔɪəl/",
        example: "the royal family",
        exampleTranslation: "gia đình hoàng gia"
    },
    {
        word: "rugby",
        meaning: "bóng bầu dục",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈrʌɡbi/",
        example: "to play a game of rugby",
        exampleTranslation: "chơi một trận bóng bầu dục"
    },
    {
        word: "rule",
        meaning: "cai trị, điều khiển",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ruːl/",
        example: "rule (something) At that time, King John ruled England.",
        exampleTranslation: "cai trị (cái gì đó) Thời điểm đó, Vua John cai trị nước Anh."
    },
    {
        word: "safety",
        meaning: "sự an toàn",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈseɪfti/",
        example: "in safety a place where children can play in safety",
        exampleTranslation: "trong sự an toàn một nơi mà trẻ em có thể chơi đùa an toàn"
    },
    {
        word: "sail",
        meaning: "buồm",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/seɪl/",
        example: "As the boat moved down the river the wind began to fill the sails.",
        exampleTranslation: "Khi con thuyền di chuyển xuôi dòng sông, gió bắt đầu thổi căng những cánh buồm."
    },
    {
        word: "sailor",
        meaning: "thủy thủ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈseɪlər/",
        example: "a crew of two officers and 13 sailors",
        exampleTranslation: "một thủy thủ đoàn gồm hai sĩ quan và 13 thủy thủ"
    },
    {
        word: "sample",
        meaning: "mẫu, mẫu vật",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈsæmpl/",
        example: "The interviews were given to a random sample of students.",
        exampleTranslation: "Các cuộc phỏng vấn đã được thực hiện với một mẫu ngẫu nhiên các sinh viên."
    },
    {
        word: "sand",
        meaning: "cát",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/sænd/",
        example: "a grain of sand",
        exampleTranslation: "một hạt cát"
    },
    {
        word: "scan",
        meaning: "quét, lướt",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/skæn/",
        example: "I scanned the list quickly for my name.",
        exampleTranslation: "Tôi nhanh chóng quét danh sách tìm tên mình."
    },
    {
        word: "scientific",
        meaning: "khoa học",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˌsaɪənˈtɪfɪk/",
        example: "a scientific discovery/theory/fact",
        exampleTranslation: "một khám phá/lý thuyết/sự kiện khoa học"
    },
    {
        word: "script",
        meaning: "kịch bản",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/skrɪpt/",
        example: "That line isn't in the original script.",
        exampleTranslation: "Câu thoại đó không có trong kịch bản gốc."
    },
    {
        word: "sculpture",
        meaning: "tác phẩm điêu khắc",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈskʌlptʃər/",
        example: "a marble sculpture of Venus",
        exampleTranslation: "một tác phẩm điêu khắc bằng đá cẩm thạch hình thần Vệ Nữ"
    },
    {
        word: "secondary",
        meaning: "thứ cấp, trung học",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈsekənderi/",
        example: "secondary teachers",
        exampleTranslation: "giáo viên trung học"
    },
    {
        word: "security",
        meaning: "an ninh",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/sɪˈkjʊrəti/",
        example: "national/homeland security (= the defence of a country)",
        exampleTranslation: "an ninh quốc gia/an ninh nội địa (= sự phòng thủ của một quốc gia)"
    },
    {
        word: "seed",
        meaning: "hạt giống",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/siːd/",
        example: "a packet of wild flower seeds",
        exampleTranslation: "một gói hạt giống hoa dại"
    },
    {
        word: "sensible",
        meaning: "hợp lý, khôn ngoan",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈsensəbl/",
        example: "She's a sensible sort of person.",
        exampleTranslation: "Cô ấy là một người khá hợp lý."
    },
    {
        word: "separate",
        meaning: "tách ra, phân tách",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈsepəreɪt/",
        example: "Stir the sauce constantly so that it does not separate.",
        exampleTranslation: "Khuấy đều nước sốt liên tục để nó không bị tách ra."
    },
    {
        word: "seriously",
        meaning: "một cách nghiêm trọng, nghiêm túc",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈsɪriəsli/",
        example: "to be seriously ill/injured/wounded/hurt",
        exampleTranslation: "bị ốm/thương/bị thương nặng/bị thương nghiêm trọng"
    },
    {
        word: "servant",
        meaning: "người hầu, đầy tớ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈsɜːrvənt/",
        example: "a domestic servant",
        exampleTranslation: "một người giúp việc gia đình"
    },
    {
        word: "set",
        meaning: "bộ, tập",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/set/",
        example: "a set of six chairs",
        exampleTranslation: "một bộ sáu ghế"
    },
    {
        word: "setting",
        meaning: "bối cảnh, khung cảnh",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈsetɪŋ/",
        example: "a rural/an ideal/a beautiful/an idyllic setting",
        exampleTranslation: "một bối cảnh nông thôn/lý tưởng/đẹp/nên thơ"
    },
    {
        word: "sex",
        meaning: "giới tính",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/seks/",
        example: "How can you tell what sex a fish is?",
        exampleTranslation: "Làm sao bạn có thể biết giới tính của một con cá?"
    },
    {
        word: "sexual",
        meaning: "(thuộc) tình dục, giới tính",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈsekʃuəl/",
        example: "sexual behaviour/activity/desire",
        exampleTranslation: "hành vi/hoạt động/ham muốn tình dục"
    },
    {
        word: "shake",
        meaning: "cái lắc, sự rung lắc",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ʃeɪk/",
        example: "She gave him a shake to wake him.",
        exampleTranslation: "Cô ấy lắc anh ta để đánh thức anh ta."
    },
    {
        word: "share",
        meaning: "cổ phần, phần, thị phần",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ʃer/",
        example: "share of something Next year we hope to have a greater share of the market.",
        exampleTranslation: "Năm tới chúng tôi hy vọng sẽ có thị phần lớn hơn."
    },
    {
        word: "sharp",
        meaning: "sắc bén, nhọn",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ʃɑːrp/",
        example: "a sharp knife",
        exampleTranslation: "một con dao sắc"
    },
    {
        word: "shelf",
        meaning: "kệ, giá sách",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ʃelf/",
        example: "I helped him put up some shelves in his bedroom.",
        exampleTranslation: "Tôi đã giúp anh ấy lắp một vài cái kệ trong phòng ngủ của anh ấy."
    },
    {
        word: "shell",
        meaning: "vỏ, vỏ sò",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ʃel/",
        example: "We collected shells on the beach.",
        exampleTranslation: "Chúng tôi đã nhặt vỏ sò trên bãi biển."
    },
    {
        word: "shift",
        meaning: "ca (làm việc), sự thay đổi",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ʃɪft/",
        example: "to work a shift",
        exampleTranslation: "làm việc theo ca"
    },
    {
        word: "shine",
        meaning: "chiếu sáng, tỏa sáng",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ʃaɪn/",
        example: "The sun shone brightly in a cloudless sky.",
        exampleTranslation: "Mặt trời chiếu sáng rực rỡ trên bầu trời không một gợn mây."
    },
    {
        word: "shiny",
        meaning: "bóng loáng, sáng bóng",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈʃaɪni/",
        example: "shiny black hair",
        exampleTranslation: "mái tóc đen bóng"
    },
    {
        word: "shoot",
        meaning: "bắn",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ʃuːt/",
        example: "Don't shoot—I surrender.",
        exampleTranslation: "Đừng bắn – tôi đầu hàng."
    },
    {
        word: "shy",
        meaning: "ngại ngùng, nhút nhát",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ʃaɪ/",
        example: "He is not exactly the shy and retiring type.",
        exampleTranslation: "Anh ấy không hẳn là kiểu người nhút nhát và thích ở ẩn."
    },
    {
        word: "sight",
        meaning: "thị lực, tầm nhìn",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/saɪt/",
        example: "to lose your sight (= to become blind)",
        exampleTranslation: "mất thị lực (= trở nên mù lòa)"
    },
    {
        word: "signal",
        meaning: "tín hiệu",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈsɪɡnəl/",
        example: "a danger/warning/distress signal",
        exampleTranslation: "tín hiệu nguy hiểm/cảnh báo/cầu cứu"
    },
    {
        word: "silent",
        meaning: "im lặng",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈsaɪlənt/",
        example: "At last the traffic fell silent.",
        exampleTranslation: "Cuối cùng, giao thông cũng trở nên im lặng."
    },
    {
        word: "silly",
        meaning: "ngớ ngẩn, ngu ngốc",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈsɪli/",
        example: "a silly idea/question/name",
        exampleTranslation: "một ý tưởng/câu hỏi/cái tên ngớ ngẩn"
    },
    {
        word: "similarity",
        meaning: "sự tương đồng, điểm giống nhau",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˌsɪməˈlærəti/",
        example: "similarity between A and B The report highlights the similarity between the two groups.",
        exampleTranslation: "Báo cáo làm nổi bật sự tương đồng giữa hai nhóm."
    },
    {
        word: "similarly",
        meaning: "tương tự, một cách tương tự",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈsɪmələrli/",
        example: "It is a little cheaper than other similarly sized cars.",
        exampleTranslation: "Nó rẻ hơn một chút so với những chiếc xe có kích thước tương tự khác."
    },
    {
        word: "simply",
        meaning: "đơn giản là, chỉ cần",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈsɪmpli/",
        example: "To order, simply click here.",
        exampleTranslation: "Để đặt hàng, chỉ cần nhấp vào đây."
    },
    {
        word: "since",
        meaning: "kể từ đó, từ đó",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/sɪns/",
        example: "She went for a run on Monday and has not been seen since.",
        exampleTranslation: "Cô ấy đi chạy vào thứ Hai và không ai nhìn thấy cô ấy kể từ đó."
    },
    {
        word: "sink",
        meaning: "chìm",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/sɪŋk/",
        example: "The ship sank to the bottom of the sea.",
        exampleTranslation: "Con tàu chìm xuống đáy biển."
    },
    {
        word: "slice",
        meaning: "lát, miếng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/slaɪs/",
        example: "Cut the meat into thin slices.",
        exampleTranslation: "Cắt thịt thành những lát mỏng."
    },
    {
        word: "slightly",
        meaning: "hơi, một chút",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈslaɪtli/",
        example: "a slightly different version",
        exampleTranslation: "một phiên bản hơi khác"
    },
    {
        word: "slow",
        meaning: "chậm lại",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/sləʊ/",
        example: "Economic growth has slowed a little.",
        exampleTranslation: "Tăng trưởng kinh tế đã chậm lại một chút."
    },
    {
        word: "smart",
        meaning: "thông minh, lịch sự, bảnh bao",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/smɑːrt/",
        example: "I have to be smart for work.",
        exampleTranslation: "Tôi phải ăn mặc lịch sự để đi làm."
    },
    {
        word: "smooth",
        meaning: "mịn, trơn tru",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/smuːð/",
        example: "the smooth surface of the metal",
        exampleTranslation: "bề mặt kim loại mịn"
    },
    {
        word: "software",
        meaning: "phần mềm",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈsɔːftwer/",
        example: "management/editing software",
        exampleTranslation: "phần mềm quản lý/chỉnh sửa"
    },
    {
        word: "soil",
        meaning: "đất, thổ nhưỡng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/sɔɪl/",
        example: "instruments for measuring soil moisture",
        exampleTranslation: "các thiết bị đo độ ẩm của đất"
    },
    {
        word: "solid",
        meaning: "rắn, vững chắc, đặc",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈsɑːlɪd/",
        example: "The planet Jupiter may have no solid surface at all.",
        exampleTranslation: "Hành tinh Sao Mộc có thể không có bề mặt rắn nào cả."
    },
    {
        word: "sort",
        meaning: "sắp xếp, phân loại",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/sɔːrt/",
        example: "I started at the bottom, answering phones and sorting the mail.",
        exampleTranslation: "Tôi bắt đầu từ vị trí thấp nhất, trả lời điện thoại và phân loại thư."
    },
    {
        word: "southern",
        meaning: "phía nam, miền nam",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈsʌðərn/",
        example: "the southern slopes of the mountains",
        exampleTranslation: "các sườn núi phía nam"
    },
    {
        word: "specifically",
        meaning: "đặc biệt, cụ thể, dành riêng",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/spəˈsɪfɪkli/",
        example: "liquid vitamins specifically designed for children",
        exampleTranslation: "vitamin dạng lỏng được thiết kế đặc biệt dành cho trẻ em"
    },
    {
        word: "spending",
        meaning: "chi tiêu, sự chi tiêu",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈspendɪŋ/",
        example: "to increase/cut/reduce spending",
        exampleTranslation: "tăng/cắt giảm/giảm chi tiêu"
    },
    {
        word: "spicy",
        meaning: "cay",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈspaɪsi/",
        example: "I don't like spicy food.",
        exampleTranslation: "Tôi không thích đồ ăn cay."
    },
    {
        word: "spirit",
        meaning: "tinh thần, linh hồn",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈspɪrɪt/",
        example: "You are underestimating the power of the human spirit to overcome difficulties.",
        exampleTranslation: "Bạn đang đánh giá thấp sức mạnh của tinh thần con người để vượt qua khó khăn."
    },
    {
        word: "spoken",
        meaning: "nói, được nói",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈspəʊkən/",
        example: "spoken English",
        exampleTranslation: "tiếng Anh giao tiếp/nói"
    },
    {
        word: "spot",
        meaning: "đốm, vết, điểm",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/spɑːt/",
        example: "Which has spots, the leopard or the tiger?",
        exampleTranslation: "Con nào có đốm, báo hay hổ?"
    },
    {
        word: "spread",
        meaning: "lan truyền, trải rộng",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/spred/",
        example: "The news had spread and was causing great excitement.",
        exampleTranslation: "Tin tức đã lan truyền và gây ra sự phấn khích lớn."
    },
    {
        word: "stadium",
        meaning: "sân vận động",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈsteɪdiəm/",
        example: "a football/sports stadium",
        exampleTranslation: "một sân vận động bóng đá/thể thao"
    },
    {
        word: "staff",
        meaning: "nhân viên, đội ngũ, cán bộ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/stæf/",
        example: "medical/nursing/teaching/coaching staff",
        exampleTranslation: "đội ngũ nhân viên y tế/điều dưỡng/giảng dạy/huấn luyện"
    },
    {
        word: "standard",
        meaning: "tiêu chuẩn, chuẩn",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈstændərd/",
        example: "the standard rate of tax (= paid by everyone)",
        exampleTranslation: "mức thuế tiêu chuẩn (= được mọi người trả)"
    },
    {
        word: "state",
        meaning: "nhà nước, thuộc nhà nước",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/steɪt/",
        example: "state officials/agencies",
        exampleTranslation: "các quan chức/cơ quan nhà nước"
    },
    {
        word: "statistic",
        meaning: "thống kê, số liệu thống kê",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/stəˈtɪstɪk/",
        example: "Analysis of crime statistics showed high levels of violent crime within the area.",
        exampleTranslation: "Phân tích số liệu thống kê tội phạm cho thấy mức độ tội phạm bạo lực cao trong khu vực."
    },
    {
        word: "statue",
        meaning: "tượng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈstætʃuː/",
        example: "a bronze/marble statue",
        exampleTranslation: "một bức tượng đồng/cẩm thạch"
    },
    {
        word: "stick",
        meaning: "que, gậy, củi",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/stɪk/",
        example: "We collected dry sticks to start a fire.",
        exampleTranslation: "Chúng tôi thu thập củi khô để nhóm lửa."
    },
    {
        word: "still",
        meaning: "tĩnh lặng, không động đậy",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/stɪl/",
        example: "A fallen tree floated in the still water.",
        exampleTranslation: "Một cái cây đổ nổi trên mặt nước tĩnh lặng."
    },
    {
        word: "store",
        meaning: "lưu trữ, cất giữ",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/stɔːr/",
        example: "We do not have adequate space to store these documents.",
        exampleTranslation: "Chúng tôi không có đủ không gian để lưu trữ các tài liệu này."
    },
    {
        word: "stranger",
        meaning: "người lạ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈstreɪndʒər/",
        example: "There was a complete stranger sitting at my desk.",
        exampleTranslation: "Có một người hoàn toàn xa lạ đang ngồi ở bàn làm việc của tôi."
    },
    {
        word: "strength",
        meaning: "sức mạnh, sức lực",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/streŋkθ/",
        example: "He pushed against the rock with all his strength.",
        exampleTranslation: "Anh ta đẩy tảng đá bằng tất cả sức lực của mình."
    },
    {
        word: "string",
        meaning: "dây, sợi dây",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/strɪŋ/",
        example: "a piece/length/ball of string",
        exampleTranslation: "một đoạn/sợi/cuộn dây"
    },
    {
        word: "strongly",
        meaning: "mạnh mẽ, kiên quyết",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈstrɔːŋli/",
        example: "a strongly worded protest",
        exampleTranslation: "một cuộc biểu tình bằng lời lẽ mạnh mẽ"
    },
    {
        word: "studio",
        meaning: "phòng thu, xưởng phim/ảnh",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈstuːdiəʊ/",
        example: "a television/recording studio",
        exampleTranslation: "một trường quay truyền hình/phòng thu âm"
    },
    {
        word: "stuff",
        meaning: "đồ đạc, thứ, chất",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/stʌf/",
        example: "What's all that sticky stuff on the carpet?",
        exampleTranslation: "Cái thứ dính dính trên thảm là gì vậy?"
    },
    {
        word: "substance",
        meaning: "chất, vật chất",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈsʌbstəns/",
        example: "a sticky substance",
        exampleTranslation: "một chất dính"
    },
    {
        word: "successfully",
        meaning: "thành công",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/səkˈsesfəli/",
        example: "She had already successfully completed these courses.",
        exampleTranslation: "Cô ấy đã hoàn thành thành công các khóa học này."
    },
    {
        word: "sudden",
        meaning: "đột ngột, bất ngờ",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈsʌdn/",
        example: "News of his sudden and unexpected death came as a great shock.",
        exampleTranslation: "Tin tức về cái chết đột ngột và bất ngờ của anh ấy là một cú sốc lớn."
    },
    {
        word: "suffer",
        meaning: "chịu đựng, đau khổ, mắc phải",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈsʌfər/",
        example: "I hate to see animals suffering.",
        exampleTranslation: "Tôi ghét nhìn thấy động vật phải chịu đựng."
    },
    {
        word: "suit",
        meaning: "phù hợp, vừa vặn, hợp",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/suːt/",
        example: "suit somebody/something If we met at two, would that suit you?",
        exampleTranslation: "Nếu chúng ta gặp nhau lúc hai giờ, điều đó có phù hợp với bạn không?"
    },
    {
        word: "suitable",
        meaning: "phù hợp, thích hợp",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈsuːtəbl/",
        example: "a suitable candidate",
        exampleTranslation: "một ứng cử viên phù hợp"
    },
    {
        word: "summarize",
        meaning: "tóm tắt, tổng kết",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈsʌməraɪz/",
        example: "This essay briefly summarizes some of our approaches.",
        exampleTranslation: "Bài tiểu luận này tóm tắt ngắn gọn một số cách tiếp cận của chúng tôi."
    },
    {
        word: "summary",
        meaning: "bản tóm tắt, tổng kết",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈsʌməri/",
        example: "a news summary",
        exampleTranslation: "một bản tóm tắt tin tức"
    },
    {
        word: "supply",
        meaning: "nguồn cung cấp, sự cung cấp",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/səˈplaɪ/",
        example: "Advances in agriculture increased the food supply.",
        exampleTranslation: "Những tiến bộ trong nông nghiệp đã làm tăng nguồn cung cấp lương thực."
    },
    {
        word: "supporter",
        meaning: "người ủng hộ, cổ động viên",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/səˈpɔːrtər/",
        example: "a strong/loyal/staunch/ardent supporter",
        exampleTranslation: "một người ủng hộ mạnh mẽ/trung thành/kiên định/nồng nhiệt"
    },
    {
        word: "surely",
        meaning: "chắc chắn, hẳn là",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈʃʊrli/",
        example: "Surely we should do something about it?",
        exampleTranslation: "Chắc chắn chúng ta nên làm gì đó về việc này chứ?"
    },
    {
        word: "surface",
        meaning: "bề mặt, mặt",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈsɜːrfɪs/",
        example: "We need a flat, smooth surface to play the game on.",
        exampleTranslation: "Chúng ta cần một bề mặt phẳng, nhẵn để chơi trò chơi."
    },
    {
        word: "survive",
        meaning: "sống sót, tồn tại",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/sərˈvaɪv/",
        example: "She was the last surviving member of the family.",
        exampleTranslation: "Bà ấy là thành viên cuối cùng còn sống sót của gia đình."
    },
    {
        word: "swim",
        meaning: "cuộc bơi, lần bơi",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/swɪm/",
        example: "Let's go for a swim.",
        exampleTranslation: "Chúng ta hãy đi bơi đi."
    },
    {
        word: "switch",
        meaning: "chuyển đổi, thay đổi",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/swɪtʃ/",
        example: "switch (over) to something We're in the process of switching over to a new system of invoicing.",
        exampleTranslation: "Chúng tôi đang trong quá trình chuyển đổi sang một hệ thống lập hóa đơn mới."
    },
    {
        word: "symptom",
        meaning: "triệu chứng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈsɪmptəm/",
        example: "Symptoms include a headache and sore throat.",
        exampleTranslation: "Các triệu chứng bao gồm đau đầu và đau họng."
    },
    {
        word: "tail",
        meaning: "đuôi",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/teɪl/",
        example: "The dog ran up, wagging its tail.",
        exampleTranslation: "Con chó chạy đến, vẫy đuôi."
    },
    {
        word: "talent",
        meaning: "tài năng, năng khiếu",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈtælənt/",
        example: "The festival showcases the talent of young musicians.",
        exampleTranslation: "Lễ hội giới thiệu tài năng của các nhạc sĩ trẻ."
    },
    {
        word: "talented",
        meaning: "tài năng, có năng khiếu",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈtæləntɪd/",
        example: "a talented player/musician/artist",
        exampleTranslation: "một cầu thủ/nhạc sĩ/nghệ sĩ tài năng"
    },
    {
        word: "tape",
        meaning: "băng dính, băng keo, băng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/teɪp/",
        example: "adhesive/sticky tape",
        exampleTranslation: "băng dính/băng keo"
    },
    {
        word: "tax",
        meaning: "thuế",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/tæks/",
        example: "to pay your taxes",
        exampleTranslation: "để nộp thuế của bạn"
    },
    {
        word: "technical",
        meaning: "kỹ thuật",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈteknɪkl/",
        example: "We offer free technical support for those buying our software.",
        exampleTranslation: "Chúng tôi cung cấp hỗ trợ kỹ thuật miễn phí cho những người mua phần mềm của chúng tôi."
    },
    {
        word: "technique",
        meaning: "kỹ thuật, phương pháp",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/tekˈniːk/",
        example: "management techniques",
        exampleTranslation: "các kỹ thuật quản lý"
    },
    {
        word: "tend",
        meaning: "có xu hướng, có khuynh hướng",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/tend/",
        example: "Women tend to live longer than men.",
        exampleTranslation: "Phụ nữ có xu hướng sống lâu hơn đàn ông."
    },
    {
        word: "tent",
        meaning: "lều",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/tent/",
        example: "to put up/take down a tent",
        exampleTranslation: "dựng lều/tháo lều"
    },
    {
        word: "that",
        meaning: "đến mức đó, như thế",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ðæt/",
        example: "I can't walk that far (= as far as that).",
        exampleTranslation: "Tôi không thể đi xa đến mức đó."
    },
    {
        word: "theirs",
        meaning: "của họ",
        partOfSpeech: "pronoun",
        level: "B1",
        phonetic: "/ðerz/",
        example: "Theirs are the children with very fair hair.",
        exampleTranslation: "Những đứa trẻ có mái tóc rất sáng màu là của họ."
    },
    {
        word: "theme",
        meaning: "chủ đề, đề tài",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/θiːm/",
        example: "the central/main/key/major theme",
        exampleTranslation: "chủ đề trung tâm/chính/then chốt/lớn"
    },
    {
        word: "theory",
        meaning: "lý thuyết",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈθɪri/",
        example: "theory of something the theory of evolution/relativity",
        exampleTranslation: "lý thuyết tiến hóa/tương đối"
    },
    {
        word: "therefore",
        meaning: "do đó, vì vậy",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈðerfɔːr/",
        example: "He's only 17 and therefore not eligible to vote.",
        exampleTranslation: "Anh ấy mới 17 tuổi và do đó không đủ điều kiện bỏ phiếu."
    },
    {
        word: "this",
        meaning: "cao thế này, rộng thế này",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ðɪs/",
        example: "It's about this high (= as high as I am showing you with my hands).",
        exampleTranslation: "Nó cao khoảng chừng này (tức là cao bằng cách tôi đang chỉ cho bạn bằng tay)."
    },
    {
        word: "though",
        meaning: "mặc dù, tuy nhiên",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ðəʊ/",
        example: "Our team lost. It was a good game though.",
        exampleTranslation: "Đội của chúng tôi đã thua. Dù sao đó cũng là một trận đấu hay."
    },
    {
        word: "throat",
        meaning: "họng, cổ họng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/θrəʊt/",
        example: "a sore throat",
        exampleTranslation: "đau họng"
    },
    {
        word: "throughout",
        meaning: "khắp, xuyên suốt, trong suốt",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/θruːˈaʊt/",
        example: "They export their products to markets throughout the world.",
        exampleTranslation: "Họ xuất khẩu sản phẩm của mình tới các thị trường trên khắp thế giới."
    },
    {
        word: "tight",
        meaning: "chặt, chật, siết chặt",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/taɪt/",
        example: "He kept a tight grip on her arm.",
        exampleTranslation: "Anh ta nắm chặt tay cô ấy."
    },
    {
        word: "till",
        meaning: "cho đến khi, đến",
        partOfSpeech: "conjunction",
        level: "B1",
        phonetic: "/tɪl/",
        example: "We're open till 6 o'clock.",
        exampleTranslation: "Chúng tôi mở cửa đến 6 giờ."
    },
    {
        word: "tin",
        meaning: "hộp thiếc, lon thiếc, thiếc",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/tɪn/",
        example: "Open the tin and drain the tuna.",
        exampleTranslation: "Mở hộp thiếc ra và làm ráo cá ngừ."
    },
    {
        word: "tiny",
        meaning: "rất nhỏ, bé tí, tí hon",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈtaɪni/",
        example: "a tiny baby",
        exampleTranslation: "một em bé tí hon"
    },
    {
        word: "tip",
        meaning: "boa, thưởng (tiền)",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/tɪp/",
        example: "Americans were always welcome because they tended to tip heavily.",
        exampleTranslation: "Người Mỹ luôn được chào đón vì họ thường có xu hướng boa nhiều tiền."
    },
    {
        word: "toe",
        meaning: "ngón chân",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/təʊ/",
        example: "the big/little toe (= the largest/smallest toe)",
        exampleTranslation: "ngón chân cái/út (= ngón chân lớn nhất/nhỏ nhất)"
    },
    {
        word: "tongue",
        meaning: "lưỡi",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/tʌŋ/",
        example: "He clicked his tongue to attract their attention.",
        exampleTranslation: "Anh ta tặc lưỡi để thu hút sự chú ý của họ."
    },
    {
        word: "total",
        meaning: "tổng cộng, toàn bộ",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈtəʊtl/",
        example: "Their total cost was $18 000.",
        exampleTranslation: "Tổng chi phí của họ là 18.000 đô la."
    },
    {
        word: "totally",
        meaning: "hoàn toàn, toàn bộ",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈtəʊtəli/",
        example: "They come from totally different cultures.",
        exampleTranslation: "Họ đến từ những nền văn hóa hoàn toàn khác biệt."
    },
    {
        word: "touch",
        meaning: "sự chạm, xúc giác, sự tiếp xúc",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/tʌtʃ/",
        example: "the sense of touch",
        exampleTranslation: "xúc giác"
    },
    {
        word: "tour",
        meaning: "đi lưu diễn, đi du lịch, tham quan",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/tʊr/",
        example: "He toured America with his one-man show.",
        exampleTranslation: "Anh ấy đã lưu diễn khắp nước Mỹ với chương trình biểu diễn một người của mình."
    },
    {
        word: "trade",
        meaning: "thương mại, buôn bán",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/treɪd/",
        example: "international/foreign/global/world trade",
        exampleTranslation: "thương mại quốc tế/nước ngoài/toàn cầu/thế giới"
    },
    {
        word: "translate",
        meaning: "dịch, phiên dịch",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/trænzˈleɪt/",
        example: "He translated the letter into English.",
        exampleTranslation: "Anh ấy đã dịch bức thư sang tiếng Anh."
    },
    {
        word: "translation",
        meaning: "bản dịch, sự dịch thuật",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/trænzˈleɪʃn/",
        example: "an error in translation",
        exampleTranslation: "lỗi trong bản dịch"
    },
    {
        word: "transport",
        meaning: "vận chuyển, chuyên chở",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/trænˈspɔːrt/",
        example: "to transport goods/passengers",
        exampleTranslation: "vận chuyển hàng hóa/hành khách"
    },
    {
        word: "treat",
        meaning: "đối xử, điều trị, xử lý",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/triːt/",
        example: "treat somebody/something with something to treat people with respect",
        exampleTranslation: "đối xử với mọi người bằng sự tôn trọng"
    },
    {
        word: "treatment",
        meaning: "sự điều trị, cách đối xử",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈtriːtmənt/",
        example: "The drug is used in the treatment of depression.",
        exampleTranslation: "Loại thuốc này được sử dụng trong việc điều trị bệnh trầm cảm."
    },
    {
        word: "trend",
        meaning: "xu hướng, khuynh hướng",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/trend/",
        example: "social/economic/political/demographic trends",
        exampleTranslation: "các xu hướng xã hội/kinh tế/chính trị/nhân khẩu học"
    },
    {
        word: "trick",
        meaning: "mưu mẹo, mánh khóe, trò lừa",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/trɪk/",
        example: "They had to think of a trick to get past the guards.",
        exampleTranslation: "Họ phải nghĩ ra một mánh khóe để vượt qua lính gác."
    },
    {
        word: "truth",
        meaning: "sự thật, chân lý",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/truːθ/",
        example: "Do you think she's telling the truth?",
        exampleTranslation: "Bạn có nghĩ cô ấy đang nói sự thật không?"
    },
    {
        word: "tube",
        meaning: "ống, tuýp",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/tuːb/",
        example: "He had to be fed through a feeding tube for several months.",
        exampleTranslation: "Anh ấy phải được nuôi ăn qua một ống thông trong vài tháng."
    },
    {
        word: "type",
        meaning: "đánh máy, gõ (chữ)",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/taɪp/",
        example: "How fast can you type?",
        exampleTranslation: "Bạn có thể đánh máy nhanh đến mức nào?"
    },
    {
        word: "typically",
        meaning: "điển hình, thông thường, tiêu biểu",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/ˈtɪpɪkli/",
        example: "The standard chips are typically used for databases and other business software.",
        exampleTranslation: "Các chip tiêu chuẩn thường được sử dụng cho cơ sở dữ liệu và các phần mềm kinh doanh khác."
    },
    {
        word: "tyre",
        meaning: "lốp xe",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈtaɪər/",
        example: "a front/rear tyre",
        exampleTranslation: "lốp trước/sau"
    },
    {
        word: "ugly",
        meaning: "xấu xí, xấu",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈʌɡli/",
        example: "an ugly face",
        exampleTranslation: "một khuôn mặt xấu xí"
    },
    {
        word: "unable",
        meaning: "không thể, không có khả năng",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ʌnˈeɪbl/",
        example: "a former soldier who has been unable to find work since the war ended",
        exampleTranslation: "một cựu chiến binh không thể tìm được việc làm kể từ khi chiến tranh kết thúc"
    },
    {
        word: "uncomfortable",
        meaning: "không thoải mái, khó chịu",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ʌnˈkʌmfərtəbl/",
        example: "uncomfortable shoes",
        exampleTranslation: "đôi giày không thoải mái"
    },
    {
        word: "underwear",
        meaning: "đồ lót, quần áo lót",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈʌndərwer/",
        example: "I never wear underwear.",
        exampleTranslation: "Tôi không bao giờ mặc đồ lót."
    },
    {
        word: "unemployed",
        meaning: "thất nghiệp",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˌʌnɪmˈplɔɪd/",
        example: "How long have you been unemployed?",
        exampleTranslation: "Bạn đã thất nghiệp bao lâu rồi?"
    },
    {
        word: "unemployment",
        meaning: "thất nghiệp",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˌʌnɪmˈplɔɪmənt/",
        example: "an area of high/low unemployment",
        exampleTranslation: "một khu vực có tỷ lệ thất nghiệp cao/thấp"
    },
    {
        word: "unfair",
        meaning: "không công bằng, bất công",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˌʌnˈfer/",
        example: "They had been given an unfair advantage.",
        exampleTranslation: "Họ đã được trao một lợi thế không công bằng."
    },
    {
        word: "union",
        meaning: "công đoàn, liên hiệp",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈjuːniən/",
        example: "I've joined the union.",
        exampleTranslation: "Tôi đã tham gia công đoàn."
    },
    {
        word: "unless",
        meaning: "trừ khi, nếu không",
        partOfSpeech: "conjunction",
        level: "B1",
        phonetic: "/ənˈles/",
        example: "You won't get paid for time off unless you have a doctor's note.",
        exampleTranslation: "Bạn sẽ không được trả lương cho thời gian nghỉ việc trừ khi bạn có giấy của bác sĩ."
    },
    {
        word: "unlike",
        meaning: "không giống như",
        partOfSpeech: "preposition",
        level: "B1",
        phonetic: "/ˌʌnˈlaɪk/",
        example: "Music is quite unlike any other art form.",
        exampleTranslation: "Âm nhạc hoàn toàn không giống bất kỳ loại hình nghệ thuật nào khác."
    },
    {
        word: "unlikely",
        meaning: "không có khả năng, khó xảy ra",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ʌnˈlaɪkli/",
        example: "unlikely to do something The project seemed unlikely to succeed.",
        exampleTranslation: "khó có khả năng làm gì đó Dự án dường như khó có thể thành công."
    },
    {
        word: "unnecessary",
        meaning: "không cần thiết",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ʌnˈnesəseri/",
        example: "They were found guilty of causing unnecessary suffering to animals.",
        exampleTranslation: "Họ bị kết tội gây ra sự đau khổ không cần thiết cho động vật."
    },
    {
        word: "unpleasant",
        meaning: "khó chịu, không dễ chịu",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ʌnˈpleznt/",
        example: "an unpleasant experience/surprise/task",
        exampleTranslation: "một trải nghiệm/bất ngờ/nhiệm vụ khó chịu"
    },
    {
        word: "update",
        meaning: "cập nhật, thông tin mới nhất",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈʌpdeɪt/",
        example: "They will send you regular updates by email.",
        exampleTranslation: "Họ sẽ gửi cho bạn các bản cập nhật thường xuyên qua email."
    },
    {
        word: "upon",
        meaning: "trên, dựa trên",
        partOfSpeech: "preposition",
        level: "B1",
        phonetic: "/əˈpɑːn/",
        example: "The decision was based upon two considerations.",
        exampleTranslation: "Quyết định được dựa trên hai yếu tố xem xét."
    },
    {
        word: "upset",
        meaning: "buồn bã, khó chịu, tức giận",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˌʌpˈset/",
        example: "I understand how upset you must be feeling.",
        exampleTranslation: "Tôi hiểu bạn đang cảm thấy buồn bã đến mức nào."
    },
    {
        word: "used",
        meaning: "quen với",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/juːst/",
        example: "used to doing something I'm not used to eating so much at lunchtime.",
        exampleTranslation: "quen làm gì đó Tôi không quen ăn nhiều như vậy vào bữa trưa."
    },
    {
        word: "valuable",
        meaning: "có giá trị, quý giá",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈvæljuəbl/",
        example: "My home is my most valuable asset.",
        exampleTranslation: "Ngôi nhà của tôi là tài sản quý giá nhất của tôi."
    },
    {
        word: "value",
        meaning: "giá trị",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈvæljuː/",
        example: "to go up/rise/increase in value",
        exampleTranslation: "tăng giá trị"
    },
    {
        word: "various",
        meaning: "đa dạng, khác nhau",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈværiəs/",
        example: "various types/forms/kinds of somebody/something",
        exampleTranslation: "các loại/hình thức/kiểu khác nhau của ai đó/cái gì đó"
    },
    {
        word: "version",
        meaning: "phiên bản",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈvɜːrʒn/",
        example: "version of something the latest version of the software package",
        exampleTranslation: "phiên bản của cái gì đó phiên bản mới nhất của gói phần mềm"
    },
    {
        word: "victim",
        meaning: "nạn nhân",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈvɪktɪm/",
        example: "shooting/murder victims",
        exampleTranslation: "nạn nhân bị bắn/giết"
    },
    {
        word: "view",
        meaning: "xem, nhìn nhận, quan niệm",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/vjuː/",
        example: "view somebody/something + adv./prep. How do you view your position within the company?",
        exampleTranslation: "xem/nhìn nhận ai đó/cái gì đó + trạng từ/giới từ Bạn nhìn nhận vị trí của mình trong công ty như thế nào?"
    },
    {
        word: "viewer",
        meaning: "người xem, khán giả",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈvjuːər/",
        example: "The programme attracted millions of viewers.",
        exampleTranslation: "Chương trình đã thu hút hàng triệu khán giả."
    },
    {
        word: "violent",
        meaning: "bạo lực",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈvaɪələnt/",
        example: "violent crime/criminals",
        exampleTranslation: "tội phạm/tội phạm bạo lực"
    },
    {
        word: "volunteer",
        meaning: "tình nguyện viên",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˌvɑːlənˈtɪr/",
        example: "Schools need volunteers to help children to read.",
        exampleTranslation: "Các trường học cần tình nguyện viên để giúp trẻ em đọc sách."
    },
    {
        word: "vote",
        meaning: "phiếu bầu, sự bỏ phiếu",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/vəʊt/",
        example: "to win/lose votes",
        exampleTranslation: "giành/mất phiếu bầu"
    },
    {
        word: "warm",
        meaning: "làm ấm, sưởi ấm",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/wɔːrm/",
        example: "warm something/somebody/yourself Come in and warm yourself by the fire.",
        exampleTranslation: "làm ấm cái gì đó/ai đó/bản thân bạn Hãy vào và sưởi ấm mình bên lửa."
    },
    {
        word: "warn",
        meaning: "cảnh báo",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/wɔːrn/",
        example: "I tried to warn him, but he wouldn't listen.",
        exampleTranslation: "Tôi đã cố gắng cảnh báo anh ấy, nhưng anh ấy không chịu nghe."
    },
    {
        word: "warning",
        meaning: "lời cảnh báo, sự cảnh báo",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈwɔːrnɪŋ/",
        example: "I had absolutely no warning.",
        exampleTranslation: "Tôi hoàn toàn không có bất kỳ lời cảnh báo nào."
    },
    {
        word: "waste",
        meaning: "chất thải, rác thải",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/weɪst/",
        example: "the disposal of waste material",
        exampleTranslation: "việc xử lý chất thải"
    },
    {
        word: "water",
        meaning: "tưới nước",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/ˈwɔːtər/",
        example: "to water the plants/garden",
        exampleTranslation: "tưới cây/vườn"
    },
    {
        word: "wave",
        meaning: "vẫy tay",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/weɪv/",
        example: "The people on the bus waved and we waved back.",
        exampleTranslation: "Những người trên xe buýt vẫy tay và chúng tôi vẫy tay lại."
    },
    {
        word: "weapon",
        meaning: "vũ khí",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈwepən/",
        example: "Modern nuclear weapons are much more destructive than either biological or chemical weapons.",
        exampleTranslation: "Vũ khí hạt nhân hiện đại có sức hủy diệt lớn hơn nhiều so với vũ khí sinh học hoặc hóa học."
    },
    {
        word: "weigh",
        meaning: "cân nặng, nặng",
        partOfSpeech: "verb",
        level: "B1",
        phonetic: "/weɪ/",
        example: "How much do you weigh (= how heavy are you)?",
        exampleTranslation: "Bạn nặng bao nhiêu (= bạn nặng bao nhiêu)?"
    },
    {
        word: "western",
        meaning: "phía tây, miền tây",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈwestərn/",
        example: "western Spain",
        exampleTranslation: "miền tây Tây Ban Nha"
    },
    {
        word: "whatever",
        meaning: "bất cứ cái gì, bất cứ điều gì",
        partOfSpeech: "determiner",
        level: "B1",
        phonetic: "/wətˈevər/",
        example: "Take whatever action is needed.",
        exampleTranslation: "Hãy thực hiện bất cứ hành động nào cần thiết."
    },
    {
        word: "whenever",
        meaning: "bất cứ khi nào, lúc nào",
        partOfSpeech: "conjunction",
        level: "B1",
        phonetic: "/wenˈevər/",
        example: "You can ask for help whenever you need it.",
        exampleTranslation: "Bạn có thể yêu cầu giúp đỡ bất cứ khi nào bạn cần."
    },
    {
        word: "whether",
        meaning: "liệu, dù",
        partOfSpeech: "conjunction",
        level: "B1",
        phonetic: "/ˈweðər/",
        example: "He seemed undecided whether to go or stay.",
        exampleTranslation: "Anh ấy dường như không quyết định được là nên đi hay ở."
    },
    {
        word: "while",
        meaning: "lúc, trong khi, một thời gian",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/waɪl/",
        example: "for a while I only stayed for a short while.",
        exampleTranslation: "trong một lúc tôi chỉ ở lại một thời gian ngắn."
    },
    {
        word: "whole",
        meaning: "toàn bộ, tổng thể",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/həʊl/",
        example: "The scheme would cover the whole of the UK.",
        exampleTranslation: "Kế hoạch này sẽ bao phủ toàn bộ Vương quốc Anh."
    },
    {
        word: "will",
        meaning: "ý chí, mong muốn",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/wɪl/",
        example: "to have a strong will",
        exampleTranslation: "có một ý chí mạnh mẽ"
    },
    {
        word: "win",
        meaning: "chiến thắng, thắng lợi",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/wɪn/",
        example: "two wins and three defeats",
        exampleTranslation: "hai trận thắng và ba trận thua"
    },
    {
        word: "wing",
        meaning: "cánh",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/wɪŋ/",
        example: "The swan flapped its wings noisily.",
        exampleTranslation: "Con thiên nga vỗ cánh ồn ào."
    },
    {
        word: "within",
        meaning: "trong vòng, bên trong",
        partOfSpeech: "preposition",
        level: "B1",
        phonetic: "/wɪˈðɪn/",
        example: "You should receive a reply within seven days.",
        exampleTranslation: "Bạn sẽ nhận được câu trả lời trong vòng bảy ngày."
    },
    {
        word: "wonder",
        meaning: "điều kỳ diệu, sự ngạc nhiên",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈwʌndər/",
        example: "He retained a childlike sense of wonder.",
        exampleTranslation: "Anh ấy vẫn giữ được sự ngạc nhiên ngây thơ như trẻ con."
    },
    {
        word: "wool",
        meaning: "len",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/wʊl/",
        example: "Sheep were kept for their wool and meat.",
        exampleTranslation: "Cừu được nuôi để lấy len và thịt."
    },
    {
        word: "worldwide",
        meaning: "toàn cầu, trên toàn thế giới",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˌwɜːrldˈwaɪd/",
        example: "an increase in worldwide sales",
        exampleTranslation: "sự gia tăng doanh số bán hàng trên toàn thế giới"
    },
    {
        word: "worry",
        meaning: "nỗi lo lắng, sự lo âu",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/ˈwɜːri/",
        example: "The threat of losing their jobs is a constant source of worry to them.",
        exampleTranslation: "Mối đe dọa mất việc làm là một nguồn lo lắng thường trực đối với họ."
    },
    {
        word: "worse",
        meaning: "tệ hơn, tồi tệ hơn",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/wɜːrs/",
        example: "Working-class children fared rather worse.",
        exampleTranslation: "Trẻ em thuộc tầng lớp lao động sống khá tệ hơn."
    },
    {
        word: "worst",
        meaning: "tệ nhất, tồi tệ nhất",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/wɜːrst/",
        example: "He was voted the worst dressed celebrity.",
        exampleTranslation: "Anh ấy được bình chọn là người nổi tiếng ăn mặc tệ nhất."
    },
    {
        word: "worth",
        meaning: "đáng giá",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/wɜːrθ/",
        example: "Our house is worth about £100 000.",
        exampleTranslation: "Ngôi nhà của chúng tôi đáng giá khoảng 100.000 bảng Anh."
    },
    {
        word: "written",
        meaning: "bằng văn bản, đã viết",
        partOfSpeech: "adjective",
        level: "B1",
        phonetic: "/ˈrɪtn/",
        example: "Having a written record of what I've done is very valuable.",
        exampleTranslation: "Có một hồ sơ bằng văn bản về những gì tôi đã làm là rất quý giá."
    },
    {
        word: "wrong",
        meaning: "sai",
        partOfSpeech: "adverb",
        level: "B1",
        phonetic: "/rɔːŋ/",
        example: "My name is spelt wrong.",
        exampleTranslation: "Tên tôi bị đánh vần sai."
    },
    {
        word: "yard",
        meaning: "sân",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/jɑːrd/",
        example: "They have a gorgeous old oak tree in their front yard.",
        exampleTranslation: "Họ có một cây sồi cổ thụ tuyệt đẹp ở sân trước."
    },
    {
        word: "young",
        meaning: "người trẻ, giới trẻ",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/jʌŋ/",
        example: "It's a movie that will appeal to the young.",
        exampleTranslation: "Đó là một bộ phim sẽ thu hút giới trẻ."
    },
    {
        word: "youth",
        meaning: "tuổi trẻ, thanh xuân",
        partOfSpeech: "noun",
        level: "B1",
        phonetic: "/juːθ/",
        example: "in somebody's youth He had been a talented musician in his youth.",
        exampleTranslation: "Anh ấy đã từng là một nhạc sĩ tài năng khi còn trẻ."
    }
];

async function seedB1Vocabulary() {
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

        // Check if B1 vocabulary already exists for admin
        const existingCount = await vocabularyCollection.countDocuments({
            userId: ADMIN_USER_ID,
            level: "B1"
        });

        if (existingCount > 0) {
            console.log(`⚠️ Found ${existingCount} existing B1 vocabulary items for admin`);
            const response = await new Promise<string>((resolve) => {
                process.stdout.write("Do you want to delete and re-seed? (y/n): ");
                process.stdin.once("data", (data) => resolve(data.toString().trim().toLowerCase()));
            });

            if (response === "y") {
                await vocabularyCollection.deleteMany({
                    userId: ADMIN_USER_ID,
                    level: "B1"
                });
                console.log("🗑️ Deleted existing B1 vocabulary");
            } else {
                console.log("❌ Seeding cancelled");
                process.exit(0);
            }
        }

        // Insert vocabulary with timestamps
        const vocabularyToInsert: VocabularySeed[] = b1Vocabulary.map((vocab) => ({
            ...vocab,
            userId: ADMIN_USER_ID,
            createdAt: new Date()
        }));

        const result = await vocabularyCollection.insertMany(vocabularyToInsert);
        console.log(`✅ Inserted ${result.insertedCount} B1 vocabulary items`);
        console.log("🎉 Seeding complete!");

    } catch (error) {
        console.error("❌ Error seeding vocabulary:", error);
        process.exit(1);
    } finally {
        await client.close();
        process.exit(0);
    }
}

seedB1Vocabulary();
