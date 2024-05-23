// import {ReactComponent as LogoImage} from '/src/assets/logo.svg';
/* закомментирован пока нерабочий код с Лого */

function Logo({ className }) {
  return (
    <>
      {/*  <LogoImage/> */}
      <a href="#" target="blank" className={className}>
        @pavlyuts_pro
      </a>
    </>
  );
}
export default Logo;
