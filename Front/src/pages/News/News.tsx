import { Container } from 'react-bootstrap';
import img1 from '@assets/imgs/illustration-bookshelf-with-books_961004-3667.avif'
import img2 from '@assets/imgs/night-adventure-with-fairy-glowing-object-generative-ai_188544-12605.avif'
import img3 from '@assets/imgs/91YVYOjfbgL.jpg'
import Style from './News.module.css';
const { news, news2, cards2, pic, left, right, cards, pic2, pic3 } = Style
const News = () => {
    return (
        <Container>
            <div className={news}>
                <div className={pic}>
                    <img src={img1} alt="" />
                </div>
                <div className={cards}>
                    <div className={left}>
                        <h2>Our News</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus veritatis accusamus placeat eos aspernatur ipsa minima a exercitationem, rem vitae quam odit itaque temporibus mollitia error? At quo rerum tenetur.</p>
                    </div>
                    <div className={right}>
                        <h2>Our News</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus veritatis accusamus placeat eos aspernatur ipsa minima a exercitationem, rem vitae quam odit itaque temporibus mollitia error? At quo rerum tenetur.</p>
                        <span>Word</span>
                    </div>
                </div>
            </div>
            <hr />
            <div className={news2}>
                <div className={pic2}>
                    <img src={img2} alt="" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus veritatis accusamus placeat eos aspernatur ipsa minima a exercitationem, rem vitae quam odit itaque temporibus mollitia error? At quo rerum tenetur.</p>

                </div>

                <div className={cards2}>
                    <div className={left}>
                        <h2>Our News</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus veritatis accusamus placeat eos aspernatur ipsa minima a exercitationem, rem vitae quam odit itaque temporibus mollitia error? At quo rerum tenetur.</p>

                    </div>
                </div>
            </div>
            <hr />
            <div className={pic3}>
                <img src={img3} alt="" />
                <span></span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, quidem. Quisquam, placeat? Vel aut veniam nam deserunt nostrum. Sunt ut dolorem ab consequuntur ea aperiam impedit quam at? Itaque, perferendis!</p>
            </div>
        </Container>
    )
}

export default News
