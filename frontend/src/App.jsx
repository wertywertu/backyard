import { useState } from "react";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen lg:px-[32px] px-[22px] bg-[#EFEFF2] text-gray-900 font-[Archivo] overflow-hidden">
      <img
        src="/src/assets/BG.png"
        alt="background"
        className="absolute top-0 left-0 object-cover mix-blend-color-dodge pointer-events-none"
      />

      <header className="max-w-[1392px] mx-auto flex justify-between items-center mt-[16px] md:mb-[85px] mb-[22px] py-[4px] relative z-10">
        <div className="flex items-center">
          <div className="inline-flex items-center bg-[#EFEFF2] rounded-full py-[8px] px-[12px] gap-2">
            <img src="/src/assets/Group 2131332319.svg" alt="logo" />
            <h5 className="text-[16px] text-[#333333] font-display font-semibold">Backyard</h5>
          </div>
        </div>

        <nav className="max-[815px]:hidden flex bg-[#E1E1E2] rounded-full p-[3px] gap-1">
          <a href="#" className="px-[13px] py-[10px] rounded-full font-medium bg-[#303030] text-white">Home</a>
          <a href="#" className="px-[10px] py-[10px] rounded-full font-medium text-[#AEB0B1] hover:bg-[#303030] hover:text-white transition">About</a>
          <a href="#" className="px-[10px] py-[10px] rounded-full font-medium text-[#AEB0B1] hover:bg-[#303030] hover:text-white transition">How it works</a>
          <a href="#" className="px-[10px] py-[10px] rounded-full font-medium text-[#AEB0B1] hover:bg-[#303030] hover:text-white transition">Token design</a>
          <a href="#" className="px-[10px] py-[10px] rounded-full font-medium text-[#AEB0B1] hover:bg-[#303030] hover:text-white transition">YARD flywheel</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="max-[815px]:hidden block lg:hidden bg-[#303030] text-white px-5 py-2 rounded-full font-medium">
            Connect
          </button>

          <button
            className="hidden max-[815px]:flex flex-col justify-center items-center w-10 h-10 gap-[4px] relative z-50 bg-[#F6F7F8] border border-[#DEDEE3] rounded-[10px]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block h-[2px] w-4 bg-[#525352] rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : "" }`}
            />
            <span  className={`block h-[2px] w-2 bg-[#525352] rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : "" }`}
            />
            <span className={`block h-[2px] w-4 bg-[#525352] rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : "" }`}
            />
          </button>

          <div
            className={`absolute top-full right-0 w-[250px] bg-[#E4E4E9] rounded-[19px] shadow-md transition-all duration-500 overflow-hidden z-50 max-[815px]:block ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <nav className="flex flex-col gap-3 px-6 py-6">
              <a href="#" className="text-[#303030] font-semibold">Home</a>
              <a href="#" className="text-[#303030] font-semibold">About</a>
              <a href="#" className="text-[#303030] font-semibold">How it works</a>
              <a href="#" className="text-[#303030] font-semibold">Token design</a>
              <a href="#" className="text-[#303030] font-semibold">YARD flywheel</a>
              <button className="mt-4 bg-[#303030] text-white px-5 py-2 rounded-full font-medium">Connect</button>
            </nav>
          </div>
        </div>
      </header>

      <section className="max-w-[1392px] mx-auto md:mb-[131px] mb-[67px] flex flex-row items-start gap-8">
        <div className="flex-1">
          <h1 className="text-[58px] sm:text-[48px] lg:text-[90px] text-[#303030] font-semibold leading-tight">
            The yield-backed stablecoin protocol boosting{' '}
            <span className="relative">
              DeFi
              <img
                src="/src/assets/Group 2131332332.png"
                alt="Leaf"
                className="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-18 min-[815px]:hidden"
              />
            </span> <br className="min-[815px]:hidden" />liquidity
          </h1>

          <p className="text-[20px] sm:text-[16px] lg:text-[24px] text-[#262626] font-semibold mt-[16px] lg:mb-[82px] md:mb-[33px] sm:mb-[40px] opacity-55">
            Keep your yield working for you – we keep your liquidity accessible
          </p>

          <div className="flex gap-4 sm:gap-[21px] mt-4">
            <button className="md:px-[107px] md:py-[18px] p-[18px] rounded-full bg-[#2D2D2D] hover:bg-[#3B3B3B] active:text-[#595959] hover:text-[#D1D1D2] duration-200 text-white font-semibold cursor-pointer">
              Join Whitelist
            </button>
            <button className="md:px-[62px] md:py-[18px] p-[18px] rounded-full bg-[#E6E8EC] hover:bg-[#F8FBFF] active:bg-[#ABACAF] duration-200 text-[#2E2E2E] font-semibold cursor-pointer flex items-center gap-2">
              <span className="sm:hidden">Learn More 🡢</span>
              <span className="hidden sm:inline">Read Docs</span>
            </button>
          </div>
        </div>

        <div className="max-[815px]:hidden justify-center items-center">
          <img
            src="/src/assets/Group 2131332332.png"
            alt="Leaf"
            className="lg:w-64 w-1/2"
          />
        </div>
      </section>

      <section className="w-full max-w-[1392px] mx-auto mb-[130px] relative">
        <h2 className="md:text-[48px] text-[28px] text-[#303030] font-bold">
          What is Backyard?
        </h2>

        <div className="hidden lg:grid grid-cols-3 gap-[40px]">
          <div>
            <img src="/src/assets/Img1.png" alt="img1" className="mx-auto mb-[-20px] w-[179px]" />
            <div className="relative z-10 bg-[#F4F6F7] flex items-center rounded-[45px] gap-[60px] p-[12px] mb-[15px]">
              <img src="/src/assets/Number1.svg" alt="1" />
              <h4 className="text-[20px] text-[#303030] font-medium">Yield Aggregator</h4>
            </div>
            <div className="bg-[#F4F6F7] p-[30px] rounded-[30px]">
              <h4 className="text-[20px] text-[#2D322F] font-bold">One-click yield aggregation</h4>
              <p className="text-[#787878]">
                Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity
              </p>
            </div>
          </div>

          <div>
            <img src="/src/assets/Img2.png" alt="img2" className="mx-auto mb-[-20px] w-[179px]" />
            <div className="relative z-10 bg-[#F4F6F7] flex items-center rounded-[45px] gap-[60px] p-[12px] mb-[15px]">
              <img src="/src/assets/Number2.svg" alt="2" />
              <h4 className="text-[20px] text-[#303030] font-medium">Yield-backed Stablecoin</h4>
            </div>
            <div className="bg-[#F4F6F7] p-[30px] rounded-[30px]">
              <h4 className="text-[20px] text-[#2D322F] font-bold">Unlock liquidity with BYD</h4>
              <p className="text-[#787878]">
                Mint BYD against your yield-generating LP tokens to stay liquid and productive at the same time
              </p>
            </div>
          </div>

          <div>
            <img src="/src/assets/Img3.png" alt="img3" className="mx-auto mb-[-20px] w-[179px]" />
            <div className="relative z-10 bg-[#F4F6F7] flex items-center rounded-[45px] gap-[60px] p-[12px] mb-[15px]">
              <img src="/src/assets/Number3.svg" alt="3" />
              <h4 className="text-[20px] text-[#303030] font-medium">Boost DeFi Liquidity</h4>
            </div>
            <div className="bg-[#F4F6F7] p-[30px] rounded-[30px]">
              <h4 className="text-[20px] text-[#2D322F] font-bold">Boost protocols, earn more</h4>
              <p className="text-[#787878]">
                Your liquidity empowers DeFi — vote for pools, earn bribes, and maximize your rewards.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={40}
            slidesPerView={1}
          >
            <SwiperSlide>
              <div className="flex flex-col-reverse md:flex-row md:items-center md:gap-10">
                <div className="flex-1">
                  <div className="relative z-10 bg-[#F4F6F7] flex items-center rounded-[45px] gap-[20px] p-[12px] mb-[15px]">
                    <img src="/src/assets/Number1.svg" alt="1" />
                    <h4 className="text-[20px] text-[#303030] font-medium">Yield Aggregator</h4>
                  </div>
                  <div className="bg-[#F4F6F7] p-[30px] rounded-[30px]">
                    <h4 className="md:text-[20px] text-[18px] text-[#2D322F] font-bold">One-click yield aggregation</h4>
                    <p className="text-[#787878]">
                      Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity
                    </p>
                  </div>
                  <div className="swiper-pagination sm:mt-5" />
                </div>
                <img src="/src/assets/Img1.png" alt="img1" className="mx-auto w-[245px] md:mb-[35px] mb-[-35px]" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col-reverse md:flex-row md:items-center md:gap-10">
                <div className="flex-1">
                  <div className="relative z-10 bg-[#F4F6F7] flex items-center rounded-[45px] gap-[20px] p-[12px] mb-[15px]">
                    <img src="/src/assets/Number2.svg" alt="2" />
                    <h4 className="text-[20px] text-[#303030] font-medium">Yield-backed Stablecoin</h4>
                  </div>
                  <div className="bg-[#F4F6F7] p-[30px] rounded-[30px]">
                    <h4 className="md:text-[20px] text-[18px] text-[#2D322F] font-bold">Unlock liquidity with BYD</h4>
                    <p className="text-[#787878]">
                      Mint BYD against your yield-generating LP tokens to stay liquid and productive at the same time
                    </p>
                  </div>
                  <div className="swiper-pagination sm:mt-5" />
                </div>
                <img src="/src/assets/Img2.png" alt="img2" className="mx-auto w-[245px]  md:mb-[35px] mb-[-35px]" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col-reverse md:flex-row md:items-center md:gap-10">
                <div className="flex-1">
                  <div className="relative z-10 bg-[#F4F6F7] flex items-center rounded-[45px] gap-[20px] p-[12px] mb-[15px]">
                    <img src="/src/assets/Number3.svg" alt="3" />
                    <h4 className="text-[20px] text-[#303030] font-medium">Boost DeFi Liquidity</h4>
                  </div>
                  <div className="bg-[#F4F6F7] p-[30px] rounded-[30px]">
                    <h4 className="md:text-[20px] text-[18px] text-[#2D322F] font-bold">Boost protocols, earn more</h4>
                    <p className="text-[#787878]">
                      Your liquidity empowers DeFi — vote for pools, earn bribes, and maximize your rewards.
                    </p>
                  </div>
                  <div className="swiper-pagination sm:mt-5" />
                </div>
                <img src="/src/assets/Img3.png" alt="img3" className="mx-auto w-[245px]  md:mb-[35px] mb-[-35px]" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default App;
