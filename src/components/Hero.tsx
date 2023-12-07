import { logo } from "../assets";

function Hero() {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='felx justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-80 object-contain' />
      </nav>
      <h1 className='head_text'>
        Summarize Article with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
      </h2>
    </header>
  );
}

export default Hero;
