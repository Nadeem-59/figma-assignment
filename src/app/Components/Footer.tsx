import Image from "next/image";
export default function Footer() 
{
  return (
    <div className="text-center">
      <section className="w-full h-[300px] bg-[#263238] flex justify-center items-center">
        <div className="container mx-auto text-white">
          <div className="flex justify-between ">
            <div className="flex flex-col gap-10">
              <Image
                className="ml-40"
                src="/images/leaves.png"
                alt="Logo image"
                width={154.49}
                height={24}
              />
              <div className="ml-40">
                <p>Copyright © 2020 Nexcent ltd.</p>
                <p>All rights reserved</p>
              </div>
              <div className="flex gap-3 ml-40">
                
                  <Image
                    src="/images/Social Icons1.png"
                    alt="Logo image"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/images/Social Icons2.png"
                    alt="Logo image"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/images/Social Icons3.png"
                    alt="Logo image"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/images/Social Icons4.png"
                    alt="Logo image"
                    width={32}
                    height={32}
                  />
              </div>
            </div>
            <div className="flex  justify-between gap-24">
              <div className="flex flex-col gap-3">
                <p className="text-lg font-bold text-start">Company</p>
                <ul className="leading-8 text-start">
                  <li>About Us</li>
                  <li>Blog</li>
                  <li>Contact Us</li>
                  <li>Pricing</li>
                  <li>Testimonial</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-lg font-bold text-start">Support</p>
                <ul className="leading-8 text-start">
                  <li>Help center</li>
                  <li>Terms of service</li>
                  <li>Legal </li>
                  <li>Privacy policy </li>
                  <li>Status</li>
                </ul>
              </div>
              <div className="flex flex-col gap-5 mr-20">
                <p className="text-lg font-bold text-start">Stay Up To Date</p>
                <form>
                  <input
                    className="w-[255px] h-[40px] rounded-lg pl-2 bg-gray-500   outline-none"
                    placeholder="Your email address"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );};