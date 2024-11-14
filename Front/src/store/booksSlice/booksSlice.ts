import { createSlice } from "@reduxjs/toolkit";
import Oliver from '@assets/imgs/books/olivertwist.jfif'
import Broken from '@assets/imgs/books/Broken Wings.jpeg'
import Crime from '@assets/imgs/books/الجريمة والعقاب.jpg'
import Mis from '@assets/imgs/books/Les misrables.jpg'
import Stone from '@assets/imgs/books/حجر الارواح.jpg'
import Ashin from '@assets/imgs/books/الاشين.jpg'
import Daim from '@assets/imgs/books/ضيم.jpg'
const initialState = [{
    id: 2,
    title: 'الأجنحة المتكسرة',
    Author: 'جبران خليل جبران',
    img: Broken,
    desc: 'يا صديقي، هل سبق لك أن شعرتَ بشعلة حبٍّ تشتعل في صدرك، لكنّها تذوي بسرعة، مثل زهرةٍ رقيقة في صيفٍ قاسٍ؟ هكذا هي "الأجنحة المتكسرة" ، قصّة تحكي عن حبٍّ جميل ، لكنّه مُحطّم.',
}, {
    id: 4,
    title: 'الجريمة والعقاب',
    Author: 'دستويفسكي',
    img: Crime,
    desc: 'رواية مبنية على أساس الصراع الداخلي عند الإنسان وخاصةً الرغبة في التعبير عن النفس وإثباتها في مواجهة الأخلاقيات والقوانين التي أوجدها البشر مما يجعلنا نحس بقلق مضن ونتساءل عن العدالة في هذا العالم وفي الوقت ذاته نتساءل عما إذا كان يحق لنا الإقتصاص من العدالة ومن الأخلاقيات.'
}, {
    id: 5,
    title: 'Les Misérables',
    Author: 'Victor Hugo',
    img: Mis,
    desc: 'In 19th-century France, Jean Valjean, who, for decades, has been hunted by the ruthless policeman Javert after breaking parole, agrees to care for a factory ...'
}, {
    id: 6,
    title: 'الأشين',
    Author: 'زينب لطفي',
    img: Ashin,
    desc: 'أردت أن أصلح الأمور فكانت تصرفاتي بنظرهم ملتوية لا تقبل التبرير، أيكره المرء عائلته؟! أيحقد على أمه وإخوته؟! في كل مرة أمنحهم فرصة يرفسوها بقسوة لترتد علي بالذنب الكبير، لماذا يعتصر فؤادي الألم وأنا أكرهها، لماذا رحيلها يؤلمني وأنا الذي كان يتوق لساعة نهايتها؟!.'
}, {
    id: 7,
    title: 'OLiver Twist',
    Author: 'Charles Dickens',
    img: Oliver,
    desc: "Oliver Twist. The titular character is born an orphan and is forced into unjust and cruel situations from child farms to workhouses to a life of crime. He is constantly thrown into trusting the wrong adults."
}, {
    id: 8,
    title: 'ضيم',
    Author: ' رين علي',
    img: Daim,
    desc: " لن تموت أبداً بإبتعاد أحد عنك ، جئت للدنيا بعد ألم لم يشعر به إلا أمك ، و إن مت ، فلا قلب سيذوب دهراً إلا قلب أمك .! "
}, {
    id: 3,
    title: 'حجر الأرواح',
    Author: 'ساره السكري',
    img: Stone,
    desc: " أولئك الذين اندثروا بين التراب، ربما عاشوا وربما كانوا موجودين، وعندما زالوا، ظل سرهم مكتوم، ملجوم بيديه، وحده هو يشد على سلاسل الحقيقة، يكبّل شعاع المعرفة، وينتشي في الظلمات، يمر بين أزقة النسيان، وينتقي واحداً جديداً، لمجموعته الفريدة، ليكون عبرةً، ومعنىً من معاني اليأس..."
},];

const books = createSlice({
    name: 'books',
    initialState,
    reducers: {}

})

export default books.reducer