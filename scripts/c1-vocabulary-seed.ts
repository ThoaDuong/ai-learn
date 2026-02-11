/**
 * C1 Level Vocabulary Seed Script
 * Auto-generated from full-word.json by generate-c1-seed.ts
 * Run: npx tsx scripts/c1-vocabulary-seed.ts
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

const c1Vocabulary: Omit<VocabularySeed, "userId" | "createdAt">[] = [
    {
        word: "abolish",
        meaning: "bãi bỏ, hủy bỏ",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/əˈbɑːlɪʃ/",
        example: "This tax should be abolished.",
        exampleTranslation: "Thuế này nên được bãi bỏ."
    },
    {
        word: "abortion",
        meaning: "phá thai",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈbɔːrʃn/",
        example: "to support/oppose abortion",
        exampleTranslation: "ủng hộ/phản đối phá thai"
    },
    {
        word: "absence",
        meaning: "sự vắng mặt, sự thiếu vắng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈæbsəns/",
        example: "in somebody's absence The decision was made in my absence (= while I was not there).",
        exampleTranslation: "vắng mặt ai đó Quyết định được đưa ra khi tôi vắng mặt (= trong khi tôi không có ở đó)."
    },
    {
        word: "absent",
        meaning: "vắng mặt",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈæbsənt/",
        example: "He was absent from work for two weeks.",
        exampleTranslation: "Anh ấy vắng mặt ở cơ quan hai tuần."
    },
    {
        word: "absurd",
        meaning: "ngớ ngẩn, phi lý, lố bịch",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/əbˈsɜːrd/",
        example: "That uniform makes the guards look absurd.",
        exampleTranslation: "Bộ đồng phục đó khiến những người lính gác trông thật lố bịch."
    },
    {
        word: "abundance",
        meaning: "sự sung túc, sự dồi dào",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈbʌndəns/",
        example: "The brochure promised beautiful walks with an abundance of wildlife.",
        exampleTranslation: "Cuốn sách nhỏ hứa hẹn những chuyến đi bộ tuyệt đẹp với sự dồi dào động vật hoang dã."
    },
    {
        word: "abuse",
        meaning: "sự lạm dụng, sự ngược đãi",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈbjuːs/",
        example: "alcohol/drug abuse",
        exampleTranslation: "lạm dụng rượu/chất gây nghiện"
    },
    {
        word: "academy",
        meaning: "học viện",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈkædəmi/",
        example: "She trained at the Royal Academy of Music.",
        exampleTranslation: "Cô ấy đã học tại Nhạc viện Hoàng gia."
    },
    {
        word: "accelerate",
        meaning: "tăng tốc, đẩy nhanh",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/əkˈseləreɪt/",
        example: "Inflation continues to accelerate.",
        exampleTranslation: "Lạm phát tiếp tục tăng tốc."
    },
    {
        word: "acceptance",
        meaning: "sự chấp nhận, sự thừa nhận",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əkˈseptəns/",
        example: "Please confirm your acceptance of this offer in writing.",
        exampleTranslation: "Vui lòng xác nhận việc bạn chấp nhận lời đề nghị này bằng văn bản."
    },
    {
        word: "accessible",
        meaning: "có thể tiếp cận, dễ dàng đạt được",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/əkˈsesəbl/",
        example: "The remote desert area is accessible only by helicopter.",
        exampleTranslation: "Khu vực sa mạc hẻo lánh này chỉ có thể đến bằng máy bay trực thăng."
    },
    {
        word: "accomplishment",
        meaning: "thành tựu, sự hoàn thành",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈkɑːmplɪʃmənt/",
        example: "It was one of the President's greatest accomplishments.",
        exampleTranslation: "Đó là một trong những thành tựu lớn nhất của Tổng thống."
    },
    {
        word: "accordance",
        meaning: "sự phù hợp, sự tuân thủ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈkɔːrdns/",
        example: "This is an example of accordance.",
        exampleTranslation: "Đây là một ví dụ về sự phù hợp."
    },
    {
        word: "accordingly",
        meaning: "theo đó, tương ứng",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/əˈkɔːrdɪŋli/",
        example: "We have to discover his plans and act accordingly.",
        exampleTranslation: "Chúng ta phải khám phá kế hoạch của ông ta và hành động theo đó."
    },
    {
        word: "accountability",
        meaning: "trách nhiệm giải trình",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˌkaʊntəˈbɪləti/",
        example: "proposals for greater police accountability",
        exampleTranslation: "các đề xuất về trách nhiệm giải trình lớn hơn của cảnh sát"
    },
    {
        word: "accountable",
        meaning: "có trách nhiệm giải trình",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/əˈkaʊntəbl/",
        example: "The state spends taxpayers’ money and should be held accountable.",
        exampleTranslation: "Nhà nước chi tiêu tiền thuế của dân và nên phải chịu trách nhiệm."
    },
    {
        word: "accumulate",
        meaning: "tích lũy, gom góp",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/əˈkjuːmjəleɪt/",
        example: "I seem to have accumulated a lot of books.",
        exampleTranslation: "Tôi dường như đã tích lũy được rất nhiều sách."
    },
    {
        word: "accumulation",
        meaning: "sự tích lũy",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˌkjuːmjəˈleɪʃn/",
        example: "the accumulation of wealth",
        exampleTranslation: "sự tích lũy của cải"
    },
    {
        word: "accusation",
        meaning: "sự buộc tội, lời buộc tội",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌækjuˈzeɪʃn/",
        example: "I don't want to make an accusation until I have some proof.",
        exampleTranslation: "Tôi không muốn buộc tội cho đến khi tôi có bằng chứng."
    },
    {
        word: "accused",
        meaning: "bị cáo",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ði əˈkjuːzd/",
        example: "The accused was found innocent.",
        exampleTranslation: "Bị cáo được tuyên trắng án."
    },
    {
        word: "acid",
        meaning: "chua (đất)",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈæsɪd/",
        example: "Rye is tolerant of poor, acid soils.",
        exampleTranslation: "Lúa mạch chịu được đất nghèo, đất chua."
    },
    {
        word: "acquisition",
        meaning: "sự thu nhận, sự tiếp thu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌækwɪˈzɪʃn/",
        example: "theories of child language acquisition",
        exampleTranslation: "các lý thuyết về việc trẻ em tiếp thu ngôn ngữ"
    },
    {
        word: "acre",
        meaning: "mẫu Anh (khoảng 4047 m2)",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈeɪkər/",
        example: "3 000 acres of parkland",
        exampleTranslation: "3.000 mẫu đất công viên"
    },
    {
        word: "activation",
        meaning: "sự kích hoạt",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌæktɪˈveɪʃn/",
        example: "The activation of several target genes results in two major effects.",
        exampleTranslation: "Việc kích hoạt một số gen đích dẫn đến hai tác dụng chính."
    },
    {
        word: "activist",
        meaning: "nhà hoạt động",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈæktɪvɪst/",
        example: "human/civil/animal rights activists",
        exampleTranslation: "những nhà hoạt động nhân quyền/dân quyền/quyền động vật"
    },
    {
        word: "acute",
        meaning: "sắc bén, nghiêm trọng, gay gắt",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/əˈkjuːt/",
        example: "There is an acute shortage of water.",
        exampleTranslation: "Có sự thiếu nước nghiêm trọng."
    },
    {
        word: "adaptation",
        meaning: "sự thích nghi",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌædæpˈteɪʃn/",
        example: "the adaptation of buildings for military purposes",
        exampleTranslation: "việc thích nghi các tòa nhà cho mục đích quân sự"
    },
    {
        word: "adhere",
        meaning: "bám vào, tuân thủ",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ədˈhɪr/",
        example: "Once in the bloodstream, the bacteria adhere to the surface of the red cells.",
        exampleTranslation: "Khi vào máu, vi khuẩn bám vào bề mặt của các tế bào hồng cầu."
    },
    {
        word: "adjacent",
        meaning: "liền kề, kế bên",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/əˈdʒeɪsnt/",
        example: "The planes landed on adjacent runways.",
        exampleTranslation: "Các máy bay hạ cánh trên các đường băng liền kề."
    },
    {
        word: "adjustment",
        meaning: "sự điều chỉnh",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈdʒʌstmənt/",
        example: "I've made a few adjustments to the design.",
        exampleTranslation: "Tôi đã thực hiện một vài điều chỉnh cho thiết kế."
    },
    {
        word: "administer",
        meaning: "quản lý, điều hành, thực thi",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ədˈmɪnɪstər/",
        example: "to administer a charity/fund/school",
        exampleTranslation: "quản lý một tổ chức từ thiện/quỹ/trường học"
    },
    {
        word: "administrative",
        meaning: "thuộc về hành chính, quản lý",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ədˈmɪnɪstreɪtɪv/",
        example: "an administrative job/assistant/error",
        exampleTranslation: "một công việc/trợ lý/lỗi hành chính"
    },
    {
        word: "administrator",
        meaning: "người quản lý, quản trị viên",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ədˈmɪnɪstreɪtər/",
        example: "Such organizational decisions are made by the hospital administrators.",
        exampleTranslation: "Những quyết định tổ chức như vậy được đưa ra bởi các quản trị viên bệnh viện."
    },
    {
        word: "admission",
        meaning: "sự cho phép vào, sự nhập viện, phí vào cửa",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ədˈmɪʃn/",
        example: "Hospital admission is not necessary in most cases.",
        exampleTranslation: "Trong hầu hết các trường hợp, không cần nhập viện."
    },
    {
        word: "adolescent",
        meaning: "thanh thiếu niên",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌædəˈlesnt/",
        example: "adolescents between the ages of 13 and 18 and the problems they face",
        exampleTranslation: "thanh thiếu niên từ 13 đến 18 tuổi và những vấn đề họ phải đối mặt"
    },
    {
        word: "adoption",
        meaning: "sự nhận nuôi",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈdɑːpʃn/",
        example: "She put the baby up for adoption.",
        exampleTranslation: "Cô đã cho em bé làm con nuôi."
    },
    {
        word: "adverse",
        meaning: "bất lợi, có hại",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈædvɜːrs/",
        example: "adverse change/circumstances/weather conditions",
        exampleTranslation: "sự thay đổi/hoàn cảnh/điều kiện thời tiết bất lợi"
    },
    {
        word: "advocate",
        meaning: "người ủng hộ, luật sư bào chữa",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈædvəkət/",
        example: "advocate for something/somebody an advocate for hospital workers",
        exampleTranslation: "người ủng hộ cho điều gì đó/ai đó một người ủng hộ cho nhân viên bệnh viện"
    },
    {
        word: "aesthetic",
        meaning: "thẩm mỹ, có tính thẩm mỹ",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/esˈθetɪk/",
        example: "the aesthetic appeal of the songs",
        exampleTranslation: "sức hấp dẫn thẩm mỹ của các bài hát"
    },
    {
        word: "affection",
        meaning: "sự yêu mến, tình cảm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈfekʃn/",
        example: "Children need lots of love and affection.",
        exampleTranslation: "Trẻ em cần rất nhiều tình yêu thương và sự trìu mến."
    },
    {
        word: "aftermath",
        meaning: "hậu quả, hệ quả",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈæftərmæθ/",
        example: "in the aftermath of something A lot of rebuilding took place in the aftermath of the war.",
        exampleTranslation: "trong hậu quả của một điều gì đó Nhiều công việc xây dựng lại đã diễn ra trong hậu quả của chiến tranh."
    },
    {
        word: "aggression",
        meaning: "sự hung hăng, gây hấn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈɡreʃn/",
        example: "The research shows that computer games may cause aggression.",
        exampleTranslation: "Nghiên cứu cho thấy trò chơi điện tử có thể gây ra sự hung hăng."
    },
    {
        word: "agricultural",
        meaning: "thuộc về nông nghiệp",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌæɡrɪˈkʌltʃərəl/",
        example: "agricultural policy/land/production/development",
        exampleTranslation: "chính sách/đất đai/sản xuất/phát triển nông nghiệp"
    },
    {
        word: "aide",
        meaning: "người giúp việc, phụ tá",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/eɪd/",
        example: "White House aides",
        exampleTranslation: "các phụ tá Nhà Trắng"
    },
    {
        word: "albeit",
        meaning: "mặc dù, dẫu cho",
        partOfSpeech: "conjunction",
        level: "C1",
        phonetic: "/ˌɔːlˈbiːɪt/",
        example: "He finally agreed, albeit reluctantly, to help us.",
        exampleTranslation: "Cuối cùng anh ấy cũng đồng ý, mặc dù miễn cưỡng, giúp chúng tôi."
    },
    {
        word: "alert",
        meaning: "cảnh giác, tỉnh táo",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/əˈlɜːrt/",
        example: "Suddenly he found himself awake and fully alert.",
        exampleTranslation: "Đột nhiên anh thấy mình đã tỉnh dậy và hoàn toàn tỉnh táo."
    },
    {
        word: "alien",
        meaning: "xa lạ, ngoại lai, ngoài hành tinh",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈeɪliən/",
        example: "an alien environment",
        exampleTranslation: "một môi trường xa lạ"
    },
    {
        word: "align",
        meaning: "thẳng hàng, sắp xếp thẳng hàng",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/əˈlaɪn/",
        example: "Make sure the shelf is aligned with the top of the cupboard.",
        exampleTranslation: "Đảm bảo kệ thẳng hàng với đỉnh của tủ."
    },
    {
        word: "alignment",
        meaning: "sự thẳng hàng, sự sắp xếp thẳng hàng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈlaɪnmənt/",
        example: "the alignment of the sun, moon and earth at a particular time",
        exampleTranslation: "sự thẳng hàng của mặt trời, mặt trăng và trái đất tại một thời điểm nhất định"
    },
    {
        word: "alike",
        meaning: "giống nhau, tương tự",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/əˈlaɪk/",
        example: "My sister and I do not look alike.",
        exampleTranslation: "Tôi và chị gái tôi trông không giống nhau."
    },
    {
        word: "allegation",
        meaning: "lời cáo buộc, sự khẳng định sai",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌæləˈɡeɪʃn/",
        example: "to investigate/deny/withdraw an allegation",
        exampleTranslation: "điều tra/từ chối/rút lại một lời cáo buộc"
    },
    {
        word: "allege",
        meaning: "cáo buộc, khẳng định (điều gì đó không đúng)",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/əˈledʒ/",
        example: "allege (that)… The prosecution alleges (that) she was driving carelessly.",
        exampleTranslation: "cáo buộc (rằng)… Bên công tố cáo buộc (rằng) cô ấy đã lái xe bất cẩn."
    },
    {
        word: "allegedly",
        meaning: "bị cáo buộc là, được cho là",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/əˈledʒɪdli/",
        example: "crimes allegedly committed during the war",
        exampleTranslation: "các tội ác bị cáo buộc là đã xảy ra trong chiến tranh"
    },
    {
        word: "alliance",
        meaning: "liên minh, khối đồng minh",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈlaɪəns/",
        example: "to form/make an alliance",
        exampleTranslation: "thành lập/tạo dựng một liên minh"
    },
    {
        word: "allocate",
        meaning: "phân bổ, phân chia",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈæləkeɪt/",
        example: "(for something) A large sum has been allocated for buying new books for the library.",
        exampleTranslation: "(cho cái gì đó) Một khoản tiền lớn đã được phân bổ để mua sách mới cho thư viện."
    },
    {
        word: "allocation",
        meaning: "sự phân bổ, khoản được phân bổ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌæləˈkeɪʃn/",
        example: "We have spent our entire allocation for the year.",
        exampleTranslation: "Chúng tôi đã chi hết khoản phân bổ của mình trong năm."
    },
    {
        word: "allowance",
        meaning: "tiền trợ cấp, khoản phụ cấp",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈlaʊəns/",
        example: "an allowance of $20 a day",
        exampleTranslation: "một khoản trợ cấp 20 đô la mỗi ngày"
    },
    {
        word: "ally",
        meaning: "đồng minh",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈælaɪ/",
        example: "our European/NATO allies",
        exampleTranslation: "các đồng minh châu Âu/NATO của chúng tôi"
    },
    {
        word: "aluminium",
        meaning: "nhôm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌæləˈmɪniəm/",
        example: "aluminium saucepans/window frames",
        exampleTranslation: "nồi nhôm/khung cửa sổ bằng nhôm"
    },
    {
        word: "amateur",
        meaning: "nghiệp dư, không chuyên",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈæmətʃər/",
        example: "an amateur photographer",
        exampleTranslation: "một nhiếp ảnh gia nghiệp dư"
    },
    {
        word: "ambassador",
        meaning: "đại sứ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/æmˈbæsədər/",
        example: "the British Ambassador to Italy/in Rome",
        exampleTranslation: "Đại sứ Anh tại Ý/ở Rome."
    },
    {
        word: "amend",
        meaning: "sửa đổi, chỉnh sửa",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/əˈmend/",
        example: "He asked to see the amended version.",
        exampleTranslation: "Ông yêu cầu được xem bản đã sửa đổi."
    },
    {
        word: "amendment",
        meaning: "sự sửa đổi, sự chỉnh sửa",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈmendmənt/",
        example: "to introduce/propose/table an amendment (= to suggest it)",
        exampleTranslation: "đưa ra/đề xuất/trình bày một sửa đổi (= đề nghị nó)."
    },
    {
        word: "amid",
        meaning: "giữa lúc, giữa vòng vây",
        partOfSpeech: "preposition",
        level: "C1",
        phonetic: "/əˈmɪd/",
        example: "He finished his speech amid tremendous applause.",
        exampleTranslation: "Ông kết thúc bài phát biểu trong tiếng vỗ tay vang dội."
    },
    {
        word: "analogy",
        meaning: "sự tương tự, phép loại suy",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈnælədʒi/",
        example: "analogy (between A and B) The teacher drew an analogy between the human heart and a pump.",
        exampleTranslation: "phép loại suy (giữa A và B) Giáo viên đã đưa ra một phép loại suy giữa tim người và một cái bơm."
    },
    {
        word: "anchor",
        meaning: "mỏ neo",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈæŋkər/",
        example: "to drop anchor",
        exampleTranslation: "thả neo."
    },
    {
        word: "angel",
        meaning: "thiên thần",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈeɪndʒl/",
        example: "a host of angels",
        exampleTranslation: "một đám thiên thần."
    },
    {
        word: "anonymous",
        meaning: "vô danh",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/əˈnɑːnɪməs/",
        example: "an anonymous donor",
        exampleTranslation: "một nhà tài trợ vô danh."
    },
    {
        word: "apparatus",
        meaning: "bộ máy, thiết bị, dụng cụ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌæpəˈrætəs/",
        example: "a piece of laboratory apparatus",
        exampleTranslation: "một bộ thiết bị phòng thí nghiệm."
    },
    {
        word: "appealing",
        meaning: "hấp dẫn, lôi cuốn",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/əˈpiːlɪŋ/",
        example: "Spending the holidays in Britain wasn't a prospect that I found particularly appealing.",
        exampleTranslation: "Kỳ nghỉ lễ ở Anh không phải là một viễn cảnh mà tôi thấy đặc biệt hấp dẫn."
    },
    {
        word: "appetite",
        meaning: "sự ngon miệng, sự thèm ăn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈæpɪtaɪt/",
        example: "He suffered from headaches and loss of appetite.",
        exampleTranslation: "Ông bị đau đầu và chán ăn."
    },
    {
        word: "applaud",
        meaning: "vỗ tay tán thưởng",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/əˈplɔːd/",
        example: "He started to applaud and the others joined in.",
        exampleTranslation: "Anh ấy bắt đầu vỗ tay và những người khác cũng làm theo."
    },
    {
        word: "applicable",
        meaning: "có thể áp dụng, phù hợp",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/əˈplɪkəbl/",
        example: "Give details of children where applicable (= if you have any).",
        exampleTranslation: "Cung cấp chi tiết về trẻ em nếu có thể áp dụng (= nếu bạn có)."
    },
    {
        word: "appoint",
        meaning: "bổ nhiệm",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/əˈpɔɪnt/",
        example: "They have appointed a new head teacher at my son's school.",
        exampleTranslation: "Họ đã bổ nhiệm một hiệu trưởng mới cho trường của con trai tôi."
    },
    {
        word: "appreciation",
        meaning: "sự đánh giá cao, sự biết ơn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˌpriːʃiˈeɪʃn/",
        example: "She shows little appreciation of good music.",
        exampleTranslation: "Cô ấy thể hiện sự biết ơn rất ít đối với âm nhạc hay."
    },
    {
        word: "arbitrary",
        meaning: "tùy tiện, ngẫu nhiên",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈɑːrbɪtreri/",
        example: "The choice of players for the team seemed completely arbitrary.",
        exampleTranslation: "Việc lựa chọn cầu thủ cho đội có vẻ hoàn toàn tùy tiện."
    },
    {
        word: "architectural",
        meaning: "thuộc về kiến trúc",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌɑːrkɪˈtektʃərəl/",
        example: "architectural features",
        exampleTranslation: "các đặc điểm kiến trúc."
    },
    {
        word: "archive",
        meaning: "kho lưu trữ, văn khố",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈɑːrkaɪv/",
        example: "the National Sound Archive",
        exampleTranslation: "Kho lưu trữ âm thanh quốc gia."
    },
    {
        word: "arena",
        meaning: "đấu trường, sân vận động",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈriːnə/",
        example: "a concert at Wembley Arena",
        exampleTranslation: "một buổi hòa nhạc tại Sân vận động Wembley."
    },
    {
        word: "arguably",
        meaning: "có lẽ, có thể cho là",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/ˈɑːrɡjuəbli/",
        example: "He is arguably the best actor of his generation.",
        exampleTranslation: "Có lẽ anh ấy là diễn viên xuất sắc nhất thế hệ của mình."
    },
    {
        word: "arm",
        meaning: "trang bị vũ khí, chuẩn bị sẵn sàng",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɑːrm/",
        example: "The country was arming against the enemy.",
        exampleTranslation: "Quốc gia đang trang bị vũ khí chống lại kẻ thù."
    },
    {
        word: "array",
        meaning: "sự sắp xếp, sự dàn dựng, một loạt",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈreɪ/",
        example: "a vast array of bottles of different shapes and sizes",
        exampleTranslation: "một loạt lớn các chai có hình dạng và kích cỡ khác nhau."
    },
    {
        word: "articulate",
        meaning: "ăn nói lưu loát, diễn đạt rõ ràng",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɑːrˈtɪkjuleɪt/",
        example: "She struggled to articulate her thoughts.",
        exampleTranslation: "Cô ấy gặp khó khăn trong việc diễn đạt suy nghĩ của mình."
    },
    {
        word: "ash",
        meaning: "tro",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/æʃ/",
        example: "cigarette ash",
        exampleTranslation: "tro thuốc lá."
    },
    {
        word: "aspiration",
        meaning: "ước vọng, khát vọng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌæspəˈreɪʃn/",
        example: "I didn't realize you had political aspirations.",
        exampleTranslation: "Tôi không nhận ra bạn có những khát vọng chính trị."
    },
    {
        word: "aspire",
        meaning: "mong muốn, khát vọng, phấn đấu",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/əˈspaɪər/",
        example: "aspire (to something) She aspired to a scientific career.",
        exampleTranslation: "mong muốn (điều gì đó) Cô ấy mong muốn có một sự nghiệp khoa học."
    },
    {
        word: "assassination",
        meaning: "vụ ám sát",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˌsæsɪˈneɪʃn/",
        example: "The president survived a number of assassination attempts.",
        exampleTranslation: "Tổng thống đã sống sót qua một số vụ ám sát."
    },
    {
        word: "assault",
        meaning: "vụ tấn công, sự xâm phạm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈsɔːlt/",
        example: "Both men were charged with assault.",
        exampleTranslation: "Cả hai người đàn ông đều bị buộc tội tấn công."
    },
    {
        word: "assemble",
        meaning: "tập hợp, lắp ráp",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/əˈsembl/",
        example: "All the students were asked to assemble in the main hall.",
        exampleTranslation: "Tất cả học sinh được yêu cầu tập trung tại hội trường chính."
    },
    {
        word: "assembly",
        meaning: "cuộc họp, hội nghị, hội đồng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈsembli/",
        example: "state/legislative/federal/local assemblies",
        exampleTranslation: "các hội đồng nhà nước/lập pháp/liên bang/địa phương."
    },
    {
        word: "assert",
        meaning: "khẳng định, quả quyết",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/əˈsɜːrt/",
        example: "assert that… She continued to assert that she was innocent.",
        exampleTranslation: "Cô ấy tiếp tục khẳng định rằng mình vô tội."
    },
    {
        word: "assertion",
        meaning: "sự khẳng định, lời quả quyết",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈsɜːrʃn/",
        example: "He was correct in his assertion that the minister had been lying.",
        exampleTranslation: "Ông ấy đã đúng khi khẳng định rằng bộ trưởng đã nói dối."
    },
    {
        word: "assurance",
        meaning: "sự đảm bảo, cam đoan",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈʃʊrəns/",
        example: "They called for assurances that the government is committed to its education policy.",
        exampleTranslation: "Họ kêu gọi đảm bảo rằng chính phủ cam kết với chính sách giáo dục của mình."
    },
    {
        word: "asylum",
        meaning: "sự tị nạn, nơi tị nạn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈsaɪləm/",
        example: "to seek/apply for/be granted asylum",
        exampleTranslation: "xin/nộp đơn/được cấp tị nạn"
    },
    {
        word: "atrocity",
        meaning: "sự tàn bạo, tội ác",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈtrɑːsəti/",
        example: "In the war, both sides committed atrocities.",
        exampleTranslation: "Trong chiến tranh, cả hai bên đều phạm tội ác."
    },
    {
        word: "attain",
        meaning: "đạt được, giành được",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/əˈteɪn/",
        example: "Most of our students attained five ‘A’ grades in their exams.",
        exampleTranslation: "Hầu hết học sinh của chúng tôi đã đạt được năm điểm 'A' trong kỳ thi."
    },
    {
        word: "attendance",
        meaning: "sự tham dự, số lượng người tham dự",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈtendəns/",
        example: "Attendance at these lectures is not compulsory.",
        exampleTranslation: "Việc tham dự các bài giảng này không bắt buộc."
    },
    {
        word: "attorney",
        meaning: "luật sư",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈtɜːrni/",
        example: "The prosecuting attorney began with a short opening statement.",
        exampleTranslation: "Luật sư bên công tố bắt đầu bằng một tuyên bố mở đầu ngắn gọn."
    },
    {
        word: "attribute",
        meaning: "thuộc tính, đặc điểm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈætrɪbjuːt/",
        example: "Patience is one of the most important attributes in a teacher.",
        exampleTranslation: "Sự kiên nhẫn là một trong những thuộc tính quan trọng nhất ở một giáo viên."
    },
    {
        word: "audit",
        meaning: "cuộc kiểm toán",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈɔːdɪt/",
        example: "an annual audit",
        exampleTranslation: "cuộc kiểm toán hàng năm"
    },
    {
        word: "authentic",
        meaning: "chính gốc, xác thực",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɔːˈθentɪk/",
        example: "I don't know if the painting is authentic.",
        exampleTranslation: "Tôi không biết bức tranh có thật không."
    },
    {
        word: "authorize",
        meaning: "cho phép, ủy quyền",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈɔːθəraɪz/",
        example: "I can authorize payments up to £5 000.",
        exampleTranslation: "Tôi có thể ủy quyền thanh toán lên tới 5.000 bảng Anh."
    },
    {
        word: "auto",
        meaning: "ô tô",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈɔːtəʊ/",
        example: "the auto industry",
        exampleTranslation: "ngành công nghiệp ô tô"
    },
    {
        word: "autonomy",
        meaning: "quyền tự trị",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɔːˈtɑːnəmi/",
        example: "a campaign in Wales for greater autonomy",
        exampleTranslation: "một chiến dịch ở Wales đòi quyền tự trị lớn hơn"
    },
    {
        word: "availability",
        meaning: "tính sẵn có, sự có sẵn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˌveɪləˈbɪləti/",
        example: "the availability of cheap flights",
        exampleTranslation: "việc có sẵn các chuyến bay giá rẻ"
    },
    {
        word: "await",
        meaning: "chờ đợi",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/əˈweɪt/",
        example: "He is in custody awaiting trial.",
        exampleTranslation: "Anh ấy đang bị giam giữ chờ xét xử."
    },
    {
        word: "backdrop",
        meaning: "phông nền, cảnh nền",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈbækdrɑːp/",
        example: "The mountains provided a dramatic backdrop for our picnic.",
        exampleTranslation: "Những ngọn núi tạo nên một phông nền ấn tượng cho buổi dã ngoại của chúng tôi."
    },
    {
        word: "backing",
        meaning: "sự ủng hộ, hỗ trợ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈbækɪŋ/",
        example: "The police gave the proposals their full backing.",
        exampleTranslation: "Cảnh sát đã đưa ra sự ủng hộ đầy đủ cho các đề xuất."
    },
    {
        word: "backup",
        meaning: "sự sao lưu, lực lượng dự phòng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈbækʌp/",
        example: "The police had backup from the army.",
        exampleTranslation: "Cảnh sát đã có lực lượng dự phòng từ quân đội."
    },
    {
        word: "bail",
        meaning: "tiền bảo lãnh",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/beɪl/",
        example: "Can anyone put up bail for you?",
        exampleTranslation: "Có ai có thể nộp tiền bảo lãnh cho bạn không?"
    },
    {
        word: "ballot",
        meaning: "phiếu bầu, cuộc bỏ phiếu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈbælət/",
        example: "The chairperson is chosen by secret ballot.",
        exampleTranslation: "Chủ tịch được bầu bằng hình thức bỏ phiếu kín."
    },
    {
        word: "banner",
        meaning: "biểu ngữ, băng rôn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈbænər/",
        example: "A huge banner over the street said ‘Welcome home’.",
        exampleTranslation: "Một biểu ngữ lớn trên đường phố viết 'Chào mừng trở về'."
    },
    {
        word: "bare",
        meaning: "trần trụi, khỏa thân, để trần",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ber/",
        example: "She likes to walk around in bare feet.",
        exampleTranslation: "Cô ấy thích đi chân trần."
    },
    {
        word: "barrel",
        meaning: "thùng (gỗ)",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈbærəl/",
        example: "a beer/wine barrel",
        exampleTranslation: "một thùng bia/rượu"
    },
    {
        word: "bass",
        meaning: "âm trầm (nhạc)",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/beɪs/",
        example: "He always plays his stereo with the bass turned right up.",
        exampleTranslation: "Anh ấy luôn bật dàn âm thanh với âm trầm được chỉnh lên rất cao."
    },
    {
        word: "bat",
        meaning: "đánh (bóng chày)",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/bæt/",
        example: "He bats very well.",
        exampleTranslation: "Anh ấy đánh bóng rất tốt."
    },
    {
        word: "battlefield",
        meaning: "chiến trường",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈbætlfiːld/",
        example: "heavy casualties on the battlefield",
        exampleTranslation: "thương vong nặng nề trên chiến trường"
    },
    {
        word: "bay",
        meaning: "vịnh",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/beɪ/",
        example: "the Bay of Bengal",
        exampleTranslation: "Vịnh Bengal"
    },
    {
        word: "beam",
        meaning: "tia, chùm sáng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/biːm/",
        example: "narrow beams of light/sunlight",
        exampleTranslation: "những tia sáng hẹp của ánh sáng/ánh nắng mặt trời"
    },
    {
        word: "beast",
        meaning: "quái vật, con thú",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/biːst/",
        example: "wild/savage/ferocious beasts",
        exampleTranslation: "những con thú hoang dã/hung tợn/dữ tợn"
    },
    {
        word: "behalf",
        meaning: "thay mặt, đại diện",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/bɪˈhæf/",
        example: "This is an example of behalf.",
        exampleTranslation: "Đây là một ví dụ về việc thay mặt."
    },
    {
        word: "beloved",
        meaning: "yêu dấu, thân yêu",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "",
        example: "in memory of our dearly beloved son, John",
        exampleTranslation: "tưởng nhớ con trai yêu dấu của chúng ta, John"
    },
    {
        word: "bench",
        meaning: "ghế dài",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/bentʃ/",
        example: "a park bench",
        exampleTranslation: "một chiếc ghế dài trong công viên"
    },
    {
        word: "benchmark",
        meaning: "tiêu chuẩn, thước đo",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈbentʃmɑːrk/",
        example: "Tests at the age of seven provide a benchmark against which the child's progress at school can be measured.",
        exampleTranslation: "Các bài kiểm tra ở tuổi bảy cung cấp một thước đo để dựa vào đó sự tiến bộ của trẻ ở trường có thể được đo lường."
    },
    {
        word: "beneath",
        meaning: "dưới, bên dưới",
        partOfSpeech: "preposition",
        level: "C1",
        phonetic: "/bɪˈniːθ/",
        example: "They found the body buried beneath a pile of leaves.",
        exampleTranslation: "Họ tìm thấy thi thể được chôn dưới một đống lá."
    },
    {
        word: "beneficiary",
        meaning: "người thụ hưởng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌbenɪˈfɪʃieri/",
        example: "Who will be the main beneficiary of the cuts in income tax?",
        exampleTranslation: "Ai sẽ là người thụ hưởng chính của việc cắt giảm thuế thu nhập?"
    },
    {
        word: "betray",
        meaning: "phản bội, phụ lòng",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/bɪˈtreɪ/",
        example: "betray somebody/something He was offered money to betray his colleagues.",
        exampleTranslation: "Anh ta đã được đề nghị tiền để phản bội đồng nghiệp của mình."
    },
    {
        word: "bind",
        meaning: "buộc, trói",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/baɪnd/",
        example: "bind somebody/something to something She was bound to a chair.",
        exampleTranslation: "Cô ấy bị trói vào ghế."
    },
    {
        word: "biography",
        meaning: "tiểu sử",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/baɪˈɑːɡrəfi/",
        example: "Boswell’s biography of Johnson",
        exampleTranslation: "tiểu sử Johnson của Boswell"
    },
    {
        word: "bishop",
        meaning: "giám mục",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈbɪʃəp/",
        example: "the Bishop of Oxford",
        exampleTranslation: "Giám mục Oxford"
    },
    {
        word: "bizarre",
        meaning: "kỳ lạ, kỳ quái",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/bɪˈzɑːr/",
        example: "a bizarre situation/incident/story",
        exampleTranslation: "một tình huống/sự cố/câu chuyện kỳ lạ"
    },
    {
        word: "blade",
        meaning: "lưỡi dao",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/bleɪd/",
        example: "The machine comes with a plastic guard over the blade to protect the operator.",
        exampleTranslation: "Máy đi kèm với một tấm chắn nhựa trên lưỡi dao để bảo vệ người vận hành."
    },
    {
        word: "blast",
        meaning: "vụ nổ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/blæst/",
        example: "a bomb blast",
        exampleTranslation: "một vụ nổ bom"
    },
    {
        word: "bleed",
        meaning: "chảy máu",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/bliːd/",
        example: "My finger's bleeding.",
        exampleTranslation: "Ngón tay tôi đang chảy máu."
    },
    {
        word: "blend",
        meaning: "hỗn hợp, pha trộn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/blend/",
        example: "a blend of tea",
        exampleTranslation: "một hỗn hợp trà"
    },
    {
        word: "bless",
        meaning: "ban phước, chúc phúc",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/bles/",
        example: "They brought the children to Jesus and he blessed them.",
        exampleTranslation: "Họ mang những đứa trẻ đến với Chúa Giê-su và Ngài ban phước cho chúng."
    },
    {
        word: "blessing",
        meaning: "sự ban phước, điều tốt lành",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈblesɪŋ/",
        example: "to pray for God’s blessing",
        exampleTranslation: "cầu xin sự ban phước của Chúa"
    },
    {
        word: "boast",
        meaning: "khoe khoang, tự hào",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/bəʊst/",
        example: "I don't want to boast, but I can actually speak six languages.",
        exampleTranslation: "Tôi không muốn khoe khoang, nhưng tôi thực sự có thể nói sáu thứ tiếng."
    },
    {
        word: "bonus",
        meaning: "tiền thưởng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈbəʊnəs/",
        example: "a £100 Christmas bonus",
        exampleTranslation: "tiền thưởng Giáng sinh 100 bảng Anh"
    },
    {
        word: "boom",
        meaning: "sự bùng nổ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/buːm/",
        example: "Living standards improved rapidly during the post-war boom.",
        exampleTranslation: "Mức sống đã cải thiện nhanh chóng trong thời kỳ bùng nổ sau chiến tranh."
    },
    {
        word: "bounce",
        meaning: "nảy lên, bật lại",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/baʊns/",
        example: "The ball bounced twice before he could reach it.",
        exampleTranslation: "Quả bóng đã nảy hai lần trước khi anh ấy có thể với tới nó."
    },
    {
        word: "boundary",
        meaning: "ranh giới, biên giới",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈbaʊndri/",
        example: "After the war the national boundaries were redrawn.",
        exampleTranslation: "Sau chiến tranh, các biên giới quốc gia đã được vẽ lại."
    },
    {
        word: "bow",
        meaning: "cái cung, cái cúi đầu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/baʊ/",
        example: "She gave a slight bow of her head in greeting.",
        exampleTranslation: "Cô ấy khẽ cúi đầu chào."
    },
    {
        word: "breach",
        meaning: "sự vi phạm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/briːtʃ/",
        example: "a breach of contract/copyright/warranty",
        exampleTranslation: "sự vi phạm hợp đồng/bản quyền/bảo hành"
    },
    {
        word: "breakdown",
        meaning: "sự hỏng hóc, sự suy sụp",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈbreɪkdaʊn/",
        example: "a breakdown on the motorway",
        exampleTranslation: "một vụ hỏng hóc trên đường cao tốc"
    },
    {
        word: "breakthrough",
        meaning: "sự đột phá",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈbreɪkθruː/",
        example: "to make/achieve a breakthrough",
        exampleTranslation: "đạt được đột phá"
    },
    {
        word: "breed",
        meaning: "giống, loài",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/briːd/",
        example: "Labradors and other large breeds of dog",
        exampleTranslation: "Labrador và các giống chó lớn khác"
    },
    {
        word: "broadband",
        meaning: "băng thông rộng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈbrɔːdbænd/",
        example: "plans to provide rural areas with fast broadband",
        exampleTranslation: "các kế hoạch cung cấp băng thông rộng tốc độ cao cho các vùng nông thôn"
    },
    {
        word: "browser",
        meaning: "trình duyệt",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈbraʊzər/",
        example: "What do you use as your default browser?",
        exampleTranslation: "Bạn sử dụng trình duyệt mặc định nào?"
    },
    {
        word: "brutal",
        meaning: "tàn bạo, dã man",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈbruːtl/",
        example: "a brutal attack/murder/rape/killing",
        exampleTranslation: "một cuộc tấn công/giết người/hiếp dâm/vụ giết người tàn bạo"
    },
    {
        word: "buck",
        meaning: "đô la",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/bʌk/",
        example: "They cost ten bucks.",
        exampleTranslation: "Chúng tốn mười đô la."
    },
    {
        word: "buddy",
        meaning: "bạn bè, đồng bọn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈbʌdi/",
        example: "an old college buddy of mine",
        exampleTranslation: "một người bạn cũ thời đại học của tôi"
    },
    {
        word: "buffer",
        meaning: "chất làm giảm chấn, bộ đệm, cái chống đỡ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈbʌfər/",
        example: "buffer against something Support from family and friends acts as a buffer against stress.",
        exampleTranslation: "Sự hỗ trợ từ gia đình và bạn bè đóng vai trò như một bộ đệm chống lại căng thẳng."
    },
    {
        word: "bulk",
        meaning: "số lượng lớn, phần lớn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/bʌlk/",
        example: "The bulk of the population lives in cities.",
        exampleTranslation: "Phần lớn dân số sống ở các thành phố."
    },
    {
        word: "burden",
        meaning: "gánh nặng, gánh",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈbɜːrdn/",
        example: "to bear/carry/ease/reduce/share the burden",
        exampleTranslation: "gánh vác/mang/giảm bớt/giảm bớt/chia sẻ gánh nặng"
    },
    {
        word: "bureaucracy",
        meaning: "bộ máy quan liêu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/bjʊˈrɑːkrəsi/",
        example: "unnecessary/excessive bureaucracy",
        exampleTranslation: "bộ máy quan liêu không cần thiết/quá mức"
    },
    {
        word: "burial",
        meaning: "sự chôn cất, đám tang",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈberiəl/",
        example: "a burial place/mound/site",
        exampleTranslation: "nơi chôn cất/mộ/khu vực chôn cất"
    },
    {
        word: "burst",
        meaning: "làm vỡ, nổ tung",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/bɜːrst/",
        example: "That balloon will burst if you blow it up any more.",
        exampleTranslation: "Quả bóng bay đó sẽ nổ nếu bạn thổi thêm."
    },
    {
        word: "cabinet",
        meaning: "buồng, nội các, tủ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkæbɪnət/",
        example: "a cabinet meeting",
        exampleTranslation: "một cuộc họp nội các"
    },
    {
        word: "calculation",
        meaning: "sự tính toán",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌkælkjuˈleɪʃn/",
        example: "Cathy did a rough calculation.",
        exampleTranslation: "Cathy đã làm một phép tính sơ bộ."
    },
    {
        word: "canvas",
        meaning: "vải bạt",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkænvəs/",
        example: "tents made from heavy canvas",
        exampleTranslation: "lều làm bằng vải bạt dày"
    },
    {
        word: "capability",
        meaning: "khả năng, năng lực",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌkeɪpəˈbɪləti/",
        example: "Age affects the range of a person's capabilities.",
        exampleTranslation: "Tuổi tác ảnh hưởng đến phạm vi năng lực của một người."
    },
    {
        word: "capitalism",
        meaning: "chủ nghĩa tư bản",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkæpɪtəlɪzəm/",
        example: "the growth of industrial capitalism in the West",
        exampleTranslation: "sự phát triển của chủ nghĩa tư bản công nghiệp ở phương Tây"
    },
    {
        word: "capitalist",
        meaning: "tư bản chủ nghĩa",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈkæpɪtəlɪst/",
        example: "a capitalist society/system/economy",
        exampleTranslation: "xã hội/hệ thống/nền kinh tế tư bản chủ nghĩa"
    },
    {
        word: "cargo",
        meaning: "hàng hóa vận chuyển, hành lý",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkɑːrɡəʊ/",
        example: "The tanker began to spill its cargo of oil.",
        exampleTranslation: "Chiếc tàu chở dầu bắt đầu làm tràn hàng hóa là dầu."
    },
    {
        word: "carriage",
        meaning: "toa xe, sự chuyên chở",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkærɪdʒ/",
        example: "a railway carriage",
        exampleTranslation: "một toa xe lửa"
    },
    {
        word: "carve",
        meaning: "chạm khắc, khắc",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/kɑːrv/",
        example: "a carved doorway",
        exampleTranslation: "cánh cửa được chạm khắc"
    },
    {
        word: "casino",
        meaning: "sòng bạc",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kəˈsiːnəʊ/",
        example: "a new hotel and casino in Las Vegas",
        exampleTranslation: "một khách sạn và sòng bạc mới ở Las Vegas"
    },
    {
        word: "casualty",
        meaning: "nạn nhân",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkæʒuəlti/",
        example: "Our primary objective is reducing road casualties.",
        exampleTranslation: "Mục tiêu chính của chúng ta là giảm thiểu số nạn nhân giao thông."
    },
    {
        word: "catalogue",
        meaning: "sách danh mục, catalog",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkætəlɔːɡ/",
        example: "a mail-order catalogue (= a book showing goods for sale to be sent to people’s homes)",
        exampleTranslation: "một cuốn catalog đặt hàng qua thư (= một cuốn sách giới thiệu hàng hóa để bán gửi cho mọi người)"
    },
    {
        word: "cater",
        meaning: "cung cấp thức ăn, phục vụ",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈkeɪtər/",
        example: "(British English) cater for somebody/something Most of our work now involves catering for weddings.",
        exampleTranslation: "Hầu hết công việc của chúng tôi bây giờ liên quan đến phục vụ tiệc cưới."
    },
    {
        word: "cattle",
        meaning: "gia súc, bò",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkætl/",
        example: "a herd of cattle",
        exampleTranslation: "một đàn gia súc"
    },
    {
        word: "caution",
        meaning: "sự cẩn thận, sự cảnh báo",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkɔːʃn/",
        example: "extreme/great caution",
        exampleTranslation: "sự cẩn thận cực độ/tuyệt vời"
    },
    {
        word: "cautious",
        meaning: "thận trọng, cẩn thận",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈkɔːʃəs/",
        example: "The government has been cautious in its response to the report.",
        exampleTranslation: "Chính phủ đã thận trọng trong phản ứng của mình đối với báo cáo."
    },
    {
        word: "cease",
        meaning: "chấm dứt, ngừng",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/siːs/",
        example: "Welfare payments cease as soon as an individual starts a job.",
        exampleTranslation: "Các khoản thanh toán phúc lợi sẽ chấm dứt ngay khi một cá nhân bắt đầu làm việc."
    },
    {
        word: "cemetery",
        meaning: "nghĩa trang",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈseməteri/",
        example: "He was buried in a private cemetery.",
        exampleTranslation: "Ông ấy được chôn cất trong một nghĩa trang tư nhân."
    },
    {
        word: "chamber",
        meaning: "buồng, phòng, hội trường",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈtʃeɪmbər/",
        example: "The members left the council chamber.",
        exampleTranslation: "Các thành viên rời khỏi hội trường hội đồng."
    },
    {
        word: "chaos",
        meaning: "sự hỗn loạn, cảnh tượng hỗn loạn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkeɪɑːs/",
        example: "economic/political/domestic chaos",
        exampleTranslation: "sự hỗn loạn kinh tế/chính trị/gia đình"
    },
    {
        word: "characterize",
        meaning: "đặc trưng hóa, mô tả",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈkærəktəraɪz/",
        example: "the rolling hills that characterize this part of England",
        exampleTranslation: "những ngọn đồi thoai thoải đặc trưng cho vùng này của nước Anh"
    },
    {
        word: "charm",
        meaning: "sự quyến rũ, nét duyên",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/tʃɑːrm/",
        example: "He was a man of great charm.",
        exampleTranslation: "Ông ấy là một người đàn ông có sức quyến rũ lớn."
    },
    {
        word: "charter",
        meaning: "hiến chương, đặc quyền, điều lệ, giấy phép",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈtʃɑːrtər/",
        example: "the European Social Charter of workers’ rights",
        exampleTranslation: "Hiến chương Xã hội Châu Âu về quyền của người lao động"
    },
    {
        word: "chronic",
        meaning: "mãn tính, kinh niên",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈkrɑːnɪk/",
        example: "chronic bronchitis/arthritis/asthma",
        exampleTranslation: "viêm phế quản/viêm khớp/hen suyễn mãn tính"
    },
    {
        word: "chunk",
        meaning: "miếng lớn, khối lớn, phần lớn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/tʃʌŋk/",
        example: "a chunk of cheese/masonry",
        exampleTranslation: "một miếng pho mát/khối đá xây"
    },
    {
        word: "circulate",
        meaning: "lưu thông, lan truyền, truyền bá",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈsɜːrkjəleɪt/",
        example: "The condition prevents the blood from circulating freely.",
        exampleTranslation: "Tình trạng này ngăn máu lưu thông tự do."
    },
    {
        word: "circulation",
        meaning: "sự lưu thông, sự lưu hành",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌsɜːrkjəˈleɪʃn/",
        example: "Regular exercise will improve blood circulation.",
        exampleTranslation: "Tập thể dục thường xuyên sẽ cải thiện lưu thông máu."
    },
    {
        word: "citizenship",
        meaning: "quyền công dân",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈsɪtɪzənʃɪp/",
        example: "They were granted full French citizenship.",
        exampleTranslation: "Họ đã được trao quyền công dân Pháp đầy đủ."
    },
    {
        word: "civic",
        meaning: "thuộc về công dân, dân sự",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈsɪvɪk/",
        example: "civic buildings/leaders",
        exampleTranslation: "các tòa nhà/lãnh đạo dân sự"
    },
    {
        word: "civilian",
        meaning: "thường dân",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/səˈvɪliən/",
        example: "He left the army and returned to civilian life.",
        exampleTranslation: "Anh ấy rời quân ngũ và trở về cuộc sống dân sự."
    },
    {
        word: "clarity",
        meaning: "sự rõ ràng, sự minh bạch",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈklærəti/",
        example: "a lack of clarity in the law",
        exampleTranslation: "thiếu sự rõ ràng trong luật pháp"
    },
    {
        word: "clash",
        meaning: "cuộc đụng độ, sự xung đột, sự va chạm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/klæʃ/",
        example: "Clashes broke out between police and demonstrators.",
        exampleTranslation: "Các cuộc đụng độ đã nổ ra giữa cảnh sát và những người biểu tình."
    },
    {
        word: "classification",
        meaning: "sự phân loại, sự phân cấp",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌklæsɪfɪˈkeɪʃn/",
        example: "a style of music that defies classification (= is like no other)",
        exampleTranslation: "một phong cách âm nhạc không thể phân loại (= giống như không có gì khác)"
    },
    {
        word: "cling",
        meaning: "bám vào, níu giữ",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/klɪŋ/",
        example: "cling to somebody/something survivors clinging to a raft",
        exampleTranslation: "bám víu vào ai đó/thứ gì đó những người sống sót bám vào một chiếc bè"
    },
    {
        word: "clinical",
        meaning: "thuộc về lâm sàng, trên thực tế",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈklɪnɪkl/",
        example: "clinical research (= done on patients, not just considering theory)",
        exampleTranslation: "nghiên cứu lâm sàng (= thực hiện trên bệnh nhân, không chỉ xem xét lý thuyết)"
    },
    {
        word: "closure",
        meaning: "sự đóng cửa, sự chấm dứt",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkləʊʒər/",
        example: "factory closures",
        exampleTranslation: "việc đóng cửa nhà máy"
    },
    {
        word: "cluster",
        meaning: "cụm, chùm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈklʌstər/",
        example: "The telescope is focused on a dense cluster of stars at the edge of the galaxy.",
        exampleTranslation: "Kính thiên văn đang tập trung vào một cụm sao dày đặc ở rìa thiên hà."
    },
    {
        word: "coalition",
        meaning: "sự liên minh, sự liên hiệp",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌkəʊəˈlɪʃn/",
        example: "The two parties have formed a coalition.",
        exampleTranslation: "Hai đảng đã thành lập một liên minh."
    },
    {
        word: "coastal",
        meaning: "thuộc về bờ biển, ven biển",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈkəʊstl/",
        example: "coastal waters/resorts/scenery",
        exampleTranslation: "vùng biển/khu nghỉ dưỡng/cảnh quan ven biển"
    },
    {
        word: "cocktail",
        meaning: "cocktail, món pha chế",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkɑːkteɪl/",
        example: "a cocktail bar/cabinet/lounge/shaker",
        exampleTranslation: "quầy bar/tủ/phòng chờ/bình lắc cocktail"
    },
    {
        word: "cognitive",
        meaning: "nhận thức",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈkɑːɡnətɪv/",
        example: "a child’s cognitive development",
        exampleTranslation: "sự phát triển nhận thức của trẻ"
    },
    {
        word: "coincide",
        meaning: "trùng hợp, đồng thời xảy ra",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˌkəʊɪnˈsaɪd/",
        example: "It's a pity our trips to New York don't coincide.",
        exampleTranslation: "Thật tiếc là các chuyến đi New York của chúng ta không trùng nhau."
    },
    {
        word: "collaborate",
        meaning: "hợp tác",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/kəˈlæbəreɪt/",
        example: "Researchers around the world are collaborating to develop a new vaccine.",
        exampleTranslation: "Các nhà nghiên cứu trên khắp thế giới đang hợp tác để phát triển một loại vắc-xin mới."
    },
    {
        word: "collaboration",
        meaning: "sự hợp tác",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kəˌlæbəˈreɪʃn/",
        example: "It was a collaboration that produced extremely useful results.",
        exampleTranslation: "Đó là một sự hợp tác đã mang lại kết quả vô cùng hữu ích."
    },
    {
        word: "collective",
        meaning: "tập thể",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/kəˈlektɪv/",
        example: "collective leadership/decision-making/responsibility",
        exampleTranslation: "lãnh đạo/ra quyết định/trách nhiệm tập thể"
    },
    {
        word: "collision",
        meaning: "sự va chạm, sự đụng xe",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kəˈlɪʒn/",
        example: "collision between A and B a collision between two trains",
        exampleTranslation: "va chạm giữa A và B một vụ va chạm giữa hai đoàn tàu"
    },
    {
        word: "colonial",
        meaning: "thuộc địa",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/kəˈləʊniəl/",
        example: "a colonial power",
        exampleTranslation: "một cường quốc thuộc địa"
    },
    {
        word: "columnist",
        meaning: "người viết chuyên mục",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkɑːləmnɪst/",
        example: "a newspaper columnist",
        exampleTranslation: "một người viết chuyên mục báo"
    },
    {
        word: "combat",
        meaning: "chiến đấu, trận chiến",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkɑːmbæt/",
        example: "in combat He was killed in combat.",
        exampleTranslation: "trong chiến đấu Anh ấy đã bị giết trong chiến đấu."
    },
    {
        word: "commence",
        meaning: "bắt đầu, khởi đầu",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/kəˈmens/",
        example: "The meeting is scheduled to commence at noon.",
        exampleTranslation: "Cuộc họp dự kiến bắt đầu vào buổi trưa."
    },
    {
        word: "commentary",
        meaning: "bình luận, tường thuật",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkɑːmənteri/",
        example: "a sports commentary",
        exampleTranslation: "một bài tường thuật thể thao"
    },
    {
        word: "commentator",
        meaning: "người bình luận, người tường thuật",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkɑːmənteɪtər/",
        example: "a television/sports commentator",
        exampleTranslation: "một bình luận viên truyền hình/thể thao"
    },
    {
        word: "commerce",
        meaning: "thương mại, buôn bán",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkɑːmɜːrs/",
        example: "Leaders of industry and commerce met at the summit in Paris.",
        exampleTranslation: "Các nhà lãnh đạo ngành công nghiệp và thương mại đã gặp nhau tại hội nghị thượng đỉnh ở Paris."
    },
    {
        word: "commissioner",
        meaning: "ủy viên, người phụ trách, người điều hành",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kəˈmɪʃənər/",
        example: "the Church Commissioners (= the group of people responsible for controlling the financial affairs of the Church of England)",
        exampleTranslation: "các Ủy viên Giáo hội (= nhóm người chịu trách nhiệm điều hành các vấn đề tài chính của Giáo hội Anh)"
    },
    {
        word: "commodity",
        meaning: "hàng hóa, sản phẩm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kəˈmɑːdəti/",
        example: "rice, flour and other basic commodities",
        exampleTranslation: "gạo, bột mì và các mặt hàng cơ bản khác"
    },
    {
        word: "communist",
        meaning: "cộng sản",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈkɑːmjənɪst/",
        example: "communist ideology",
        exampleTranslation: "hệ tư tưởng cộng sản"
    },
    {
        word: "companion",
        meaning: "bạn đồng hành, người đi cùng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kəmˈpænjən/",
        example: "travelling companions",
        exampleTranslation: "những người bạn đồng hành trong chuyến đi"
    },
    {
        word: "comparable",
        meaning: "tương đương, có thể so sánh được",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈkɑːmpərəbl/",
        example: "A comparable house in the south of the city would cost twice as much.",
        exampleTranslation: "Một căn nhà tương đương ở phía nam thành phố sẽ có giá gấp đôi."
    },
    {
        word: "compassion",
        meaning: "lòng trắc ẩn, sự cảm thông",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kəmˈpæʃn/",
        example: "to feel/show compassion",
        exampleTranslation: "cảm thấy/thể hiện sự cảm thông"
    },
    {
        word: "compel",
        meaning: "bắt buộc, cưỡng chế",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/kəmˈpel/",
        example: "The law can compel fathers to make regular payments for their children.",
        exampleTranslation: "Luật pháp có thể buộc các ông bố phải thanh toán định kỳ cho con cái của họ."
    },
    {
        word: "compelling",
        meaning: "thuyết phục, lôi cuốn",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/kəmˈpelɪŋ/",
        example: "Her latest book makes compelling reading.",
        exampleTranslation: "Cuốn sách mới nhất của cô ấy rất lôi cuốn khi đọc."
    },
    {
        word: "compensate",
        meaning: "bồi thường, đền bù",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈkɑːmpenseɪt/",
        example: "Nothing can compensate for the loss of a loved one.",
        exampleTranslation: "Không gì có thể bù đắp được cho sự mất mát của người thân yêu."
    },
    {
        word: "compensation",
        meaning: "sự bồi thường, sự đền bù",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌkɑːmpenˈseɪʃn/",
        example: "to claim/award/receive compensation",
        exampleTranslation: "yêu cầu/trao/nhận tiền bồi thường"
    },
    {
        word: "competence",
        meaning: "năng lực, khả năng, thẩm quyền",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkɑːmpɪtəns/",
        example: "to gain a high level of competence in English",
        exampleTranslation: "đạt được trình độ năng lực cao về tiếng Anh"
    },
    {
        word: "competent",
        meaning: "có năng lực, có khả năng, có thẩm quyền",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈkɑːmpɪtənt/",
        example: "He's very competent in his work.",
        exampleTranslation: "Anh ấy rất có năng lực trong công việc của mình."
    },
    {
        word: "compile",
        meaning: "biên soạn, tổng hợp",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/kəmˈpaɪl/",
        example: "We are trying to compile a list of suitable people for the job.",
        exampleTranslation: "Chúng tôi đang cố gắng biên soạn một danh sách những người phù hợp cho công việc."
    },
    {
        word: "complement",
        meaning: "bổ sung, hoàn chỉnh",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈkɑːmplɪment/",
        example: "The excellent menu is complemented by a good wine list.",
        exampleTranslation: "Thực đơn tuyệt vời được bổ sung bởi danh sách rượu vang hảo hạng."
    },
    {
        word: "complexity",
        meaning: "sự phức tạp, tính phức tạp",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kəmˈpleksəti/",
        example: "the increasing complexity of modern telecommunication systems",
        exampleTranslation: "sự phức tạp ngày càng tăng của các hệ thống viễn thông hiện đại"
    },
    {
        word: "compliance",
        meaning: "sự tuân thủ, sự chấp hành",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kəmˈplaɪəns/",
        example: "compliance (with something) procedures that must be followed to ensure full compliance with the law",
        exampleTranslation: "các thủ tục phải tuân theo để đảm bảo tuân thủ đầy đủ luật pháp"
    },
    {
        word: "complication",
        meaning: "sự phức tạp, sự rắc rối",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌkɑːmplɪˈkeɪʃn/",
        example: "The bad weather added a further complication to our journey.",
        exampleTranslation: "Thời tiết xấu đã gây thêm một rắc rối nữa cho chuyến đi của chúng tôi."
    },
    {
        word: "comply",
        meaning: "tuân thủ, chấp hành",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/kəmˈplaɪ/",
        example: "They refused to comply with the UN resolution.",
        exampleTranslation: "Họ đã từ chối tuân thủ nghị quyết của Liên Hợp Quốc."
    },
    {
        word: "composition",
        meaning: "sự cấu thành, thành phần, bản tổng hợp",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌkɑːmpəˈzɪʃn/",
        example: "the chemical composition of the soil",
        exampleTranslation: "thành phần hóa học của đất"
    },
    {
        word: "compromise",
        meaning: "sự thỏa hiệp",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkɑːmprəmaɪz/",
        example: "After lengthy talks the two sides finally reached a compromise.",
        exampleTranslation: "Sau các cuộc đàm phán kéo dài, hai bên cuối cùng đã đạt được một thỏa hiệp."
    },
    {
        word: "compute",
        meaning: "tính toán",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/kəmˈpjuːt/",
        example: "The losses were computed at £5 million.",
        exampleTranslation: "Các khoản lỗ được ước tính là 5 triệu bảng Anh."
    },
    {
        word: "conceal",
        meaning: "giấu giếm, che giấu",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/kənˈsiːl/",
        example: "conceal somebody/something The paintings were concealed beneath a thick layer of plaster.",
        exampleTranslation: "Những bức tranh đã bị giấu dưới một lớp vữa dày."
    },
    {
        word: "concede",
        meaning: "thừa nhận, nhượng bộ",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/kənˈsiːd/",
        example: "+ speech ‘Not bad,’ she conceded grudgingly.",
        exampleTranslation: "‘Không tệ,’ cô ấy miễn cưỡng thừa nhận."
    },
    {
        word: "conceive",
        meaning: "thai nghén, hình thành (ý tưởng), thụ thai",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/kənˈsiːv/",
        example: "He conceived the idea of transforming the old power station into an arts centre.",
        exampleTranslation: "Ông ấy đã hình thành ý tưởng biến nhà máy điện cũ thành một trung tâm nghệ thuật."
    },
    {
        word: "conception",
        meaning: "sự thụ thai, sự hình thành (ý tưởng), quan niệm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kənˈsepʃn/",
        example: "conception of something Marx’s conception of social justice",
        exampleTranslation: "quan niệm của Marx về công lý xã hội"
    },
    {
        word: "concession",
        meaning: "sự nhượng bộ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kənˈseʃn/",
        example: "The firm will be forced to make concessions if it wants to avoid a strike.",
        exampleTranslation: "Công ty sẽ buộc phải đưa ra nhượng bộ nếu muốn tránh đình công."
    },
    {
        word: "condemn",
        meaning: "lên án, kết tội",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/kənˈdem/",
        example: "condemn somebody/something The government issued a statement condemning the killings.",
        exampleTranslation: "Chính phủ đã đưa ra một tuyên bố lên án vụ giết người."
    },
    {
        word: "confer",
        meaning: "trao đổi, hội ý, ban cho (danh hiệu, giải thưởng)",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/kənˈfɜːr/",
        example: "He wanted to confer with his colleagues before reaching a decision.",
        exampleTranslation: "Ông ấy muốn hội ý với các đồng nghiệp trước khi đưa ra quyết định."
    },
    {
        word: "confession",
        meaning: "sự thú nhận, lời thú tội",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kənˈfeʃn/",
        example: "After hours of questioning by police, she made a full confession.",
        exampleTranslation: "Sau nhiều giờ thẩm vấn của cảnh sát, cô ấy đã đưa ra một lời thú tội đầy đủ."
    },
    {
        word: "configuration",
        meaning: "cấu hình, bố cục, thiết lập",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kənˌfɪɡjəˈreɪʃn/",
        example: "configuration of something The design is based on four configurations of squares.",
        exampleTranslation: "Thiết kế dựa trên bốn cấu hình của hình vuông."
    },
    {
        word: "confine",
        meaning: "giới hạn, hạn chế, giam giữ",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/kənˈfaɪn/",
        example: "be confined to (doing) something The work will not be confined to the Glasgow area.",
        exampleTranslation: "Công việc sẽ không chỉ giới hạn ở khu vực Glasgow."
    },
    {
        word: "confirmation",
        meaning: "sự xác nhận, sự phê chuẩn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌkɑːnfərˈmeɪʃn/",
        example: "I'm still waiting for confirmation of the test results.",
        exampleTranslation: "Tôi vẫn đang chờ xác nhận kết quả xét nghiệm."
    },
    {
        word: "confront",
        meaning: "đối mặt, chạm trán",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/kənˈfrʌnt/",
        example: "What is to be done about the economic problems confronting the country?",
        exampleTranslation: "Phải làm gì về các vấn đề kinh tế đang đối mặt với đất nước?"
    },
    {
        word: "confrontation",
        meaning: "cuộc đối đầu, sự chạm trán",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌkɑːnfrənˈteɪʃn/",
        example: "confrontation (with somebody) She wanted to avoid another confrontation with her father.",
        exampleTranslation: "Cô ấy muốn tránh một cuộc đối đầu khác với cha mình."
    },
    {
        word: "congratulate",
        meaning: "chúc mừng",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/kənˈɡrætʃəleɪt/",
        example: "I congratulated them all on their results.",
        exampleTranslation: "Tôi đã chúc mừng tất cả họ về kết quả của họ."
    },
    {
        word: "congregation",
        meaning: "đoàn, giáo dân",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌkɑːŋɡrɪˈɡeɪʃn/",
        example: "The congregation stood to sing the hymn.",
        exampleTranslation: "Giáo đoàn đứng lên hát bài thánh ca."
    },
    {
        word: "congressional",
        meaning: "thuộc về quốc hội, nghị viện",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/kənˈɡreʃənl/",
        example: "a congressional committee/bill",
        exampleTranslation: "một ủy ban/dự luật của quốc hội"
    },
    {
        word: "conquer",
        meaning: "chinh phục, khuất phục",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈkɑːŋkər/",
        example: "The Normans conquered England in 1066.",
        exampleTranslation: "Người Norman đã chinh phục nước Anh vào năm 1066."
    },
    {
        word: "conscience",
        meaning: "lương tâm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkɑːnʃəns/",
        example: "to have a clear/guilty conscience (= to feel that you have done right/wrong)",
        exampleTranslation: "có lương tâm trong sáng/có tội"
    },
    {
        word: "consciousness",
        meaning: "ý thức, sự nhận thức",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkɑːnʃəsnəs/",
        example: "I can't remember any more—I must have lost consciousness.",
        exampleTranslation: "Tôi không nhớ gì nữa - tôi chắc hẳn đã bất tỉnh."
    },
    {
        word: "consecutive",
        meaning: "liên tiếp, liên tục",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/kənˈsekjətɪv/",
        example: "She was absent for nine consecutive days.",
        exampleTranslation: "Cô ấy vắng mặt chín ngày liên tiếp."
    },
    {
        word: "consensus",
        meaning: "sự đồng thuận, nhất trí",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kənˈsensəs/",
        example: "consensus (about/on something) She is skilled at achieving consensus on sensitive issues.",
        exampleTranslation: "Cô ấy giỏi đạt được sự đồng thuận về các vấn đề nhạy cảm."
    },
    {
        word: "consent",
        meaning: "sự đồng ý, chấp thuận",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kənˈsent/",
        example: "The written consent of a parent is required.",
        exampleTranslation: "Cần có sự đồng ý bằng văn bản của phụ huynh."
    },
    {
        word: "conserve",
        meaning: "bảo tồn, giữ gìn",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/kənˈsɜːrv/",
        example: "new laws to conserve wildlife in the area",
        exampleTranslation: "các luật mới để bảo tồn động vật hoang dã trong khu vực"
    },
    {
        word: "consistency",
        meaning: "sự nhất quán, tính kiên định",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kənˈsɪstənsi/",
        example: "She has played with great consistency all season.",
        exampleTranslation: "Cô ấy đã chơi với sự nhất quán cao trong suốt mùa giải."
    },
    {
        word: "consolidate",
        meaning: "củng cố, hợp nhất",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/kənˈsɑːlɪdeɪt/",
        example: "With this new movie he has consolidated his position as the country's leading director.",
        exampleTranslation: "Với bộ phim mới này, anh ấy đã củng cố vị trí của mình như một đạo diễn hàng đầu của đất nước."
    },
    {
        word: "constituency",
        meaning: "khu vực bầu cử, cử tri đoàn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kənˈstɪtʃuənsi/",
        example: "Unemployment is high in her constituency.",
        exampleTranslation: "Tỷ lệ thất nghiệp cao trong khu vực bầu cử của bà."
    },
    {
        word: "constitute",
        meaning: "cấu thành, tạo nên",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈkɑːnstɪtuːt/",
        example: "Does such an activity constitute a criminal offence?",
        exampleTranslation: "Liệu hành vi như vậy có cấu thành một hành vi phạm tội không?"
    },
    {
        word: "constitution",
        meaning: "hiến pháp, thành lập",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌkɑːnstɪˈtuːʃn/",
        example: "your right to vote under the constitution",
        exampleTranslation: "quyền bỏ phiếu của bạn theo hiến pháp"
    },
    {
        word: "constitutional",
        meaning: "theo hiến pháp, hợp hiến",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌkɑːnstɪˈtuːʃənl/",
        example: "This is an example of constitutional.",
        exampleTranslation: "Đây là một ví dụ về hợp hiến."
    },
    {
        word: "constraint",
        meaning: "sự ràng buộc, hạn chế",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kənˈstreɪnt/",
        example: "constraints of time/money/space",
        exampleTranslation: "những ràng buộc về thời gian/tiền bạc/không gian"
    },
    {
        word: "consultation",
        meaning: "sự tham vấn, tư vấn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌkɑːnslˈteɪʃn/",
        example: "a consultation document/paper/period/process",
        exampleTranslation: "một tài liệu/bài báo/giai đoạn/quy trình tham vấn"
    },
    {
        word: "contemplate",
        meaning: "chiêm ngưỡng, suy ngẫm",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈkɑːntəmpleɪt/",
        example: "You're too young to be contemplating retirement.",
        exampleTranslation: "Bạn còn quá trẻ để suy ngẫm về việc nghỉ hưu."
    },
    {
        word: "contempt",
        meaning: "sự khinh miệt, coi thường",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kənˈtempt/",
        example: "with contempt She looked at him with contempt.",
        exampleTranslation: "Cô ấy nhìn anh ta với sự khinh miệt."
    },
    {
        word: "contend",
        meaning: "tranh luận, cho rằng",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/kənˈtend/",
        example: "I would contend that the minister's thinking is flawed on this point.",
        exampleTranslation: "Tôi sẽ cho rằng suy nghĩ của bộ trưởng có sai sót về điểm này."
    },
    {
        word: "contender",
        meaning: "đối thủ, người cạnh tranh",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kənˈtendər/",
        example: "contender (for something) a contender for a gold medal in the Olympics",
        exampleTranslation: "một đối thủ giành huy chương vàng Olympic"
    },
    {
        word: "content",
        meaning: "hài lòng, mãn nguyện",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/kənˈtent/",
        example: "He seemed more content, less bitter.",
        exampleTranslation: "Anh ấy trông có vẻ mãn nguyện hơn, bớt cay đắng."
    },
    {
        word: "contention",
        meaning: "sự tranh cãi, bất đồng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kənˈtenʃn/",
        example: "One area of contention is the availability of nursery care.",
        exampleTranslation: "Một lĩnh vực tranh cãi là sự sẵn có của dịch vụ chăm sóc trẻ mới sinh."
    },
    {
        word: "continually",
        meaning: "liên tục, không ngừng",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/kənˈtɪnjuəli/",
        example: "They argue continually about money.",
        exampleTranslation: "Họ liên tục cãi nhau về tiền bạc."
    },
    {
        word: "contractor",
        meaning: "nhà thầu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkɑːntræktər/",
        example: "a building/roofing/electrical contractor",
        exampleTranslation: "một nhà thầu xây dựng/mái nhà/điện"
    },
    {
        word: "contradiction",
        meaning: "sự mâu thuẫn, nghịch lý",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌkɑːntrəˈdɪkʃn/",
        example: "contradiction (between A and B) There is a contradiction between the two sets of figures.",
        exampleTranslation: "mâu thuẫn (giữa A và B) Có sự mâu thuẫn giữa hai bộ số liệu."
    },
    {
        word: "contrary",
        meaning: "ngược lại",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈkɑːntreri/",
        example: "Contrary to popular belief, many cats dislike milk.",
        exampleTranslation: "Trái ngược với niềm tin phổ biến, nhiều mèo không thích sữa."
    },
    {
        word: "contributor",
        meaning: "người đóng góp",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kənˈtrɪbjətər/",
        example: "a regular contributor to this magazine",
        exampleTranslation: "một người đóng góp thường xuyên cho tạp chí này"
    },
    {
        word: "conversion",
        meaning: "sự chuyển đổi",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kənˈvɜːrʒn/",
        example: "Their main business is the conversion of farm buildings into family homes.",
        exampleTranslation: "Hoạt động kinh doanh chính của họ là chuyển đổi các tòa nhà nông trại thành nhà ở gia đình."
    },
    {
        word: "convict",
        meaning: "kết án, tuyên bố có tội",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/kənˈvɪkt/",
        example: "be convicted (of something) He was convicted of fraud.",
        exampleTranslation: "bị kết án (vì điều gì) Anh ta bị kết án gian lận."
    },
    {
        word: "conviction",
        meaning: "sự kết án, niềm tin",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kənˈvɪkʃn/",
        example: "He plans to appeal against his conviction.",
        exampleTranslation: "Ông ấy dự định kháng cáo chống lại bản án của mình."
    },
    {
        word: "cooperate",
        meaning: "hợp tác",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/kəʊˈɑːpəreɪt/",
        example: "The two groups agreed to cooperate with each other.",
        exampleTranslation: "Hai nhóm đã đồng ý hợp tác với nhau."
    },
    {
        word: "cooperative",
        meaning: "hợp tác, tương trợ",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/kəʊˈɑːpərətɪv/",
        example: "Cooperative activity is essential to effective community work.",
        exampleTranslation: "Hoạt động hợp tác là cần thiết cho công việc cộng đồng hiệu quả."
    },
    {
        word: "coordinate",
        meaning: "phối hợp",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/kəʊˈɔːrdɪneɪt/",
        example: "They appointed a new manager to coordinate the work of the team.",
        exampleTranslation: "Họ đã bổ nhiệm một quản lý mới để phối hợp công việc của nhóm."
    },
    {
        word: "coordination",
        meaning: "sự phối hợp",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kəʊˌɔːrdɪˈneɪʃn/",
        example: "The aim was to improve the coordination of services.",
        exampleTranslation: "Mục tiêu là cải thiện sự phối hợp của các dịch vụ."
    },
    {
        word: "coordinator",
        meaning: "người điều phối",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kəʊˈɔːrdɪneɪtər/",
        example: "The campaign needs an effective coordinator.",
        exampleTranslation: "Chiến dịch cần một người điều phối hiệu quả."
    },
    {
        word: "cop",
        meaning: "cảnh sát",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kɑːp/",
        example: "Somebody call the cops!",
        exampleTranslation: "Ai đó gọi cảnh sát đi!"
    },
    {
        word: "copper",
        meaning: "đồng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkɑːpər/",
        example: "a copper mine",
        exampleTranslation: "một mỏ đồng"
    },
    {
        word: "copyright",
        meaning: "bản quyền",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkɑːpiraɪt/",
        example: "Copyright expires seventy years after the death of the author.",
        exampleTranslation: "Bản quyền hết hạn bảy mươi năm sau khi tác giả qua đời."
    },
    {
        word: "correction",
        meaning: "sự sửa lỗi",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kəˈrekʃn/",
        example: "I've made a few small corrections to your report.",
        exampleTranslation: "Tôi đã thực hiện một vài chỉnh sửa nhỏ cho báo cáo của bạn."
    },
    {
        word: "correlate",
        meaning: "có tương quan, liên quan",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈkɔːrəleɪt/",
        example: "The figures do not seem to correlate.",
        exampleTranslation: "Các số liệu dường như không tương quan."
    },
    {
        word: "correlation",
        meaning: "sự tương quan",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌkɔːrəˈleɪʃn/",
        example: "correlation between A and B There is a direct correlation between exposure to sun and skin cancer.",
        exampleTranslation: "tương quan giữa A và B Có một mối tương quan trực tiếp giữa việc tiếp xúc với ánh nắng mặt trời và ung thư da."
    },
    {
        word: "correspond",
        meaning: "tương ứng, khớp với",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˌkɔːrəˈspɑːnd/",
        example: "Your account and hers do not correspond.",
        exampleTranslation: "Tài khoản của bạn và của cô ấy không khớp."
    },
    {
        word: "correspondence",
        meaning: "thư từ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌkɔːrəˈspɑːndəns/",
        example: "personal/private correspondence",
        exampleTranslation: "thư từ cá nhân/riêng tư"
    },
    {
        word: "correspondent",
        meaning: "phóng viên, người đưa thư",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌkɔːrəˈspɑːndənt/",
        example: "She's the BBC's political correspondent.",
        exampleTranslation: "Cô ấy là phóng viên chính trị của BBC."
    },
    {
        word: "corresponding",
        meaning: "tương ứng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌkɔːrəˈspɑːndɪŋ/",
        example: "A change in the money supply brings a corresponding change in expenditure.",
        exampleTranslation: "Sự thay đổi trong cung tiền mang lại sự thay đổi tương ứng trong chi tiêu."
    },
    {
        word: "corrupt",
        meaning: "tham nhũng, đồi bại",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/kəˈrʌpt/",
        example: "It was seen as the only way to overthrow a corrupt regime.",
        exampleTranslation: "Nó được coi là cách duy nhất để lật đổ một chế độ tham nhũng."
    },
    {
        word: "corruption",
        meaning: "sự tham nhũng, sự đồi bại",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kəˈrʌpʃn/",
        example: "allegations of bribery and corruption",
        exampleTranslation: "các cáo buộc hối lộ và tham nhũng"
    },
    {
        word: "costly",
        meaning: "tốn kém",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈkɔːstli/",
        example: "Buying new furniture may prove too costly.",
        exampleTranslation: "Mua đồ nội thất mới có thể tốn kém."
    },
    {
        word: "councillor",
        meaning: "nghị sĩ hội đồng thành phố",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkaʊnsələr/",
        example: "Councillor Ann Jones",
        exampleTranslation: "Nghị sĩ Ann Jones"
    },
    {
        word: "counselling",
        meaning: "sự tư vấn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkaʊnsəlɪŋ/",
        example: "The couple decided to go for relationship counselling.",
        exampleTranslation: "Cặp đôi quyết định đi tư vấn mối quan hệ."
    },
    {
        word: "counsellor",
        meaning: "người tư vấn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkaʊnsələr/",
        example: "I went to see a debt counsellor and she agreed to come to the bank with me.",
        exampleTranslation: "Tôi đã đến gặp một cố vấn nợ và cô ấy đồng ý đến ngân hàng cùng tôi."
    },
    {
        word: "counter",
        meaning: "phản bác, chống lại",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈkaʊntər/",
        example: "counter somebody/something Such arguments are not easily countered.",
        exampleTranslation: "Những lập luận như vậy không dễ dàng bị phản bác."
    },
    {
        word: "counterpart",
        meaning: "người cùng cấp, đối tác",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkaʊntərpɑːrt/",
        example: "The Foreign Minister held talks with his Chinese counterpart.",
        exampleTranslation: "Bộ trưởng Ngoại giao đã có cuộc hội đàm với người đồng cấp Trung Quốc."
    },
    {
        word: "countless",
        meaning: "vô số, không đếm xuể",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈkaʊntləs/",
        example: "I've warned her countless times.",
        exampleTranslation: "Tôi đã cảnh báo cô ấy vô số lần rồi."
    },
    {
        word: "coup",
        meaning: "cuộc đảo chính",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kuː/",
        example: "He seized power in a military coup in 2008.",
        exampleTranslation: "Ông ta đã nắm quyền trong một cuộc đảo chính quân sự vào năm 2008."
    },
    {
        word: "courtesy",
        meaning: "sự lịch sự, phép lịch sự, nhã nhặn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkɜːrtəsi/",
        example: "I was treated with the utmost courtesy by the staff.",
        exampleTranslation: "Tôi đã được nhân viên đối xử cực kỳ lịch sự."
    },
    {
        word: "craft",
        meaning: "chế tạo, làm ra",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/kræft/",
        example: "be crafted (from something) All the furniture is crafted from natural materials.",
        exampleTranslation: "Tất cả đồ nội thất đều được chế tạo từ vật liệu tự nhiên."
    },
    {
        word: "crawl",
        meaning: "bò",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/krɔːl/",
        example: "Our baby is just starting to crawl.",
        exampleTranslation: "Em bé nhà chúng tôi vừa mới bắt đầu tập bò."
    },
    {
        word: "creator",
        meaning: "người sáng tạo, tác giả",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kriˈeɪtər/",
        example: "Walt Disney, the creator of Mickey Mouse",
        exampleTranslation: "Walt Disney, người sáng tạo ra chuột Mickey"
    },
    {
        word: "credibility",
        meaning: "sự tín nhiệm, uy tín",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌkredəˈbɪləti/",
        example: "to gain/lack/lose credibility",
        exampleTranslation: "để có được/thiếu/mất uy tín"
    },
    {
        word: "credible",
        meaning: "đáng tin, có thể tin được",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈkredəbl/",
        example: "a credible explanation/witness",
        exampleTranslation: "một lời giải thích/nhân chứng đáng tin cậy"
    },
    {
        word: "creep",
        meaning: "rình rập, lén lút di chuyển",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/kriːp/",
        example: "I crept up the stairs, trying not to wake my parents.",
        exampleTranslation: "Tôi đã lén lút lên cầu thang, cố gắng không đánh thức bố mẹ dậy."
    },
    {
        word: "critique",
        meaning: "bài phê bình, sự phê bình",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/krɪˈtiːk/",
        example: "She wrote a feminist critique of Freud's theories.",
        exampleTranslation: "Cô ấy đã viết một bài phê bình nữ quyền về các lý thuyết của Freud."
    },
    {
        word: "crown",
        meaning: "vương miện",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kraʊn/",
        example: "The crown was placed upon the new monarch's head.",
        exampleTranslation: "Vương miện được đặt lên đầu quân chủ mới."
    },
    {
        word: "crude",
        meaning: "thô, sơ sài, thiếu tinh tế",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/kruːd/",
        example: "crude oil/metal",
        exampleTranslation: "dầu thô/kim loại thô"
    },
    {
        word: "crush",
        meaning: "làm cho nhăn nhúm, làm cho vỡ vụn, nghiền nát",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/krʌʃ/",
        example: "The car was completely crushed under the truck.",
        exampleTranslation: "Chiếc xe đã bị xe tải nghiền nát hoàn toàn."
    },
    {
        word: "crystal",
        meaning: "pha lê, tinh thể",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkrɪstl/",
        example: "ice/salt crystals",
        exampleTranslation: "pha lê băng/tinh thể muối"
    },
    {
        word: "cult",
        meaning: "sùng bái, cuồng tín (adj)",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/kʌlt/",
        example: "a cult movie/book",
        exampleTranslation: "một bộ phim/cuốn sách được yêu thích cuồng nhiệt"
    },
    {
        word: "cultivate",
        meaning: "canh tác, trồng trọt, trau dồi",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈkʌltɪveɪt/",
        example: "The land around here has never been cultivated.",
        exampleTranslation: "Vùng đất quanh đây chưa bao giờ được canh tác."
    },
    {
        word: "curiosity",
        meaning: "sự tò mò",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌkjʊriˈɑːsəti/",
        example: "Children show curiosity about everything.",
        exampleTranslation: "Trẻ em thể hiện sự tò mò về mọi thứ."
    },
    {
        word: "custody",
        meaning: "quyền nuôi con, sự tạm giam",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkʌstədi/",
        example: "Who will have custody of the children?",
        exampleTranslation: "Ai sẽ được quyền nuôi con?"
    },
    {
        word: "cutting",
        meaning: "bài báo cắt ra, mảnh vụn (giấy)",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkʌtɪŋ/",
        example: "newspaper/press cuttings",
        exampleTranslation: "các bài báo cắt ra/trên báo chí"
    },
    {
        word: "cynical",
        meaning: "hoài nghi, hay chỉ trích",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈsɪnɪkl/",
        example: "a cynical view/smile",
        exampleTranslation: "một cái nhìn/nụ cười hoài nghi"
    },
    {
        word: "dam",
        meaning: "đập (nước)",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/dæm/",
        example: "the Narmada dam in India",
        exampleTranslation: "đập Narmada ở Ấn Độ"
    },
    {
        word: "damaging",
        meaning: "gây hại, hủy hoại",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈdæmɪdʒɪŋ/",
        example: "damaging consequences/effects",
        exampleTranslation: "những hậu quả/tác động tai hại"
    },
    {
        word: "dawn",
        meaning: "bình minh, rạng đông",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/dɔːn/",
        example: "at dawn They start work at dawn.",
        exampleTranslation: "vào lúc bình minh Họ bắt đầu làm việc lúc bình minh."
    },
    {
        word: "debris",
        meaning: "mảnh vụn, đống đổ nát",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/dəˈbriː/",
        example: "Emergency teams are still clearing the debris from the plane crash.",
        exampleTranslation: "Các đội khẩn cấp vẫn đang dọn dẹp mảnh vụn từ vụ tai nạn máy bay."
    },
    {
        word: "debut",
        meaning: "sự ra mắt, màn đầu tiên",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/deɪˈbjuː/",
        example: "He will make his debut for the first team this week.",
        exampleTranslation: "Anh ấy sẽ có màn ra mắt đội một vào tuần này."
    },
    {
        word: "decision-making",
        meaning: "việc ra quyết định",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/dɪˈsɪʒn meɪkɪŋ/",
        example: "responsibility for decision-making",
        exampleTranslation: "trách nhiệm ra quyết định"
    },
    {
        word: "decisive",
        meaning: "quyết đoán, dứt khoát",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/dɪˈsaɪsɪv/",
        example: "a decisive factor/victory/battle",
        exampleTranslation: "một yếu tố/chiến thắng/trận chiến quyết định"
    },
    {
        word: "declaration",
        meaning: "tuyên bố, công bố",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌdekləˈreɪʃn/",
        example: "to issue/sign a declaration",
        exampleTranslation: "ban hành/ký một tuyên bố"
    },
    {
        word: "dedicated",
        meaning: "tận tâm, cống hiến",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈdedɪkeɪtɪd/",
        example: "a dedicated teacher",
        exampleTranslation: "một giáo viên tận tâm"
    },
    {
        word: "dedication",
        meaning: "sự cống hiến, sự tận tâm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌdedɪˈkeɪʃn/",
        example: "hard work and dedication",
        exampleTranslation: "làm việc chăm chỉ và cống hiến"
    },
    {
        word: "deed",
        meaning: "hành động, việc làm, nghĩa cử",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/diːd/",
        example: "It's a stirring tale of heroic deeds.",
        exampleTranslation: "Đó là một câu chuyện cảm động về những nghĩa cử anh hùng."
    },
    {
        word: "deem",
        meaning: "coi là, cho là, đánh giá",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/diːm/",
        example: "deem somebody/something + noun The evening was deemed a great success.",
        exampleTranslation: "Buổi tối được coi là một thành công lớn."
    },
    {
        word: "default",
        meaning: "mặc định, sự bỏ qua, không trả được nợ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈdiːfɔːlt/",
        example: "The default is fifty lines.",
        exampleTranslation: "Mặc định là năm mươi dòng."
    },
    {
        word: "defect",
        meaning: "khuyết tật, lỗi, sai sót",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈdiːfekt/",
        example: "a defect in the glass",
        exampleTranslation: "một khuyết tật trong kính."
    },
    {
        word: "defensive",
        meaning: "phòng thủ, phòng vệ",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/dɪˈfensɪv/",
        example: "As a defensive measure he built a series of coastal forts and watchtowers.",
        exampleTranslation: "Như một biện pháp phòng thủ, ông đã xây dựng một loạt các pháo đài ven biển và tháp canh."
    },
    {
        word: "deficiency",
        meaning: "sự thiếu hụt, sự thiếu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/dɪˈfɪʃnsi/",
        example: "deficiency (in something) Vitamin deficiency in the diet can cause illness.",
        exampleTranslation: "Sự thiếu vitamin trong chế độ ăn có thể gây bệnh."
    },
    {
        word: "deficit",
        meaning: "thâm hụt, thiếu hụt",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈdefɪsɪt/",
        example: "a budget/trade deficit",
        exampleTranslation: "thâm hụt ngân sách/thương mại."
    },
    {
        word: "defy",
        meaning: "thách thức, bất chấp, coi thường",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/dɪˈfaɪ/",
        example: "I wouldn't have dared to defy my teachers.",
        exampleTranslation: "Tôi sẽ không dám bất tuân thầy cô giáo của mình."
    },
    {
        word: "delegate",
        meaning: "đại biểu, người đại diện",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈdelɪɡət/",
        example: "Congress delegates rejected the proposals.",
        exampleTranslation: "Các đại biểu Quốc hội đã bác bỏ các đề xuất."
    },
    {
        word: "delegation",
        meaning: "phái đoàn, đoàn đại biểu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌdelɪˈɡeɪʃn/",
        example: "the Dutch delegation to the United Nations",
        exampleTranslation: "phái đoàn Hà Lan tại Liên Hợp Quốc."
    },
    {
        word: "delicate",
        meaning: "tinh tế, mong manh, dễ vỡ",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈdelɪkət/",
        example: "delicate china teacups",
        exampleTranslation: "những tách trà sứ mỏng manh."
    },
    {
        word: "demon",
        meaning: "quỷ, ma quỷ, ác quỷ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈdiːmən/",
        example: "The people believed the girl was possessed by demons.",
        exampleTranslation: "Mọi người tin rằng cô gái bị quỷ ám."
    },
    {
        word: "denial",
        meaning: "sự phủ nhận, lời từ chối",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/dɪˈnaɪəl/",
        example: "denial (of something) the prisoner’s repeated denials of the charges against him",
        exampleTranslation: "những lời phủ nhận liên tục của tù nhân về các cáo buộc chống lại anh ta."
    },
    {
        word: "denounce",
        meaning: "tố cáo, chỉ trích, lên án",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/dɪˈnaʊns/",
        example: "denounce somebody/something She publicly denounced the government's handling of the crisis.",
        exampleTranslation: "Cô ấy công khai lên án cách chính phủ xử lý cuộc khủng hoảng."
    },
    {
        word: "dense",
        meaning: "dày đặc, rậm rạp, đông đúc",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/dens/",
        example: "a dense crowd/forest",
        exampleTranslation: "một đám đông/khu rừng dày đặc."
    },
    {
        word: "density",
        meaning: "mật độ, sự dày đặc",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈdensəti/",
        example: "The population density in this city is very high.",
        exampleTranslation: "Mật độ dân số ở thành phố này rất cao."
    },
    {
        word: "dependence",
        meaning: "sự phụ thuộc, sự lệ thuộc",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/dɪˈpendəns/",
        example: "Our relationship was based on mutual dependence.",
        exampleTranslation: "Mối quan hệ của chúng tôi dựa trên sự phụ thuộc lẫn nhau."
    },
    {
        word: "depict",
        meaning: "miêu tả, mô tả, vẽ",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/dɪˈpɪkt/",
        example: "depict somebody/something (as somebody/something) a painting depicting the Virgin and Child",
        exampleTranslation: "một bức tranh miêu tả Đức Trinh Nữ và Chúa Hài Đồng."
    },
    {
        word: "deploy",
        meaning: "triển khai, bố trí",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/dɪˈplɔɪ/",
        example: "2 000 troops were deployed in the area.",
        exampleTranslation: "2.000 quân đã được triển khai trong khu vực."
    },
    {
        word: "deployment",
        meaning: "sự triển khai, sự bố trí",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/dɪˈplɔɪmənt/",
        example: "the deployment of peacekeeping forces",
        exampleTranslation: "việc triển khai lực lượng gìn giữ hòa bình."
    },
    {
        word: "deposit",
        meaning: "gửi (tiền), đặt cọc",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/dɪˈpɑːzɪt/",
        example: "Millions were deposited in Swiss bank accounts.",
        exampleTranslation: "Hàng triệu đã được gửi vào các tài khoản ngân hàng Thụy Sĩ."
    },
    {
        word: "deprive",
        meaning: "tước đoạt, lấy đi, làm mất",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/dɪˈpraɪv/",
        example: "This is an example of deprive.",
        exampleTranslation: "Đây là một ví dụ về sự tước đoạt."
    },
    {
        word: "deputy",
        meaning: "phó, người đại diện, cấp phó",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈdepjuti/",
        example: "I'm acting as deputy till the manager returns.",
        exampleTranslation: "Tôi đang giữ chức phó cho đến khi quản lý trở lại."
    },
    {
        word: "descend",
        meaning: "hạ xuống, đi xuống",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/dɪˈsend/",
        example: "The plane began to descend.",
        exampleTranslation: "Máy bay bắt đầu hạ xuống."
    },
    {
        word: "descent",
        meaning: "sự hạ xuống, sự đi xuống",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/dɪˈsent/",
        example: "The plane began its descent to Heathrow.",
        exampleTranslation: "Máy bay bắt đầu hạ cánh xuống Heathrow."
    },
    {
        word: "designate",
        meaning: "chỉ định, bổ nhiệm, đặt tên",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈdezɪɡneɪt/",
        example: "be designated (as) something This area has been designated (as) a National Park.",
        exampleTranslation: "Khu vực này đã được chỉ định là một Công viên Quốc gia."
    },
    {
        word: "desirable",
        meaning: "đáng mong muốn, hấp dẫn",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/dɪˈzaɪərəbl/",
        example: "She chatted for a few minutes about the qualities she considered desirable in a secretary.",
        exampleTranslation: "Cô ấy đã trò chuyện vài phút về những phẩm chất mà cô ấy coi là đáng mong muốn ở một thư ký."
    },
    {
        word: "desktop",
        meaning: "màn hình nền, máy tính để bàn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈdesktɑːp/",
        example: "desktop icons",
        exampleTranslation: "các biểu tượng trên màn hình nền."
    },
    {
        word: "destructive",
        meaning: "có tính phá hoại, tàn phá",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/dɪˈstrʌktɪv/",
        example: "The war demonstrated the destructive power of modern weapons.",
        exampleTranslation: "Cuộc chiến tranh đã chứng minh sức mạnh hủy diệt của vũ khí hiện đại."
    },
    {
        word: "detain",
        meaning: "giam giữ, bắt giữ",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/dɪˈteɪn/",
        example: "One man has been detained for questioning.",
        exampleTranslation: "Một người đàn ông đã bị giam giữ để thẩm vấn."
    },
    {
        word: "detection",
        meaning: "sự phát hiện, sự dò tìm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/dɪˈtekʃn/",
        example: "crime prevention and detection",
        exampleTranslation: "phòng ngừa và phát hiện tội phạm"
    },
    {
        word: "detention",
        meaning: "sự giam giữ, sự tạm giữ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/dɪˈtenʃn/",
        example: "They were sentenced to 12 months' detention in a young offender institution.",
        exampleTranslation: "Họ bị kết án 12 tháng giam giữ tại một cơ sở dành cho tội phạm vị thành niên."
    },
    {
        word: "deteriorate",
        meaning: "xấu đi, xuống cấp, suy giảm",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/dɪˈtɪriəreɪt/",
        example: "Her health deteriorated rapidly, and she died shortly afterwards.",
        exampleTranslation: "Sức khỏe của cô ấy xấu đi nhanh chóng, và cô ấy qua đời ngay sau đó."
    },
    {
        word: "devastate",
        meaning: "tàn phá, phá hủy",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈdevəsteɪt/",
        example: "The bomb devastated much of the old part of the city.",
        exampleTranslation: "Quả bom đã tàn phá phần lớn khu phố cổ của thành phố."
    },
    {
        word: "devil",
        meaning: "quỷ, ác quỷ, ma quỷ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈdevl/",
        example: "belief in the Devil",
        exampleTranslation: "niềm tin vào Quỷ dữ"
    },
    {
        word: "devise",
        meaning: "nghĩ ra, sáng chế, lên kế hoạch",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/dɪˈvaɪz/",
        example: "A new system has been devised to control traffic in the city.",
        exampleTranslation: "Một hệ thống mới đã được nghĩ ra để kiểm soát giao thông trong thành phố."
    },
    {
        word: "diagnose",
        meaning: "chẩn đoán",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˌdaɪəɡˈnəʊs/",
        example: "The test is used to diagnose a variety of diseases.",
        exampleTranslation: "Xét nghiệm này được dùng để chẩn đoán nhiều loại bệnh."
    },
    {
        word: "diagnosis",
        meaning: "sự chẩn đoán",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌdaɪəɡˈnəʊsɪs/",
        example: "a diagnosis of lung cancer",
        exampleTranslation: "chẩn đoán ung thư phổi"
    },
    {
        word: "dictate",
        meaning: "ra lệnh, đọc cho viết, kiểm soát",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈdɪkteɪt/",
        example: "(to somebody) They are in no position to dictate terms (= tell other people what to do).",
        exampleTranslation: "Họ không có quyền ra lệnh (= nói với người khác phải làm gì)."
    },
    {
        word: "dictator",
        meaning: "nhà độc tài",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈdɪkteɪtər/",
        example: "The country suffered at the hands of a series of military dictators.",
        exampleTranslation: "Đất nước phải chịu đựng dưới tay một loạt các nhà độc tài quân sự."
    },
    {
        word: "differentiate",
        meaning: "phân biệt",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˌdɪfəˈrenʃieɪt/",
        example: "differentiate (between) A and B It's difficult to differentiate between the two varieties.",
        exampleTranslation: "Khó để phân biệt giữa hai loại này."
    },
    {
        word: "dignity",
        meaning: "phẩm giá, sự trang nghiêm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈdɪɡnəti/",
        example: "She accepted the criticism with quiet dignity.",
        exampleTranslation: "Cô ấy đã chấp nhận lời chỉ trích với phẩm giá thầm lặng."
    },
    {
        word: "dilemma",
        meaning: "tình thế khó xử, tiến thoái lưỡng nan",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/daɪˈlemə/",
        example: "I could see no way of resolving this moral dilemma.",
        exampleTranslation: "Tôi không thấy cách nào để giải quyết tình thế khó xử về đạo đức này."
    },
    {
        word: "dimension",
        meaning: "kích thước, chiều",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/dɪˈmenʃn/",
        example: "We measured the dimensions of the kitchen.",
        exampleTranslation: "Chúng tôi đã đo các kích thước của nhà bếp."
    },
    {
        word: "diminish",
        meaning: "giảm bớt, thu nhỏ",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/dɪˈmɪnɪʃ/",
        example: "The world's resources are rapidly diminishing.",
        exampleTranslation: "Các nguồn tài nguyên của thế giới đang nhanh chóng cạn kiệt."
    },
    {
        word: "dip",
        meaning: "nhúng, ngâm",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/dɪp/",
        example: "(into something) He dipped the brush into the paint.",
        exampleTranslation: "Anh ấy nhúng cọ vào sơn."
    },
    {
        word: "diplomat",
        meaning: "nhà ngoại giao",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈdɪpləmæt/",
        example: "Washington's top diplomat in Havana",
        exampleTranslation: "Nhà ngoại giao hàng đầu của Washington tại Havana"
    },
    {
        word: "diplomatic",
        meaning: "ngoại giao (thuộc về ngoại giao)",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌdɪpləˈmætɪk/",
        example: "a diplomatic crisis",
        exampleTranslation: "một cuộc khủng hoảng ngoại giao"
    },
    {
        word: "directory",
        meaning: "danh bạ, thư mục",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/daɪˈrektəri/",
        example: "a telephone/trade directory",
        exampleTranslation: "danh bạ điện thoại/thương mại"
    },
    {
        word: "disastrous",
        meaning: "tai hại, thảm khốc",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/dɪˈzæstrəs/",
        example: "a disastrous harvest/fire/result",
        exampleTranslation: "một vụ mùa/đám cháy/kết quả tai hại"
    },
    {
        word: "discard",
        meaning: "vứt bỏ, loại bỏ",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/dɪˈskɑːrd/",
        example: "discard somebody/something The room was littered with discarded newspapers.",
        exampleTranslation: "Căn phòng bừa bộn với những tờ báo bị vứt bỏ."
    },
    {
        word: "discharge",
        meaning: "xuất viện, giải ngũ, thải ra",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/dɪsˈtʃɑːrdʒ/",
        example: "be discharged from something He was discharged from the army following his injury.",
        exampleTranslation: "Anh ấy đã được giải ngũ khỏi quân đội sau chấn thương của mình."
    },
    {
        word: "disclose",
        meaning: "tiết lộ, công bố",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/dɪsˈkləʊz/",
        example: "(to somebody) The spokesman refused to disclose details of the takeover to the press.",
        exampleTranslation: "Người phát ngôn từ chối tiết lộ chi tiết vụ thâu tóm cho báo chí."
    },
    {
        word: "disclosure",
        meaning: "sự tiết lộ, sự công bố",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/dɪsˈkləʊʒər/",
        example: "the newspaper’s disclosure of defence secrets",
        exampleTranslation: "sự tiết lộ bí mật quốc phòng của tờ báo"
    },
    {
        word: "discourse",
        meaning: "bài diễn văn, cuộc đàm thoại, diễn ngôn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈdɪskɔːrs/",
        example: "discourse on something a discourse on issues of gender and sexuality",
        exampleTranslation: "một diễn ngôn về các vấn đề giới tính và tình dục"
    },
    {
        word: "discretion",
        meaning: "sự thận trọng, quyền tự quyết",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/dɪˈskreʃn/",
        example: "I'll leave it up to you to use your discretion.",
        exampleTranslation: "Tôi sẽ để bạn tự quyết định."
    },
    {
        word: "discrimination",
        meaning: "sự phân biệt đối xử",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/dɪˌskrɪmɪˈneɪʃn/",
        example: "age/racial/gender/sex discrimination (= because of somebody’s age, race or sex)",
        exampleTranslation: "phân biệt đối xử theo tuổi/chủng tộc/giới tính (= vì tuổi, chủng tộc hoặc giới tính của ai đó)"
    },
    {
        word: "dismissal",
        meaning: "sự sa thải, sự bác bỏ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/dɪsˈmɪsl/",
        example: "He still hopes to win his claim against unfair dismissal.",
        exampleTranslation: "Anh ấy vẫn hy vọng thắng kiện chống lại việc sa thải không công bằng."
    },
    {
        word: "displace",
        meaning: "di dời, thay thế, chiếm chỗ",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/dɪsˈpleɪs/",
        example: "be displaced (by somebody/something) Gradually factory workers have been displaced by machines.",
        exampleTranslation: "Dần dần, công nhân nhà máy đã bị máy móc thay thế."
    },
    {
        word: "disposal",
        meaning: "sự vứt bỏ, sự xử lý",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/dɪˈspəʊzl/",
        example: "The council is responsible for waste disposal and street cleaning.",
        exampleTranslation: "Hội đồng chịu trách nhiệm về việc xử lý chất thải và làm sạch đường phố."
    },
    {
        word: "dispose",
        meaning: "sắp xếp, bố trí",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/dɪˈspəʊz/",
        example: "The visitors disposed themselves in a circle round the statue.",
        exampleTranslation: "Những du khách đã sắp xếp vị trí của họ thành một vòng tròn quanh bức tượng."
    },
    {
        word: "dispute",
        meaning: "tranh chấp, cuộc tranh cãi",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈdɪspjuːt/",
        example: "industrial/pay disputes",
        exampleTranslation: "các cuộc tranh chấp công nghiệp/về lương"
    },
    {
        word: "disrupt",
        meaning: "làm gián đoạn, phá vỡ",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/dɪsˈrʌpt/",
        example: "Demonstrators succeeded in disrupting the meeting.",
        exampleTranslation: "Những người biểu tình đã thành công trong việc làm gián đoạn cuộc họp."
    },
    {
        word: "disruption",
        meaning: "sự gián đoạn, sự phá vỡ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/dɪsˈrʌpʃn/",
        example: "We aim to help you move house with minimum disruption to yourself.",
        exampleTranslation: "Chúng tôi mong muốn giúp bạn chuyển nhà với sự gián đoạn tối thiểu đến bạn."
    },
    {
        word: "dissolve",
        meaning: "hòa tan, tan rã",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/dɪˈzɑːlv/",
        example: "Salt dissolves in water.",
        exampleTranslation: "Muối hòa tan trong nước."
    },
    {
        word: "distinction",
        meaning: "sự khác biệt, điểm khác biệt, sự phân biệt",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/dɪˈstɪŋkʃn/",
        example: "distinctions between traditional and modern societies",
        exampleTranslation: "những điểm khác biệt giữa xã hội truyền thống và hiện đại"
    },
    {
        word: "distinctive",
        meaning: "đặc biệt, đặc trưng, dễ nhận biết",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/dɪˈstɪŋktɪv/",
        example: "clothes with a distinctive style",
        exampleTranslation: "quần áo với phong cách đặc trưng"
    },
    {
        word: "distort",
        meaning: "bóp méo, làm méo mó, xuyên tạc",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/dɪˈstɔːrt/",
        example: "a fairground mirror that distorts your shape",
        exampleTranslation: "một tấm gương ở hội chợ làm méo mó hình dáng của bạn"
    },
    {
        word: "distress",
        meaning: "sự đau khổ, nỗi phiền muộn, sự khốn khổ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/dɪˈstres/",
        example: "The newspaper article caused the actor considerable distress.",
        exampleTranslation: "Bài báo đã gây ra nỗi đau khổ đáng kể cho diễn viên."
    },
    {
        word: "disturbing",
        meaning: "đáng lo ngại, gây băn khoăn, làm phiền lòng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/dɪˈstɜːrbɪŋ/",
        example: "a disturbing piece of news",
        exampleTranslation: "một mẩu tin đáng lo ngại"
    },
    {
        word: "divert",
        meaning: "chuyển hướng, làm chệch hướng",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/daɪˈvɜːrt/",
        example: "be diverted The course of the stream has now been diverted.",
        exampleTranslation: "Dòng chảy của con suối giờ đã bị chuyển hướng."
    },
    {
        word: "divine",
        meaning: "thiêng liêng, thần thánh, của thần",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/dɪˈvaɪn/",
        example: "divine law/love/will",
        exampleTranslation: "luật pháp/tình yêu/ý chí thiêng liêng"
    },
    {
        word: "doctrine",
        meaning: "học thuyết, giáo lý",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈdɑːktrɪn/",
        example: "the doctrine of parliamentary sovereignty",
        exampleTranslation: "học thuyết về chủ quyền của nghị viện"
    },
    {
        word: "documentation",
        meaning: "tài liệu, giấy tờ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌdɑːkjumenˈteɪʃn/",
        example: "I couldn't enter the country because I didn't have all the necessary documentation.",
        exampleTranslation: "Tôi không thể vào nước đó vì tôi không có tất cả các giấy tờ cần thiết."
    },
    {
        word: "domain",
        meaning: "lĩnh vực, phạm vi, lãnh địa",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/dəʊˈmeɪn/",
        example: "Financial matters are her domain.",
        exampleTranslation: "Các vấn đề tài chính là lĩnh vực của cô ấy."
    },
    {
        word: "dominance",
        meaning: "sự thống trị, quyền lực",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈdɑːmɪnəns/",
        example: "political/economic dominance",
        exampleTranslation: "sự thống trị về chính trị/kinh tế"
    },
    {
        word: "donor",
        meaning: "nhà tài trợ, người hiến tặng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈdəʊnər/",
        example: "international aid donors (= countries that give money, etc. to help other countries)",
        exampleTranslation: "các nhà tài trợ viện trợ quốc tế (= các quốc gia cung cấp tiền, v.v. để giúp các quốc gia khác)"
    },
    {
        word: "dose",
        meaning: "liều lượng, liều thuốc",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/dəʊs/",
        example: "a high/low/lethal dose",
        exampleTranslation: "một liều cao/thấp/gây chết người"
    },
    {
        word: "drain",
        meaning: "làm ráo nước, tháo nước, rút cạn",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/dreɪn/",
        example: "Drain and rinse the pasta.",
        exampleTranslation: "Làm ráo nước và rửa mì ống."
    },
    {
        word: "drift",
        meaning: "trôi giạt, lênh đênh",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/drɪft/",
        example: "Clouds drifted across the sky.",
        exampleTranslation: "Những đám mây trôi ngang bầu trời."
    },
    {
        word: "driving",
        meaning: "chủ chốt, động lực",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈdraɪvɪŋ/",
        example: "Who was the driving force (= the person with the strongest influence) in the band?",
        exampleTranslation: "Ai là động lực chính (= người có ảnh hưởng mạnh nhất) trong ban nhạc?"
    },
    {
        word: "drown",
        meaning: "chết đuối, làm chết đuối",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/draʊn/",
        example: "Two children drowned after falling into the river.",
        exampleTranslation: "Hai đứa trẻ đã chết đuối sau khi rơi xuống sông."
    },
    {
        word: "dual",
        meaning: "đôi, hai, kép",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈduːəl/",
        example: "his dual role as composer and conductor",
        exampleTranslation: "vai trò kép của anh ấy với tư cách là nhà soạn nhạc và nhạc trưởng"
    },
    {
        word: "dub",
        meaning: "đặt tên, gán cho, lồng tiếng",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/dʌb/",
        example: "The media dubbed anorexia ‘the slimming disease’.",
        exampleTranslation: "Giới truyền thông đã gán bệnh chán ăn là 'bệnh gầy đi'."
    },
    {
        word: "dumb",
        meaning: "ngu ngốc",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/dʌm/",
        example: "That was a pretty dumb thing to do.",
        exampleTranslation: "Đó là một việc khá ngu ngốc để làm."
    },
    {
        word: "duo",
        meaning: "bộ đôi, cặp đôi",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈduːəʊ/",
        example: "the comedy duo Laurel and Hardy",
        exampleTranslation: "bộ đôi hài Laurel và Hardy"
    },
    {
        word: "dynamic",
        meaning: "động lực, sự năng động",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/daɪˈnæmɪk/",
        example: "the dynamics of political change",
        exampleTranslation: "những động lực của sự thay đổi chính trị"
    },
    {
        word: "eager",
        meaning: "háo hức, hăm hở",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈiːɡər/",
        example: "eager crowds outside the stadium",
        exampleTranslation: "đám đông háo hức bên ngoài sân vận động"
    },
    {
        word: "earnings",
        meaning: "thu nhập, tiền lương",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈɜːrnɪŋz/",
        example: "a rise in average earnings",
        exampleTranslation: "sự tăng lên trong thu nhập trung bình"
    },
    {
        word: "ease",
        meaning: "sự dễ dàng, sự thoải mái",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/iːz/",
        example: "with ease He passed the exam with ease.",
        exampleTranslation: "Anh ấy đã vượt qua kỳ thi một cách dễ dàng."
    },
    {
        word: "echo",
        meaning: "tiếng vọng, sự vang lại",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈekəʊ/",
        example: "There was an echo on the phone and I couldn't hear clearly.",
        exampleTranslation: "Có tiếng vọng trên điện thoại và tôi không nghe rõ."
    },
    {
        word: "ecological",
        meaning: "sinh thái, thuộc về sinh thái",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌiːkəˈlɑːdʒɪkl/",
        example: "We risk upsetting the ecological balance of the area.",
        exampleTranslation: "Chúng ta có nguy cơ làm mất cân bằng sinh thái của khu vực."
    },
    {
        word: "educator",
        meaning: "nhà giáo dục",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈedʒukeɪtər/",
        example: "adult educators (= who teach adults)",
        exampleTranslation: "các nhà giáo dục người lớn (= những người dạy người lớn)"
    },
    {
        word: "effectiveness",
        meaning: "hiệu quả, tính hiệu lực",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪˈfektɪvnəs/",
        example: "to check the effectiveness of the security system",
        exampleTranslation: "kiểm tra hiệu quả của hệ thống an ninh"
    },
    {
        word: "efficiency",
        meaning: "hiệu quả, tính năng suất",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪˈfɪʃnsi/",
        example: "improvements in efficiency at the factory",
        exampleTranslation: "những cải tiến về hiệu quả tại nhà máy"
    },
    {
        word: "ego",
        meaning: "cái tôi, bản ngã",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈiːɡəʊ/",
        example: "He has the biggest ego of anyone I've ever met.",
        exampleTranslation: "Anh ta có cái tôi lớn nhất trong tất cả những người tôi từng gặp."
    },
    {
        word: "elaborate",
        meaning: "tỉ mỉ, công phu, phức tạp",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɪˈlæbərət/",
        example: "elaborate designs",
        exampleTranslation: "những thiết kế tỉ mỉ"
    },
    {
        word: "electoral",
        meaning: "thuộc về bầu cử",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɪˈlektərəl/",
        example: "electoral systems/reforms",
        exampleTranslation: "hệ thống/cải cách bầu cử"
    },
    {
        word: "elevate",
        meaning: "nâng lên, làm cao lên",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈelɪveɪt/",
        example: "elevate somebody/something (to something) He elevated many of his friends to powerful positions within the government.",
        exampleTranslation: "nâng ai/cái gì (lên vị trí gì) Ông ta đã đề bạt nhiều người bạn của mình vào các vị trí quyền lực trong chính phủ."
    },
    {
        word: "eligible",
        meaning: "đủ tư cách, đủ điều kiện",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈelɪdʒəbl/",
        example: "eligible (for something) Only those over 70 are eligible for the special payment.",
        exampleTranslation: "đủ điều kiện (cho cái gì) Chỉ những người trên 70 tuổi mới đủ điều kiện nhận khoản thanh toán đặc biệt này."
    },
    {
        word: "elite",
        meaning: "tầng lớp ưu tú, giới tinh hoa",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪˈliːt/",
        example: "a member of the ruling/intellectual elite",
        exampleTranslation: "một thành viên của giới tinh hoa cầm quyền/trí thức"
    },
    {
        word: "embark",
        meaning: "lên tàu, bắt đầu (một cuộc hành trình)",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪmˈbɑːrk/",
        example: "We stood on the pier and watched as they embarked.",
        exampleTranslation: "Chúng tôi đứng trên bến tàu và nhìn họ lên tàu."
    },
    {
        word: "embarrassment",
        meaning: "sự bối rối, sự ngượng ngùng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪmˈbærəsmənt/",
        example: "I nearly died of embarrassment when he said that.",
        exampleTranslation: "Tôi đã rất xấu hổ khi anh ấy nói điều đó."
    },
    {
        word: "embassy",
        meaning: "đại sứ quán",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈembəsi/",
        example: "embassy officials",
        exampleTranslation: "các quan chức đại sứ quán"
    },
    {
        word: "embed",
        meaning: "cắm vào, đóng đinh vào, khắc sâu",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪmˈbed/",
        example: "be embedded in something an operation to remove glass that was embedded in his leg",
        exampleTranslation: "được cắm vào trong cái gì đó một cuộc phẫu thuật để loại bỏ mảnh kính bị cắm vào chân anh ta"
    },
    {
        word: "embody",
        meaning: "hiện thân, đại diện cho",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪmˈbɑːdi/",
        example: "a politician who embodied the hopes of black youth",
        exampleTranslation: "một chính trị gia hiện thân cho hy vọng của giới trẻ da đen"
    },
    {
        word: "emergence",
        meaning: "sự nổi lên, sự xuất hiện",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪˈmɜːrdʒəns/",
        example: "the island’s emergence from the sea 3 000 years ago",
        exampleTranslation: "sự nổi lên của hòn đảo khỏi mặt biển cách đây 3.000 năm"
    },
    {
        word: "empirical",
        meaning: "thực nghiệm, dựa trên kinh nghiệm",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɪmˈpɪrɪkl/",
        example: "empirical evidence/knowledge/research",
        exampleTranslation: "bằng chứng/kiến thức/nghiên cứu thực nghiệm"
    },
    {
        word: "empower",
        meaning: "trao quyền, cho phép",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪmˈpaʊər/",
        example: "be empowered (to do something) The courts were empowered to impose the death sentence for certain crimes.",
        exampleTranslation: "được trao quyền (làm gì) Tòa án được trao quyền tuyên án tử hình đối với một số tội danh nhất định."
    },
    {
        word: "enact",
        meaning: "ban hành, thi hành (luật)",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪˈnækt/",
        example: "(be) enacted (by somebody/something) legislation enacted by parliament",
        exampleTranslation: "được ban hành (bởi ai/cái gì) luật được quốc hội ban hành"
    },
    {
        word: "encompass",
        meaning: "bao gồm, bao hàm",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪnˈkʌmpəs/",
        example: "The job encompasses a wide range of responsibilities.",
        exampleTranslation: "Công việc bao gồm một loạt các trách nhiệm."
    },
    {
        word: "encouragement",
        meaning: "sự khuyến khích, sự động viên",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪnˈkɜːrɪdʒmənt/",
        example: "a few words of encouragement",
        exampleTranslation: "một vài lời động viên"
    },
    {
        word: "encouraging",
        meaning: "khuyến khích, đáng mừng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɪnˈkɜːrɪdʒɪŋ/",
        example: "This month's unemployment figures are not very encouraging.",
        exampleTranslation: "Số liệu thất nghiệp tháng này không mấy khả quan."
    },
    {
        word: "endeavour",
        meaning: "nỗ lực, cố gắng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪnˈdevər/",
        example: "There have been great advances in the field of scientific endeavour.",
        exampleTranslation: "Đã có những tiến bộ lớn trong lĩnh vực nỗ lực khoa học."
    },
    {
        word: "endless",
        meaning: "vô tận, không ngừng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈendləs/",
        example: "endless patience",
        exampleTranslation: "sự kiên nhẫn vô tận"
    },
    {
        word: "endorse",
        meaning: "tán thành, ủng hộ",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪnˈdɔːrs/",
        example: "I wholeheartedly endorse his remarks.",
        exampleTranslation: "Tôi hoàn toàn tán thành những nhận xét của ông ấy."
    },
    {
        word: "endorsement",
        meaning: "sự tán thành, sự ủng hộ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪnˈdɔːrsmənt/",
        example: "The election victory is a clear endorsement of their policies.",
        exampleTranslation: "Chiến thắng bầu cử là sự ủng hộ rõ ràng đối với chính sách của họ."
    },
    {
        word: "endure",
        meaning: "chịu đựng, cam chịu",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪnˈdʊr/",
        example: "They had to endure a long wait before the case came to trial.",
        exampleTranslation: "Họ đã phải chịu đựng một thời gian chờ đợi dài trước khi vụ án được đưa ra xét xử."
    },
    {
        word: "enforce",
        meaning: "thi hành, bắt buộc thi hành",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪnˈfɔːrs/",
        example: "It's the job of the police to enforce the law.",
        exampleTranslation: "Công việc của cảnh sát là thi hành pháp luật."
    },
    {
        word: "enforcement",
        meaning: "sự thi hành, sự thực thi",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪnˈfɔːrsmənt/",
        example: "strict enforcement of regulations",
        exampleTranslation: "sự thực thi nghiêm ngặt các quy định"
    },
    {
        word: "engagement",
        meaning: "lễ đính hôn, sự cam kết, sự giao phó",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪnˈɡeɪdʒmənt/",
        example: "Their engagement was announced in the local paper.",
        exampleTranslation: "Lễ đính hôn của họ đã được thông báo trên báo địa phương."
    },
    {
        word: "engaging",
        meaning: "thu hút, hấp dẫn, quyến rũ",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɪnˈɡeɪdʒɪŋ/",
        example: "an engaging smile",
        exampleTranslation: "một nụ cười lôi cuốn"
    },
    {
        word: "enquire",
        meaning: "hỏi, tìm hiểu, tra cứu",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪnˈkwaɪər/",
        example: "enquire about somebody/something I called the garage to enquire about progress on the repairs.",
        exampleTranslation: "Tôi đã gọi đến gara để hỏi về tiến độ sửa chữa."
    },
    {
        word: "enrich",
        meaning: "làm giàu, làm phong phú",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪnˈrɪtʃ/",
        example: "The study of science has enriched all our lives.",
        exampleTranslation: "Việc nghiên cứu khoa học đã làm phong phú thêm cuộc sống của tất cả chúng ta."
    },
    {
        word: "enrol",
        meaning: "ghi danh, đăng ký",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪnˈrəʊl/",
        example: "You need to enrol before the end of August.",
        exampleTranslation: "Bạn cần phải đăng ký trước cuối tháng Tám."
    },
    {
        word: "ensue",
        meaning: "xảy ra sau đó, tiếp theo",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪnˈsuː/",
        example: "An argument ensued.",
        exampleTranslation: "Một cuộc tranh cãi đã xảy ra."
    },
    {
        word: "enterprise",
        meaning: "doanh nghiệp, công ty, dự án",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈentərpraɪz/",
        example: "He is in charge of an enterprise with a turnover of $26 billion.",
        exampleTranslation: "Ông ấy phụ trách một doanh nghiệp có doanh thu 26 tỷ đô la."
    },
    {
        word: "enthusiast",
        meaning: "người đam mê, người nhiệt tình",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪnˈθuːziæst/",
        example: "a football enthusiast",
        exampleTranslation: "một người hâm mộ bóng đá cuồng nhiệt"
    },
    {
        word: "entitle",
        meaning: "cho quyền, cho phép, có tiêu đề",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪnˈtaɪtl/",
        example: "be entitled to something You will be entitled to your pension when you reach 65.",
        exampleTranslation: "Bạn sẽ được hưởng lương hưu khi đủ 65 tuổi."
    },
    {
        word: "entity",
        meaning: "thực thể, sự tồn tại",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈentəti/",
        example: "The unit has become part of a larger department and no longer exists as a separate entity.",
        exampleTranslation: "Đơn vị này đã trở thành một phần của bộ phận lớn hơn và không còn tồn tại như một thực thể riêng biệt."
    },
    {
        word: "epidemic",
        meaning: "dịch bệnh, sự lan tràn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌepɪˈdemɪk/",
        example: "the outbreak of a flu epidemic",
        exampleTranslation: "sự bùng phát của một dịch cúm"
    },
    {
        word: "equality",
        meaning: "sự bình đẳng, sự công bằng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/iˈkwɑːləti/",
        example: "racial/social/gender equality",
        exampleTranslation: "bình đẳng chủng tộc/xã hội/giới tính"
    },
    {
        word: "equation",
        meaning: "phương trình, sự cân bằng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪˈkweɪʒn/",
        example: "the numbers on the right-hand side of the equation",
        exampleTranslation: "các số ở phía bên phải của phương trình"
    },
    {
        word: "erect",
        meaning: "dựng lên, xây dựng",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪˈrekt/",
        example: "The church was erected in 1582.",
        exampleTranslation: "Nhà thờ được xây dựng vào năm 1582."
    },
    {
        word: "escalate",
        meaning: "leo thang, tăng lên",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈeskəleɪt/",
        example: "the escalating costs of healthcare",
        exampleTranslation: "chi phí chăm sóc sức khỏe ngày càng tăng"
    },
    {
        word: "essence",
        meaning: "bản chất, cốt lõi, tinh túy",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈesns/",
        example: "His paintings capture the essence of France.",
        exampleTranslation: "Các bức tranh của ông nắm bắt được bản chất của nước Pháp."
    },
    {
        word: "establishment",
        meaning: "sự thành lập, cơ sở, tổ chức",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪˈstæblɪʃmənt/",
        example: "The visa is for foreign nationals wishing to study at a university, college or similar educational establishment.",
        exampleTranslation: "Visa này dành cho người nước ngoài muốn học tại một trường đại học, cao đẳng hoặc cơ sở giáo dục tương tự."
    },
    {
        word: "eternal",
        meaning: "vĩnh cửu, bất diệt, đời đời",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɪˈtɜːrnl/",
        example: "the promise of eternal life in heaven",
        exampleTranslation: "lời hứa về sự sống vĩnh cửu trên thiên đàng"
    },
    {
        word: "evacuate",
        meaning: "sơ tán, di tản",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪˈvækjueɪt/",
        example: "Police evacuated nearby buildings.",
        exampleTranslation: "Cảnh sát đã sơ tán các tòa nhà lân cận."
    },
    {
        word: "evoke",
        meaning: "gợi lên, gợi nhớ",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪˈvəʊk/",
        example: "The music evoked memories of her youth.",
        exampleTranslation: "Âm nhạc gợi lên những ký ức về thời trẻ của cô."
    },
    {
        word: "evolutionary",
        meaning: "tiến hóa",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌevəˈluːʃəneri/",
        example: "evolutionary theory",
        exampleTranslation: "lý thuyết tiến hóa"
    },
    {
        word: "exaggerate",
        meaning: "phóng đại, nói quá",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪɡˈzædʒəreɪt/",
        example: "The hotel was really filthy and I'm not exaggerating.",
        exampleTranslation: "Khách sạn thực sự rất bẩn và tôi không hề nói quá."
    },
    {
        word: "excellence",
        meaning: "sự xuất sắc, sự ưu việt",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈeksələns/",
        example: "a reputation for academic excellence",
        exampleTranslation: "một danh tiếng về sự xuất sắc trong học tập"
    },
    {
        word: "exceptional",
        meaning: "ngoại lệ, đặc biệt",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɪkˈsepʃənl/",
        example: "At the age of five he showed exceptional talent as a musician.",
        exampleTranslation: "Ở tuổi lên năm, cậu bé đã thể hiện tài năng âm nhạc phi thường."
    },
    {
        word: "excess",
        meaning: "thừa, dư thừa",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈekses/",
        example: "Excess food is stored as fat.",
        exampleTranslation: "Thức ăn dư thừa được lưu trữ dưới dạng chất béo."
    },
    {
        word: "exclusion",
        meaning: "sự loại trừ, sự loại bỏ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪkˈskluːʒn/",
        example: "exclusion (of somebody/something) (from something) He was disappointed with his exclusion from the England squad.",
        exampleTranslation: "Anh ấy đã thất vọng vì bị loại khỏi đội tuyển Anh."
    },
    {
        word: "exclusive",
        meaning: "độc quyền, duy nhất, đặc biệt",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɪkˈskluːsɪv/",
        example: "The hotel has exclusive access to the beach.",
        exampleTranslation: "Khách sạn có lối vào riêng ra bãi biển."
    },
    {
        word: "exclusively",
        meaning: "một cách độc quyền, một cách duy nhất",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/ɪkˈskluːsɪvli/",
        example: "The resort caters almost exclusively for a high-society public.",
        exampleTranslation: "Khu nghỉ dưỡng phục vụ gần như độc quyền cho giới thượng lưu."
    },
    {
        word: "execute",
        meaning: "hành quyết, thực hiện",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈeksɪkjuːt/",
        example: "be executed (for something) He was executed for treason.",
        exampleTranslation: "Anh ta đã bị hành quyết vì tội phản quốc."
    },
    {
        word: "execution",
        meaning: "sự hành quyết, sự thực hiện",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌeksɪˈkjuːʃn/",
        example: "He faced execution by hanging for murder.",
        exampleTranslation: "Anh ta phải đối mặt với việc bị treo cổ vì tội giết người."
    },
    {
        word: "exert",
        meaning: "dốc sức, dùng, gắng sức",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪɡˈzɜːrt/",
        example: "He exerted all his authority to make them accept the plan.",
        exampleTranslation: "Ông ấy đã dùng hết quyền lực của mình để họ chấp nhận kế hoạch."
    },
    {
        word: "exile",
        meaning: "sự lưu đày, nơi lưu đày",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈeɡzaɪl/",
        example: "a place of exile",
        exampleTranslation: "một nơi lưu đày"
    },
    {
        word: "exit",
        meaning: "thoát ra, đi ra",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈeɡzɪt/",
        example: "(+ adv./prep.) The bullet entered her back and exited through her chest.",
        exampleTranslation: "(+ adv./prep.) Viên đạn găm vào lưng cô ấy và đi ra khỏi ngực."
    },
    {
        word: "expenditure",
        meaning: "sự chi tiêu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪkˈspendɪtʃər/",
        example: "a reduction in public/government/military expenditure",
        exampleTranslation: "sự cắt giảm chi tiêu công/chính phủ/quân sự"
    },
    {
        word: "experimental",
        meaning: "thực nghiệm, thử nghiệm",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɪkˌsperɪˈmentl/",
        example: "The school's experimental teaching methods include letting the children decide what to study.",
        exampleTranslation: "Các phương pháp giảng dạy thử nghiệm của trường bao gồm việc để trẻ em quyết định học gì."
    },
    {
        word: "expire",
        meaning: "hết hạn, hết hiệu lực",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪkˈspaɪər/",
        example: "When does your driving licence expire?",
        exampleTranslation: "Giấy phép lái xe của bạn hết hạn khi nào?"
    },
    {
        word: "explicit",
        meaning: "rõ ràng, tường minh",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɪkˈsplɪsɪt/",
        example: "He gave me very explicit directions on how to get there.",
        exampleTranslation: "Ông ấy đã cho tôi những chỉ dẫn rất rõ ràng về cách đến đó."
    },
    {
        word: "explicitly",
        meaning: "một cách rõ ràng, một cách tường minh",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/ɪkˈsplɪsɪtli/",
        example: "The report states explicitly that the system was to blame.",
        exampleTranslation: "Báo cáo nêu rõ rằng hệ thống là nguyên nhân."
    },
    {
        word: "exploitation",
        meaning: "sự bóc lột",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌeksplɔɪˈteɪʃn/",
        example: "the exploitation of children",
        exampleTranslation: "sự bóc lột trẻ em"
    },
    {
        word: "explosive",
        meaning: "dễ nổ, dễ bùng nổ",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɪkˈspləʊzɪv/",
        example: "an explosive device (= a bomb)",
        exampleTranslation: "một thiết bị dễ nổ (= một quả bom)"
    },
    {
        word: "extract",
        meaning: "trích xuất, rút ra",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪkˈstrækt/",
        example: "a machine that extracts excess moisture from the air",
        exampleTranslation: "một máy hút ẩm thừa ra khỏi không khí"
    },
    {
        word: "extremist",
        meaning: "kẻ cực đoan",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪkˈstriːmɪst/",
        example: "left-wing/right-wing/political/religious extremists",
        exampleTranslation: "những kẻ cực đoan cánh tả/cánh hữu/chính trị/tôn giáo"
    },
    {
        word: "facilitate",
        meaning: "tạo điều kiện, làm cho dễ dàng",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/fəˈsɪlɪteɪt/",
        example: "The new trade agreement should facilitate more rapid economic growth.",
        exampleTranslation: "Thỏa thuận thương mại mới sẽ tạo điều kiện cho tăng trưởng kinh tế nhanh hơn."
    },
    {
        word: "faction",
        meaning: "phe phái, bè phái",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈfækʃn/",
        example: "There are rival factions within the administration.",
        exampleTranslation: "Có những phe phái đối địch trong chính quyền."
    },
    {
        word: "faculty",
        meaning: "khoa, bộ môn, giảng viên",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈfæklti/",
        example: "the Faculty of Law",
        exampleTranslation: "Khoa Luật"
    },
    {
        word: "fade",
        meaning: "phai màu, tàn lụi",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/feɪd/",
        example: "The curtains had faded in the sun.",
        exampleTranslation: "Những tấm rèm đã phai màu dưới ánh nắng."
    },
    {
        word: "fairness",
        meaning: "sự công bằng, tính công bằng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈfernəs/",
        example: "The fairness of the judicial system is being questioned.",
        exampleTranslation: "Tính công bằng của hệ thống tư pháp đang bị chất vấn."
    },
    {
        word: "fatal",
        meaning: "chết người, chí mạng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈfeɪtl/",
        example: "a fatal accident/blow/illness",
        exampleTranslation: "một vụ tai nạn/đòn đánh/căn bệnh chí mạng"
    },
    {
        word: "fate",
        meaning: "số phận, định mệnh",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/feɪt/",
        example: "The fate of the three men is unknown.",
        exampleTranslation: "Số phận của ba người đàn ông này không rõ."
    },
    {
        word: "favourable",
        meaning: "thuận lợi, có lợi",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈfeɪvərəbl/",
        example: "She made a favourable impression on his parents.",
        exampleTranslation: "Cô ấy đã tạo ấn tượng tốt đẹp với bố mẹ anh ấy."
    },
    {
        word: "feat",
        meaning: "thành tích, kỳ công",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/fiːt/",
        example: "The tunnel is a remarkable feat of engineering.",
        exampleTranslation: "Đường hầm là một kỳ công kỹ thuật đáng nể."
    },
    {
        word: "feminist",
        meaning: "người theo chủ nghĩa nữ quyền",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈfemənɪst/",
        example: "feminist demands/ideas/theories",
        exampleTranslation: "những yêu sách/ý tưởng/lý thuyết nữ quyền"
    },
    {
        word: "fibre",
        meaning: "chất xơ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈfaɪbər/",
        example: "dietary fibre",
        exampleTranslation: "chất xơ trong chế độ ăn uống"
    },
    {
        word: "fierce",
        meaning: "dữ tợn, hung dữ, mãnh liệt",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/fɪrs/",
        example: "a fierce dog",
        exampleTranslation: "một con chó dữ tợn"
    },
    {
        word: "film-maker",
        meaning: "nhà làm phim",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈfɪlm meɪkər/",
        example: "This is an example of film-maker.",
        exampleTranslation: "Đây là một ví dụ về nhà làm phim."
    },
    {
        word: "filter",
        meaning: "bộ lọc, màng lọc",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈfɪltər/",
        example: "an air/oil filter",
        exampleTranslation: "bộ lọc không khí/dầu"
    },
    {
        word: "fine",
        meaning: "tiền phạt",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/faɪn/",
        example: "I got a parking fine for parking on double yellow lines.",
        exampleTranslation: "Tôi bị phạt vì đỗ xe ở vạch kẻ vàng kép."
    },
    {
        word: "firearm",
        meaning: "vũ khí bằng kim loại, súng cầm tay",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈfaɪərɑːrm/",
        example: "The police were issued with firearms.",
        exampleTranslation: "Cảnh sát được trang bị vũ khí."
    },
    {
        word: "fit",
        meaning: "cơn động kinh, sự lên cơn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/fɪt/",
        example: "to have an epileptic fit",
        exampleTranslation: "bị một cơn động kinh"
    },
    {
        word: "fixture",
        meaning: "sự kiện thường niên, vật cố định",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈfɪkstʃər/",
        example: "There are plans to make the race an annual fixture.",
        exampleTranslation: "Có kế hoạch biến cuộc đua này thành một sự kiện thường niên."
    },
    {
        word: "flaw",
        meaning: "lỗi, khuyết điểm, sai sót",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/flɔː/",
        example: "The argument is full of fundamental flaws.",
        exampleTranslation: "Lập luận này đầy những sai sót cơ bản."
    },
    {
        word: "flawed",
        meaning: "có lỗi, không hoàn hảo, có khuyết điểm",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/flɔːd/",
        example: "seriously/fundamentally/fatally flawed",
        exampleTranslation: "bị lỗi nghiêm trọng/cơ bản/chết người"
    },
    {
        word: "flee",
        meaning: "chạy trốn, bỏ chạy",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/fliː/",
        example: "She burst into tears and fled.",
        exampleTranslation: "Cô bật khóc và bỏ chạy."
    },
    {
        word: "fleet",
        meaning: "hạm đội, đội tàu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/fliːt/",
        example: "a fleet of destroyers",
        exampleTranslation: "một hạm đội tàu khu trục"
    },
    {
        word: "flesh",
        meaning: "thịt, da thịt",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/fleʃ/",
        example: "The trap had cut deeply into the rabbit's flesh.",
        exampleTranslation: "Bẫy đã cắt sâu vào da thịt con thỏ."
    },
    {
        word: "flexibility",
        meaning: "sự linh hoạt, tính mềm dẻo",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌfleksəˈbɪləti/",
        example: "The new system offers a much greater degree of flexibility in the way work is organized.",
        exampleTranslation: "Hệ thống mới mang lại mức độ linh hoạt cao hơn trong cách tổ chức công việc."
    },
    {
        word: "flourish",
        meaning: "phát triển mạnh, thịnh vượng, phát đạt",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈflɜːrɪʃ/",
        example: "Few businesses are flourishing in the present economic climate.",
        exampleTranslation: "Ít doanh nghiệp đang phát triển mạnh trong bối cảnh kinh tế hiện tại."
    },
    {
        word: "fluid",
        meaning: "chất lỏng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈfluːɪd/",
        example: "body fluids (= for example, blood)",
        exampleTranslation: "chất lỏng trong cơ thể (= ví dụ: máu)"
    },
    {
        word: "footage",
        meaning: "cảnh quay, đoạn phim",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈfʊtɪdʒ/",
        example: "old film footage of the moon landing",
        exampleTranslation: "những cảnh quay phim cũ về cuộc đổ bộ lên mặt trăng"
    },
    {
        word: "foreigner",
        meaning: "người nước ngoài",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈfɔːrənər/",
        example: "The fact that I was a foreigner was a big disadvantage.",
        exampleTranslation: "Việc tôi là người nước ngoài là một bất lợi lớn."
    },
    {
        word: "forge",
        meaning: "rèn, tạo dựng, giả mạo",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/fɔːrdʒ/",
        example: "a move to forge new links between management and workers",
        exampleTranslation: "một động thái để tạo dựng mối liên kết mới giữa ban quản lý và người lao động"
    },
    {
        word: "formula",
        meaning: "công thức, quy tắc",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈfɔːrmjələ/",
        example: "This formula is used to calculate the area of a circle.",
        exampleTranslation: "Công thức này được sử dụng để tính diện tích hình tròn."
    },
    {
        word: "formulate",
        meaning: "xây dựng, hình thành, đề ra",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈfɔːrmjuleɪt/",
        example: "a policy/theory/plan/proposal",
        exampleTranslation: "một chính sách/lý thuyết/kế hoạch/đề xuất"
    },
    {
        word: "forth",
        meaning: "về phía trước, ra ngoài",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/fɔːrθ/",
        example: "They set forth at dawn.",
        exampleTranslation: "Họ khởi hành lúc bình minh."
    },
    {
        word: "forthcoming",
        meaning: "sắp tới, sắp diễn ra",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌfɔːrθˈkʌmɪŋ/",
        example: "the forthcoming elections",
        exampleTranslation: "cuộc bầu cử sắp tới"
    },
    {
        word: "foster",
        meaning: "nuôi dưỡng, khuyến khích, thúc đẩy",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈfɑːstər/",
        example: "The club's aim is to foster better relations within the community.",
        exampleTranslation: "Mục tiêu của câu lạc bộ là thúc đẩy mối quan hệ tốt đẹp hơn trong cộng đồng."
    },
    {
        word: "fragile",
        meaning: "mong manh, dễ vỡ",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈfrædʒl/",
        example: "fragile china/glass/bones",
        exampleTranslation: "sứ/thủy tinh/xương mỏng manh"
    },
    {
        word: "franchise",
        meaning: "quyền kinh doanh, giấy phép kinh doanh",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈfræntʃaɪz/",
        example: "a franchise agreement/company",
        exampleTranslation: "một thỏa thuận/công ty nhượng quyền thương mại"
    },
    {
        word: "frankly",
        meaning: "thẳng thắn, cởi mở",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/ˈfræŋkli/",
        example: "He spoke frankly about the ordeal.",
        exampleTranslation: "Anh ấy đã nói chuyện thẳng thắn về sự thử thách cam go đó."
    },
    {
        word: "frustrated",
        meaning: "bực bội, thất vọng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈfrʌstreɪtɪd/",
        example: "It's very easy to get frustrated in this job.",
        exampleTranslation: "Rất dễ cảm thấy bực bội trong công việc này."
    },
    {
        word: "frustrating",
        meaning: "gây bực bội, gây khó chịu",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈfrʌstreɪtɪŋ/",
        example: "It's frustrating to have to wait so long.",
        exampleTranslation: "Thật khó chịu khi phải chờ đợi lâu như vậy."
    },
    {
        word: "frustration",
        meaning: "sự bực bội, sự thất vọng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/frʌˈstreɪʃn/",
        example: "in frustration Dave thumped the table in frustration.",
        exampleTranslation: "trong sự bực bội Dave đấm bàn vì sự bực bội."
    },
    {
        word: "functional",
        meaning: "thực tế, hoạt động tốt, có chức năng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈfʌŋkʃənl/",
        example: "Bathrooms don't have to be purely functional.",
        exampleTranslation: "Phòng tắm không nhất thiết phải hoàn toàn thực tế."
    },
    {
        word: "fundraising",
        meaning: "gây quỹ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈfʌndreɪzɪŋ/",
        example: "The hospice is planning a major fundraising event for June.",
        exampleTranslation: "Bệnh viện đang lên kế hoạch cho một sự kiện gây quỹ lớn vào tháng Sáu."
    },
    {
        word: "funeral",
        meaning: "tang lễ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈfjuːnərəl/",
        example: "Hundreds of people attended the funeral.",
        exampleTranslation: "Hàng trăm người đã đến dự đám tang."
    },
    {
        word: "gallon",
        meaning: "gallon (đơn vị đo chất lỏng)",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈɡælən/",
        example: "The tankers carried 130 000 gallons of fuel.",
        exampleTranslation: "Những chiếc xe chở 130.000 gallon nhiên liệu."
    },
    {
        word: "gambling",
        meaning: "cờ bạc",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈɡæmblɪŋ/",
        example: "online/internet gambling",
        exampleTranslation: "cờ bạc trực tuyến/trên internet"
    },
    {
        word: "gathering",
        meaning: "buổi tụ họp, buổi họp mặt",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈɡæðərɪŋ/",
        example: "a social/family gathering",
        exampleTranslation: "một buổi tụ họp xã hội/gia đình"
    },
    {
        word: "gaze",
        meaning: "sự nhìn chằm chằm, ánh mắt",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɡeɪz/",
        example: "He met her gaze (= looked at her while she looked at him).",
        exampleTranslation: "Anh nhìn thẳng vào mắt cô ấy (= nhìn cô ấy trong khi cô ấy nhìn anh)."
    },
    {
        word: "gear",
        meaning: "bộ số, thiết bị, trang bị",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɡɪr/",
        example: "Careless use of the clutch may damage the gears.",
        exampleTranslation: "Việc sử dụng ly hợp bất cẩn có thể làm hỏng các bánh răng."
    },
    {
        word: "generic",
        meaning: "chung, chung chung, chung chung, chung chung, chung chung",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/dʒəˈnerɪk/",
        example: "‘Vine fruit’ is the generic term for currants and raisins.",
        exampleTranslation: "‘Trái cây nho’ là thuật ngữ chung cho nho khô và nho khô."
    },
    {
        word: "genocide",
        meaning: "diệt chủng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈdʒenəsaɪd/",
        example: "Refugees gave accounts of the mass genocide.",
        exampleTranslation: "Những người tị nạn đã kể lại vụ diệt chủng hàng loạt."
    },
    {
        word: "glance",
        meaning: "liếc nhìn, cái nhìn thoáng qua",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɡlæns/",
        example: "to take/have a glance at the newspaper headlines",
        exampleTranslation: "liếc nhìn/xem lướt qua tiêu đề báo"
    },
    {
        word: "glimpse",
        meaning: "nhìn thoáng qua, liếc nhìn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɡlɪmps/",
        example: "glimpse (of somebody/something) He caught a glimpse of her in the crowd.",
        exampleTranslation: "nhìn thoáng qua (ai đó/cái gì đó) Anh ta thoáng thấy cô ấy trong đám đông."
    },
    {
        word: "glorious",
        meaning: "vinh quang, huy hoàng, rực rỡ",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈɡlɔːriəs/",
        example: "We congratulate you on this glorious victory.",
        exampleTranslation: "Chúng tôi chúc mừng bạn vì chiến thắng huy hoàng này."
    },
    {
        word: "glory",
        meaning: "vinh quang, sự vinh quang, hào quang",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈɡlɔːri/",
        example: "Olympic glory in the 100 metres",
        exampleTranslation: "Vinh quang Olympic ở nội dung 100 mét"
    },
    {
        word: "governance",
        meaning: "quản trị",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈɡʌvərnəns/",
        example: "He emphasized the company's commitment to high standards of corporate governance.",
        exampleTranslation: "Ông nhấn mạnh cam kết của công ty đối với các tiêu chuẩn cao về quản trị doanh nghiệp."
    },
    {
        word: "grace",
        meaning: "duyên dáng, vẻ duyên dáng, ân sủng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɡreɪs/",
        example: "She moves with the natural grace of a ballerina.",
        exampleTranslation: "Cô ấy di chuyển với vẻ duyên dáng tự nhiên của một vũ công ballet."
    },
    {
        word: "grasp",
        meaning: "nắm giữ, sự nắm giữ, hiểu rõ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɡræsp/",
        example: "I grabbed him, but he slipped from my grasp.",
        exampleTranslation: "Tôi đã nắm lấy anh ấy, nhưng anh ấy đã tuột khỏi tay tôi."
    },
    {
        word: "grave",
        meaning: "nghiêm trọng, trầm trọng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɡreɪv/",
        example: "The police have expressed grave concern about the missing child's safety.",
        exampleTranslation: "Cảnh sát đã bày tỏ quan ngại sâu sắc về sự an toàn của đứa trẻ mất tích."
    },
    {
        word: "gravity",
        meaning: "sức hút, trọng lực, sự nghiêm túc",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈɡrævəti/",
        example: "Newton’s law of gravity",
        exampleTranslation: "Định luật vạn vật hấp dẫn của Newton"
    },
    {
        word: "grid",
        meaning: "lưới, mạng lưới",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɡrɪd/",
        example: "New York’s grid of streets",
        exampleTranslation: "Mạng lưới đường phố của New York"
    },
    {
        word: "grief",
        meaning: "sự đau buồn, nỗi buồn, tang tóc",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɡriːf/",
        example: "She was overcome with grief when her husband died.",
        exampleTranslation: "Cô ấy chết lặng vì đau buồn khi chồng qua đời."
    },
    {
        word: "grin",
        meaning: "nụ cười toe toét, cười toe toét",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɡrɪn/",
        example: "She gave a broad grin.",
        exampleTranslation: "Cô ấy cười toe toét."
    },
    {
        word: "grind",
        meaning: "nghiền, xay",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɡraɪnd/",
        example: "to grind coffee/corn",
        exampleTranslation: "nghiền cà phê/ngô"
    },
    {
        word: "grip",
        meaning: "sự nắm chặt, khả năng kiểm soát",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɡrɪp/",
        example: "Keep a tight grip on the rope.",
        exampleTranslation: "Giữ chặt dây thừng."
    },
    {
        word: "gross",
        meaning: "tổng, gộp, thô",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɡrəʊs/",
        example: "gross weight (= including the container or wrapping)",
        exampleTranslation: "trọng lượng cả bì (= bao gồm cả bao bì hoặc lớp bọc)"
    },
    {
        word: "guerrilla",
        meaning: "lính du kích",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɡəˈrɪlə/",
        example: "urban guerrillas (= those who fight in towns)",
        exampleTranslation: "lính du kích đô thị (= những người chiến đấu trong các thị trấn)"
    },
    {
        word: "guidance",
        meaning: "hướng dẫn, sự chỉ dẫn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈɡaɪdns/",
        example: "guidance for teachers on how to use video in the classroom",
        exampleTranslation: "hướng dẫn cho giáo viên về cách sử dụng video trong lớp học"
    },
    {
        word: "guilt",
        meaning: "tội lỗi, cảm giác tội lỗi",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɡɪlt/",
        example: "She had feelings of guilt about leaving her children and going to work.",
        exampleTranslation: "Cô ấy cảm thấy tội lỗi khi bỏ con lại và đi làm."
    },
    {
        word: "gut",
        meaning: "ruột",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɡʌt/",
        example: "It can take up to 72 hours for food to pass through the gut.",
        exampleTranslation: "Thức ăn có thể mất tới 72 giờ để đi qua ruột."
    },
    {
        word: "hail",
        meaning: "hô hào, chào đón",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/heɪl/",
        example: "be hailed (as) something The conference was hailed as a great success.",
        exampleTranslation: "được ca ngợi (như) một điều gì đó Hội nghị được ca ngợi là một thành công lớn."
    },
    {
        word: "halfway",
        meaning: "giữa chừng, nửa đường",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/ˌhæfˈweɪ/",
        example: "It's about halfway between London and Bristol.",
        exampleTranslation: "Nó cách khoảng nửa đường giữa Luân Đôn và Bristol."
    },
    {
        word: "halt",
        meaning: "dừng lại, sự dừng lại",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/hɔːlt/",
        example: "Work came to a halt when the machine broke down.",
        exampleTranslation: "Công việc đã phải dừng lại khi máy móc bị hỏng."
    },
    {
        word: "handful",
        meaning: "một nhúm, một ít",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈhændfʊl/",
        example: "a handful of rice",
        exampleTranslation: "một nhúm cơm"
    },
    {
        word: "handling",
        meaning: "sự xử lý, cách xử lý",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈhændlɪŋ/",
        example: "I was impressed by his handling of the affair.",
        exampleTranslation: "Tôi đã ấn tượng với cách anh ấy xử lý vụ việc."
    },
    {
        word: "handy",
        meaning: "tiện lợi, hữu ích",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈhændi/",
        example: "a handy little tool",
        exampleTranslation: "một công cụ nhỏ tiện lợi"
    },
    {
        word: "harassment",
        meaning: "sự quấy rối, sách nhiễu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈhærəsmənt/",
        example: "sexual/racial harassment",
        exampleTranslation: "quấy rối tình dục/chủng tộc"
    },
    {
        word: "hardware",
        meaning: "phần cứng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈhɑːrdwer/",
        example: "We supply computer hardware to businesses.",
        exampleTranslation: "Chúng tôi cung cấp phần cứng máy tính cho các doanh nghiệp."
    },
    {
        word: "harmony",
        meaning: "sự hài hòa, hòa hợp",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈhɑːrməni/",
        example: "social/racial harmony",
        exampleTranslation: "sự hài hòa xã hội/chủng tộc"
    },
    {
        word: "harsh",
        meaning: "khắc nghiệt, gay gắt, tàn nhẫn",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/hɑːrʃ/",
        example: "The punishment was harsh and unfair.",
        exampleTranslation: "Hình phạt thật khắc nghiệt và không công bằng."
    },
    {
        word: "harvest",
        meaning: "mùa gặt, sự gặt hái",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈhɑːrvɪst/",
        example: "harvest time",
        exampleTranslation: "thời gian thu hoạch"
    },
    {
        word: "hatred",
        meaning: "sự căm ghét, lòng thù ghét",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈheɪtrɪd/",
        example: "He looked at me with intense hatred.",
        exampleTranslation: "Anh ta nhìn tôi với sự căm ghét mãnh liệt."
    },
    {
        word: "haunt",
        meaning: "ám ảnh, rình rập",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/hɔːnt/",
        example: "A headless rider haunts the country lanes.",
        exampleTranslation: "Một kỵ sĩ không đầu ám ảnh trên những con đường quê."
    },
    {
        word: "hazard",
        meaning: "mối nguy hiểm, rủi ro",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈhæzərd/",
        example: "a fire/safety hazard",
        exampleTranslation: "mối nguy hiểm về hỏa hoạn/an toàn"
    },
    {
        word: "heighten",
        meaning: "làm tăng lên, làm cao lên",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈhaɪtn/",
        example: "Tension has heightened after the recent bomb attack.",
        exampleTranslation: "Căng thẳng đã gia tăng sau vụ đánh bom gần đây."
    },
    {
        word: "heritage",
        meaning: "di sản",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈherɪtɪdʒ/",
        example: "Spain’s rich cultural heritage",
        exampleTranslation: "di sản văn hóa phong phú của Tây Ban Nha"
    },
    {
        word: "hierarchy",
        meaning: "hệ thống cấp bậc",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈhaɪərɑːrki/",
        example: "the social/political hierarchy",
        exampleTranslation: "hệ thống cấp bậc xã hội/chính trị"
    },
    {
        word: "high-profile",
        meaning: "nổi bật, được chú ý",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌhaɪ ˈprəʊfaɪl/",
        example: "a high-profile campaign",
        exampleTranslation: "một chiến dịch thu hút sự chú ý"
    },
    {
        word: "hint",
        meaning: "dấu hiệu, gợi ý",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/hɪnt/",
        example: "He gave a broad hint (= one that was obvious) that he was thinking of retiring.",
        exampleTranslation: "Anh ta đã đưa ra một gợi ý rõ ràng (= một gợi ý hiển nhiên) rằng anh ta đang nghĩ đến việc nghỉ hưu."
    },
    {
        word: "homeland",
        meaning: "quê hương, đất nước",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈhəʊmlænd/",
        example: "Many refugees have been forced to flee their homeland.",
        exampleTranslation: "Nhiều người tị nạn đã buộc phải rời bỏ quê hương của họ."
    },
    {
        word: "hook",
        meaning: "móc, gắn",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/hʊk/",
        example: "+ adv./prep. We hooked the trailer to the back of the car.",
        exampleTranslation: "+ adv./prep. Chúng tôi đã móc moóc vào phía sau xe ô tô."
    },
    {
        word: "hopeful",
        meaning: "hy vọng, đầy hy vọng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈhəʊpfl/",
        example: "hopeful (that…) I feel hopeful that we'll find a suitable house very soon.",
        exampleTranslation: "hy vọng (rằng…) Tôi cảm thấy hy vọng rằng chúng tôi sẽ tìm được một ngôi nhà phù hợp rất sớm."
    },
    {
        word: "horizon",
        meaning: "chân trời",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/həˈraɪzn/",
        example: "The sun sank below the horizon.",
        exampleTranslation: "Mặt trời lặn xuống dưới đường chân trời."
    },
    {
        word: "horn",
        meaning: "sừng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/hɔːrn/",
        example: "a large bull with curved horns",
        exampleTranslation: "một con bò mộng lớn với sừng cong"
    },
    {
        word: "hostage",
        meaning: "con tin",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈhɑːstɪdʒ/",
        example: "Three children were taken hostage during the bank robbery.",
        exampleTranslation: "Ba đứa trẻ đã bị bắt làm con tin trong vụ cướp ngân hàng."
    },
    {
        word: "hostile",
        meaning: "thù địch, chống đối",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈhɑːstaɪl/",
        example: "The speaker got a hostile reception from the audience.",
        exampleTranslation: "Bài phát biểu đã nhận được sự đón tiếp thù địch từ khán giả."
    },
    {
        word: "hostility",
        meaning: "sự thù địch, thái độ chống đối",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/hɑːˈstɪləti/",
        example: "There was a barely veiled hostility in her tone.",
        exampleTranslation: "Có một sự thù địch gần như lộ rõ trong giọng điệu của cô ấy."
    },
    {
        word: "humanitarian",
        meaning: "nhân đạo",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/hjuːˌmænɪˈteriən/",
        example: "to provide humanitarian aid to the war zone",
        exampleTranslation: "cung cấp viện trợ nhân đạo cho vùng chiến sự"
    },
    {
        word: "humanity",
        meaning: "loài người, nhân loại",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/hjuːˈmænəti/",
        example: "He was found guilty of crimes against humanity.",
        exampleTranslation: "Ông ta bị kết tội phạm tội chống lại loài người."
    },
    {
        word: "humble",
        meaning: "khiêm tốn",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈhʌmbl/",
        example: "Be humble enough to learn from your mistakes.",
        exampleTranslation: "Hãy khiêm tốn để học hỏi từ những sai lầm của bạn."
    },
    {
        word: "hydrogen",
        meaning: "hydro",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈhaɪdrədʒən/",
        example: "This is an example of hydrogen.",
        exampleTranslation: "Đây là một ví dụ về hydro."
    },
    {
        word: "identification",
        meaning: "sự nhận dạng, sự nhận diện",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/aɪˌdentɪfɪˈkeɪʃn/",
        example: "The identification of the crash victims was a long and difficult task.",
        exampleTranslation: "Việc nhận dạng các nạn nhân vụ tai nạn là một nhiệm vụ dài và khó khăn."
    },
    {
        word: "ideological",
        meaning: "thuộc về hệ tư tưởng, mang tính lý luận",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌaɪdiəˈlɑːdʒɪkl/",
        example: "ideological differences",
        exampleTranslation: "sự khác biệt về hệ tư tưởng"
    },
    {
        word: "ideology",
        meaning: "hệ tư tưởng, ý thức hệ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌaɪdiˈɑːlədʒi/",
        example: "Marxist/capitalist ideology",
        exampleTranslation: "hệ tư tưởng Marx/tư bản"
    },
    {
        word: "idiot",
        meaning: "kẻ ngu ngốc, đồ ngốc",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈɪdiət/",
        example: "When I lost my passport, I felt such an idiot.",
        exampleTranslation: "Khi tôi làm mất hộ chiếu, tôi cảm thấy mình thật là một kẻ ngốc."
    },
    {
        word: "ignorance",
        meaning: "sự ngu dốt, thiếu hiểu biết",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈɪɡnərəns/",
        example: "They fought a long battle against prejudice and ignorance.",
        exampleTranslation: "Họ đã chiến đấu một trận chiến dài chống lại định kiến và sự ngu dốt."
    },
    {
        word: "imagery",
        meaning: "hình ảnh, phép ẩn dụ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈɪmɪdʒəri/",
        example: "poetic imagery",
        exampleTranslation: "hình ảnh thơ ca"
    },
    {
        word: "immense",
        meaning: "to lớn, mênh mông",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɪˈmens/",
        example: "There is still an immense amount of work to be done.",
        exampleTranslation: "Vẫn còn một khối lượng công việc khổng lồ phải thực hiện."
    },
    {
        word: "imminent",
        meaning: "sắp xảy ra, cận kề",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈɪmɪnənt/",
        example: "the imminent threat of invasion",
        exampleTranslation: "mối đe dọa xâm lược sắp xảy ra"
    },
    {
        word: "implementation",
        meaning: "sự thực hiện, sự triển khai",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌɪmplɪmenˈteɪʃn/",
        example: "the implementation of the new system",
        exampleTranslation: "việc triển khai hệ thống mới"
    },
    {
        word: "imprison",
        meaning: "giam cầm, bỏ tù",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪmˈprɪzn/",
        example: "be imprisoned (for something) They were imprisoned for possession of drugs.",
        exampleTranslation: "bị bỏ tù (vì điều gì đó) Họ đã bị bỏ tù vì tàng trữ ma túy."
    },
    {
        word: "imprisonment",
        meaning: "sự bỏ tù, sự giam cầm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪmˈprɪznmənt/",
        example: "to be sentenced to life imprisonment for murder",
        exampleTranslation: "bị kết án chung thân vì tội giết người"
    },
    {
        word: "inability",
        meaning: "sự không có khả năng, sự bất lực",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌɪnəˈbɪləti/",
        example: "the government’s inability to provide basic services",
        exampleTranslation: "sự bất lực của chính phủ trong việc cung cấp các dịch vụ cơ bản"
    },
    {
        word: "inadequate",
        meaning: "không đủ, thiếu sót",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɪnˈædɪkwət/",
        example: "inadequate supplies",
        exampleTranslation: "những nguồn cung cấp không đủ"
    },
    {
        word: "inappropriate",
        meaning: "không phù hợp, không thích hợp",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌɪnəˈprəʊpriət/",
        example: "inappropriate behaviour/language",
        exampleTranslation: "hành vi/ngôn ngữ không phù hợp"
    },
    {
        word: "incidence",
        meaning: "tỷ lệ mắc, tần suất",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈɪnsɪdəns/",
        example: "an area with a high incidence of crime",
        exampleTranslation: "một khu vực có tỷ lệ tội phạm cao"
    },
    {
        word: "inclined",
        meaning: "có khuynh hướng, có xu hướng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɪnˈklaɪnd/",
        example: "She was inclined to trust him.",
        exampleTranslation: "Cô ấy có xu hướng tin tưởng anh ấy."
    },
    {
        word: "inclusion",
        meaning: "sự bao gồm, sự bao hàm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪnˈkluːʒn/",
        example: "His inclusion in the team is in doubt.",
        exampleTranslation: "Việc anh ấy có mặt trong đội vẫn còn là điều đáng nghi ngờ."
    },
    {
        word: "incur",
        meaning: "gánh chịu, mắc phải",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪnˈkɜːr/",
        example: "She had incurred the wrath of her father by marrying without his consent.",
        exampleTranslation: "Cô ấy đã phải hứng chịu cơn thịnh nộ của cha mình vì kết hôn mà không có sự đồng ý của ông."
    },
    {
        word: "indicator",
        meaning: "chỉ báo, yếu tố chỉ báo",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈɪndɪkeɪtər/",
        example: "The economic indicators are better than expected.",
        exampleTranslation: "Các chỉ số kinh tế tốt hơn mong đợi."
    },
    {
        word: "indictment",
        meaning: "bản cáo trạng, lời buộc tội",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪnˈdaɪtmənt/",
        example: "The poverty in our cities is a damning indictment of modern society.",
        exampleTranslation: "Sự nghèo đói trong các thành phố của chúng ta là lời buộc tội đanh thép đối với xã hội hiện đại."
    },
    {
        word: "indigenous",
        meaning: "bản địa, thổ dân",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɪnˈdɪdʒənəs/",
        example: "the indigenous peoples/languages of an area",
        exampleTranslation: "các dân tộc/ngôn ngữ bản địa của một khu vực"
    },
    {
        word: "induce",
        meaning: "xúi giục, dẫn đến",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪnˈduːs/",
        example: "Nothing would induce me to take the job.",
        exampleTranslation: "Không điều gì có thể xúi giục tôi nhận công việc đó."
    },
    {
        word: "indulge",
        meaning: "chiều theo ý muốn, nuông chiều",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪnˈdʌldʒ/",
        example: "indulge in something They went into town to indulge in some serious shopping.",
        exampleTranslation: "chiều theo ý muốn/làm việc gì đó Họ đi vào thị trấn để chiều theo ý muốn mua sắm thả ga."
    },
    {
        word: "inequality",
        meaning: "sự bất bình đẳng, sự chênh lệch",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌɪnɪˈkwɑːləti/",
        example: "We need to tackle inequality of opportunity wherever we find it.",
        exampleTranslation: "Chúng ta cần giải quyết sự bất bình đẳng về cơ hội ở bất cứ đâu chúng ta tìm thấy."
    },
    {
        word: "infamous",
        meaning: "tai tiếng, khét tiếng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈɪnfəməs/",
        example: "a general who was infamous for his brutality",
        exampleTranslation: "một vị tướng khét tiếng về sự tàn bạo của mình"
    },
    {
        word: "infant",
        meaning: "trẻ sơ sinh",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈɪnfənt/",
        example: "a nursery for infants under two",
        exampleTranslation: "một nhà trẻ cho trẻ sơ sinh dưới hai tuổi"
    },
    {
        word: "infect",
        meaning: "lây nhiễm, nhiễm trùng",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪnˈfekt/",
        example: "infect somebody/something (with something) It is not possible to infect another person through kissing.",
        exampleTranslation: "lây nhiễm cho ai đó/thứ gì đó (bởi thứ gì đó) Không thể lây nhiễm cho người khác qua nụ hôn."
    },
    {
        word: "inflict",
        meaning: "gây ra, giáng (đòn)",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪnˈflɪkt/",
        example: "on/upon somebody/something They inflicted a humiliating defeat on the home team.",
        exampleTranslation: "lên/đối với ai đó/thứ gì đó Họ đã giáng một thất bại đáng xấu hổ lên đội chủ nhà."
    },
    {
        word: "influential",
        meaning: "có ảnh hưởng, có tác động lớn",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌɪnfluˈenʃl/",
        example: "a highly influential book",
        exampleTranslation: "một cuốn sách có ảnh hưởng lớn"
    },
    {
        word: "inherent",
        meaning: "vốn có, cố hữu",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɪnˈhɪrənt/",
        example: "the difficulties inherent in a study of this type",
        exampleTranslation: "những khó khăn vốn có trong một nghiên cứu loại này"
    },
    {
        word: "inhibit",
        meaning: "ngăn cản, kìm hãm",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪnˈhɪbɪt/",
        example: "A lack of oxygen may inhibit brain development in the unborn child.",
        exampleTranslation: "Thiếu oxy có thể cản trở sự phát triển não bộ ở thai nhi."
    },
    {
        word: "initiate",
        meaning: "khởi xướng, bắt đầu",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪˈnɪʃieɪt/",
        example: "to initiate legal proceedings against somebody",
        exampleTranslation: "khởi kiện pháp lý chống lại ai đó"
    },
    {
        word: "inject",
        meaning: "tiêm",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪnˈdʒekt/",
        example: "(into yourself/somebody/something) Adrenaline was injected into the muscle.",
        exampleTranslation: "(vào bản thân/ai đó/thứ gì đó) Adrenaline đã được tiêm vào cơ."
    },
    {
        word: "injection",
        meaning: "sự tiêm, mũi tiêm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪnˈdʒekʃn/",
        example: "to give somebody an injection",
        exampleTranslation: "tiêm cho ai đó một mũi tiêm"
    },
    {
        word: "injustice",
        meaning: "sự bất công",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪnˈdʒʌstɪs/",
        example: "We are committed to fighting against poverty and injustice.",
        exampleTranslation: "Chúng tôi cam kết đấu tranh chống lại đói nghèo và bất công."
    },
    {
        word: "inmate",
        meaning: "người ở trong (nhà tù, bệnh viện tâm thần)",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈɪnmeɪt/",
        example: "The jail has 500 inmates.",
        exampleTranslation: "Nhà tù có 500 tù nhân."
    },
    {
        word: "insertion",
        meaning: "sự chèn vào, sự đưa vào",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪnˈsɜːrʃn/",
        example: "An examination is carried out before the insertion of the tube.",
        exampleTranslation: "Một cuộc kiểm tra được thực hiện trước khi đưa ống nội soi vào."
    },
    {
        word: "insider",
        meaning: "người trong cuộc",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪnˈsaɪdər/",
        example: "The situation was described by one insider as ‘absolute chaos’.",
        exampleTranslation: "Tình hình được một người trong cuộc mô tả là 'hỗn loạn hoàn toàn'."
    },
    {
        word: "inspect",
        meaning: "thanh tra, kiểm tra",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪnˈspekt/",
        example: "inspect something/somebody The teacher walked around inspecting their work.",
        exampleTranslation: "Giáo viên đi quanh để kiểm tra bài làm của học sinh."
    },
    {
        word: "inspection",
        meaning: "sự thanh tra, sự kiểm tra",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪnˈspekʃn/",
        example: "Regular inspections are carried out at the prison.",
        exampleTranslation: "Các cuộc kiểm tra định kỳ được thực hiện tại nhà tù."
    },
    {
        word: "inspiration",
        meaning: "cảm hứng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌɪnspəˈreɪʃn/",
        example: "Dreams can be a rich source of inspiration for an artist.",
        exampleTranslation: "Giấc mơ có thể là một nguồn cảm hứng phong phú cho một nghệ sĩ."
    },
    {
        word: "instinct",
        meaning: "bản năng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈɪnstɪŋkt/",
        example: "She did not seem to have any of the usual maternal instincts.",
        exampleTranslation: "Cô ấy dường như không có bất kỳ bản năng làm mẹ thông thường nào."
    },
    {
        word: "institutional",
        meaning: "thuộc về tổ chức, thể chế",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌɪnstɪˈtuːʃənl/",
        example: "institutional investors",
        exampleTranslation: "nhà đầu tư tổ chức"
    },
    {
        word: "instruct",
        meaning: "chỉ dẫn, hướng dẫn, ra lệnh",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪnˈstrʌkt/",
        example: "The letter instructed him to report to headquarters immediately.",
        exampleTranslation: "Bức thư hướng dẫn anh ta báo cáo ngay lập tức về trụ sở chính."
    },
    {
        word: "instrumental",
        meaning: "mang tính công cụ, góp phần, có vai trò quan trọng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌɪnstrəˈmentl/",
        example: "The Conservation Trust performs an instrumental role in the protection of rural environments.",
        exampleTranslation: "Quỹ Bảo tồn đóng một vai trò quan trọng trong việc bảo vệ môi trường nông thôn."
    },
    {
        word: "insufficient",
        meaning: "không đủ",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌɪnsəˈfɪʃnt/",
        example: "insufficient time",
        exampleTranslation: "không đủ thời gian"
    },
    {
        word: "insult",
        meaning: "sự lăng mạ, lời lăng mạ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈɪnsʌlt/",
        example: "The crowd were shouting insults at the police.",
        exampleTranslation: "Đám đông đang hét lên những lời lăng mạ cảnh sát."
    },
    {
        word: "intact",
        meaning: "nguyên vẹn, không bị hư hại",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɪnˈtækt/",
        example: "Most of the house remains intact even after two hundred years.",
        exampleTranslation: "Phần lớn ngôi nhà vẫn còn nguyên vẹn ngay cả sau hai trăm năm."
    },
    {
        word: "intake",
        meaning: "sự tiếp nhận, lượng tiêu thụ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈɪnteɪk/",
        example: "high fluid intake",
        exampleTranslation: "lượng chất lỏng tiêu thụ cao"
    },
    {
        word: "integral",
        meaning: "không thể thiếu, thiết yếu",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɪnˈteɡrəl/",
        example: "Music is an integral part of the school's curriculum.",
        exampleTranslation: "Âm nhạc là một phần không thể thiếu trong chương trình giảng dạy của trường."
    },
    {
        word: "integrated",
        meaning: "tích hợp, thống nhất",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈɪntɪɡreɪtɪd/",
        example: "an integrated programme of patient care",
        exampleTranslation: "một chương trình chăm sóc bệnh nhân tích hợp"
    },
    {
        word: "integration",
        meaning: "sự tích hợp, sự hợp nhất",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌɪntɪˈɡreɪʃn/",
        example: "The aim is to promote closer economic integration.",
        exampleTranslation: "Mục tiêu là thúc đẩy sự hội nhập kinh tế chặt chẽ hơn."
    },
    {
        word: "integrity",
        meaning: "sự liêm chính, tính chính trực, tính toàn vẹn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪnˈteɡrəti/",
        example: "personal/professional/artistic integrity",
        exampleTranslation: "liêm chính cá nhân/chuyên nghiệp/nghệ thuật"
    },
    {
        word: "intellectual",
        meaning: "nhà trí thức",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌɪntəˈlektʃuəl/",
        example: "He was a leading intellectual of his day.",
        exampleTranslation: "Ông là một trí thức hàng đầu của thời đại mình."
    },
    {
        word: "intensify",
        meaning: "làm tăng cường, làm dữ dội, làm mạnh lên",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪnˈtensɪfaɪ/",
        example: "Violence intensified during the night.",
        exampleTranslation: "Bạo lực gia tăng trong đêm."
    },
    {
        word: "intensity",
        meaning: "cường độ, độ mạnh",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪnˈtensəti/",
        example: "intensity of light/sound/colour",
        exampleTranslation: "cường độ ánh sáng/âm thanh/màu sắc"
    },
    {
        word: "intensive",
        meaning: "chuyên sâu, cường độ cao",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɪnˈtensɪv/",
        example: "an intensive language course",
        exampleTranslation: "một khóa học ngôn ngữ chuyên sâu"
    },
    {
        word: "intent",
        meaning: "ý định, mục đích",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪnˈtent/",
        example: "She denies possessing the drug with intent to supply.",
        exampleTranslation: "Cô ấy phủ nhận việc tàng trữ ma túy với ý định cung cấp."
    },
    {
        word: "interactive",
        meaning: "tương tác",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌɪntərˈæktɪv/",
        example: "interactive displays/video",
        exampleTranslation: "các màn hình/video tương tác"
    },
    {
        word: "interface",
        meaning: "giao diện",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈɪntərfeɪs/",
        example: "the user interface",
        exampleTranslation: "giao diện người dùng"
    },
    {
        word: "interfere",
        meaning: "can thiệp, xen vào",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˌɪntərˈfɪr/",
        example: "I wish my mother would stop interfering and let me make my own decisions.",
        exampleTranslation: "Tôi ước gì mẹ tôi ngừng xen vào và để tôi tự đưa ra quyết định."
    },
    {
        word: "interference",
        meaning: "sự can thiệp, sự xen vào",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌɪntərˈfɪrəns/",
        example: "interference (in something) They resent foreign interference in the internal affairs of their country.",
        exampleTranslation: "sự can thiệp (vào việc gì đó) Họ bất bình trước sự can thiệp của nước ngoài vào công việc nội bộ của đất nước họ."
    },
    {
        word: "interim",
        meaning: "tạm thời, lâm thời",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈɪntərɪm/",
        example: "an interim government/measure/report",
        exampleTranslation: "chính phủ/biện pháp/báo cáo lâm thời"
    },
    {
        word: "interior",
        meaning: "bên trong, nội bộ",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɪnˈtɪriər/",
        example: "interior walls",
        exampleTranslation: "tường bên trong"
    },
    {
        word: "intermediate",
        meaning: "trung cấp, ở giữa",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌɪntərˈmiːdiət/",
        example: "an intermediate stage/step in a process",
        exampleTranslation: "một giai đoạn/bước trung gian trong một quá trình"
    },
    {
        word: "intervene",
        meaning: "can thiệp, xen vào",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˌɪntərˈviːn/",
        example: "She might have been killed if the neighbours hadn't intervened.",
        exampleTranslation: "Cô ấy có thể đã chết nếu hàng xóm không can thiệp."
    },
    {
        word: "intervention",
        meaning: "sự can thiệp",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌɪntərˈvenʃn/",
        example: "calls for government intervention to save the steel industry",
        exampleTranslation: "kêu gọi chính phủ can thiệp để cứu ngành thép"
    },
    {
        word: "intimate",
        meaning: "thân mật, sâu sắc",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈɪntɪmət/",
        example: "intimate friends",
        exampleTranslation: "những người bạn thân thiết"
    },
    {
        word: "intriguing",
        meaning: "hấp dẫn, lôi cuốn, gợi tò mò",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɪnˈtriːɡɪŋ/",
        example: "These discoveries raise intriguing questions.",
        exampleTranslation: "Những khám phá này đặt ra những câu hỏi hấp dẫn."
    },
    {
        word: "investigator",
        meaning: "người điều tra, điều tra viên",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪnˈvestɪɡeɪtər/",
        example: "air safety investigators",
        exampleTranslation: "các điều tra viên an toàn hàng không"
    },
    {
        word: "invisible",
        meaning: "vô hình, không nhìn thấy được",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɪnˈvɪzəbl/",
        example: "a wizard who could make himself invisible",
        exampleTranslation: "một phù thủy có thể làm cho bản thân trở nên vô hình"
    },
    {
        word: "invoke",
        meaning: "kêu gọi, viện dẫn, áp dụng",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɪnˈvəʊk/",
        example: "It is unlikely that libel laws will be invoked.",
        exampleTranslation: "Khó có khả năng luật phỉ báng sẽ được viện dẫn."
    },
    {
        word: "involvement",
        meaning: "sự tham gia, sự dính líu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɪnˈvɑːlvmənt/",
        example: "involvement in something US involvement in European wars",
        exampleTranslation: "sự can dự của Hoa Kỳ vào các cuộc chiến tranh châu Âu"
    },
    {
        word: "ironic",
        meaning: "trớ trêu, nghịch lý",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/aɪˈrɑːnɪk/",
        example: "an ironic comment",
        exampleTranslation: "một lời nhận xét đầy mỉa mai"
    },
    {
        word: "ironically",
        meaning: "một cách trớ trêu, một cách nghịch lý",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/aɪˈrɑːnɪkli/",
        example: "He smiled ironically.",
        exampleTranslation: "Anh ta mỉm cười một cách đầy mỉa mai."
    },
    {
        word: "irony",
        meaning: "sự trớ trêu, sự nghịch lý",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈaɪrəni/",
        example: "It was one of life's little ironies.",
        exampleTranslation: "Đó là một trong những nghịch lý nhỏ của cuộc đời."
    },
    {
        word: "irrelevant",
        meaning: "không liên quan, không thích hợp",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ɪˈreləvənt/",
        example: "totally/completely/largely irrelevant",
        exampleTranslation: "hoàn toàn/hoàn toàn/phần lớn không liên quan"
    },
    {
        word: "isolation",
        meaning: "sự cô lập, sự cách ly",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌaɪsəˈleɪʃn/",
        example: "geographical isolation",
        exampleTranslation: "sự cô lập về địa lý"
    },
    {
        word: "judicial",
        meaning: "tư pháp, thuộc về pháp luật",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/dʒuˈdɪʃl/",
        example: "judicial powers",
        exampleTranslation: "quyền tư pháp"
    },
    {
        word: "junction",
        meaning: "ngã ba, điểm giao nhau, nút giao thông",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈdʒʌŋkʃn/",
        example: "It was near the junction of City Road and Old Street.",
        exampleTranslation: "Nó ở gần ngã ba đường City và đường Old."
    },
    {
        word: "jurisdiction",
        meaning: "quyền tài phán, thẩm quyền, phạm vi quyền hạn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌdʒʊrɪsˈdɪkʃn/",
        example: "jurisdiction over somebody/something The English court had no jurisdiction over the defendants.",
        exampleTranslation: "quyền tài phán đối với ai đó/cái gì đó Tòa án Anh không có thẩm quyền đối với các bị cáo."
    },
    {
        word: "just",
        meaning: "công bằng, chính đáng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/dʒʌst/",
        example: "a just decision/law/society",
        exampleTranslation: "một quyết định/luật/xã hội công bằng"
    },
    {
        word: "justification",
        meaning: "sự biện minh, sự bào chữa",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌdʒʌstɪfɪˈkeɪʃn/",
        example: "justification for doing something I can see no possible justification for any further tax increases.",
        exampleTranslation: "lý do để làm điều gì đó Tôi không thể thấy bất kỳ lý do nào có thể cho việc tăng thuế thêm nữa."
    },
    {
        word: "kidnap",
        meaning: "bắt cóc",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈkɪdnæp/",
        example: "Two businessmen have been kidnapped by terrorists.",
        exampleTranslation: "Hai doanh nhân đã bị bọn khủng bố bắt cóc."
    },
    {
        word: "kidney",
        meaning: "thận",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkɪdni/",
        example: "a kidney infection",
        exampleTranslation: "một bệnh nhiễm trùng thận"
    },
    {
        word: "kingdom",
        meaning: "vương quốc",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkɪŋdəm/",
        example: "the United Kingdom",
        exampleTranslation: "Vương quốc Anh"
    },
    {
        word: "lad",
        meaning: "chàng trai, cậu bé",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/læd/",
        example: "Things have changed since I was a lad.",
        exampleTranslation: "Mọi thứ đã thay đổi kể từ khi tôi còn là một cậu bé."
    },
    {
        word: "landlord",
        meaning: "chủ nhà",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈlændlɔːrd/",
        example: "a buy-to-let landlord (= who buys houses and flats in order to rent them out)",
        exampleTranslation: "chủ nhà cho thuê (= người mua nhà và căn hộ để cho thuê)"
    },
    {
        word: "landmark",
        meaning: "địa danh, điểm mốc, công trình nổi tiếng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈlændmɑːrk/",
        example: "The Empire State Building is a familiar landmark on the New York skyline.",
        exampleTranslation: "Tòa nhà Empire State là một địa danh quen thuộc trên đường chân trời New York."
    },
    {
        word: "lap",
        meaning: "vòng, lòng, lòng ghế",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/læp/",
        example: "on somebody's lap There's only one seat so you'll have to sit on my lap.",
        exampleTranslation: "trên lòng ai đó Chỉ có một chỗ ngồi nên bạn sẽ phải ngồi vào lòng tôi."
    },
    {
        word: "large-scale",
        meaning: "quy mô lớn",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌlɑːrdʒ ˈskeɪl/",
        example: "Large areas of the forest will be cleared for ranching as part of a large-scale development plan.",
        exampleTranslation: "Nhiều khu vực của rừng sẽ bị chặt phá để chăn nuôi như một phần của kế hoạch phát triển quy mô lớn."
    },
    {
        word: "laser",
        meaning: "tia laser",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈleɪzər/",
        example: "a laser beam",
        exampleTranslation: "một tia laser"
    },
    {
        word: "latter",
        meaning: "cái sau, cái cuối",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈlætər/",
        example: "He chose the latter option.",
        exampleTranslation: "Anh ấy đã chọn phương án sau."
    },
    {
        word: "lawn",
        meaning: "bãi cỏ, thảm cỏ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/lɔːn/",
        example: "In summer we have to mow the lawn twice a week.",
        exampleTranslation: "Vào mùa hè, chúng tôi phải cắt cỏ hai lần một tuần."
    },
    {
        word: "lawsuit",
        meaning: "vụ kiện, đơn kiện",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈlɔːsuːt/",
        example: "He filed a lawsuit against his record label.",
        exampleTranslation: "Anh ta đệ đơn kiện hãng thu âm của mình."
    },
    {
        word: "layout",
        meaning: "bố cục, cách bố trí",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈleɪaʊt/",
        example: "the layout of streets",
        exampleTranslation: "bố cục đường phố"
    },
    {
        word: "leak",
        meaning: "vết rò rỉ, sự rò rỉ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/liːk/",
        example: "a leak in the roof",
        exampleTranslation: "một chỗ rò rỉ trên mái nhà"
    },
    {
        word: "leap",
        meaning: "bước nhảy, cú nhảy",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/liːp/",
        example: "a leap of six metres",
        exampleTranslation: "một bước nhảy sáu mét"
    },
    {
        word: "legacy",
        meaning: "di sản, tài sản thừa kế",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈleɡəsi/",
        example: "They each received a legacy of $5 000.",
        exampleTranslation: "Mỗi người trong số họ nhận được một tài sản thừa kế là 5.000 đô la."
    },
    {
        word: "legendary",
        meaning: "huyền thoại, truyền thuyết",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈledʒənderi/",
        example: "a legendary figure",
        exampleTranslation: "một nhân vật huyền thoại"
    },
    {
        word: "legislation",
        meaning: "luật pháp, pháp luật, đạo luật",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌledʒɪsˈleɪʃn/",
        example: "an important piece of legislation",
        exampleTranslation: "một đạo luật quan trọng"
    },
    {
        word: "legislative",
        meaning: "lập pháp",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈledʒɪsleɪtɪv/",
        example: "a legislative assembly/body/council",
        exampleTranslation: "một hội đồng/cơ quan/hội đồng lập pháp"
    },
    {
        word: "legislature",
        meaning: "cơ quan lập pháp, nghị viện",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈledʒɪsleɪtʃər/",
        example: "a democratically elected legislature",
        exampleTranslation: "một cơ quan lập pháp được bầu cử dân chủ"
    },
    {
        word: "legitimate",
        meaning: "hợp pháp, chính đáng, chính thống",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/lɪˈdʒɪtɪmət/",
        example: "a legitimate grievance",
        exampleTranslation: "một lời phàn nàn chính đáng"
    },
    {
        word: "lengthy",
        meaning: "dài dòng, kéo dài",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈleŋkθi/",
        example: "lengthy delays",
        exampleTranslation: "những sự chậm trễ kéo dài"
    },
    {
        word: "lesbian",
        meaning: "đồng tính nữ",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈlezbiən/",
        example: "the lesbian and gay community",
        exampleTranslation: "cộng đồng đồng tính nữ và đồng tính nam"
    },
    {
        word: "lesser",
        meaning: "ít hơn, nhỏ hơn, kém quan trọng hơn",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈlesər/",
        example: "people of lesser importance",
        exampleTranslation: "những người kém quan trọng hơn"
    },
    {
        word: "lethal",
        meaning: "gây chết người, chí mạng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈliːθl/",
        example: "She had been given a lethal dose of poison.",
        exampleTranslation: "Cô ấy đã được cho một liều thuốc độc gây chết người."
    },
    {
        word: "liable",
        meaning: "chịu trách nhiệm, có nghĩa vụ pháp lý",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈlaɪəbl/",
        example: "You will be liable for any damage caused.",
        exampleTranslation: "Bạn sẽ phải chịu trách nhiệm cho bất kỳ thiệt hại nào gây ra."
    },
    {
        word: "liberal",
        meaning: "tự do, khoáng đạt, rộng rãi",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈlɪbərəl/",
        example: "liberal attitudes/views/opinions",
        exampleTranslation: "thái độ/quan điểm/ý kiến tự do"
    },
    {
        word: "liberation",
        meaning: "sự giải phóng, sự giải thoát",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌlɪbəˈreɪʃn/",
        example: "a war of liberation",
        exampleTranslation: "một cuộc chiến tranh giải phóng"
    },
    {
        word: "liberty",
        meaning: "tự do, quyền tự do",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈlɪbərti/",
        example: "the fight for justice and liberty",
        exampleTranslation: "cuộc đấu tranh cho công lý và tự do"
    },
    {
        word: "license",
        meaning: "cấp phép, cấp bằng",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈlaɪsns/",
        example: "The new drug has not yet been licensed in the US.",
        exampleTranslation: "Thuốc mới vẫn chưa được cấp phép tại Mỹ."
    },
    {
        word: "lifelong",
        meaning: "suốt đời, cả đời",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈlaɪflɔːŋ/",
        example: "Paul became his lifelong friend.",
        exampleTranslation: "Paul đã trở thành người bạn suốt đời của anh ấy."
    },
    {
        word: "likelihood",
        meaning: "khả năng xảy ra, sự có thể",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈlaɪklihʊd/",
        example: "There is very little likelihood of that happening.",
        exampleTranslation: "Khả năng điều đó xảy ra là rất thấp."
    },
    {
        word: "limb",
        meaning: "chi (cơ thể), chân tay",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/lɪm/",
        example: "an artificial limb",
        exampleTranslation: "một chi nhân tạo"
    },
    {
        word: "line-up",
        meaning: "đội hình, danh sách (người tham gia), sự sắp xếp",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈlaɪn ʌp/",
        example: "an impressive line-up of speakers",
        exampleTranslation: "một danh sách diễn giả ấn tượng"
    },
    {
        word: "linear",
        meaning: "tuyến tính, theo đường thẳng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈlɪniər/",
        example: "In his art he broke the laws of scientific linear perspective.",
        exampleTranslation: "Trong nghệ thuật của mình, anh ấy đã phá vỡ các quy luật của phối cảnh tuyến tính khoa học."
    },
    {
        word: "linger",
        meaning: "nán lại, lưu lại, kéo dài",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈlɪŋɡər/",
        example: "The faint smell of her perfume lingered in the room.",
        exampleTranslation: "Mùi nước hoa thoang thoảng của cô ấy vẫn còn vương vấn trong phòng."
    },
    {
        word: "listing",
        meaning: "danh sách, bảng liệt kê",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈlɪstɪŋ/",
        example: "a comprehensive listing of all airlines",
        exampleTranslation: "một danh sách đầy đủ tất cả các hãng hàng không"
    },
    {
        word: "literacy",
        meaning: "sự biết đọc biết viết, trình độ học vấn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈlɪtərəsi/",
        example: "a campaign to promote adult literacy",
        exampleTranslation: "một chiến dịch thúc đẩy trình độ học vấn của người lớn"
    },
    {
        word: "liver",
        meaning: "gan (bộ phận cơ thể)",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈlɪvər/",
        example: "liver disease",
        exampleTranslation: "bệnh gan"
    },
    {
        word: "lobby",
        meaning: "sảnh, hành lang (khách sạn)",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈlɑːbi/",
        example: "a hotel lobby",
        exampleTranslation: "sảnh khách sạn"
    },
    {
        word: "log",
        meaning: "khúc gỗ, gỗ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/lɔːɡ/",
        example: "logs for the fire",
        exampleTranslation: "những khúc gỗ để đốt lửa"
    },
    {
        word: "logic",
        meaning: "logic, lập luận hợp lý",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈlɑːdʒɪk/",
        example: "I fail to see the logic behind his argument.",
        exampleTranslation: "Tôi không thể thấy được logic đằng sau lập luận của anh ấy."
    },
    {
        word: "long-standing",
        meaning: "lâu đời, tồn tại lâu năm",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌlɔːŋ ˈstændɪŋ/",
        example: "a long-standing relationship",
        exampleTranslation: "một mối quan hệ lâu dài"
    },
    {
        word: "long-time",
        meaning: "lâu năm, lâu đời (tính từ chỉ thời gian)",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈlɔːŋ taɪm/",
        example: "his long-time colleague",
        exampleTranslation: "đồng nghiệp lâu năm của anh ấy"
    },
    {
        word: "loom",
        meaning: "hiện ra lờ mờ, thấp thoáng",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/luːm/",
        example: "A dark shape loomed up ahead of us.",
        exampleTranslation: "Một hình dáng tối đen hiện ra lờ mờ phía trước chúng tôi."
    },
    {
        word: "loop",
        meaning: "vòng lặp, vòng tròn, khúc cua",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/luːp/",
        example: "The road went in a huge loop around the lake.",
        exampleTranslation: "Con đường uốn lượn một vòng lớn quanh hồ."
    },
    {
        word: "loyalty",
        meaning: "lòng trung thành, sự trung thủy",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈlɔɪəlti/",
        example: "Can I count on your loyalty?",
        exampleTranslation: "Tôi có thể tin vào lòng trung thành của bạn không?"
    },
    {
        word: "machinery",
        meaning: "máy móc, cơ khí",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/məˈʃiːnəri/",
        example: "agricultural/industrial machinery",
        exampleTranslation: "máy móc nông nghiệp/công nghiệp"
    },
    {
        word: "magical",
        meaning: "thần kỳ, ma thuật, kỳ diệu",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈmædʒɪkl/",
        example: "magical powers",
        exampleTranslation: "sức mạnh ma thuật/thần kỳ"
    },
    {
        word: "magistrate",
        meaning: "thẩm phán, quan tòa",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈmædʒɪstreɪt/",
        example: "to come up before the magistrates",
        exampleTranslation: "ra trước các thẩm phán"
    },
    {
        word: "magnetic",
        meaning: "từ tính, nam châm, hút",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/mæɡˈnetɪk/",
        example: "magnetic materials",
        exampleTranslation: "vật liệu có từ tính"
    },
    {
        word: "magnitude",
        meaning: "độ lớn, tầm quan trọng, cường độ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈmæɡnɪtuːd/",
        example: "We did not realize the magnitude of the problem.",
        exampleTranslation: "Chúng tôi đã không nhận ra mức độ nghiêm trọng của vấn đề."
    },
    {
        word: "mainland",
        meaning: "đất liền, lục địa",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ðə ˈmeɪnlænd/",
        example: "to/from the mainland a boat to/from the mainland",
        exampleTranslation: "đến/từ đất liền, một con thuyền đến/từ đất liền"
    },
    {
        word: "mainstream",
        meaning: "chính thống, chủ đạo, dòng chính",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈmeɪnstriːm/",
        example: "mainstream culture/politics",
        exampleTranslation: "văn hóa/chính trị chủ đạo"
    },
    {
        word: "maintenance",
        meaning: "sự bảo trì, bảo dưỡng, duy trì",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈmeɪntənəns/",
        example: "The school pays for heating and the maintenance of the buildings.",
        exampleTranslation: "Trường học chi trả cho hệ thống sưởi và việc bảo trì các tòa nhà."
    },
    {
        word: "mandate",
        meaning: "sự ủy nhiệm, quyền hạn, nhiệm vụ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈmændeɪt/",
        example: "It is undemocratic to govern an area without an electoral mandate.",
        exampleTranslation: "Việc quản lý một khu vực mà không có sự ủy nhiệm của cử tri là phi dân chủ."
    },
    {
        word: "mandatory",
        meaning: "bắt buộc, cưỡng chế",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈmændətɔːri/",
        example: "The offence carries a mandatory life sentence.",
        exampleTranslation: "Tội danh này phải chịu mức án tù chung thân bắt buộc."
    },
    {
        word: "manifest",
        meaning: "biểu hiện, thể hiện, bộc lộ",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈmænɪfest/",
        example: "Social tensions were manifested in the recent political crisis.",
        exampleTranslation: "Căng thẳng xã hội đã được biểu hiện trong cuộc khủng hoảng chính trị gần đây."
    },
    {
        word: "manipulate",
        meaning: "thao túng, điều khiển, vận dụng",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/məˈnɪpjuleɪt/",
        example: "manipulate somebody/something She uses her charm to manipulate people.",
        exampleTranslation: "Cô ấy dùng sự quyến rũ của mình để thao túng mọi người."
    },
    {
        word: "manipulation",
        meaning: "sự thao túng, điều khiển",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/məˌnɪpjuˈleɪʃn/",
        example: "Advertising like this is a cynical manipulation of the elderly.",
        exampleTranslation: "Quảng cáo kiểu này là sự thao túng một cách tàn nhẫn đối với người già."
    },
    {
        word: "manuscript",
        meaning: "bản thảo, bản viết tay",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈmænjuskrɪpt/",
        example: "an unpublished/original manuscript",
        exampleTranslation: "một bản thảo chưa xuất bản/gốc"
    },
    {
        word: "march",
        meaning: "cuộc diễu hành, cuộc tuần hành",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/mɑːrtʃ/",
        example: "protest marches",
        exampleTranslation: "các cuộc tuần hành phản đối"
    },
    {
        word: "marginal",
        meaning: "nhỏ, không đáng kể, bên lề",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈmɑːrdʒɪnl/",
        example: "a marginal improvement in weather conditions",
        exampleTranslation: "sự cải thiện nhỏ về điều kiện thời tiết"
    },
    {
        word: "marine",
        meaning: "thuộc biển, biển",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/məˈriːn/",
        example: "marine life",
        exampleTranslation: "sinh vật biển"
    },
    {
        word: "marketplace",
        meaning: "thị trường, chợ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈmɑːrkɪtpleɪs/",
        example: "Companies must be able to survive in the marketplace.",
        exampleTranslation: "Các công ty phải có khả năng tồn tại trên thị trường."
    },
    {
        word: "mask",
        meaning: "mặt nạ, khẩu trang",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/mæsk/",
        example: "The robbers wore stocking masks.",
        exampleTranslation: "Những tên cướp đeo mặt nạ làm bằng vớ."
    },
    {
        word: "massacre",
        meaning: "vụ thảm sát, cuộc tàn sát",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈmæsəkər/",
        example: "the bloody massacre of innocent civilians",
        exampleTranslation: "vụ thảm sát đẫm máu những thường dân vô tội"
    },
    {
        word: "mathematical",
        meaning: "thuộc toán học, toán",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌmæθəˈmætɪkl/",
        example: "mathematical calculations/problems/models",
        exampleTranslation: "các phép tính/bài toán/mô hình toán học"
    },
    {
        word: "mature",
        meaning: "trưởng thành, chín chắn, chín",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/məˈtʊr/",
        example: "Jane is very mature for her age.",
        exampleTranslation: "Jane rất trưởng thành so với tuổi của cô ấy."
    },
    {
        word: "maximize",
        meaning: "tối đa hóa, tăng tối đa",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈmæksɪmaɪz/",
        example: "to maximize efficiency/fitness/profits",
        exampleTranslation: "để tối đa hóa hiệu quả/sức khỏe/lợi nhuận"
    },
    {
        word: "meaningful",
        meaning: "có ý nghĩa, ý nghĩa",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈmiːnɪŋfl/",
        example: "a meaningful relationship/discussion/experience",
        exampleTranslation: "một mối quan hệ/cuộc thảo luận/trải nghiệm có ý nghĩa"
    },
    {
        word: "meantime",
        meaning: "thời gian chờ đợi, trong khi chờ đợi",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈmiːntaɪm/",
        example: "This is an example of meantime.",
        exampleTranslation: "Đây là một ví dụ về khoảng thời gian đó."
    },
    {
        word: "medieval",
        meaning: "thời trung cổ",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌmiːdˈiːvl/",
        example: "medieval architecture/castles/manuscripts",
        exampleTranslation: "kiến trúc/lâu đài/bản thảo thời trung cổ"
    },
    {
        word: "meditation",
        meaning: "thiền, sự thiền định",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌmedɪˈteɪʃn/",
        example: "She found peace through yoga and meditation.",
        exampleTranslation: "Cô ấy tìm thấy sự bình yên thông qua yoga và thiền định."
    },
    {
        word: "melody",
        meaning: "giai điệu, điệu nhạc",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈmelədi/",
        example: "a haunting melody",
        exampleTranslation: "một giai điệu ám ảnh"
    },
    {
        word: "memo",
        meaning: "thông báo nội bộ, ghi nhớ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈmeməʊ/",
        example: "to write/send a memo",
        exampleTranslation: "viết/gửi một bản thông báo nội bộ"
    },
    {
        word: "memoir",
        meaning: "hồi ký",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈmemwɑːr/",
        example: "O'Connor published a childhood memoir.",
        exampleTranslation: "O'Connor đã xuất bản một cuốn hồi ký về tuổi thơ."
    },
    {
        word: "memorial",
        meaning: "đài tưởng niệm, vật kỷ niệm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/məˈmɔːriəl/",
        example: "a war memorial (= in memory of soldiers who died in a war)",
        exampleTranslation: "một đài tưởng niệm chiến tranh (= để tưởng nhớ những người lính đã hy sinh trong chiến tranh)"
    },
    {
        word: "mentor",
        meaning: "người hướng dẫn, cố vấn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈmentɔːr/",
        example: "She was a friend and mentor to many young actors.",
        exampleTranslation: "Cô ấy là một người bạn và người cố vấn cho nhiều diễn viên trẻ."
    },
    {
        word: "merchant",
        meaning: "thương gia, nhà buôn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈmɜːrtʃənt/",
        example: "a coal/wine merchant",
        exampleTranslation: "một nhà buôn than/rượu"
    },
    {
        word: "mercy",
        meaning: "lòng thương xót, sự khoan hồng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈmɜːrsi/",
        example: "to ask/beg/plead for mercy",
        exampleTranslation: "cầu xin/van nài/khẩn cầu lòng thương xót"
    },
    {
        word: "mere",
        meaning: "chỉ là, vỏn vẹn",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/mɪr/",
        example: "It took her a mere 20 minutes to win.",
        exampleTranslation: "Cô ấy chỉ mất vỏn vẹn 20 phút để giành chiến thắng."
    },
    {
        word: "merely",
        meaning: "chỉ đơn thuần là, chỉ",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/ˈmɪrli/",
        example: "It is not merely a job, but a way of life.",
        exampleTranslation: "Nó không chỉ đơn thuần là một công việc, mà còn là một lối sống."
    },
    {
        word: "merge",
        meaning: "sáp nhập, hợp nhất",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/mɜːrdʒ/",
        example: "The banks are set to merge next year.",
        exampleTranslation: "Các ngân hàng dự kiến sẽ sáp nhập vào năm tới."
    },
    {
        word: "merger",
        meaning: "sự sáp nhập, sự hợp nhất",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈmɜːrdʒər/",
        example: "If the merger goes through, thousands of jobs will be lost.",
        exampleTranslation: "Nếu cuộc sáp nhập diễn ra, hàng ngàn việc làm sẽ bị mất."
    },
    {
        word: "merit",
        meaning: "giá trị, công lao, công trạng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈmerɪt/",
        example: "a work of outstanding artistic merit",
        exampleTranslation: "một tác phẩm có giá trị nghệ thuật xuất sắc"
    },
    {
        word: "methodology",
        meaning: "phương pháp luận",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌmeθəˈdɑːlədʒi/",
        example: "recent changes in the methodology of language teaching",
        exampleTranslation: "những thay đổi gần đây trong phương pháp luận giảng dạy ngôn ngữ"
    },
    {
        word: "midst",
        meaning: "giữa, ở giữa",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/mɪdst/",
        example: "in the midst of something Such beauty was unexpected in the midst of the city.",
        exampleTranslation: "giữa điều gì đó. Vẻ đẹp như vậy thật bất ngờ giữa lòng thành phố."
    },
    {
        word: "migration",
        meaning: "sự di cư",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/maɪˈɡreɪʃn/",
        example: "the seasonal migration of blue whales",
        exampleTranslation: "sự di cư theo mùa của cá voi xanh"
    },
    {
        word: "militant",
        meaning: "hiếu chiến, chiến đấu",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈmɪlɪtənt/",
        example: "militant groups/leaders",
        exampleTranslation: "các nhóm/lãnh đạo hiếu chiến"
    },
    {
        word: "militia",
        meaning: "dân quân",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/məˈlɪʃə/",
        example: "He said he would call out the state militia if the rebels did not surrender.",
        exampleTranslation: "Anh ấy nói sẽ huy động lực lượng dân quân bang nếu quân nổi dậy không đầu hàng."
    },
    {
        word: "mill",
        meaning: "nhà máy, cối xay",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/mɪl/",
        example: "The old mill has been converted into apartments.",
        exampleTranslation: "Nhà máy cũ đã được chuyển đổi thành các căn hộ."
    },
    {
        word: "minimal",
        meaning: "tối thiểu, rất nhỏ",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈmɪnɪml/",
        example: "The work was carried out at minimal cost.",
        exampleTranslation: "Công việc được thực hiện với chi phí tối thiểu."
    },
    {
        word: "minimize",
        meaning: "giảm thiểu, tối thiểu hóa",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈmɪnɪmaɪz/",
        example: "Good hygiene helps to minimize the risk of infection.",
        exampleTranslation: "Vệ sinh tốt giúp giảm thiểu nguy cơ nhiễm trùng."
    },
    {
        word: "mining",
        meaning: "khai thác mỏ, ngành khai thác",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈmaɪnɪŋ/",
        example: "coal/diamond/gold/tin mining",
        exampleTranslation: "khai thác than/kim cương/vàng/thiếc"
    },
    {
        word: "ministry",
        meaning: "bộ (ngành chính phủ), chức vụ mục sư",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈmɪnɪstri/",
        example: "The Ministry of Defence has issued the following statement.",
        exampleTranslation: "Bộ Quốc phòng đã đưa ra tuyên bố sau đây."
    },
    {
        word: "minute",
        meaning: "rất nhỏ, li ti, chi tiết",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/maɪˈnuːt/",
        example: "minute amounts of chemicals in the water",
        exampleTranslation: "lượng hóa chất rất nhỏ trong nước"
    },
    {
        word: "miracle",
        meaning: "phép màu, điều kỳ diệu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈmɪrəkl/",
        example: "the miracle of rising from the grave",
        exampleTranslation: "phép màu hồi sinh từ nấm mộ"
    },
    {
        word: "misery",
        meaning: "sự khốn khổ, bất hạnh",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈmɪzəri/",
        example: "Fame brought her nothing but misery.",
        exampleTranslation: "Danh tiếng không mang lại cho cô ấy gì ngoài sự khốn khổ."
    },
    {
        word: "misleading",
        meaning: "gây hiểu lầm, đánh lừa",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌmɪsˈliːdɪŋ/",
        example: "misleading information/advertisements",
        exampleTranslation: "thông tin/quảng cáo gây hiểu lầm"
    },
    {
        word: "missile",
        meaning: "tên lửa",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈmɪsl/",
        example: "nuclear missiles",
        exampleTranslation: "tên lửa hạt nhân"
    },
    {
        word: "mob",
        meaning: "đám đông (thường là giận dữ, mất trật tự)",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/mɑːb/",
        example: "an angry/unruly mob",
        exampleTranslation: "một đám đông giận dữ/hỗn loạn"
    },
    {
        word: "mobility",
        meaning: "tính di động, sự linh hoạt",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/məʊˈbɪləti/",
        example: "social/geographical/career mobility",
        exampleTranslation: "sự di động xã hội/địa lý/nghề nghiệp"
    },
    {
        word: "mobilize",
        meaning: "huy động, động viên",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈməʊbəlaɪz/",
        example: "The unions mobilized thousands of workers in a protest against the cuts.",
        exampleTranslation: "Các công đoàn đã huy động hàng ngàn công nhân để phản đối việc cắt giảm."
    },
    {
        word: "moderate",
        meaning: "ôn hòa, vừa phải, trung bình",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈmɑːdərət/",
        example: "students of moderate ability",
        exampleTranslation: "học sinh có năng lực trung bình"
    },
    {
        word: "modification",
        meaning: "sự sửa đổi, sự thay đổi, sự điều chỉnh",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌmɑːdɪfɪˈkeɪʃn/",
        example: "Considerable modification of the existing system is needed.",
        exampleTranslation: "Cần có sự sửa đổi đáng kể đối với hệ thống hiện có."
    },
    {
        word: "momentum",
        meaning: "đà, động lực, quán tính",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/məʊˈmentəm/",
        example: "The fight for his release gathers momentum each day.",
        exampleTranslation: "Cuộc đấu tranh đòi trả tự do cho anh ấy ngày càng có đà."
    },
    {
        word: "monk",
        meaning: "thầy tu, nhà sư",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/mʌŋk/",
        example: "Benedictine/Buddhist monks",
        exampleTranslation: "Các thầy tu dòng Benedictine/Các nhà sư Phật giáo"
    },
    {
        word: "monopoly",
        meaning: "sự độc quyền",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/məˈnɑːpəli/",
        example: "In the past central government had a monopoly on television broadcasting.",
        exampleTranslation: "Trước đây, chính phủ trung ương độc quyền phát sóng truyền hình."
    },
    {
        word: "morality",
        meaning: "đạo đức, luân lý",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/məˈræləti/",
        example: "matters of public/private morality",
        exampleTranslation: "các vấn đề đạo đức công cộng/cá nhân"
    },
    {
        word: "motive",
        meaning: "động cơ, lý do",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈməʊtɪv/",
        example: "There seemed to be no motive for the murder.",
        exampleTranslation: "Dường như không có động cơ nào cho vụ án mạng."
    },
    {
        word: "motorist",
        meaning: "người lái xe ô tô",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈməʊtərɪst/",
        example: "The accident was reported by a passing motorist.",
        exampleTranslation: "Vụ tai nạn được một người lái xe ô tô đi ngang qua báo cáo."
    },
    {
        word: "municipal",
        meaning: "thuộc về thành phố, thuộc về đô thị",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/mjuːˈnɪsɪpl/",
        example: "municipal elections/councils",
        exampleTranslation: "các cuộc bầu cử/hội đồng thành phố"
    },
    {
        word: "mutual",
        meaning: "lẫn nhau, chung",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈmjuːtʃuəl/",
        example: "mutual respect/understanding",
        exampleTranslation: "sự tôn trọng/hiểu biết lẫn nhau"
    },
    {
        word: "namely",
        meaning: "cụ thể là, tức là",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/ˈneɪmli/",
        example: "We need to concentrate on our target audience, namely women aged between 20 and 30.",
        exampleTranslation: "Chúng ta cần tập trung vào đối tượng mục tiêu của mình, cụ thể là phụ nữ trong độ tuổi từ 20 đến 30."
    },
    {
        word: "nationwide",
        meaning: "toàn quốc, trên toàn quốc",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌneɪʃnˈwaɪd/",
        example: "a nationwide campaign",
        exampleTranslation: "một chiến dịch toàn quốc"
    },
    {
        word: "naval",
        meaning: "thuộc hải quân, hải quân",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈneɪvl/",
        example: "a naval base/officer/battle",
        exampleTranslation: "một căn cứ/sĩ quan/trận chiến hải quân"
    },
    {
        word: "neglect",
        meaning: "sự sao nhãng, sự bỏ bê, sự bỏ mặc",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/nɪˈɡlekt/",
        example: "The buildings are crumbling from years of neglect.",
        exampleTranslation: "Các tòa nhà đang đổ nát do bị bỏ bê nhiều năm."
    },
    {
        word: "neighbouring",
        meaning: "lân cận, kế bên",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈneɪbərɪŋ/",
        example: "a neighbouring house",
        exampleTranslation: "một ngôi nhà kế bên"
    },
    {
        word: "nest",
        meaning: "tổ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/nest/",
        example: "sparrows building a nest of twigs and dry grass",
        exampleTranslation: "những con chim sẻ đang xây tổ bằng cành cây con và cỏ khô"
    },
    {
        word: "net",
        meaning: "ròng, thuần",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/net/",
        example: "a net profit of £500",
        exampleTranslation: "lợi nhuận ròng 500 bảng Anh"
    },
    {
        word: "newsletter",
        meaning: "bản tin",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈnuːzletər/",
        example: "Our sailing club produces a monthly newsletter.",
        exampleTranslation: "Câu lạc bộ thuyền buồm của chúng tôi xuất bản một bản tin hàng tháng."
    },
    {
        word: "niche",
        meaning: "vị trí thích hợp, chỗ đứng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/nɪtʃ/",
        example: "He eventually found his niche in sports journalism.",
        exampleTranslation: "Cuối cùng anh ấy đã tìm được chỗ đứng của mình trong ngành báo chí thể thao."
    },
    {
        word: "noble",
        meaning: "cao quý, quý tộc, vĩ đại",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈnəʊbl/",
        example: "a noble leader",
        exampleTranslation: "một nhà lãnh đạo cao quý"
    },
    {
        word: "nod",
        meaning: "gật đầu",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/nɑːd/",
        example: "I asked him if he would help me and he nodded.",
        exampleTranslation: "Tôi hỏi anh ấy liệu anh ấy có giúp tôi không và anh ấy gật đầu."
    },
    {
        word: "nominate",
        meaning: "đề cử, bổ nhiệm",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈnɑːmɪneɪt/",
        example: "nominate somebody/something (for something) She has been nominated for the presidency.",
        exampleTranslation: "Cô ấy đã được đề cử cho chức tổng thống."
    },
    {
        word: "nomination",
        meaning: "sự đề cử, sự bổ nhiệm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌnɑːmɪˈneɪʃn/",
        example: "Membership of the club is by nomination only.",
        exampleTranslation: "Thành viên của câu lạc bộ chỉ được kết nạp qua đề cử."
    },
    {
        word: "nominee",
        meaning: "người được đề cử",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌnɑːmɪˈniː/",
        example: "He was chosen as the party's presidential nominee.",
        exampleTranslation: "Anh ấy được chọn làm ứng cử viên tổng thống của đảng."
    },
    {
        word: "non-profit",
        meaning: "phi lợi nhuận",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌnɑːn ˈprɑːfɪt/",
        example: "an independent non-profit organization",
        exampleTranslation: "một tổ chức phi lợi nhuận độc lập"
    },
    {
        word: "nonetheless",
        meaning: "tuy nhiên, dù sao đi nữa",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/ˌnʌnðəˈles/",
        example: "The book is too long but, nonetheless, informative and entertaining.",
        exampleTranslation: "Cuốn sách quá dài nhưng dù sao thì cũng đầy đủ thông tin và thú vị."
    },
    {
        word: "nonsense",
        meaning: "chuyện vô lý, lời nói vô nghĩa",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈnɑːnsns/",
        example: "Reports that he has resigned are nonsense.",
        exampleTranslation: "Những báo cáo rằng anh ấy đã từ chức là vô lý."
    },
    {
        word: "noon",
        meaning: "giữa trưa, 12 giờ trưa",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/nuːn/",
        example: "We should be there by noon.",
        exampleTranslation: "Chúng ta nên đến đó trước giữa trưa."
    },
    {
        word: "notable",
        meaning: "đáng chú ý, nổi bật",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈnəʊtəbl/",
        example: "a notable success/achievement/example",
        exampleTranslation: "một thành công/thành tựu/ví dụ đáng chú ý"
    },
    {
        word: "notably",
        meaning: "đặc biệt là, đáng chú ý là",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/ˈnəʊtəbli/",
        example: "The house had many drawbacks, most notably its price.",
        exampleTranslation: "Ngôi nhà có nhiều nhược điểm, đáng chú ý nhất là giá cả của nó."
    },
    {
        word: "notify",
        meaning: "thông báo, báo cho biết",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈnəʊtɪfaɪ/",
        example: "Competition winners will be notified by post.",
        exampleTranslation: "Người thắng cuộc thi sẽ được thông báo qua đường bưu điện."
    },
    {
        word: "notorious",
        meaning: "khét tiếng, tai tiếng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/nəʊˈtɔːriəs/",
        example: "a notorious criminal",
        exampleTranslation: "một tên tội phạm khét tiếng"
    },
    {
        word: "novel",
        meaning: "mới lạ, độc đáo, khác thường",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈnɑːvl/",
        example: "a novel feature",
        exampleTranslation: "một tính năng mới lạ"
    },
    {
        word: "nursery",
        meaning: "nhà trẻ, vườn ươm cây",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈnɜːrsəri/",
        example: "at nursery Her youngest child is at nursery now.",
        exampleTranslation: "Con út của cô ấy hiện đang học nhà trẻ."
    },
    {
        word: "objection",
        meaning: "sự phản đối, sự chống đối",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əbˈdʒekʃn/",
        example: "I'd like to come too, if you have no objection.",
        exampleTranslation: "Tôi cũng muốn đi, nếu bạn không có gì phản đối."
    },
    {
        word: "oblige",
        meaning: "bắt buộc, cưỡng chế",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/əˈblaɪdʒ/",
        example: "Parents are obliged by law to send their children to school.",
        exampleTranslation: "Phụ huynh bị pháp luật bắt buộc phải cho con cái đến trường."
    },
    {
        word: "obsess",
        meaning: "ám ảnh",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/əbˈses/",
        example: "be obsessed by somebody/something He's obsessed by computers.",
        exampleTranslation: "Anh ấy bị máy tính ám ảnh."
    },
    {
        word: "obsession",
        meaning: "nỗi ám ảnh, sự ám ảnh",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əbˈseʃn/",
        example: "Her fear of flying is bordering on obsession.",
        exampleTranslation: "Nỗi sợ bay của cô ấy gần như là một nỗi ám ảnh."
    },
    {
        word: "occasional",
        meaning: "thỉnh thoảng, không thường xuyên",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/əˈkeɪʒənl/",
        example: "He works for us on an occasional basis.",
        exampleTranslation: "Anh ấy làm việc cho chúng tôi theo hình thức không thường xuyên."
    },
    {
        word: "occurrence",
        meaning: "sự xảy ra, sự kiện",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/əˈkɜːrəns/",
        example: "a common/everyday/frequent/regular occurrence",
        exampleTranslation: "một sự việc thường gặp/hằng ngày/thường xuyên/đều đặn"
    },
    {
        word: "odds",
        meaning: "khả năng, cơ hội, tỷ lệ cược",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ɑːdz/",
        example: "The odds are very much in our favour (= we are likely to succeed).",
        exampleTranslation: "Tỷ lệ cược rất có lợi cho chúng tôi (= chúng tôi có khả năng thành công)."
    },
    {
        word: "offering",
        meaning: "sản phẩm mới, vật dâng cúng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈɔːfərɪŋ/",
        example: "the latest offering from the Canadian-born writer",
        exampleTranslation: "tác phẩm mới nhất của nhà văn sinh ra ở Canada"
    },
    {
        word: "offspring",
        meaning: "con cái, hậu duệ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈɔːfsprɪŋ/",
        example: "the problems parents have with their teenage offspring",
        exampleTranslation: "những vấn đề mà cha mẹ gặp phải với con cái ở tuổi vị thành niên"
    },
    {
        word: "operational",
        meaning: "có thể hoạt động, thuộc về hoạt động",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌɑːpəˈreɪʃənl/",
        example: "operational activities/costs/difficulties",
        exampleTranslation: "các hoạt động/chi phí/khó khăn vận hành"
    },
    {
        word: "opt",
        meaning: "lựa chọn, chọn",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ɑːpt/",
        example: "opt for/against something After graduating she opted for a career in music.",
        exampleTranslation: "Sau khi tốt nghiệp, cô ấy đã chọn một sự nghiệp trong âm nhạc."
    },
    {
        word: "optical",
        meaning: "thuộc về thị giác, quang học",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈɑːptɪkl/",
        example: "optical effects",
        exampleTranslation: "hiệu ứng quang học"
    },
    {
        word: "optimism",
        meaning: "sự lạc quan",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈɑːptɪmɪzəm/",
        example: "a mood of cautious optimism",
        exampleTranslation: "một tâm trạng lạc quan thận trọng"
    },
    {
        word: "oral",
        meaning: "bằng miệng, nói, thuộc về miệng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈɔːrəl/",
        example: "a test of both oral and written French",
        exampleTranslation: "một bài kiểm tra cả tiếng Pháp nói và viết"
    },
    {
        word: "organizational",
        meaning: "thuộc về tổ chức",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌɔːrɡənəˈzeɪʃənl/",
        example: "organizational changes within the party",
        exampleTranslation: "những thay đổi về tổ chức trong đảng"
    },
    {
        word: "orientation",
        meaning: "sự định hướng, xu hướng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌɔːriənˈteɪʃn/",
        example: "religious/political orientation",
        exampleTranslation: "khuynh hướng tôn giáo/chính trị"
    },
    {
        word: "originate",
        meaning: "bắt nguồn từ, khởi nguồn",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/əˈrɪdʒɪneɪt/",
        example: "The disease is thought to have originated in the tropics.",
        exampleTranslation: "Căn bệnh này được cho là có nguồn gốc từ vùng nhiệt đới."
    },
    {
        word: "outbreak",
        meaning: "sự bùng phát",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈaʊtbreɪk/",
        example: "the outbreak of war",
        exampleTranslation: "sự bùng nổ chiến tranh"
    },
    {
        word: "outing",
        meaning: "chuyến đi chơi, buổi đi chơi",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈaʊtɪŋ/",
        example: "a family outing",
        exampleTranslation: "một chuyến đi chơi gia đình"
    },
    {
        word: "outlet",
        meaning: "cửa hàng bán lẻ, lối thoát, phương tiện thể hiện",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈaʊtlet/",
        example: "The business has 34 retail outlets in this state alone.",
        exampleTranslation: "Doanh nghiệp này có 34 cửa hàng bán lẻ chỉ riêng trong tiểu bang này."
    },
    {
        word: "outlook",
        meaning: "quan điểm, viễn cảnh, triển vọng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈaʊtlʊk/",
        example: "Travel broadens your outlook.",
        exampleTranslation: "Du lịch mở rộng tầm nhìn của bạn."
    },
    {
        word: "outrage",
        meaning: "sự phẫn nộ, sự xúc phạm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈaʊtreɪdʒ/",
        example: "The judge's remarks caused public outrage.",
        exampleTranslation: "Những nhận xét của vị thẩm phán đã gây ra sự phẫn nộ trong công chúng."
    },
    {
        word: "outsider",
        meaning: "người ngoài cuộc, người ngoài",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌaʊtˈsaɪdər/",
        example: "Here she felt she would always be an outsider.",
        exampleTranslation: "Ở đây cô ấy cảm thấy mình sẽ luôn là một người ngoài cuộc."
    },
    {
        word: "overlook",
        meaning: "bỏ qua, không để ý đến",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˌəʊvərˈlʊk/",
        example: "He seems to have overlooked one important fact.",
        exampleTranslation: "Anh ấy dường như đã bỏ qua một sự thật quan trọng."
    },
    {
        word: "overly",
        meaning: "quá mức, thái quá",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/ˈəʊvərli/",
        example: "I'm not overly fond of pasta.",
        exampleTranslation: "Tôi không quá thích mì ống."
    },
    {
        word: "oversee",
        meaning: "giám sát, trông coi",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˌəʊvərˈsiː/",
        example: "United Nations observers oversaw the elections.",
        exampleTranslation: "Các quan sát viên của Liên Hợp Quốc đã giám sát cuộc bầu cử."
    },
    {
        word: "overturn",
        meaning: "lật đổ, lật úp, bác bỏ",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˌəʊvərˈtɜːrn/",
        example: "The car skidded and overturned.",
        exampleTranslation: "Chiếc xe trượt bánh và bị lật."
    },
    {
        word: "overwhelm",
        meaning: "áp đảo, choáng ngợp, tràn ngập",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˌəʊvərˈwelm/",
        example: "She was overwhelmed by feelings of guilt.",
        exampleTranslation: "Cô ấy choáng ngợp bởi cảm giác tội lỗi."
    },
    {
        word: "overwhelming",
        meaning: "áp đảo, choáng ngợp, quá lớn",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌəʊvərˈwelmɪŋ/",
        example: "The evidence against him was overwhelming.",
        exampleTranslation: "Bằng chứng chống lại anh ta là quá lớn."
    },
    {
        word: "pad",
        meaning: "miếng đệm, tấm lót, bông tẩy trang",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/pæd/",
        example: "medicated cleansing pads for sensitive skin",
        exampleTranslation: "miếng bông tẩy trang có thuốc dành cho da nhạy cảm"
    },
    {
        word: "parameter",
        meaning: "thông số, tham số, giới hạn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/pəˈræmɪtər/",
        example: "to set/define the parameters",
        exampleTranslation: "đặt/xác định các thông số"
    },
    {
        word: "parental",
        meaning: "thuộc về cha mẹ, của cha mẹ",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/pəˈrentl/",
        example: "parental responsibility/rights",
        exampleTranslation: "trách nhiệm/quyền làm cha mẹ"
    },
    {
        word: "parish",
        meaning: "giáo xứ, giáo khu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈpærɪʃ/",
        example: "a parish church/priest",
        exampleTranslation: "một nhà thờ/linh mục giáo xứ"
    },
    {
        word: "parliamentary",
        meaning: "thuộc nghị viện, thuộc quốc hội",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌpɑːrləˈmentri/",
        example: "parliamentary elections",
        exampleTranslation: "các cuộc bầu cử quốc hội"
    },
    {
        word: "partial",
        meaning: "một phần, từng phần, không hoàn chỉnh",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈpɑːrʃl/",
        example: "It was only a partial solution to the problem.",
        exampleTranslation: "Đó chỉ là một giải pháp một phần cho vấn đề."
    },
    {
        word: "partially",
        meaning: "một phần, từng phần",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/ˈpɑːrʃəli/",
        example: "The road was partially blocked by a fallen tree.",
        exampleTranslation: "Con đường bị chặn một phần bởi một cây đổ."
    },
    {
        word: "passing",
        meaning: "sự trôi qua, sự qua đi",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈpæsɪŋ/",
        example: "The colour of the wood darkens with the passing of time.",
        exampleTranslation: "Màu gỗ sẫm lại theo thời gian trôi qua."
    },
    {
        word: "passive",
        meaning: "thụ động, bị động",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈpæsɪv/",
        example: "He played a passive role in the relationship.",
        exampleTranslation: "Anh ấy đóng một vai trò thụ động trong mối quan hệ."
    },
    {
        word: "pastor",
        meaning: "mục sư (Tin Lành)",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈpæstər/",
        example: "He was ordained a pastor in the Lutheran Church.",
        exampleTranslation: "Ông ấy được phong chức mục sư trong Giáo hội Luther."
    },
    {
        word: "patch",
        meaning: "mảng, miếng vá, đốm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/pætʃ/",
        example: "a black dog with a white patch on its back",
        exampleTranslation: "một con chó đen có một đốm trắng trên lưng"
    },
    {
        word: "patent",
        meaning: "bằng sáng chế",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈpætnt/",
        example: "patent on something to apply for/obtain/take out a patent on an invention",
        exampleTranslation: "nộp đơn/đạt được/lấy bằng sáng chế cho một phát minh"
    },
    {
        word: "pathway",
        meaning: "lối đi, đường mòn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈpæθweɪ/",
        example: "They came out of the woods and onto a pathway.",
        exampleTranslation: "Họ đi ra khỏi rừng và vào một lối đi."
    },
    {
        word: "patrol",
        meaning: "sự tuần tra, đội tuần tra",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/pəˈtrəʊl/",
        example: "Security guards make regular patrols at night.",
        exampleTranslation: "Lực lượng bảo vệ thường xuyên tuần tra vào ban đêm."
    },
    {
        word: "patron",
        meaning: "người bảo trợ, khách hàng quen",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈpeɪtrən/",
        example: "Frederick the Great was the patron of many artists.",
        exampleTranslation: "Frederick Đại đế là người bảo trợ của nhiều nghệ sĩ."
    },
    {
        word: "peak",
        meaning: "đỉnh, đỉnh điểm, cao điểm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/piːk/",
        example: "Traffic reaches its peak between 8 and 9 in the morning.",
        exampleTranslation: "Giao thông đạt đỉnh điểm từ 8 đến 9 giờ sáng."
    },
    {
        word: "peasant",
        meaning: "nông dân, tá điền",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈpeznt/",
        example: "peasant farmers",
        exampleTranslation: "nông dân làm ruộng"
    },
    {
        word: "peculiar",
        meaning: "lạ, kỳ lạ, khác thường",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/pɪˈkjuːliər/",
        example: "a peculiar smell/taste",
        exampleTranslation: "một mùi/vị lạ"
    },
    {
        word: "persist",
        meaning: "kiên trì, dai dẳng, cố chấp",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/pərˈsɪst/",
        example: "persist in doing something Why do you persist in blaming yourself for what happened?",
        exampleTranslation: "Tại sao bạn cứ cố chấp đổ lỗi cho bản thân về những gì đã xảy ra?"
    },
    {
        word: "persistent",
        meaning: "kiên trì, dai dẳng, bền bỉ",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/pərˈsɪstənt/",
        example: "How do you deal with persistent salesmen who won't take no for an answer?",
        exampleTranslation: "Bạn đối phó thế nào với những nhân viên bán hàng dai dẳng không chịu chấp nhận lời từ chối?"
    },
    {
        word: "personnel",
        meaning: "nhân sự, cán bộ, nhân viên",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌpɜːrsəˈnel/",
        example: "There is a severe shortage of skilled personnel.",
        exampleTranslation: "Có một sự thiếu hụt nghiêm trọng về nhân sự lành nghề."
    },
    {
        word: "petition",
        meaning: "đơn kiến nghị, bản kiến nghị",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/pəˈtɪʃn/",
        example: "petition against something Would you like to sign our petition against experiments on animals?",
        exampleTranslation: "Bạn có muốn ký vào đơn kiến nghị của chúng tôi phản đối các thí nghiệm trên động vật không?"
    },
    {
        word: "philosopher",
        meaning: "nhà triết học",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/fəˈlɑːsəfər/",
        example: "We studied the writings of the Greek philosopher Aristotle.",
        exampleTranslation: "Chúng tôi đã nghiên cứu các tác phẩm của nhà triết học Hy Lạp Aristotle."
    },
    {
        word: "philosophical",
        meaning: "thuộc triết học, triết lý",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌfɪləˈsɑːfɪkl/",
        example: "the philosophical writings of Kant",
        exampleTranslation: "các tác phẩm triết học của Kant"
    },
    {
        word: "physician",
        meaning: "bác sĩ, thầy thuốc",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/fɪˈzɪʃn/",
        example: "Dr Dennett is a practicing family physician in Atlanta.",
        exampleTranslation: "Bác sĩ Dennett là một bác sĩ gia đình đang hành nghề ở Atlanta."
    },
    {
        word: "pioneer",
        meaning: "người tiên phong",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌpaɪəˈnɪr/",
        example: "a pioneer in the field of microsurgery",
        exampleTranslation: "một người tiên phong trong lĩnh vực vi phẫu thuật"
    },
    {
        word: "pipeline",
        meaning: "đường ống, ống dẫn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈpaɪplaɪn/",
        example: "There are plans to lay a gas pipeline through the region.",
        exampleTranslation: "Có kế hoạch đặt một đường ống dẫn khí đốt xuyên qua khu vực này."
    },
    {
        word: "pirate",
        meaning: "cướp biển, hải tặc",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈpaɪrət/",
        example: "There were reports that a pirate ship had come looking for treasure in the cove.",
        exampleTranslation: "Có báo cáo rằng một con tàu cướp biển đã đến tìm kho báu trong vịnh nhỏ."
    },
    {
        word: "pit",
        meaning: "hố, hầm, lỗ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/pɪt/",
        example: "We dug a deep pit in the yard.",
        exampleTranslation: "Chúng tôi đã đào một cái hố sâu trong sân."
    },
    {
        word: "plea",
        meaning: "lời khẩn cầu, lời bào chữa",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/pliː/",
        example: "plea for something She made an impassioned plea for help.",
        exampleTranslation: "Cô ấy đã đưa ra một lời khẩn cầu tha thiết để được giúp đỡ."
    },
    {
        word: "plead",
        meaning: "khẩn khoản, nài nỉ, bào chữa",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/pliːd/",
        example: "plead (with somebody) (to do something) She pleaded with him not to go.",
        exampleTranslation: "Cô ấy đã nài nỉ anh ta đừng đi."
    },
    {
        word: "pledge",
        meaning: "lời cam kết, lời hứa",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/pledʒ/",
        example: "pledge (of something) a pledge of support",
        exampleTranslation: "một lời cam kết ủng hộ"
    },
    {
        word: "plug",
        meaning: "phích cắm, nút",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/plʌɡ/",
        example: "The iron is fitted with a three-pin plug.",
        exampleTranslation: "Bàn là được lắp một phích cắm ba chấu."
    },
    {
        word: "plunge",
        meaning: "lao xuống, rơi mạnh",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/plʌndʒ/",
        example: "+ adv./prep. She lost her balance and plunged 100 feet to her death.",
        exampleTranslation: "Cô ấy mất thăng bằng và lao xuống 100 feet mà chết."
    },
    {
        word: "pole",
        meaning: "cột, sào, cực",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/pəʊl/",
        example: "a tent pole",
        exampleTranslation: "một cây cột lều"
    },
    {
        word: "poll",
        meaning: "cuộc thăm dò ý kiến, cuộc bỏ phiếu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/pəʊl/",
        example: "to carry out/conduct a poll",
        exampleTranslation: "thực hiện/tiến hành một cuộc thăm dò ý kiến"
    },
    {
        word: "pond",
        meaning: "ao, hồ nhỏ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/pɑːnd/",
        example: "a fish pond",
        exampleTranslation: "một ao cá"
    },
    {
        word: "pop",
        meaning: "nổ bốp, bật ra",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/pɑːp/",
        example: "the sound of corks popping",
        exampleTranslation: "âm thanh của những nút chai bật ra"
    },
    {
        word: "portfolio",
        meaning: "danh mục đầu tư, cặp tài liệu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/pɔːrtˈfəʊliəʊ/",
        example: "I left my portfolio on the train.",
        exampleTranslation: "Tôi đã để quên cặp tài liệu của mình trên tàu."
    },
    {
        word: "portray",
        meaning: "miêu tả, khắc họa",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/pɔːrˈtreɪ/",
        example: "The painting portrays the duke’s third wife.",
        exampleTranslation: "Bức tranh khắc họa người vợ thứ ba của công tước."
    },
    {
        word: "post-war",
        meaning: "hậu chiến, sau chiến tranh",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌpəʊst ˈwɔːr/",
        example: "the post-war years",
        exampleTranslation: "những năm sau chiến tranh"
    },
    {
        word: "postpone",
        meaning: "hoãn lại",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/pəʊˈspəʊn/",
        example: "The game has already been postponed three times.",
        exampleTranslation: "Trò chơi đã bị hoãn lại ba lần rồi."
    },
    {
        word: "practitioner",
        meaning: "người hành nghề, thầy thuốc",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/prækˈtɪʃənər/",
        example: "dental practitioners",
        exampleTranslation: "những người hành nghề nha khoa"
    },
    {
        word: "preach",
        meaning: "thuyết giáo, giảng đạo",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/priːtʃ/",
        example: "She preached to the congregation about forgiveness.",
        exampleTranslation: "Cô ấy đã thuyết giáo cho giáo đoàn về sự tha thứ."
    },
    {
        word: "precedent",
        meaning: "tiền lệ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈpresɪdənt/",
        example: "The ruling set a precedent for future libel cases.",
        exampleTranslation: "Phán quyết đã tạo ra một tiền lệ cho các vụ kiện phỉ báng trong tương lai."
    },
    {
        word: "precision",
        meaning: "độ chính xác, sự tỉ mỉ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/prɪˈsɪʒn/",
        example: "Her writing is imaginative but lacks precision.",
        exampleTranslation: "Lối viết của cô ấy giàu trí tưởng tượng nhưng thiếu đi sự chính xác."
    },
    {
        word: "predator",
        meaning: "động vật ăn thịt, kẻ săn mồi",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈpredətər/",
        example: "Some animals have no natural predators.",
        exampleTranslation: "Một số loài động vật không có kẻ săn mồi tự nhiên."
    },
    {
        word: "predecessor",
        meaning: "người tiền nhiệm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈpredəsesər/",
        example: "The new president reversed many of the policies of his predecessor.",
        exampleTranslation: "Vị tổng thống mới đã đảo ngược nhiều chính sách của người tiền nhiệm của mình."
    },
    {
        word: "predominantly",
        meaning: "chủ yếu, phần lớn",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/prɪˈdɑːmɪnəntli/",
        example: "She works in a predominantly male environment.",
        exampleTranslation: "Cô ấy làm việc trong một môi trường chủ yếu là nam giới."
    },
    {
        word: "pregnancy",
        meaning: "sự mang thai, thai kỳ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈpreɡnənsi/",
        example: "a pregnancy test",
        exampleTranslation: "một xét nghiệm thai nghén"
    },
    {
        word: "prejudice",
        meaning: "định kiến, thành kiến",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈpredʒədɪs/",
        example: "a victim of racial prejudice",
        exampleTranslation: "một nạn nhân của định kiến ​​chủng tộc"
    },
    {
        word: "preliminary",
        meaning: "sơ bộ, ban đầu",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/prɪˈlɪmɪneri/",
        example: "After a few preliminary remarks he announced the winners.",
        exampleTranslation: "Sau một vài nhận xét sơ bộ, anh ấy đã công bố những người chiến thắng."
    },
    {
        word: "premier",
        meaning: "hàng đầu, quan trọng nhất",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/prɪˈmɪr/",
        example: "one of the country’s premier chefs",
        exampleTranslation: "một trong những đầu bếp hàng đầu của đất nước"
    },
    {
        word: "premise",
        meaning: "tiền đề, giả thuyết",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈpremɪs/",
        example: "the basic premise of her argument",
        exampleTranslation: "tiền đề cơ bản của lập luận của cô ấy"
    },
    {
        word: "premium",
        meaning: "phí bảo hiểm, tiền thưởng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈpriːmiəm/",
        example: "a monthly premium of £6.25",
        exampleTranslation: "một khoản phí bảo hiểm hàng tháng là £6.25"
    },
    {
        word: "prescribe",
        meaning: "kê đơn, quy định",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/prɪˈskraɪb/",
        example: "Valium is usually prescribed to treat anxiety.",
        exampleTranslation: "Valium thường được kê đơn để điều trị chứng lo âu."
    },
    {
        word: "prescription",
        meaning: "đơn thuốc",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/prɪˈskrɪpʃn/",
        example: "prescription for something The doctor gave me a prescription for antibiotics.",
        exampleTranslation: "Bác sĩ đã cho tôi một đơn thuốc kháng sinh."
    },
    {
        word: "presently",
        meaning: "hiện tại, ngay bây giờ",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/ˈprezntli/",
        example: "The crime is presently being investigated by the police.",
        exampleTranslation: "Tội phạm hiện đang được cảnh sát điều tra."
    },
    {
        word: "preservation",
        meaning: "sự bảo tồn, sự giữ gìn, sự bảo quản",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌprezərˈveɪʃn/",
        example: "building/environmental/food preservation",
        exampleTranslation: "bảo tồn công trình/môi trường/thực phẩm"
    },
    {
        word: "preside",
        meaning: "chủ tọa, điều khiển",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/prɪˈzaɪd/",
        example: "the presiding judge",
        exampleTranslation: "vị thẩm phán chủ tọa"
    },
    {
        word: "presidency",
        meaning: "chức chủ tịch, nhiệm kỳ chủ tịch",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈprezɪdənsi/",
        example: "the current holder of the EU presidency",
        exampleTranslation: "người đang giữ chức chủ tịch EU hiện tại"
    },
    {
        word: "presidential",
        meaning: "(thuộc) tổng thống, mang tính tổng thống",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌprezɪˈdenʃl/",
        example: "a presidential campaign/candidate/election",
        exampleTranslation: "một chiến dịch/ứng cử viên/cuộc bầu cử tổng thống"
    },
    {
        word: "prestigious",
        meaning: "danh giá, có uy tín",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/preˈstiːdʒəs/",
        example: "a prestigious award",
        exampleTranslation: "một giải thưởng danh giá"
    },
    {
        word: "presumably",
        meaning: "có lẽ, có thể đoán chừng",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/prɪˈzuːməbli/",
        example: "Presumably this is where the accident happened.",
        exampleTranslation: "Có lẽ đây là nơi vụ tai nạn đã xảy ra."
    },
    {
        word: "presume",
        meaning: "cho rằng, đoán chừng",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/prɪˈzuːm/",
        example: "They are very expensive, I presume?",
        exampleTranslation: "Chúng rất đắt, tôi đoán vậy?"
    },
    {
        word: "prevail",
        meaning: "thịnh hành, phổ biến; thắng thế",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/prɪˈveɪl/",
        example: "prevail in something We were horrified at the conditions prevailing in local prisons.",
        exampleTranslation: "Chúng tôi kinh hoàng trước những điều kiện phổ biến trong các nhà tù địa phương."
    },
    {
        word: "prevalence",
        meaning: "sự phổ biến, sự thịnh hành",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈprevələns/",
        example: "an increase in the prevalence of smoking among young people",
        exampleTranslation: "sự gia tăng tỷ lệ hút thuốc lá ở giới trẻ"
    },
    {
        word: "prevention",
        meaning: "sự ngăn ngừa, sự phòng tránh",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/prɪˈvenʃn/",
        example: "accident/crime prevention",
        exampleTranslation: "phòng tránh tai nạn/tội phạm"
    },
    {
        word: "prey",
        meaning: "con mồi",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/preɪ/",
        example: "The lion will often stalk its prey for hours.",
        exampleTranslation: "Sư tử thường rình rập con mồi hàng giờ."
    },
    {
        word: "principal",
        meaning: "hiệu trưởng, người đứng đầu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈprɪnsəpl/",
        example: "Peter Brown, principal of St John’s College",
        exampleTranslation: "Peter Brown, hiệu trưởng trường Cao đẳng St John."
    },
    {
        word: "privatization",
        meaning: "sự tư nhân hóa",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌpraɪvətəˈzeɪʃn/",
        example: "There were fears that privatization would lead to job losses.",
        exampleTranslation: "Có những lo ngại rằng việc tư nhân hóa sẽ dẫn đến mất việc làm."
    },
    {
        word: "privilege",
        meaning: "đặc quyền, đặc ân",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈprɪvəlɪdʒ/",
        example: "Education should be a universal right and not a privilege.",
        exampleTranslation: "Giáo dục phải là một quyền phổ quát chứ không phải là một đặc quyền."
    },
    {
        word: "probe",
        meaning: "cuộc điều tra, cuộc thăm dò",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/prəʊb/",
        example: "a police probe into the financial affairs of the company",
        exampleTranslation: "một cuộc điều tra của cảnh sát về các vấn đề tài chính của công ty"
    },
    {
        word: "problematic",
        meaning: "có vấn đề, khó khăn",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌprɑːbləˈmætɪk/",
        example: "The situation is more problematic than we first thought.",
        exampleTranslation: "Tình hình có nhiều vấn đề hơn chúng ta nghĩ lúc đầu."
    },
    {
        word: "proceeding",
        meaning: "thủ tục pháp lý, tố tụng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/prəˈsiːdɪŋ/",
        example: "court/legal/judicial proceedings",
        exampleTranslation: "các thủ tục tố tụng tại tòa án/pháp lý/tư pháp"
    },
    {
        word: "proceeds",
        meaning: "tiền thu được",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈprəʊsiːdz/",
        example: "She sold her car and bought a piano with the proceeds.",
        exampleTranslation: "Cô ấy bán xe và mua một cây đàn piano bằng số tiền thu được."
    },
    {
        word: "processing",
        meaning: "sự chế biến, sự xử lý",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈprɑːsesɪŋ/",
        example: "the food processing industry",
        exampleTranslation: "ngành công nghiệp chế biến thực phẩm"
    },
    {
        word: "processor",
        meaning: "bộ xử lý, nhà chế biến",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈprɑːsesər/",
        example: "The company is Ireland's largest dairy processor.",
        exampleTranslation: "Công ty là nhà chế biến sữa lớn nhất Ireland."
    },
    {
        word: "proclaim",
        meaning: "công bố, tuyên bố",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/prəˈkleɪm/",
        example: "The president proclaimed a state of emergency.",
        exampleTranslation: "Tổng thống đã công bố tình trạng khẩn cấp."
    },
    {
        word: "productive",
        meaning: "năng suất, hiệu quả",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/prəˈdʌktɪv/",
        example: "highly productive farming land",
        exampleTranslation: "đất nông nghiệp có năng suất cao"
    },
    {
        word: "productivity",
        meaning: "năng suất",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌprɑːdʌkˈtɪvəti/",
        example: "high/improved/increased productivity",
        exampleTranslation: "năng suất cao/cải thiện/tăng lên"
    },
    {
        word: "profitable",
        meaning: "có lợi nhuận, sinh lời",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈprɑːfɪtəbl/",
        example: "a highly profitable business",
        exampleTranslation: "một doanh nghiệp có lợi nhuận cao"
    },
    {
        word: "profound",
        meaning: "sâu sắc, to lớn",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/prəˈfaʊnd/",
        example: "profound changes in the earth’s climate",
        exampleTranslation: "những thay đổi sâu sắc trong khí hậu trái đất"
    },
    {
        word: "projection",
        meaning: "sự dự đoán, sự dự báo",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/prəˈdʒekʃn/",
        example: "to make forward/backward projections of population figures",
        exampleTranslation: "đưa ra các dự báo tăng/giảm dân số"
    },
    {
        word: "prominent",
        meaning: "nổi bật, quan trọng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈprɑːmɪnənt/",
        example: "a prominent politician",
        exampleTranslation: "một chính trị gia nổi bật"
    },
    {
        word: "pronounced",
        meaning: "rõ rệt, dễ nhận thấy",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/prəˈnaʊnst/",
        example: "He walked with a pronounced limp.",
        exampleTranslation: "Anh ấy đi lại với dáng đi khập khiễng rõ rệt."
    },
    {
        word: "propaganda",
        meaning: "sự tuyên truyền, lời tuyên truyền",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌprɑːpəˈɡændə/",
        example: "enemy propaganda",
        exampleTranslation: "tuyên truyền của địch"
    },
    {
        word: "proposition",
        meaning: "đề xuất, kiến nghị",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌprɑːpəˈzɪʃn/",
        example: "I'd like to put a business proposition to you.",
        exampleTranslation: "Tôi muốn đưa ra một đề xuất kinh doanh cho bạn."
    },
    {
        word: "prosecute",
        meaning: "truy tố, khởi tố, kiện",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈprɑːsɪkjuːt/",
        example: "The police decided not to prosecute.",
        exampleTranslation: "Cảnh sát đã quyết định không truy tố."
    },
    {
        word: "prosecution",
        meaning: "sự truy tố, sự khởi tố, bên công tố",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌprɑːsɪˈkjuːʃn/",
        example: "Prosecution for a first minor offence rarely leads to imprisonment.",
        exampleTranslation: "Việc truy tố đối với một vi phạm nhỏ lần đầu hiếm khi dẫn đến việc bỏ tù."
    },
    {
        word: "prosecutor",
        meaning: "công tố viên, người khởi tố",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈprɑːsɪkjuːtər/",
        example: "the public/state prosecutor",
        exampleTranslation: "công tố viên nhà nước/công cộng"
    },
    {
        word: "prospective",
        meaning: "có triển vọng, tiềm năng, tương lai",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/prəˈspektɪv/",
        example: "a prospective buyer",
        exampleTranslation: "một người mua tiềm năng"
    },
    {
        word: "prosperity",
        meaning: "sự thịnh vượng, sự phát đạt",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/prɑːˈsperəti/",
        example: "Our future prosperity depends on economic growth.",
        exampleTranslation: "Sự thịnh vượng trong tương lai của chúng ta phụ thuộc vào tăng trưởng kinh tế."
    },
    {
        word: "protective",
        meaning: "bảo vệ, phòng hộ",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/prəˈtektɪv/",
        example: "Workers should wear full protective clothing.",
        exampleTranslation: "Công nhân nên mặc đầy đủ quần áo bảo hộ."
    },
    {
        word: "protocol",
        meaning: "giao thức, nghi thức, nghị định thư",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈprəʊtəkɑːl/",
        example: "a breach of protocol",
        exampleTranslation: "một sự vi phạm giao thức/nghi thức"
    },
    {
        word: "province",
        meaning: "tỉnh, địa hạt",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈprɑːvɪns/",
        example: "the provinces of Canada",
        exampleTranslation: "các tỉnh của Canada"
    },
    {
        word: "provincial",
        meaning: "thuộc tỉnh, tỉnh lẻ",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/prəˈvɪnʃl/",
        example: "provincial assemblies/elections",
        exampleTranslation: "các hội đồng/cuộc bầu cử cấp tỉnh"
    },
    {
        word: "provision",
        meaning: "sự cung cấp, điều khoản, dự phòng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/prəˈvɪʒn/",
        example: "housing provision",
        exampleTranslation: "sự cung cấp nhà ở"
    },
    {
        word: "provoke",
        meaning: "khiêu khích, chọc tức, gây ra",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/prəˈvəʊk/",
        example: "The announcement provoked a storm of protest.",
        exampleTranslation: "Thông báo này đã gây ra một làn sóng phản đối dữ dội."
    },
    {
        word: "psychiatric",
        meaning: "thuộc tâm thần học, tâm thần",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌsaɪkiˈætrɪk/",
        example: "psychiatric disorders",
        exampleTranslation: "các rối loạn tâm thần"
    },
    {
        word: "pulse",
        meaning: "mạch, nhịp đập",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/pʌls/",
        example: "a strong/weak pulse",
        exampleTranslation: "mạch đập mạnh/yếu"
    },
    {
        word: "pump",
        meaning: "máy bơm, vòi bơm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/pʌmp/",
        example: "(British English) a petrol pump",
        exampleTranslation: "một cột bơm xăng"
    },
    {
        word: "punch",
        meaning: "cú đấm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/pʌntʃ/",
        example: "a punch in the face",
        exampleTranslation: "một cú đấm vào mặt"
    },
    {
        word: "query",
        meaning: "câu hỏi, thắc mắc",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkwɪri/",
        example: "Our assistants will be happy to answer your queries.",
        exampleTranslation: "Các trợ lý của chúng tôi sẽ sẵn lòng giải đáp các thắc mắc của bạn."
    },
    {
        word: "quest",
        meaning: "cuộc tìm kiếm, sự truy tìm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/kwest/",
        example: "quest for something the quest for happiness/knowledge/truth",
        exampleTranslation: "cuộc tìm kiếm hạnh phúc/tri thức/sự thật"
    },
    {
        word: "quota",
        meaning: "hạn ngạch",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈkwəʊtə/",
        example: "to introduce a strict import quota on grain",
        exampleTranslation: "áp dụng hạn ngạch nhập khẩu nghiêm ngặt đối với ngũ cốc"
    },
    {
        word: "radar",
        meaning: "ra-đa",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈreɪdɑːr/",
        example: "They located the ship by radar.",
        exampleTranslation: "Họ đã định vị con tàu bằng ra-đa."
    },
    {
        word: "radical",
        meaning: "triệt để, căn bản",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈrædɪkl/",
        example: "the need for radical changes in education",
        exampleTranslation: "sự cần thiết cho những thay đổi triệt để trong giáo dục"
    },
    {
        word: "rage",
        meaning: "cơn thịnh nộ, sự giận dữ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/reɪdʒ/",
        example: "His face was dark with rage.",
        exampleTranslation: "Khuôn mặt anh ta tối sầm vì giận dữ."
    },
    {
        word: "raid",
        meaning: "cuộc đột kích, cuộc tấn công bất ngờ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/reɪd/",
        example: "to conduct/launch a raid",
        exampleTranslation: "tiến hành một cuộc đột kích"
    },
    {
        word: "rally",
        meaning: "cuộc mít tinh, cuộc tập hợp",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈræli/",
        example: "to attend/hold a rally",
        exampleTranslation: "tham dự/tổ chức một cuộc mít tinh"
    },
    {
        word: "ranking",
        meaning: "thứ hạng, bảng xếp hạng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈræŋkɪŋ/",
        example: "He has improved his ranking this season from 67th to 30th.",
        exampleTranslation: "Anh ấy đã cải thiện thứ hạng của mình mùa này từ vị trí 67 lên 30."
    },
    {
        word: "rape",
        meaning: "tội hiếp dâm, sự cưỡng hiếp",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/reɪp/",
        example: "He was charged with rape.",
        exampleTranslation: "Anh ta bị buộc tội hiếp dâm."
    },
    {
        word: "ratio",
        meaning: "tỷ lệ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈreɪʃiəʊ/",
        example: "The school has a very high teacher-student ratio.",
        exampleTranslation: "Trường học có tỷ lệ giáo viên-học sinh rất cao."
    },
    {
        word: "rational",
        meaning: "hợp lý, có lý trí",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈræʃnəl/",
        example: "a rational argument/choice/decision",
        exampleTranslation: "một lập luận/sự lựa chọn/quyết định hợp lý"
    },
    {
        word: "ray",
        meaning: "tia, tia sáng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/reɪ/",
        example: "The last of the sun's rays shone on the grass.",
        exampleTranslation: "Tia nắng mặt trời cuối cùng chiếu rọi trên cỏ."
    },
    {
        word: "readily",
        meaning: "dễ dàng, sẵn lòng, sẵn có",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/ˈredɪli/",
        example: "All ingredients are readily available from your local store.",
        exampleTranslation: "Tất cả các nguyên liệu đều dễ dàng có được từ cửa hàng địa phương của bạn."
    },
    {
        word: "realization",
        meaning: "sự nhận ra, sự nhận thức",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌriːələˈzeɪʃn/",
        example: "As realization dawned, he went pale.",
        exampleTranslation: "Khi sự nhận ra chợt đến, anh ấy trở nên tái nhợt."
    },
    {
        word: "realm",
        meaning: "lĩnh vực, vương quốc, giới hạn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/relm/",
        example: "in the realm of something in the realm of literature",
        exampleTranslation: "trong lĩnh vực gì đó; trong lĩnh vực văn học"
    },
    {
        word: "rear",
        meaning: "phía sau, mặt sau",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/rɪr/",
        example: "front and rear windows",
        exampleTranslation: "cửa sổ phía trước và phía sau"
    },
    {
        word: "reasoning",
        meaning: "lý lẽ, lập luận, suy luận",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈriːzənɪŋ/",
        example: "What is the reasoning behind this decision?",
        exampleTranslation: "Lý lẽ đằng sau quyết định này là gì?"
    },
    {
        word: "reassure",
        meaning: "trấn an, làm yên lòng",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˌriːəˈʃʊr/",
        example: "(about something) They tried to reassure her, but she still felt anxious.",
        exampleTranslation: "(về điều gì đó) Họ cố gắng trấn an cô ấy, nhưng cô ấy vẫn cảm thấy lo lắng."
    },
    {
        word: "rebel",
        meaning: "quân nổi dậy, phiến quân, người nổi loạn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈrebl/",
        example: "rebel forces",
        exampleTranslation: "lực lượng nổi dậy"
    },
    {
        word: "rebellion",
        meaning: "cuộc nổi dậy, sự chống đối",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/rɪˈbeljən/",
        example: "in rebellion (against somebody/something) The north of the country rose in rebellion against the government.",
        exampleTranslation: "trong cuộc nổi dậy (chống lại ai đó/điều gì đó) Miền bắc đất nước đã nổi dậy chống lại chính phủ."
    },
    {
        word: "recipient",
        meaning: "người nhận",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/rɪˈsɪpiənt/",
        example: "recipients of awards",
        exampleTranslation: "những người nhận giải thưởng"
    },
    {
        word: "reconstruction",
        meaning: "sự tái thiết, sự phục hồi",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌriːkənˈstrʌkʃn/",
        example: "the reconstruction of the educational system",
        exampleTranslation: "sự tái thiết hệ thống giáo dục"
    },
    {
        word: "recount",
        meaning: "kể lại, thuật lại",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/rɪˈkaʊnt/",
        example: "(to somebody) She was asked to recount the details of the conversation to the court.",
        exampleTranslation: "(cho ai đó) Cô ấy được yêu cầu kể lại chi tiết cuộc trò chuyện cho tòa án."
    },
    {
        word: "referendum",
        meaning: "trưng cầu dân ý",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌrefəˈrendəm/",
        example: "referendum on something Switzerland decided to hold a referendum on joining the EU.",
        exampleTranslation: "trưng cầu dân ý về điều gì đó Thụy Sĩ đã quyết định tổ chức trưng cầu dân ý về việc gia nhập EU."
    },
    {
        word: "reflection",
        meaning: "sự phản chiếu, hình ảnh phản chiếu, sự suy nghĩ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/rɪˈflekʃn/",
        example: "He admired his reflection in the mirror.",
        exampleTranslation: "Anh ấy ngưỡng mộ hình ảnh phản chiếu của mình trong gương."
    },
    {
        word: "reform",
        meaning: "cải cách, sự cải cách",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/rɪˈfɔːrm/",
        example: "a government committed to reform",
        exampleTranslation: "một chính phủ cam kết cải cách"
    },
    {
        word: "refuge",
        meaning: "nơi trú ẩn, sự nương tựa",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈrefjuːdʒ/",
        example: "A further 300 people have taken refuge in the US embassy.",
        exampleTranslation: "Thêm 300 người nữa đã tìm nơi trú ẩn tại đại sứ quán Hoa Kỳ."
    },
    {
        word: "refusal",
        meaning: "sự từ chối",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/rɪˈfjuːzl/",
        example: "the refusal of a request/an invitation/an offer",
        exampleTranslation: "sự từ chối một yêu cầu/một lời mời/một lời đề nghị"
    },
    {
        word: "regain",
        meaning: "lấy lại, giành lại",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/rɪˈɡeɪn/",
        example: "I struggled to regain some dignity.",
        exampleTranslation: "Tôi đã cố gắng để lấy lại chút phẩm giá."
    },
    {
        word: "regardless",
        meaning: "bất kể, bất chấp",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/rɪˈɡɑːrdləs/",
        example: "The weather was terrible but we carried on regardless.",
        exampleTranslation: "Thời tiết thật kinh khủng nhưng chúng tôi vẫn tiếp tục bất kể."
    },
    {
        word: "regime",
        meaning: "chế độ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/reɪˈʒiːm/",
        example: "a fascist/totalitarian/military, etc. regime",
        exampleTranslation: "một chế độ phát xít/toàn trị/quân sự, v.v."
    },
    {
        word: "regulator",
        meaning: "cơ quan quản lý, bộ điều chỉnh",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈreɡjuleɪtər/",
        example: "Ofgas, the gas industry regulator",
        exampleTranslation: "Ofgas, cơ quan quản lý ngành công nghiệp khí đốt"
    },
    {
        word: "regulatory",
        meaning: "thuộc về quy định, điều tiết",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈreɡjələtɔːri/",
        example: "regulatory bodies/authorities/agencies",
        exampleTranslation: "các cơ quan/nhà chức trách/đại lý quản lý"
    },
    {
        word: "rehabilitation",
        meaning: "sự phục hồi chức năng, sự cải tạo",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌriːəˌbɪlɪˈteɪʃn/",
        example: "a drug rehabilitation centre",
        exampleTranslation: "một trung tâm cai nghiện ma túy"
    },
    {
        word: "reign",
        meaning: "triều đại, thời gian trị vì",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/reɪn/",
        example: "By the end of his reign, the vast empire was in decline.",
        exampleTranslation: "Vào cuối triều đại của ông, đế chế rộng lớn đã suy tàn."
    },
    {
        word: "rejection",
        meaning: "sự từ chối, sự bác bỏ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/rɪˈdʒekʃn/",
        example: "Her proposal met with unanimous rejection.",
        exampleTranslation: "Đề xuất của cô ấy đã bị từ chối nhất trí."
    },
    {
        word: "relevance",
        meaning: "sự liên quan, tính thích đáng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈreləvəns/",
        example: "I don't see the relevance of your question.",
        exampleTranslation: "Tôi không thấy sự liên quan của câu hỏi của bạn."
    },
    {
        word: "reliability",
        meaning: "độ tin cậy, sự đáng tin cậy",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/rɪˌlaɪəˈbɪləti/",
        example: "The incident cast doubt on her motives and reliability.",
        exampleTranslation: "Vụ việc đã làm dấy lên nghi ngờ về động cơ và độ tin cậy của cô ấy."
    },
    {
        word: "reluctant",
        meaning: "miễn cưỡng, bất đắc dĩ",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/rɪˈlʌktənt/",
        example: "He finally gave a reluctant smile.",
        exampleTranslation: "Cuối cùng anh ấy nở một nụ cười miễn cưỡng."
    },
    {
        word: "remainder",
        meaning: "phần còn lại, số dư",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/rɪˈmeɪndər/",
        example: "I kept some of his books and gave away the remainder.",
        exampleTranslation: "Tôi giữ lại một số cuốn sách của anh ấy và cho đi phần còn lại."
    },
    {
        word: "remains",
        meaning: "phần còn lại, hài cốt",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/rɪˈmeɪnz/",
        example: "She fed the remains of her lunch to the dog.",
        exampleTranslation: "Cô ấy cho chó ăn phần còn lại của bữa trưa."
    },
    {
        word: "remedy",
        meaning: "biện pháp khắc phục, phương thuốc",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈremədi/",
        example: "When the reservoir becomes blocked, the only remedy lies in cleaning the entire system.",
        exampleTranslation: "Khi hồ chứa bị tắc, biện pháp khắc phục duy nhất là làm sạch toàn bộ hệ thống."
    },
    {
        word: "reminder",
        meaning: "lời nhắc nhở, vật kỷ niệm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/rɪˈmaɪndər/",
        example: "reminder of something The sheer size of the cathedral is a constant reminder of the power of religion.",
        exampleTranslation: "lời nhắc nhở về điều gì đó Kích thước đồ sộ của nhà thờ là một lời nhắc nhở không ngừng về sức mạnh của tôn giáo."
    },
    {
        word: "removal",
        meaning: "sự loại bỏ, sự di chuyển",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/rɪˈmuːvl/",
        example: "Clearance of the site required the removal of a number of trees.",
        exampleTranslation: "Việc dọn dẹp mặt bằng yêu cầu loại bỏ một số cây."
    },
    {
        word: "render",
        meaning: "làm cho, biến thành",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈrendər/",
        example: "to render something harmless/useless/ineffective",
        exampleTranslation: "làm cho cái gì đó vô hại/vô dụng/không hiệu quả"
    },
    {
        word: "renew",
        meaning: "đổi mới, gia hạn, tiếp tục",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/rɪˈnuː/",
        example: "The army renewed its assault on the capital.",
        exampleTranslation: "Quân đội tiếp tục cuộc tấn công vào thủ đô."
    },
    {
        word: "renowned",
        meaning: "nổi tiếng, lừng danh",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/rɪˈnaʊnd/",
        example: "a renowned author",
        exampleTranslation: "một tác giả nổi tiếng"
    },
    {
        word: "rental",
        meaning: "tiền thuê, sự cho thuê",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈrentl/",
        example: "Telephone charges include line rental.",
        exampleTranslation: "Cước điện thoại bao gồm phí thuê đường dây."
    },
    {
        word: "replacement",
        meaning: "sự thay thế, vật thay thế",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/rɪˈpleɪsmənt/",
        example: "the replacement of worn car parts",
        exampleTranslation: "việc thay thế các bộ phận xe hơi bị mòn"
    },
    {
        word: "reportedly",
        meaning: "được cho là, theo tin tức",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/rɪˈpɔːrtɪdli/",
        example: "The band have reportedly decided to split up.",
        exampleTranslation: "Ban nhạc được cho là đã quyết định tan rã."
    },
    {
        word: "representation",
        meaning: "sự đại diện, sự thể hiện, sự trình bày",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌreprɪzenˈteɪʃn/",
        example: "the negative representation of single mothers in the media",
        exampleTranslation: "sự thể hiện tiêu cực về các bà mẹ đơn thân trên phương tiện truyền thông"
    },
    {
        word: "reproduce",
        meaning: "sao chép, tái sản xuất, sinh sản",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˌriːprəˈduːs/",
        example: "It is illegal to reproduce these worksheets without permission from the publisher.",
        exampleTranslation: "Việc sao chép các tài liệu này mà không có sự cho phép của nhà xuất bản là bất hợp pháp."
    },
    {
        word: "reproduction",
        meaning: "sự sinh sản, sự sao chép",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌriːprəˈdʌkʃn/",
        example: "sexual reproduction",
        exampleTranslation: "sự sinh sản hữu tính"
    },
    {
        word: "republic",
        meaning: "nước cộng hòa",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/rɪˈpʌblɪk/",
        example: "newly independent republics",
        exampleTranslation: "các nước cộng hòa mới độc lập"
    },
    {
        word: "resemble",
        meaning: "giống, tương tự",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/rɪˈzembl/",
        example: "She closely resembles her sister.",
        exampleTranslation: "Cô ấy rất giống chị gái mình."
    },
    {
        word: "reside",
        meaning: "cư trú, sinh sống",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/rɪˈzaɪd/",
        example: "He returned to Britain in 1939, having resided abroad for many years.",
        exampleTranslation: "Ông trở về Anh vào năm 1939, sau nhiều năm cư trú ở nước ngoài."
    },
    {
        word: "residence",
        meaning: "nơi cư trú, nhà ở",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈrezɪdəns/",
        example: "a desirable family residence for sale (= for example, in an advertisement)",
        exampleTranslation: "một căn nhà ở gia đình đáng mơ ước đang rao bán"
    },
    {
        word: "residential",
        meaning: "thuộc khu dân cư",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌrezɪˈdenʃl/",
        example: "a quiet residential area",
        exampleTranslation: "một khu dân cư yên tĩnh"
    },
    {
        word: "residue",
        meaning: "phần còn lại, cặn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈrezɪduː/",
        example: "pesticide residues in fruit and vegetables",
        exampleTranslation: "dư lượng thuốc trừ sâu trong trái cây và rau củ"
    },
    {
        word: "resignation",
        meaning: "sự từ chức, đơn từ chức",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌrezɪɡˈneɪʃn/",
        example: "a letter of resignation",
        exampleTranslation: "một lá đơn từ chức"
    },
    {
        word: "resistance",
        meaning: "sự kháng cự, sức cản, sự chống đối",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/rɪˈzɪstəns/",
        example: "As with all new ideas it met with resistance.",
        exampleTranslation: "Giống như tất cả các ý tưởng mới, nó đã gặp phải sự phản đối."
    },
    {
        word: "respective",
        meaning: "tương ứng, riêng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/rɪˈspektɪv/",
        example: "They are each recognized specialists in their respective fields.",
        exampleTranslation: "Mỗi người trong số họ là những chuyên gia được công nhận trong các lĩnh vực riêng của mình."
    },
    {
        word: "respectively",
        meaning: "lần lượt, tương ứng",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/rɪˈspektɪvli/",
        example: "Julie and Mark, aged 17 and 19 respectively",
        exampleTranslation: "Julie và Mark, lần lượt 17 và 19 tuổi"
    },
    {
        word: "restoration",
        meaning: "sự phục hồi, sự khôi phục",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌrestəˈreɪʃn/",
        example: "restoration work",
        exampleTranslation: "công việc phục hồi"
    },
    {
        word: "restraint",
        meaning: "sự kiềm chế, sự hạn chế",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/rɪˈstreɪnt/",
        example: "The government has imposed export restraints on some products.",
        exampleTranslation: "Chính phủ đã áp đặt các hạn chế xuất khẩu đối với một số sản phẩm."
    },
    {
        word: "resume",
        meaning: "tiếp tục, bắt đầu lại",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/rɪˈzuːm/",
        example: "resume (something) to resume talks/negotiations",
        exampleTranslation: "tiếp tục các cuộc đàm phán/thương lượng"
    },
    {
        word: "retreat",
        meaning: "sự rút lui, nơi ẩn náu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/rɪˈtriːt/",
        example: "Napoleon’s retreat from Moscow",
        exampleTranslation: "cuộc rút lui của Napoleon khỏi Moscow"
    },
    {
        word: "retrieve",
        meaning: "lấy lại, tìm lại, khôi phục",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/rɪˈtriːv/",
        example: "from somebody/something She bent to retrieve her comb from the floor.",
        exampleTranslation: "Cô cúi xuống nhặt chiếc lược của mình từ dưới sàn."
    },
    {
        word: "revelation",
        meaning: "sự tiết lộ, sự khám phá",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌrevəˈleɪʃn/",
        example: "revelation about/concerning something startling/sensational revelations about her private life",
        exampleTranslation: "những tiết lộ gây sốc/giật gân về đời tư của cô ấy"
    },
    {
        word: "revenge",
        meaning: "sự trả thù, mối thù",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/rɪˈvendʒ/",
        example: "revenge for something She is seeking revenge for the murder of her husband.",
        exampleTranslation: "Cô ấy đang tìm cách trả thù cho vụ giết chồng mình."
    },
    {
        word: "reverse",
        meaning: "ngược lại, đảo ngược",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/rɪˈvɜːrs/",
        example: "to travel in the reverse direction",
        exampleTranslation: "đi theo hướng ngược lại"
    },
    {
        word: "revival",
        meaning: "sự hồi sinh, sự phục hồi",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/rɪˈvaɪvl/",
        example: "the revival of trade",
        exampleTranslation: "sự phục hồi thương mại"
    },
    {
        word: "revive",
        meaning: "hồi sinh, làm sống lại",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/rɪˈvaɪv/",
        example: "The flowers soon revived in water.",
        exampleTranslation: "Những bông hoa nhanh chóng tươi trở lại trong nước."
    },
    {
        word: "revolutionary",
        meaning: "mang tính cách mạng, cách mạng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌrevəˈluːʃəneri/",
        example: "a revolutionary leader",
        exampleTranslation: "một nhà lãnh đạo cách mạng"
    },
    {
        word: "rhetoric",
        meaning: "hùng biện, tu từ, lời lẽ hoa mỹ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈretərɪk/",
        example: "the rhetoric of political slogans",
        exampleTranslation: "những lời lẽ hùng biện của khẩu hiệu chính trị"
    },
    {
        word: "rifle",
        meaning: "súng trường",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈraɪfl/",
        example: "a hunting rifle",
        exampleTranslation: "một khẩu súng trường săn"
    },
    {
        word: "riot",
        meaning: "bạo loạn, cuộc nổi loạn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈraɪət/",
        example: "One prison guard was killed when a riot broke out in the jail.",
        exampleTranslation: "Một cai ngục đã thiệt mạng khi một cuộc bạo loạn nổ ra trong nhà tù."
    },
    {
        word: "rip",
        meaning: "xé, xé toạc",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/rɪp/",
        example: "rip (something) I ripped my jeans on the fence.",
        exampleTranslation: "Tôi đã làm rách quần jean của mình vào hàng rào."
    },
    {
        word: "ritual",
        meaning: "nghi lễ, nghi thức",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈrɪtʃuəl/",
        example: "religious rituals",
        exampleTranslation: "các nghi lễ tôn giáo"
    },
    {
        word: "robust",
        meaning: "mạnh mẽ, cường tráng, khỏe mạnh",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/rəʊˈbʌst/",
        example: "She was almost 90, but still very robust.",
        exampleTranslation: "Bà đã gần 90 tuổi, nhưng vẫn rất khỏe mạnh."
    },
    {
        word: "rock",
        meaning: "lắc lư, rung chuyển",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/rɑːk/",
        example: "(+ adv./prep.) The boat rocked from side to side in the waves.",
        exampleTranslation: "Con thuyền lắc lư từ bên này sang bên kia trong sóng."
    },
    {
        word: "rod",
        meaning: "que, thanh, cần",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/rɑːd/",
        example: "The concrete is reinforced with steel rods.",
        exampleTranslation: "Bê tông được gia cố bằng các thanh thép."
    },
    {
        word: "rotate",
        meaning: "xoay, quay",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈrəʊteɪt/",
        example: "Stay well away from the helicopter when its blades start to rotate.",
        exampleTranslation: "Tránh xa trực thăng khi cánh quạt của nó bắt đầu quay."
    },
    {
        word: "rotation",
        meaning: "sự xoay, sự quay",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/rəʊˈteɪʃn/",
        example: "the daily rotation of the earth on its axis",
        exampleTranslation: "sự tự quay hàng ngày của trái đất quanh trục của nó"
    },
    {
        word: "ruling",
        meaning: "phán quyết, quyết định",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈruːlɪŋ/",
        example: "The court will make its ruling on the case next week.",
        exampleTranslation: "Tòa án sẽ đưa ra phán quyết về vụ án vào tuần tới."
    },
    {
        word: "rumour",
        meaning: "tin đồn, lời đồn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈruːmər/",
        example: "to start/spread a rumour",
        exampleTranslation: "bắt đầu/lan truyền một tin đồn"
    },
    {
        word: "sack",
        meaning: "sa thải, đuổi việc",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/sæk/",
        example: "She was sacked for refusing to work on Sundays.",
        exampleTranslation: "Cô ấy bị sa thải vì từ chối làm việc vào Chủ nhật."
    },
    {
        word: "sacred",
        meaning: "linh thiêng, thiêng liêng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈseɪkrɪd/",
        example: "a sacred image/shrine/temple",
        exampleTranslation: "một hình ảnh/đền thờ/ngôi chùa linh thiêng"
    },
    {
        word: "sacrifice",
        meaning: "sự hy sinh, sự từ bỏ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈsækrɪfaɪs/",
        example: "The makers of the product assured us that there had been no sacrifice of quality.",
        exampleTranslation: "Các nhà sản xuất sản phẩm đảm bảo với chúng tôi rằng không hề có sự hy sinh nào về chất lượng."
    },
    {
        word: "saint",
        meaning: "thánh",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/seɪnt/",
        example: "St John",
        exampleTranslation: "Thánh John"
    },
    {
        word: "sake",
        meaning: "mục đích, lợi ích; (rượu) sake",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/seɪk/",
        example: "This is an example of sake.",
        exampleTranslation: "Đây là một ví dụ về sake."
    },
    {
        word: "sanction",
        meaning: "lệnh trừng phạt, sự phê chuẩn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈsæŋkʃn/",
        example: "Trade sanctions were imposed against any country that refused to sign the agreement.",
        exampleTranslation: "Các lệnh trừng phạt thương mại đã được áp đặt đối với bất kỳ quốc gia nào từ chối ký thỏa thuận."
    },
    {
        word: "say",
        meaning: "quyền lên tiếng, ý kiến",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/seɪ/",
        example: "say (in something) We had no say in the decision to sell the company.",
        exampleTranslation: "Chúng tôi không có tiếng nói trong quyết định bán công ty."
    },
    {
        word: "scattered",
        meaning: "rải rác, phân tán",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈskætərd/",
        example: "a few scattered settlements",
        exampleTranslation: "một vài khu định cư rải rác"
    },
    {
        word: "sceptical",
        meaning: "hoài nghi, đa nghi",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈskeptɪkl/",
        example: "She looked highly sceptical.",
        exampleTranslation: "Cô ấy trông rất hoài nghi."
    },
    {
        word: "scope",
        meaning: "phạm vi, cơ hội, tiềm năng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/skəʊp/",
        example: "scope for something There's still plenty of scope for improvement.",
        exampleTranslation: "Vẫn còn nhiều cơ hội để cải thiện."
    },
    {
        word: "screw",
        meaning: "ốc vít",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/skruː/",
        example: "One of the screws is loose.",
        exampleTranslation: "Một trong những ốc vít bị lỏng."
    },
    {
        word: "scrutiny",
        meaning: "sự xem xét kỹ lưỡng, sự giám sát chặt chẽ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈskruːtəni/",
        example: "Her argument doesn't really stand up to scrutiny.",
        exampleTranslation: "Lập luận của cô ấy không thực sự chịu được sự xem xét kỹ lưỡng."
    },
    {
        word: "seal",
        meaning: "dấu niêm phong, con dấu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/siːl/",
        example: "The letter bore the president's seal.",
        exampleTranslation: "Bức thư mang con dấu của tổng thống."
    },
    {
        word: "secular",
        meaning: "thế tục, không tôn giáo",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈsekjələr/",
        example: "secular music",
        exampleTranslation: "nhạc thế tục"
    },
    {
        word: "seemingly",
        meaning: "dường như, có vẻ như",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/ˈsiːmɪŋli/",
        example: "a seemingly stupid question",
        exampleTranslation: "một câu hỏi dường như ngu ngốc"
    },
    {
        word: "segment",
        meaning: "đoạn, khúc, phần",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈseɡmənt/",
        example: "She cleaned a small segment of the painting.",
        exampleTranslation: "Cô ấy đã làm sạch một phần nhỏ của bức tranh."
    },
    {
        word: "seize",
        meaning: "nắm lấy, chiếm lấy, giật lấy",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/siːz/",
        example: "She tried to seize the gun from him.",
        exampleTranslation: "Cô ấy cố gắng giật lấy khẩu súng từ anh ta."
    },
    {
        word: "seldom",
        meaning: "hiếm khi, ít khi",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/ˈseldəm/",
        example: "He had seldom seen a child with so much talent.",
        exampleTranslation: "Anh ấy hiếm khi thấy một đứa trẻ có nhiều tài năng như vậy."
    },
    {
        word: "selective",
        meaning: "có chọn lọc, có lựa chọn",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/sɪˈlektɪv/",
        example: "the selective breeding of cattle",
        exampleTranslation: "sự nhân giống gia súc có chọn lọc"
    },
    {
        word: "senator",
        meaning: "thượng nghị sĩ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈsenətər/",
        example: "Senator McCarthy",
        exampleTranslation: "Thượng nghị sĩ McCarthy"
    },
    {
        word: "sensation",
        meaning: "cảm giác, cảm thấy",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/senˈseɪʃn/",
        example: "a tingling/burning sensation",
        exampleTranslation: "cảm giác ngứa ran/nóng rát"
    },
    {
        word: "sensitivity",
        meaning: "sự nhạy cảm, độ nhạy",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌsensəˈtɪvəti/",
        example: "sensitivity to the needs of children",
        exampleTranslation: "sự nhạy cảm với nhu cầu của trẻ em"
    },
    {
        word: "sentiment",
        meaning: "tình cảm, cảm nghĩ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈsentɪmənt/",
        example: "the spread of nationalist sentiments",
        exampleTranslation: "sự lan rộng của tình cảm dân tộc"
    },
    {
        word: "separation",
        meaning: "sự chia ly, sự tách rời, sự phân ly",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌsepəˈreɪʃn/",
        example: "separation from somebody/something the state’s eventual separation from the federation",
        exampleTranslation: "sự chia ly khỏi ai đó/cái gì đó, sự tách rời cuối cùng của bang khỏi liên bang"
    },
    {
        word: "serial",
        meaning: "hàng loạt, nối tiếp",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈsɪriəl/",
        example: "a serial rapist",
        exampleTranslation: "một kẻ hiếp dâm hàng loạt"
    },
    {
        word: "set-up",
        meaning: "sự sắp đặt, hệ thống, tổ chức",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈset ʌp/",
        example: "I've only been here a couple of weeks and I don't really know the set-up.",
        exampleTranslation: "Tôi chỉ mới ở đây vài tuần và tôi chưa thực sự hiểu rõ cách thức tổ chức/sắp đặt."
    },
    {
        word: "settlement",
        meaning: "sự dàn xếp, sự giải quyết, khu định cư",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈsetlmənt/",
        example: "to negotiate a peace settlement",
        exampleTranslation: "đàm phán một thỏa thuận hòa bình"
    },
    {
        word: "sexuality",
        meaning: "giới tính, xu hướng tính dục",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌsekʃuˈæləti/",
        example: "He was confused about his sexuality.",
        exampleTranslation: "Anh ấy bối rối về xu hướng tính dục của mình."
    },
    {
        word: "shareholder",
        meaning: "cổ đông",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈʃerhəʊldər/",
        example: "the major shareholders in the company",
        exampleTranslation: "các cổ đông lớn của công ty"
    },
    {
        word: "shatter",
        meaning: "làm vỡ tan, vỡ vụn",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈʃætər/",
        example: "shatter (into something) He dropped the vase and it shattered into pieces on the floor.",
        exampleTranslation: "Anh ấy đánh rơi chiếc bình và nó vỡ tan thành từng mảnh trên sàn nhà."
    },
    {
        word: "shed",
        meaning: "rụng, bỏ, thải ra, sa thải",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ʃed/",
        example: "The factory is shedding a large number of jobs.",
        exampleTranslation: "Nhà máy đang sa thải một số lượng lớn việc làm."
    },
    {
        word: "sheer",
        meaning: "hoàn toàn, tuyệt đối, dốc đứng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ʃɪr/",
        example: "The area is under threat from the sheer number of tourists using it.",
        exampleTranslation: "Khu vực này đang bị đe dọa bởi số lượng khách du lịch quá lớn sử dụng nó."
    },
    {
        word: "shipping",
        meaning: "vận tải biển, tàu bè",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈʃɪpɪŋ/",
        example: "The canal is open to shipping.",
        exampleTranslation: "Kênh đào này mở cửa cho tàu bè."
    },
    {
        word: "shoot",
        meaning: "chồi, mầm non",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ʃuːt/",
        example: "new green shoots",
        exampleTranslation: "những chồi xanh mới"
    },
    {
        word: "shrink",
        meaning: "co lại, thu nhỏ",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ʃrɪŋk/",
        example: "My sweater shrank in the wash.",
        exampleTranslation: "Áo len của tôi bị co lại sau khi giặt."
    },
    {
        word: "shrug",
        meaning: "nhún vai",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ʃrʌɡ/",
        example: "Sam shrugged and said nothing.",
        exampleTranslation: "Sam nhún vai và không nói gì."
    },
    {
        word: "sigh",
        meaning: "tiếng thở dài",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/saɪ/",
        example: "to give/heave/let out a sigh",
        exampleTranslation: "thở dài"
    },
    {
        word: "simulate",
        meaning: "mô phỏng, giả lập",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈsɪmjuleɪt/",
        example: "Computer software can be used to simulate conditions on the seabed.",
        exampleTranslation: "Phần mềm máy tính có thể được sử dụng để mô phỏng các điều kiện dưới đáy biển."
    },
    {
        word: "simulation",
        meaning: "sự mô phỏng, sự giả lập",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌsɪmjuˈleɪʃn/",
        example: "a computer simulation of how the planet functions",
        exampleTranslation: "một mô phỏng máy tính về cách hành tinh hoạt động"
    },
    {
        word: "simultaneously",
        meaning: "đồng thời, cùng lúc",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/ˌsaɪmlˈteɪniəsli/",
        example: "The game will be broadcast simultaneously on TV and radio.",
        exampleTranslation: "Trò chơi sẽ được phát sóng đồng thời trên TV và đài phát thanh."
    },
    {
        word: "sin",
        meaning: "tội lỗi",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/sɪn/",
        example: "to commit a sin",
        exampleTranslation: "phạm tội"
    },
    {
        word: "situated",
        meaning: "nằm ở, tọa lạc",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈsɪtʃueɪtɪd/",
        example: "My bedroom was situated on the top floor of the house.",
        exampleTranslation: "Phòng ngủ của tôi nằm ở tầng trên cùng của ngôi nhà."
    },
    {
        word: "sketch",
        meaning: "bản phác thảo, bản vẽ nháp",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/sketʃ/",
        example: "The artist is making sketches for his next painting.",
        exampleTranslation: "Họa sĩ đang phác thảo cho bức tranh tiếp theo của mình."
    },
    {
        word: "skip",
        meaning: "nhảy nhót, bỏ qua",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/skɪp/",
        example: "She skipped happily along beside me.",
        exampleTranslation: "Cô ấy nhảy nhót vui vẻ bên cạnh tôi."
    },
    {
        word: "slam",
        meaning: "đóng sầm, đập mạnh",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/slæm/",
        example: "I heard the door slam behind him.",
        exampleTranslation: "Tôi nghe thấy tiếng cửa đóng sầm lại phía sau anh ấy."
    },
    {
        word: "slap",
        meaning: "tát",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/slæp/",
        example: "She slapped his face hard.",
        exampleTranslation: "Cô ấy tát mạnh vào mặt anh ấy."
    },
    {
        word: "slash",
        meaning: "chém, rạch, cắt giảm mạnh",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/slæʃ/",
        example: "Someone had slashed the tyres on my car.",
        exampleTranslation: "Ai đó đã rạch lốp xe ô tô của tôi."
    },
    {
        word: "slavery",
        meaning: "chế độ nô lệ, kiếp nô lệ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈsleɪvəri/",
        example: "to be sold into slavery",
        exampleTranslation: "bị bán vào cảnh nô lệ"
    },
    {
        word: "slot",
        meaning: "khe, rãnh, lỗ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/slɑːt/",
        example: "to put some coins in the slot",
        exampleTranslation: "nhét vài đồng xu vào khe"
    },
    {
        word: "smash",
        meaning: "đập vỡ, làm vỡ tan",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/smæʃ/",
        example: "Several windows had been smashed.",
        exampleTranslation: "Một vài cửa sổ đã bị đập vỡ."
    },
    {
        word: "snap",
        meaning: "bẻ gãy, làm gãy rụp",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/snæp/",
        example: "The wind had snapped the tree in two.",
        exampleTranslation: "Gió đã bẻ gãy cây thành hai phần."
    },
    {
        word: "soak",
        meaning: "ngâm, nhúng",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/səʊk/",
        example: "(in something) I usually soak the beans overnight.",
        exampleTranslation: "Tôi thường ngâm đậu qua đêm."
    },
    {
        word: "soar",
        meaning: "tăng vọt, bay vút",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/sɔːr/",
        example: "soaring costs/prices/temperatures",
        exampleTranslation: "chi phí/giá cả/nhiệt độ tăng vọt"
    },
    {
        word: "socialist",
        meaning: "xã hội chủ nghĩa",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈsəʊʃəlɪst/",
        example: "socialist beliefs",
        exampleTranslation: "những niềm tin xã hội chủ nghĩa"
    },
    {
        word: "sole",
        meaning: "duy nhất, độc nhất",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/səʊl/",
        example: "the sole surviving member of the family",
        exampleTranslation: "thành viên duy nhất còn sống sót của gia đình"
    },
    {
        word: "solely",
        meaning: "chỉ, duy nhất, hoàn toàn",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/ˈsəʊlli/",
        example: "She was motivated solely by self-interest.",
        exampleTranslation: "Cô ấy được thúc đẩy hoàn toàn bởi lợi ích cá nhân."
    },
    {
        word: "solicitor",
        meaning: "luật sư",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/səˈlɪsɪtər/",
        example: "Her first step was to contact a solicitor for advice.",
        exampleTranslation: "Bước đầu tiên của cô ấy là liên hệ với một luật sư để xin lời khuyên."
    },
    {
        word: "solidarity",
        meaning: "tình đoàn kết",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌsɑːlɪˈdærəti/",
        example: "community solidarity",
        exampleTranslation: "tình đoàn kết cộng đồng"
    },
    {
        word: "solo",
        meaning: "đơn độc, một mình",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈsəʊləʊ/",
        example: "his first solo flight",
        exampleTranslation: "chuyến bay đơn độc đầu tiên của anh ấy"
    },
    {
        word: "sound",
        meaning: "đúng đắn, hợp lý, vững chắc",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/saʊnd/",
        example: "He's a person of very sound judgement.",
        exampleTranslation: "Anh ấy là người có óc phán đoán rất đúng đắn."
    },
    {
        word: "sovereignty",
        meaning: "chủ quyền",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈsɑːvrənti/",
        example: "The country claimed sovereignty over the island.",
        exampleTranslation: "Quốc gia đó tuyên bố chủ quyền đối với hòn đảo."
    },
    {
        word: "spam",
        meaning: "thư rác, tin rác",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/spæm/",
        example: "to send/block spam",
        exampleTranslation: "gửi/chặn thư rác"
    },
    {
        word: "span",
        meaning: "khoảng thời gian, quãng thời gian",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/spæn/",
        example: "I worked with him over a span of six years.",
        exampleTranslation: "Tôi đã làm việc với anh ấy trong suốt khoảng thời gian sáu năm."
    },
    {
        word: "spare",
        meaning: "dành ra, để dành",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/sper/",
        example: "spare something/somebody I'd love to have a break, but I can't spare the time just now.",
        exampleTranslation: "Tôi rất muốn nghỉ ngơi, nhưng tôi không thể dành thời gian vào lúc này."
    },
    {
        word: "spark",
        meaning: "châm ngòi, khơi mào",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/spɑːrk/",
        example: "The proposal would spark a storm of protest around the country.",
        exampleTranslation: "Đề xuất này sẽ châm ngòi cho một làn sóng phản đối khắp cả nước."
    },
    {
        word: "specialized",
        meaning: "chuyên dụng, chuyên biệt",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈspeʃəlaɪzd/",
        example: "specialized equipment",
        exampleTranslation: "thiết bị chuyên dụng"
    },
    {
        word: "specification",
        meaning: "thông số kỹ thuật, đặc điểm kỹ thuật",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌspesɪfɪˈkeɪʃn/",
        example: "the technical specifications of the new model (= of car)",
        exampleTranslation: "các thông số kỹ thuật của mẫu xe mới"
    },
    {
        word: "specimen",
        meaning: "mẫu vật",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈspesɪmən/",
        example: "Astronauts have brought back specimens of rock from the moon.",
        exampleTranslation: "Các phi hành gia đã mang về các mẫu vật đá từ mặt trăng."
    },
    {
        word: "spectacle",
        meaning: "kính đeo mắt",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈspektəkl/",
        example: "a pair of spectacles",
        exampleTranslation: "một cặp kính đeo mắt"
    },
    {
        word: "spectrum",
        meaning: "quang phổ, dải",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈspektrəm/",
        example: "A spectrum is formed by a ray of light passing through a prism.",
        exampleTranslation: "Quang phổ được hình thành khi một tia sáng đi qua lăng kính."
    },
    {
        word: "spell",
        meaning: "giai đoạn, thời kỳ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/spel/",
        example: "We had a spell of warm weather in April.",
        exampleTranslation: "Chúng tôi đã có một giai đoạn thời tiết ấm áp vào tháng Tư."
    },
    {
        word: "sphere",
        meaning: "hình cầu, quả cầu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/sfɪr/",
        example: "The Earth is not a perfect sphere.",
        exampleTranslation: "Trái Đất không phải là một hình cầu hoàn hảo."
    },
    {
        word: "spin",
        meaning: "sự quay, vòng quay",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/spɪn/",
        example: "Only in the last 50 years have we had clocks accurate enough to measure changes in the earth's spin.",
        exampleTranslation: "Chỉ trong 50 năm qua chúng ta mới có những chiếc đồng hồ đủ chính xác để đo lường sự thay đổi trong vòng quay của Trái đất."
    },
    {
        word: "spine",
        meaning: "xương sống, cột sống",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/spaɪn/",
        example: "A shiver went down my spine.",
        exampleTranslation: "Một cảm giác rùng mình chạy dọc sống lưng tôi."
    },
    {
        word: "spotlight",
        meaning: "đèn sân khấu, đèn pha chiếu điểm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈspɑːtlaɪt/",
        example: "The room was lit by spotlights.",
        exampleTranslation: "Căn phòng được chiếu sáng bằng đèn pha chiếu điểm."
    },
    {
        word: "spouse",
        meaning: "vợ/chồng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/spaʊz/",
        example: "Fill in your spouse’s name here.",
        exampleTranslation: "Điền tên vợ/chồng của bạn vào đây."
    },
    {
        word: "spy",
        meaning: "điệp viên, gián điệp",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/spaɪ/",
        example: "He was denounced as a foreign spy.",
        exampleTranslation: "Anh ta bị tố cáo là một điệp viên nước ngoài."
    },
    {
        word: "squad",
        meaning: "đội, toán, tiểu đội",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/skwɑːd/",
        example: "the drugs/fraud/bomb/riot squad",
        exampleTranslation: "đội phòng chống ma túy/gian lận/bom/chống bạo động"
    },
    {
        word: "squeeze",
        meaning: "bóp, vắt, ép",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/skwiːz/",
        example: "to squeeze a tube of toothpaste",
        exampleTranslation: "bóp một ống kem đánh răng"
    },
    {
        word: "stab",
        meaning: "đâm",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/stæb/",
        example: "He was stabbed to death in a racist attack.",
        exampleTranslation: "Anh ta bị đâm chết trong một vụ tấn công phân biệt chủng tộc."
    },
    {
        word: "stability",
        meaning: "sự ổn định",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/stəˈbɪləti/",
        example: "political/economic/social stability",
        exampleTranslation: "sự ổn định chính trị/kinh tế/xã hội"
    },
    {
        word: "stabilize",
        meaning: "ổn định (làm cho ổn định)",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈsteɪbəlaɪz/",
        example: "The patient's condition stabilized.",
        exampleTranslation: "Tình trạng của bệnh nhân đã ổn định."
    },
    {
        word: "stake",
        meaning: "cổ phần, phần lợi tức",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/steɪk/",
        example: "a 20 per cent stake in the business",
        exampleTranslation: "20 phần trăm cổ phần trong công việc kinh doanh"
    },
    {
        word: "standing",
        meaning: "đứng, tại chỗ",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈstændɪŋ/",
        example: "a standing jump/start",
        exampleTranslation: "một cú nhảy/khởi đầu tại chỗ"
    },
    {
        word: "stark",
        meaning: "trần trụi, rõ ràng, khắc nghiệt",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/stɑːrk/",
        example: "The author paints a stark picture of life in a prison camp.",
        exampleTranslation: "Tác giả đã vẽ nên một bức tranh trần trụi về cuộc sống trong trại tù."
    },
    {
        word: "statistical",
        meaning: "thuộc thống kê",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/stəˈtɪstɪkl/",
        example: "statistical analysis",
        exampleTranslation: "phân tích thống kê"
    },
    {
        word: "steer",
        meaning: "lái, dẫn dắt",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/stɪr/",
        example: "He steered the boat into the harbour.",
        exampleTranslation: "Anh ấy lái thuyền vào bến cảng."
    },
    {
        word: "stem",
        meaning: "thân, cuống",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/stem/",
        example: "long, trailing stems of ivy",
        exampleTranslation: "những thân cây thường xuân dài, bò lan"
    },
    {
        word: "stereotype",
        meaning: "khuôn mẫu, định kiến",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈsteriətaɪp/",
        example: "cultural/gender/racial stereotypes",
        exampleTranslation: "những khuôn mẫu văn hóa/giới tính/chủng tộc"
    },
    {
        word: "stimulus",
        meaning: "sự kích thích, tác nhân kích thích",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈstɪmjələs/",
        example: "stimulus for something Books provide children with ideas and a stimulus for play.",
        exampleTranslation: "Sách cung cấp cho trẻ em ý tưởng và sự kích thích để vui chơi."
    },
    {
        word: "stir",
        meaning: "khuấy, quấy",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/stɜːr/",
        example: "She stirred her tea.",
        exampleTranslation: "Cô ấy khuấy trà của mình."
    },
    {
        word: "storage",
        meaning: "sự lưu trữ, kho chứa",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈstɔːrɪdʒ/",
        example: "tables that fold flat for storage",
        exampleTranslation: "những chiếc bàn có thể gập phẳng để cất giữ"
    },
    {
        word: "straightforward",
        meaning: "thẳng thắn, đơn giản, dễ hiểu",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌstreɪtˈfɔːrwərd/",
        example: "It's a relatively straightforward process.",
        exampleTranslation: "Đó là một quy trình tương đối đơn giản."
    },
    {
        word: "strain",
        meaning: "sự căng thẳng, áp lực",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/streɪn/",
        example: "The transport service cannot cope with the strain of so many additional passengers.",
        exampleTranslation: "Dịch vụ vận tải không thể đối phó với áp lực của quá nhiều hành khách bổ sung."
    },
    {
        word: "strand",
        meaning: "sợi (tóc, len), bờ biển",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/strænd/",
        example: "He pulled at a loose strand of wool in his sweater.",
        exampleTranslation: "Anh ấy kéo một sợi len lỏng trong áo len của mình."
    },
    {
        word: "strategic",
        meaning: "chiến lược",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/strəˈtiːdʒɪk/",
        example: "strategic planning",
        exampleTranslation: "lập kế hoạch chiến lược"
    },
    {
        word: "striking",
        meaning: "nổi bật, ấn tượng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈstraɪkɪŋ/",
        example: "a striking feature",
        exampleTranslation: "một đặc điểm nổi bật"
    },
    {
        word: "strip",
        meaning: "dải, mảnh",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/strɪp/",
        example: "a strip of material",
        exampleTranslation: "một dải vật liệu"
    },
    {
        word: "strive",
        meaning: "cố gắng, phấn đấu",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/straɪv/",
        example: "strive for something We encourage all members to strive for the highest standards.",
        exampleTranslation: "Chúng tôi khuyến khích tất cả các thành viên phấn đấu đạt được những tiêu chuẩn cao nhất."
    },
    {
        word: "structural",
        meaning: "thuộc cấu trúc",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈstrʌktʃərəl/",
        example: "Storms have caused structural damage to hundreds of homes.",
        exampleTranslation: "Bão đã gây hư hại cấu trúc cho hàng trăm ngôi nhà."
    },
    {
        word: "stumble",
        meaning: "vấp, bước hụt",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈstʌmbl/",
        example: "The child stumbled and fell.",
        exampleTranslation: "Đứa trẻ vấp ngã."
    },
    {
        word: "stun",
        meaning: "làm choáng váng, làm kinh ngạc",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/stʌn/",
        example: "The fall stunned me for a moment.",
        exampleTranslation: "Cú ngã đã làm tôi choáng váng trong chốc lát."
    },
    {
        word: "submission",
        meaning: "sự phục tùng, sự đệ trình",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/səbˈmɪʃn/",
        example: "a gesture of submission",
        exampleTranslation: "một cử chỉ phục tùng"
    },
    {
        word: "subscriber",
        meaning: "người đăng ký, thuê bao",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/səbˈskraɪbər/",
        example: "subscribers to ‘New Scientist’",
        exampleTranslation: "những người đăng ký 'New Scientist'"
    },
    {
        word: "subscription",
        meaning: "phí đăng ký, sự đăng ký",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/səbˈskrɪpʃn/",
        example: "an annual subscription",
        exampleTranslation: "một khoản phí đăng ký hàng năm"
    },
    {
        word: "subsidy",
        meaning: "tiền trợ cấp",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈsʌbsədi/",
        example: "agricultural subsidies",
        exampleTranslation: "các khoản trợ cấp nông nghiệp"
    },
    {
        word: "substantial",
        meaning: "đáng kể, lớn",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/səbˈstænʃl/",
        example: "substantial sums of money",
        exampleTranslation: "những khoản tiền đáng kể"
    },
    {
        word: "substantially",
        meaning: "đáng kể, nhiều",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/səbˈstænʃəli/",
        example: "The costs have increased substantially.",
        exampleTranslation: "Chi phí đã tăng đáng kể."
    },
    {
        word: "substitute",
        meaning: "vật thay thế, người thay thế",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈsʌbstɪtuːt/",
        example: "a meat substitute",
        exampleTranslation: "một loại thịt thay thế"
    },
    {
        word: "substitution",
        meaning: "sự thay thế, sự đổi người",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌsʌbstɪˈtuːʃn/",
        example: "Two substitutions were made during the game.",
        exampleTranslation: "Hai sự thay người đã được thực hiện trong trận đấu."
    },
    {
        word: "subtle",
        meaning: "tinh tế, khó nhận ra, tế nhị",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈsʌtl/",
        example: "subtle colours/flavours/smells, etc.",
        exampleTranslation: "màu sắc/hương vị/mùi hương tinh tế, v.v."
    },
    {
        word: "suburban",
        meaning: "thuộc vùng ngoại ô",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/səˈbɜːrbən/",
        example: "suburban areas",
        exampleTranslation: "các khu vực ngoại ô"
    },
    {
        word: "succession",
        meaning: "sự kế tiếp, sự liên tiếp, chuỗi",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/səkˈseʃn/",
        example: "a succession of visitors",
        exampleTranslation: "một chuỗi khách đến thăm"
    },
    {
        word: "successive",
        meaning: "liên tiếp, kế tiếp",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/səkˈsesɪv/",
        example: "This was their fourth successive win.",
        exampleTranslation: "Đây là chiến thắng liên tiếp thứ tư của họ."
    },
    {
        word: "successor",
        meaning: "người kế nhiệm, người thừa kế",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/səkˈsesər/",
        example: "Who's the likely successor to him as party leader?",
        exampleTranslation: "Ai là người có khả năng kế nhiệm ông ấy làm lãnh đạo đảng?"
    },
    {
        word: "suck",
        meaning: "hút, mút",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/sʌk/",
        example: "to suck the juice from an orange",
        exampleTranslation: "hút nước từ một quả cam"
    },
    {
        word: "sue",
        meaning: "kiện, khởi kiện",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/suː/",
        example: "They threatened to sue if the work was not completed.",
        exampleTranslation: "Họ đe dọa sẽ kiện nếu công việc không được hoàn thành."
    },
    {
        word: "suicide",
        meaning: "sự tự tử, tự sát",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈsuːɪsaɪd/",
        example: "to commit suicide",
        exampleTranslation: "tự tử"
    },
    {
        word: "suite",
        meaning: "phòng suite, dãy phòng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/swiːt/",
        example: "a hotel/private/honeymoon suite",
        exampleTranslation: "một phòng suite khách sạn/riêng tư/tuần trăng mật"
    },
    {
        word: "summit",
        meaning: "đỉnh, hội nghị thượng đỉnh",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈsʌmɪt/",
        example: "We reached the summit at noon.",
        exampleTranslation: "Chúng tôi đã lên đến đỉnh vào buổi trưa."
    },
    {
        word: "superb",
        meaning: "tuyệt vời, xuất sắc",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/suːˈpɜːrb/",
        example: "a superb player",
        exampleTranslation: "một cầu thủ xuất sắc"
    },
    {
        word: "superior",
        meaning: "vượt trội, cao cấp hơn",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/suːˈpɪriər/",
        example: "vastly superior",
        exampleTranslation: "vượt trội hơn rất nhiều"
    },
    {
        word: "supervise",
        meaning: "giám sát, trông nom",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈsuːpərvaɪz/",
        example: "supervise (somebody/something) to supervise building work",
        exampleTranslation: "giám sát công trình xây dựng"
    },
    {
        word: "supervision",
        meaning: "sự giám sát, sự trông nom",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌsuːpərˈvɪʒn/",
        example: "Very young children should not be left to play without supervision.",
        exampleTranslation: "Trẻ nhỏ không nên được để chơi mà không có sự giám sát."
    },
    {
        word: "supervisor",
        meaning: "người giám sát, cán bộ quản lý",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈsuːpərvaɪzər/",
        example: "I have a meeting with my supervisor about my research topic.",
        exampleTranslation: "Tôi có một cuộc họp với người giám sát của mình về chủ đề nghiên cứu của tôi."
    },
    {
        word: "supplement",
        meaning: "chất bổ sung, thực phẩm bổ sung",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈsʌplɪmənt/",
        example: "vitamin/dietary supplements (= vitamins and other foods eaten in addition to what you usually eat)",
        exampleTranslation: "thực phẩm bổ sung vitamin/chế độ ăn uống (= vitamin và các loại thực phẩm khác ăn bổ sung vào những gì bạn thường ăn)"
    },
    {
        word: "supportive",
        meaning: "ủng hộ, hỗ trợ",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/səˈpɔːrtɪv/",
        example: "a supportive family",
        exampleTranslation: "một gia đình ủng hộ"
    },
    {
        word: "supposedly",
        meaning: "được cho là, có vẻ là",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/səˈpəʊzɪdli/",
        example: "The novel is supposedly based on a true story.",
        exampleTranslation: "Cuốn tiểu thuyết được cho là dựa trên một câu chuyện có thật."
    },
    {
        word: "suppress",
        meaning: "đàn áp, kìm nén",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/səˈpres/",
        example: "The rebellion was brutally suppressed.",
        exampleTranslation: "Cuộc nổi dậy đã bị đàn áp một cách tàn bạo."
    },
    {
        word: "supreme",
        meaning: "tối cao, cao nhất",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/suˈpriːm/",
        example: "the Supreme Commander of the armed forces",
        exampleTranslation: "Tổng tư lệnh tối cao của lực lượng vũ trang"
    },
    {
        word: "surge",
        meaning: "sự dâng trào, sự tăng vọt",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/sɜːrdʒ/",
        example: "She felt a sudden surge of anger.",
        exampleTranslation: "Cô ấy cảm thấy một cơn giận đột ngột dâng trào."
    },
    {
        word: "surgical",
        meaning: "thuộc phẫu thuật",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈsɜːrdʒɪkl/",
        example: "surgical procedures",
        exampleTranslation: "các quy trình phẫu thuật"
    },
    {
        word: "surplus",
        meaning: "số dư, lượng dư thừa",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈsɜːrplʌs/",
        example: "food surpluses",
        exampleTranslation: "lượng thực phẩm dư thừa"
    },
    {
        word: "surrender",
        meaning: "đầu hàng, từ bỏ",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/səˈrendər/",
        example: "The rebel soldiers were forced to surrender.",
        exampleTranslation: "Những người lính nổi dậy đã buộc phải đầu hàng."
    },
    {
        word: "surveillance",
        meaning: "sự giám sát, sự theo dõi",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/sɜːrˈveɪləns/",
        example: "The police are keeping the suspects under constant surveillance.",
        exampleTranslation: "Cảnh sát đang theo dõi chặt chẽ các nghi phạm."
    },
    {
        word: "suspension",
        meaning: "sự đình chỉ, sự tạm ngừng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/səˈspenʃn/",
        example: "suspension from school",
        exampleTranslation: "sự đình chỉ học"
    },
    {
        word: "suspicion",
        meaning: "sự nghi ngờ, sự ngờ vực",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/səˈspɪʃn/",
        example: "They drove away slowly to avoid arousing suspicion.",
        exampleTranslation: "Họ lái xe đi chậm rãi để tránh gây ra sự nghi ngờ."
    },
    {
        word: "suspicious",
        meaning: "đáng ngờ, nghi ngờ",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/səˈspɪʃəs/",
        example: "They became suspicious of his behaviour and contacted the police.",
        exampleTranslation: "Họ trở nên nghi ngờ hành vi của anh ta và đã liên hệ với cảnh sát."
    },
    {
        word: "sustain",
        meaning: "duy trì, chống đỡ, chịu đựng",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/səˈsteɪn/",
        example: "Which planets can sustain life?",
        exampleTranslation: "Hành tinh nào có thể duy trì sự sống?"
    },
    {
        word: "swing",
        meaning: "cú vung, cú đánh, xích đu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/swɪŋ/",
        example: "He took a wild swing at the ball.",
        exampleTranslation: "Anh ấy vung mạnh đánh bóng."
    },
    {
        word: "sword",
        meaning: "thanh kiếm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/sɔːrd/",
        example: "to draw/sheathe a sword (= to take it out of/put it into its cover)",
        exampleTranslation: "rút/tra kiếm vào vỏ (= lấy ra khỏi/đặt vào bao của nó)"
    },
    {
        word: "symbolic",
        meaning: "mang tính biểu tượng, tượng trưng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/sɪmˈbɑːlɪk/",
        example: "He shook his fist in a symbolic gesture of defiance.",
        exampleTranslation: "Anh ta nắm chặt tay thành một cử chỉ biểu tượng của sự thách thức."
    },
    {
        word: "syndrome",
        meaning: "hội chứng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈsɪndrəʊm/",
        example: "PMS or premenstrual syndrome",
        exampleTranslation: "PMS hay hội chứng tiền kinh nguyệt"
    },
    {
        word: "synthesis",
        meaning: "sự tổng hợp",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈsɪnθəsɪs/",
        example: "synthesis of A with B the synthesis of art with everyday life",
        exampleTranslation: "sự tổng hợp A với B sự tổng hợp nghệ thuật với cuộc sống hàng ngày"
    },
    {
        word: "systematic",
        meaning: "có hệ thống, có phương pháp",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌsɪstəˈmætɪk/",
        example: "a systematic approach to solving the problem",
        exampleTranslation: "một phương pháp tiếp cận có hệ thống để giải quyết vấn đề"
    },
    {
        word: "tackle",
        meaning: "pha tắc bóng (bóng đá)",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈtækl/",
        example: "He was booked for a late tackle on Torres.",
        exampleTranslation: "Anh ấy đã bị phạt thẻ vì pha tắc bóng muộn với Torres."
    },
    {
        word: "tactic",
        meaning: "chiến thuật",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈtæktɪk/",
        example: "They tried all kinds of tactics to get us to go.",
        exampleTranslation: "Họ đã thử đủ loại chiến thuật để khiến chúng tôi đi."
    },
    {
        word: "tactical",
        meaning: "(thuộc về) chiến thuật",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈtæktɪkl/",
        example: "tactical planning",
        exampleTranslation: "lập kế hoạch chiến thuật"
    },
    {
        word: "taxpayer",
        meaning: "người đóng thuế",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈtækspeɪər/",
        example: "Hundreds of thousands of pounds of taxpayers' money (= money paid in taxes) have been spent on the project.",
        exampleTranslation: "Hàng trăm nghìn bảng Anh tiền của người đóng thuế (= tiền thuế) đã được chi cho dự án."
    },
    {
        word: "tempt",
        meaning: "cám dỗ, lôi kéo",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/tempt/",
        example: "I was tempted by the dessert menu.",
        exampleTranslation: "Tôi bị cám dỗ bởi thực đơn tráng miệng."
    },
    {
        word: "tenant",
        meaning: "người thuê, tá điền",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈtenənt/",
        example: "They had evicted their tenants for non-payment of rent.",
        exampleTranslation: "Họ đã đuổi những người thuê nhà vì không trả tiền thuê."
    },
    {
        word: "tender",
        meaning: "mềm mại, dịu dàng, ân cần",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈtendər/",
        example: "tender words",
        exampleTranslation: "những lời dịu dàng"
    },
    {
        word: "tenure",
        meaning: "nhiệm kỳ, thời gian giữ chức",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈtenjər/",
        example: "his four-year tenure as president",
        exampleTranslation: "nhiệm kỳ bốn năm của ông ấy với tư cách là tổng thống"
    },
    {
        word: "terminal",
        meaning: "cuối cùng, giai đoạn cuối (bệnh)",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈtɜːrmɪnl/",
        example: "He has terminal lung cancer.",
        exampleTranslation: "Anh ấy bị ung thư phổi giai đoạn cuối."
    },
    {
        word: "terminate",
        meaning: "chấm dứt, kết thúc",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈtɜːrmɪneɪt/",
        example: "Your contract of employment terminates in December.",
        exampleTranslation: "Hợp đồng lao động của bạn chấm dứt vào tháng 12."
    },
    {
        word: "terrain",
        meaning: "địa hình",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/təˈreɪn/",
        example: "difficult/rough/mountainous terrain",
        exampleTranslation: "địa hình khó khăn/gồ ghề/núi non"
    },
    {
        word: "terrific",
        meaning: "tuyệt vời, kinh khủng (tốt)",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/təˈrɪfɪk/",
        example: "I feel absolutely terrific today!",
        exampleTranslation: "Hôm nay tôi cảm thấy vô cùng tuyệt vời!"
    },
    {
        word: "testify",
        meaning: "làm chứng, chứng thực",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈtestɪfaɪ/",
        example: "testify against somebody/something She refused to testify against her husband.",
        exampleTranslation: "làm chứng chống lại ai đó/điều gì đó Cô ấy từ chối làm chứng chống lại chồng mình."
    },
    {
        word: "testimony",
        meaning: "lời chứng thực, bằng chứng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈtestɪməʊni/",
        example: "This increase in exports bears testimony to the successes of industry.",
        exampleTranslation: "Sự tăng trưởng xuất khẩu này là bằng chứng cho những thành công của ngành công nghiệp."
    },
    {
        word: "texture",
        meaning: "kết cấu, cấu trúc, bề mặt",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈtekstʃər/",
        example: "the soft texture of velvet",
        exampleTranslation: "kết cấu mềm mại của vải nhung"
    },
    {
        word: "thankfully",
        meaning: "may mắn thay, ơn trời",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/ˈθæŋkfəli/",
        example: "There was a fire in the building, but thankfully no one was hurt.",
        exampleTranslation: "Có một đám cháy trong tòa nhà, nhưng may mắn thay không ai bị thương."
    },
    {
        word: "theatrical",
        meaning: "thuộc về sân khấu, kịch",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/θiˈætrɪkl/",
        example: "a theatrical agent",
        exampleTranslation: "một người đại diện sân khấu"
    },
    {
        word: "theology",
        meaning: "thần học",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/θiˈɑːlədʒi/",
        example: "a degree in theology",
        exampleTranslation: "bằng cấp về thần học"
    },
    {
        word: "theoretical",
        meaning: "(thuộc về) lý thuyết",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌθiːəˈretɪkl/",
        example: "a theoretical approach",
        exampleTranslation: "một cách tiếp cận lý thuyết"
    },
    {
        word: "thereafter",
        meaning: "sau đó, kế đó",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/ˌðerˈæftər/",
        example: "She married at 17 and gave birth to her first child shortly thereafter.",
        exampleTranslation: "Cô ấy kết hôn ở tuổi 17 và sinh con đầu lòng ngay sau đó."
    },
    {
        word: "thereby",
        meaning: "do đó, nhờ đó",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/ˌðerˈbaɪ/",
        example: "Regular exercise strengthens the heart, thereby reducing the risk of heart attack.",
        exampleTranslation: "Tập thể dục thường xuyên giúp tim khỏe mạnh hơn, nhờ đó giảm nguy cơ đau tim."
    },
    {
        word: "thought-provoking",
        meaning: "kích thích tư duy, đáng suy ngẫm",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈθɔːt prəvəʊkɪŋ/",
        example: "a brilliant and thought-provoking play",
        exampleTranslation: "một vở kịch xuất sắc và đáng suy ngẫm"
    },
    {
        word: "thoughtful",
        meaning: "trầm tư, chu đáo, ân cần",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈθɔːtfl/",
        example: "He looked thoughtful.",
        exampleTranslation: "Anh ấy trông có vẻ trầm tư."
    },
    {
        word: "thread",
        meaning: "chỉ, sợi chỉ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/θred/",
        example: "a needle and thread",
        exampleTranslation: "kim và chỉ"
    },
    {
        word: "threshold",
        meaning: "ngưỡng cửa, ngạch cửa",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈθreʃhəʊld/",
        example: "He stepped across the threshold.",
        exampleTranslation: "Anh ấy bước qua ngưỡng cửa."
    },
    {
        word: "thrilled",
        meaning: "rất vui mừng, phấn khích, sướng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/θrɪld/",
        example: "‘Are you pleased?’ ‘I'm thrilled.’",
        exampleTranslation: "‘Anh có hài lòng không?’ ‘Tôi rất vui mừng.’"
    },
    {
        word: "thrive",
        meaning: "phát triển mạnh, thịnh vượng, lớn mạnh",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/θraɪv/",
        example: "New businesses thrive in this area.",
        exampleTranslation: "Các doanh nghiệp mới phát triển mạnh ở khu vực này."
    },
    {
        word: "tide",
        meaning: "thủy triều, dòng nước",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/taɪd/",
        example: "the ebb and flow of the tide",
        exampleTranslation: "sự lên xuống của thủy triều"
    },
    {
        word: "tighten",
        meaning: "thắt chặt, siết chặt, làm chặt",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈtaɪtn/",
        example: "a lid/screw/rope/knot",
        exampleTranslation: "một cái nắp/ốc vít/dây thừng/nút thắt chặt"
    },
    {
        word: "timber",
        meaning: "gỗ, gỗ xây dựng, lâm sản",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈtɪmbər/",
        example: "the timber industry",
        exampleTranslation: "ngành công nghiệp gỗ"
    },
    {
        word: "timely",
        meaning: "kịp thời, đúng lúc",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈtaɪmli/",
        example: "A nasty incident was prevented by the timely arrival of the police.",
        exampleTranslation: "Một sự cố tồi tệ đã được ngăn chặn nhờ sự xuất hiện kịp thời của cảnh sát."
    },
    {
        word: "tobacco",
        meaning: "thuốc lá, cây thuốc lá",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/təˈbækəʊ/",
        example: "tobacco smoke",
        exampleTranslation: "khói thuốc lá"
    },
    {
        word: "tolerance",
        meaning: "sự khoan dung, lòng khoan dung, sức chịu đựng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈtɑːlərəns/",
        example: "She had no tolerance for jokes of any kind.",
        exampleTranslation: "Cô ấy không có sự khoan dung đối với bất kỳ loại trò đùa nào."
    },
    {
        word: "tolerate",
        meaning: "tha thứ, khoan dung, chịu đựng",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈtɑːləreɪt/",
        example: "Their relationship was tolerated but not encouraged.",
        exampleTranslation: "Mối quan hệ của họ được chấp nhận nhưng không được khuyến khích."
    },
    {
        word: "toll",
        meaning: "phí cầu đường, lệ phí, thiệt hại",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/təʊl/",
        example: "motorway tolls",
        exampleTranslation: "phí cầu đường cao tốc"
    },
    {
        word: "top",
        meaning: "đứng đầu, vượt qua, đạt mức cao nhất",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/tɑːp/",
        example: "Worldwide sales look set to top $1 billion.",
        exampleTranslation: "Doanh số toàn cầu có vẻ sẽ vượt 1 tỷ đô la."
    },
    {
        word: "torture",
        meaning: "sự tra tấn, cực hình",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈtɔːrtʃər/",
        example: "Many of the refugees have suffered torture.",
        exampleTranslation: "Nhiều người tị nạn đã phải chịu sự tra tấn."
    },
    {
        word: "toss",
        meaning: "ném, tung",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/tɔːs/",
        example: "+ adv./prep. I tossed the book aside and got up.",
        exampleTranslation: "Tôi ném cuốn sách sang một bên và đứng dậy."
    },
    {
        word: "total",
        meaning: "tổng cộng, đạt tổng số",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈtəʊtl/",
        example: "Imports totalled $1.5 billion last year.",
        exampleTranslation: "Nhập khẩu đạt tổng cộng 1,5 tỷ đô la vào năm ngoái."
    },
    {
        word: "toxic",
        meaning: "độc hại, chất độc",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈtɑːksɪk/",
        example: "toxic chemicals/fumes/gases/substances",
        exampleTranslation: "hóa chất/khói/khí/chất độc hại"
    },
    {
        word: "trace",
        meaning: "dấu vết, vết tích",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/treɪs/",
        example: "It's exciting to discover traces of earlier civilizations.",
        exampleTranslation: "Thật thú vị khi khám phá những dấu vết của các nền văn minh trước đây."
    },
    {
        word: "trademark",
        meaning: "nhãn hiệu, thương hiệu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈtreɪdmɑːrk/",
        example: "‘Big Mac’ is McDonald's best-known trademark.",
        exampleTranslation: "‘Big Mac’ là nhãn hiệu nổi tiếng nhất của McDonald's."
    },
    {
        word: "trail",
        meaning: "dấu vết, đường mòn, vệt",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/treɪl/",
        example: "a trail of blood",
        exampleTranslation: "một vệt máu"
    },
    {
        word: "trailer",
        meaning: "xe kéo, rơ-moóc",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈtreɪlər/",
        example: "a car towing a trailer with a boat on it",
        exampleTranslation: "một chiếc ô tô kéo một xe moóc có thuyền trên đó"
    },
    {
        word: "transaction",
        meaning: "giao dịch, sự giao dịch",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/trænˈzækʃn/",
        example: "financial transactions between companies",
        exampleTranslation: "các giao dịch tài chính giữa các công ty"
    },
    {
        word: "transcript",
        meaning: "bản ghi chép, bản sao chép",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈtrænskrɪpt/",
        example: "a transcript of the interview",
        exampleTranslation: "một bản ghi chép của cuộc phỏng vấn"
    },
    {
        word: "transformation",
        meaning: "sự biến đổi, sự thay đổi lớn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌtrænsfərˈmeɪʃn/",
        example: "The way in which we work has undergone a complete transformation in the past decade.",
        exampleTranslation: "Cách chúng ta làm việc đã trải qua một sự biến đổi hoàn toàn trong thập kỷ qua."
    },
    {
        word: "transit",
        meaning: "vận chuyển, quá cảnh",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈtrænzɪt/",
        example: "The cost includes transit.",
        exampleTranslation: "Chi phí bao gồm vận chuyển."
    },
    {
        word: "transmission",
        meaning: "sự lây truyền, sự truyền tải",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/trænzˈmɪʃn/",
        example: "the transmission of the disease",
        exampleTranslation: "sự lây truyền bệnh"
    },
    {
        word: "transparency",
        meaning: "sự minh bạch, tính minh bạch",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/trænsˈpærənsi/",
        example: "a need for greater transparency in legal documents",
        exampleTranslation: "sự cần thiết phải có tính minh bạch hơn trong các tài liệu pháp lý"
    },
    {
        word: "transparent",
        meaning: "trong suốt, minh bạch",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/trænsˈpærənt/",
        example: "The insect's wings are almost transparent.",
        exampleTranslation: "Đôi cánh của côn trùng gần như trong suốt."
    },
    {
        word: "trauma",
        meaning: "chấn thương tâm lý, tổn thương",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈtraʊmə/",
        example: "the effects of trauma and stress on the body",
        exampleTranslation: "những ảnh hưởng của chấn thương tâm lý và căng thẳng đối với cơ thể"
    },
    {
        word: "treaty",
        meaning: "hiệp ước, điều ước",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈtriːti/",
        example: "the Treaty of Rome",
        exampleTranslation: "Hiệp ước Roma"
    },
    {
        word: "tremendous",
        meaning: "rất lớn, ghê gớm, kinh khủng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/trəˈmendəs/",
        example: "a tremendous explosion",
        exampleTranslation: "một vụ nổ kinh hoàng"
    },
    {
        word: "tribal",
        meaning: "thuộc bộ lạc, của bộ lạc",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈtraɪbl/",
        example: "tribal art",
        exampleTranslation: "nghệ thuật bộ lạc"
    },
    {
        word: "tribunal",
        meaning: "tòa án đặc biệt, tòa án",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/traɪˈbjuːnl/",
        example: "an international war crimes tribunal",
        exampleTranslation: "một tòa án tội phạm chiến tranh quốc tế"
    },
    {
        word: "tribute",
        meaning: "lời ca ngợi, vật cống nạp, cống vật",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈtrɪbjuːt/",
        example: "At her funeral her oldest friend paid tribute to her life and work.",
        exampleTranslation: "Tại đám tang của cô ấy, người bạn lâu năm nhất đã bày tỏ lòng kính trọng đối với cuộc đời và sự nghiệp của cô ấy."
    },
    {
        word: "trigger",
        meaning: "cò súng, yếu tố kích hoạt",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈtrɪɡər/",
        example: "to pull/squeeze the trigger",
        exampleTranslation: "bóp/kéo cò súng"
    },
    {
        word: "trio",
        meaning: "bộ ba, tam tấu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈtriːəʊ/",
        example: "A trio of English runners featured in the women’s 1 500 metres.",
        exampleTranslation: "Một bộ ba vận động viên chạy người Anh đã góp mặt trong nội dung 1500 mét nữ."
    },
    {
        word: "triumph",
        meaning: "chiến thắng, thành công lớn",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈtraɪʌmf/",
        example: "one of the greatest triumphs of modern science",
        exampleTranslation: "một trong những thành công vĩ đại nhất của khoa học hiện đại"
    },
    {
        word: "trophy",
        meaning: "cúp, chiến lợi phẩm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈtrəʊfi/",
        example: "a trophy cabinet",
        exampleTranslation: "tủ trưng bày cúp"
    },
    {
        word: "troubled",
        meaning: "lo lắng, bồn chồn, có vấn đề",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈtrʌbld/",
        example: "She looked into his troubled face.",
        exampleTranslation: "Cô ấy nhìn vào khuôn mặt lo lắng của anh."
    },
    {
        word: "trustee",
        meaning: "người được ủy thác, ủy viên quản trị",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/trʌˈstiː/",
        example: "The bank will act as trustees for the estate until the child is 18.",
        exampleTranslation: "Ngân hàng sẽ đóng vai trò là người được ủy thác quản lý tài sản cho đến khi đứa trẻ đủ 18 tuổi."
    },
    {
        word: "tuition",
        meaning: "học phí, sự giảng dạy",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/tuˈɪʃn/",
        example: "She received private tuition in French.",
        exampleTranslation: "Cô ấy đã được dạy kèm riêng môn tiếng Pháp."
    },
    {
        word: "turnout",
        meaning: "số người tham dự, tỷ lệ cử tri đi bầu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈtɜːrnaʊt/",
        example: "This year's festival attracted a record turnout.",
        exampleTranslation: "Lễ hội năm nay đã thu hút số lượng người tham dự kỷ lục."
    },
    {
        word: "turnover",
        meaning: "doanh thu, sự luân chuyển",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈtɜːrnəʊvər/",
        example: "an annual turnover of $75 million",
        exampleTranslation: "doanh thu hàng năm 75 triệu đô la"
    },
    {
        word: "twist",
        meaning: "sự xoắn, sự vặn, khúc ngoặt",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/twɪst/",
        example: "She gave the lid another twist and it came off.",
        exampleTranslation: "Cô ấy vặn nắp thêm một lần nữa và nó bật ra."
    },
    {
        word: "undergraduate",
        meaning: "sinh viên chưa tốt nghiệp, sinh viên đại học",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌʌndərˈɡrædʒuət/",
        example: "a first-year undergraduate",
        exampleTranslation: "một sinh viên năm nhất"
    },
    {
        word: "underlying",
        meaning: "cơ bản, nằm bên dưới, tiềm ẩn",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌʌndərˈlaɪɪŋ/",
        example: "The underlying assumption is that the amount of money available is limited.",
        exampleTranslation: "Giả định cơ bản là số tiền có sẵn bị hạn chế."
    },
    {
        word: "undermine",
        meaning: "làm suy yếu, phá hoại",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˌʌndərˈmaɪn/",
        example: "Our confidence in the team has been seriously undermined by their recent defeats.",
        exampleTranslation: "Niềm tin của chúng tôi vào đội đã bị suy yếu nghiêm trọng bởi những thất bại gần đây của họ."
    },
    {
        word: "undoubtedly",
        meaning: "chắc chắn, không nghi ngờ gì",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/ʌnˈdaʊtɪdli/",
        example: "There is undoubtedly a great deal of truth in what he says.",
        exampleTranslation: "Không nghi ngờ gì rằng có rất nhiều sự thật trong những gì anh ấy nói."
    },
    {
        word: "unify",
        meaning: "thống nhất, hợp nhất",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈjuːnɪfaɪ/",
        example: "The new leader hopes to unify the country.",
        exampleTranslation: "Nhà lãnh đạo mới hy vọng sẽ thống nhất đất nước."
    },
    {
        word: "unprecedented",
        meaning: "chưa từng có, chưa từng xảy ra",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ʌnˈpresɪdentɪd/",
        example: "The situation is unprecedented in modern times.",
        exampleTranslation: "Tình hình này là chưa từng có trong thời hiện đại."
    },
    {
        word: "unveil",
        meaning: "tiết lộ, khánh thành, vén màn",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˌʌnˈveɪl/",
        example: "The Queen unveiled a plaque to mark the official opening of the hospital.",
        exampleTranslation: "Nữ hoàng đã khánh thành một tấm bảng để đánh dấu lễ khai trương chính thức của bệnh viện."
    },
    {
        word: "upcoming",
        meaning: "sắp tới, sắp diễn ra",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈʌpkʌmɪŋ/",
        example: "the upcoming presidential election",
        exampleTranslation: "cuộc bầu cử tổng thống sắp tới"
    },
    {
        word: "upgrade",
        meaning: "sự nâng cấp, phiên bản nâng cấp",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈʌpɡreɪd/",
        example: "instructions for installing an upgrade to the existing system",
        exampleTranslation: "hướng dẫn cài đặt bản nâng cấp cho hệ thống hiện có"
    },
    {
        word: "uphold",
        meaning: "duy trì, ủng hộ, giữ vững",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ʌpˈhəʊld/",
        example: "We have a duty to uphold the law.",
        exampleTranslation: "Chúng ta có nhiệm vụ duy trì pháp luật."
    },
    {
        word: "utility",
        meaning: "tiện ích, dịch vụ công cộng, sự hữu ích",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/juːˈtɪləti/",
        example: "a privatized electricity utility",
        exampleTranslation: "một công ty điện lực tư nhân hóa"
    },
    {
        word: "utilize",
        meaning: "sử dụng, tận dụng",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈjuːtəlaɪz/",
        example: "The Romans were the first to utilize concrete as a building material.",
        exampleTranslation: "Người La Mã là những người đầu tiên sử dụng bê tông làm vật liệu xây dựng."
    },
    {
        word: "utterly",
        meaning: "hoàn toàn, tuyệt đối",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/ˈʌtərli/",
        example: "We're so utterly different from each other.",
        exampleTranslation: "Chúng tôi hoàn toàn khác nhau."
    },
    {
        word: "vacuum",
        meaning: "chân không, máy hút bụi",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈvækjuːm/",
        example: "a vacuum pump (= one that creates a vacuum)",
        exampleTranslation: "một bơm chân không (= một cái tạo ra chân không)"
    },
    {
        word: "vague",
        meaning: "mơ hồ, không rõ ràng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/veɪɡ/",
        example: "to have a vague impression/memory/recollection of something",
        exampleTranslation: "có một ấn tượng/ký ức/hồi ức mơ hồ về điều gì đó"
    },
    {
        word: "validity",
        meaning: "hiệu lực, tính hợp lệ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/vəˈlɪdəti/",
        example: "The period of validity of the agreement has expired.",
        exampleTranslation: "Thời hạn hiệu lực của thỏa thuận đã hết."
    },
    {
        word: "vanish",
        meaning: "biến mất, tan biến",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈvænɪʃ/",
        example: "He turned around and vanished into the house.",
        exampleTranslation: "Anh ta quay người lại và biến mất vào trong nhà."
    },
    {
        word: "variable",
        meaning: "thay đổi được, có thể biến đổi",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈværiəbl/",
        example: "variable temperatures",
        exampleTranslation: "nhiệt độ biến đổi"
    },
    {
        word: "varied",
        meaning: "đa dạng, đủ loại",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈværid/",
        example: "varied opinions",
        exampleTranslation: "những ý kiến đa dạng"
    },
    {
        word: "vein",
        meaning: "tĩnh mạch",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/veɪn/",
        example: "the jugular vein",
        exampleTranslation: "tĩnh mạch cảnh"
    },
    {
        word: "venture",
        meaning: "sự nghiệp, doanh nghiệp mạo hiểm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈventʃər/",
        example: "A disastrous business venture lost him thousands of dollars.",
        exampleTranslation: "Một cuộc phiêu lưu kinh doanh thảm hại đã khiến anh ta mất hàng ngàn đô la."
    },
    {
        word: "verbal",
        meaning: "bằng lời nói, lời",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈvɜːrbl/",
        example: "The job applicant must have good verbal skills.",
        exampleTranslation: "Ứng viên xin việc phải có kỹ năng giao tiếp bằng lời nói tốt."
    },
    {
        word: "verdict",
        meaning: "lời tuyên bố, phán quyết",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈvɜːrdɪkt/",
        example: "Has the jury reached a verdict?",
        exampleTranslation: "Bồi thẩm đoàn đã đưa ra phán quyết chưa?"
    },
    {
        word: "verify",
        meaning: "xác minh, thẩm tra",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈverɪfaɪ/",
        example: "We have no way of verifying his story.",
        exampleTranslation: "Chúng tôi không có cách nào để xác minh câu chuyện của anh ta."
    },
    {
        word: "verse",
        meaning: "thơ, vần",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/vɜːrs/",
        example: "in verse Most of the play is written in verse, but some of it is in prose.",
        exampleTranslation: "bằng thơ Hầu hết vở kịch được viết bằng thơ, nhưng một phần trong đó là văn xuôi."
    },
    {
        word: "versus",
        meaning: "đối đầu với, đấu với",
        partOfSpeech: "preposition",
        level: "C1",
        phonetic: "/ˈvɜːrsəs/",
        example: "It is France versus Brazil in the final.",
        exampleTranslation: "Đó là Pháp đấu với Brazil trong trận chung kết."
    },
    {
        word: "vessel",
        meaning: "thuyền, tàu, mạch máu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈvesl/",
        example: "to burst/rupture a blood vessel",
        exampleTranslation: "làm vỡ/vỡ mạch máu"
    },
    {
        word: "veteran",
        meaning: "cựu binh, người kỳ cựu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈvetərən/",
        example: "the veteran American actor, Clint Eastwood",
        exampleTranslation: "diễn viên kỳ cựu người Mỹ, Clint Eastwood"
    },
    {
        word: "viable",
        meaning: "khả thi, có thể thực hiện được",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈvaɪəbl/",
        example: "a viable option/proposition",
        exampleTranslation: "một lựa chọn/đề xuất khả thi"
    },
    {
        word: "vibrant",
        meaning: "sống động, đầy sức sống",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈvaɪbrənt/",
        example: "a vibrant city",
        exampleTranslation: "một thành phố sôi động"
    },
    {
        word: "vice",
        meaning: "tệ nạn, thói hư tật xấu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/vaɪs/",
        example: "At the door were two plain-clothes detectives from the vice squad.",
        exampleTranslation: "Ở cửa là hai thám tử mặc thường phục từ đội phòng chống tệ nạn."
    },
    {
        word: "vicious",
        meaning: "ác độc, tàn nhẫn",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈvɪʃəs/",
        example: "a vicious attack",
        exampleTranslation: "một cuộc tấn công tàn nhẫn"
    },
    {
        word: "villager",
        meaning: "người làng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈvɪlɪdʒər/",
        example: "Some of the villagers have lived here all their lives.",
        exampleTranslation: "Một số người dân làng đã sống ở đây cả đời."
    },
    {
        word: "violate",
        meaning: "vi phạm",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈvaɪəleɪt/",
        example: "to violate international law",
        exampleTranslation: "vi phạm luật pháp quốc tế"
    },
    {
        word: "violation",
        meaning: "sự vi phạm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌvaɪəˈleɪʃn/",
        example: "They were in open violation of the treaty.",
        exampleTranslation: "Họ đã công khai vi phạm hiệp ước."
    },
    {
        word: "virtue",
        meaning: "đức tính, đức hạnh",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈvɜːrtʃuː/",
        example: "He led a life of virtue.",
        exampleTranslation: "Ông ấy sống một cuộc đời đức hạnh."
    },
    {
        word: "vocal",
        meaning: "thuộc về giọng hát, bằng tiếng nói",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈvəʊkl/",
        example: "vocal music",
        exampleTranslation: "nhạc giọng hát"
    },
    {
        word: "vow",
        meaning: "thề, nguyện",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/vaʊ/",
        example: "vow to do something She vowed never to speak to him again.",
        exampleTranslation: "thề sẽ làm gì đó Cô ấy thề sẽ không bao giờ nói chuyện với anh ta nữa."
    },
    {
        word: "vulnerability",
        meaning: "sự tổn thương, điểm yếu",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˌvʌlnərəˈbɪləti/",
        example: "the vulnerability of newborn babies to disease",
        exampleTranslation: "sự mong manh của trẻ sơ sinh trước bệnh tật"
    },
    {
        word: "vulnerable",
        meaning: "dễ bị tổn thương, có thể bị tấn công",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈvʌlnərəbl/",
        example: "These offices are highly vulnerable to terrorist attack.",
        exampleTranslation: "Những văn phòng này rất dễ bị tấn công khủng bố."
    },
    {
        word: "ward",
        meaning: "khu, phòng bệnh",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/wɔːrd/",
        example: "a maternity/surgical/psychiatric/children’s ward",
        exampleTranslation: "khu bà mẹ/phẫu thuật/tâm thần/trẻ em"
    },
    {
        word: "warehouse",
        meaning: "nhà kho",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈwerhaʊs/",
        example: "Police are investigating a fire at a furniture warehouse.",
        exampleTranslation: "Cảnh sát đang điều tra vụ cháy tại một nhà kho nội thất."
    },
    {
        word: "warfare",
        meaning: "chiến tranh, tác chiến",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈwɔːrfer/",
        example: "air/naval/guerrilla warfare",
        exampleTranslation: "chiến tranh trên không/trên biển/du kích"
    },
    {
        word: "warrant",
        meaning: "lệnh, giấy phép",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈwɔːrənt/",
        example: "an arrest warrant",
        exampleTranslation: "lệnh bắt giữ"
    },
    {
        word: "warrior",
        meaning: "chiến binh, chiến sĩ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈwɔːriər/",
        example: "a warrior nation (= whose people are skilled in fighting)",
        exampleTranslation: "một quốc gia chiến binh (= có người dân giỏi chiến đấu)"
    },
    {
        word: "weaken",
        meaning: "làm yếu đi",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈwiːkən/",
        example: "The team has been weakened by injury.",
        exampleTranslation: "Đội bóng đã bị suy yếu do chấn thương."
    },
    {
        word: "weave",
        meaning: "dệt, đan",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/wiːv/",
        example: "weave A from B The baskets are woven from strips of willow.",
        exampleTranslation: "Những chiếc giỏ này được đan từ những dải mây."
    },
    {
        word: "weed",
        meaning: "cỏ dại",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/wiːd/",
        example: "The yard was overgrown with weeds.",
        exampleTranslation: "Sân vườn mọc um tùm cỏ dại."
    },
    {
        word: "well",
        meaning: "giếng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/wel/",
        example: "to dig/sink a well",
        exampleTranslation: "đào/khoan một cái giếng"
    },
    {
        word: "well-being",
        meaning: "sức khỏe, hạnh phúc, sự sung túc",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈwel biːɪŋ/",
        example: "emotional/physical/psychological well-being",
        exampleTranslation: "sức khỏe/hạnh phúc tinh thần/tâm lý"
    },
    {
        word: "whatever",
        meaning: "bất cứ điều gì, dù là gì",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/wətˈevər/",
        example: "They received no help whatever.",
        exampleTranslation: "Họ không nhận được bất kỳ sự giúp đỡ nào."
    },
    {
        word: "whatsoever",
        meaning: "bất cứ điều gì, dù là gì",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/ˌwʌtsəʊˈevər/",
        example: "They received no help whatsoever.",
        exampleTranslation: "Họ không nhận được bất kỳ sự giúp đỡ nào."
    },
    {
        word: "whereby",
        meaning: "mà qua đó, bằng cách đó",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/werˈbaɪ/",
        example: "They have introduced a new system whereby all employees must undergo regular training.",
        exampleTranslation: "Họ đã giới thiệu một hệ thống mới mà qua đó tất cả nhân viên phải trải qua đào tạo thường xuyên."
    },
    {
        word: "whilst",
        meaning: "trong khi",
        partOfSpeech: "conjunction",
        level: "C1",
        phonetic: "/waɪlst/",
        example: "In the UK it is illegal to drive whilst holding a mobile phone.",
        exampleTranslation: "Ở Anh, việc lái xe trong khi cầm điện thoại di động là bất hợp pháp."
    },
    {
        word: "whip",
        meaning: "đánh đòn, quất roi",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/wɪp/",
        example: "He was taken back to the jail and soundly whipped.",
        exampleTranslation: "Ông ta bị đưa trở lại nhà tù và bị đánh đòn thích đáng."
    },
    {
        word: "wholly",
        meaning: "hoàn toàn",
        partOfSpeech: "adverb",
        level: "C1",
        phonetic: "/ˈhəʊlli/",
        example: "wholly inappropriate behaviour",
        exampleTranslation: "hành vi hoàn toàn không phù hợp"
    },
    {
        word: "widen",
        meaning: "làm rộng ra",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/ˈwaɪdn/",
        example: "Her eyes widened in surprise.",
        exampleTranslation: "Mắt cô ấy mở to ngạc nhiên."
    },
    {
        word: "widow",
        meaning: "góa phụ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈwɪdəʊ/",
        example: "She gets a widow’s pension.",
        exampleTranslation: "Bà ấy nhận lương hưu của góa phụ."
    },
    {
        word: "width",
        meaning: "chiều rộng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/wɪtθ/",
        example: "The terrace runs the full width of the house.",
        exampleTranslation: "Sân thượng chạy dọc theo toàn bộ chiều rộng của ngôi nhà."
    },
    {
        word: "willingness",
        meaning: "sự sẵn lòng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈwɪlɪŋnəs/",
        example: "Success in studying depends on a willingness to learn.",
        exampleTranslation: "Thành công trong học tập phụ thuộc vào sự sẵn lòng học hỏi."
    },
    {
        word: "wipe",
        meaning: "lau, chùi",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/waɪp/",
        example: "(on something) Please wipe your feet on the mat.",
        exampleTranslation: "(trên cái gì đó) Làm ơn lau chân trên thảm."
    },
    {
        word: "wit",
        meaning: "trí thông minh, sự dí dỏm",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/wɪt/",
        example: "to have a quick/sharp/dry/ready wit",
        exampleTranslation: "có trí thông minh/sắc sảo/khô khan/nhanh nhạy"
    },
    {
        word: "withdrawal",
        meaning: "sự rút tiền",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/wɪθˈdrɔːəl/",
        example: "You can make withdrawals of up to $250 a day.",
        exampleTranslation: "Bạn có thể rút tiền lên tới 250 đô la mỗi ngày."
    },
    {
        word: "workout",
        meaning: "bài tập thể dục",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈwɜːrkaʊt/",
        example: "She does a 20-minute workout every morning.",
        exampleTranslation: "Cô ấy tập thể dục 20 phút mỗi sáng."
    },
    {
        word: "worship",
        meaning: "sự thờ phụng, lễ bái",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈwɜːrʃɪp/",
        example: "an act/a place of worship",
        exampleTranslation: "một hành động/nơi thờ phụng"
    },
    {
        word: "worthwhile",
        meaning: "xứng đáng, đáng giá",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˌwɜːrθˈwaɪl/",
        example: "It was in aid of a worthwhile cause (= a charity, etc.).",
        exampleTranslation: "Nó là vì một mục đích xứng đáng (= một tổ chức từ thiện, v.v.)."
    },
    {
        word: "worthy",
        meaning: "xứng đáng, đáng",
        partOfSpeech: "adjective",
        level: "C1",
        phonetic: "/ˈwɜːrði/",
        example: "Very few of his ideas are worthy of further attention.",
        exampleTranslation: "Rất ít ý tưởng của ông ta xứng đáng được chú ý thêm."
    },
    {
        word: "yell",
        meaning: "hét lên",
        partOfSpeech: "verb",
        level: "C1",
        phonetic: "/jel/",
        example: "yell (at somebody/something) He yelled at the other driver.",
        exampleTranslation: "hét lên (với ai/cái gì) Anh ta hét vào mặt người lái xe kia."
    },
    {
        word: "yield",
        meaning: "sản lượng",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/jiːld/",
        example: "a high crop yield",
        exampleTranslation: "sản lượng mùa màng cao"
    },
    {
        word: "youngster",
        meaning: "người trẻ",
        partOfSpeech: "noun",
        level: "C1",
        phonetic: "/ˈjʌŋstər/",
        example: "The camp is for youngsters aged 8 to 14.",
        exampleTranslation: "Trại dành cho thanh thiếu niên từ 8 đến 14 tuổi."
    }
];

async function seedC1Vocabulary() {
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

        // Check if C1 vocabulary already exists for admin
        const existingCount = await vocabularyCollection.countDocuments({
            userId: ADMIN_USER_ID,
            level: "C1"
        });

        if (existingCount > 0) {
            console.log(`⚠️ Found ${existingCount} existing C1 vocabulary items for admin`);
            const response = await new Promise<string>((resolve) => {
                process.stdout.write("Do you want to delete and re-seed? (y/n): ");
                process.stdin.once("data", (data) => resolve(data.toString().trim().toLowerCase()));
            });

            if (response === "y") {
                await vocabularyCollection.deleteMany({
                    userId: ADMIN_USER_ID,
                    level: "C1"
                });
                console.log("🗑️ Deleted existing C1 vocabulary");
            } else {
                console.log("❌ Seeding cancelled");
                process.exit(0);
            }
        }

        // Insert vocabulary with timestamps
        const vocabularyToInsert: VocabularySeed[] = c1Vocabulary.map((vocab) => ({
            ...vocab,
            userId: ADMIN_USER_ID,
            createdAt: new Date()
        }));

        const result = await vocabularyCollection.insertMany(vocabularyToInsert);
        console.log(`✅ Inserted ${result.insertedCount} C1 vocabulary items`);
        console.log("🎉 Seeding complete!");

    } catch (error) {
        console.error("❌ Error seeding vocabulary:", error);
        process.exit(1);
    } finally {
        await client.close();
        process.exit(0);
    }
}

seedC1Vocabulary();
