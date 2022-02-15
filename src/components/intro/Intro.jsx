import './intro.scss'
import Me from '../../img/me.png'

function Intro({dark}) {
  return (
    <div className="intro">
      <div className="introLeft">
          <div className="introLeftContainer">
              <span className="introHeading">Hello, My name is</span>
              <h1>Omar Ahmed</h1>
            <div className="introTitle">
                <div className="introTitleWrapper">
                    <div className="introTitleItem">Web Developer</div>
                    <div className="introTitleItem">UI/UX Designer</div>
                    <div className="introTitleItem">Photographer</div>
                    <div className="introTitleItem">Writer</div>
                    <div className="introTitleItem">Content Creator</div>
                </div>
            </div>
            <p className="introDesc" style={{color: dark && "#fff"}}>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services and
                online stores.
            </p>
          </div>
      </div>
      <a href="#second">
        <i className="fas fa-chevron-down icon" style={{color: dark && "#fff"}}></i>
      </a>
      <div className="introRight">
        <div className="introBg"></div>
        <img src={Me} alt="" className="introImg" />
      </div>
    </div>
  );
}

export default Intro;
