import Image from "next/image";


export default function Home() {
  return (
    <div>
      
      <section className="items-center bg-gray-100 ">
        <div className="container mx-auto flex md:flex-row flex-col items-center px-6 md:px-24 py-16 gap-12">
          <div className="flex flex-col md:items-start w-[657] h-[276] text-center md:text-left items-center md:w-1/2 gap-6">
           <h1 className="text-4xl font-bold md:text-4xl text-[#4D4D4D]
           leading-sung">
             Lessons and insights
             <br></br>
             <span className="text-[#4CAF4F] font-bold">from 8 years</span>
           </h1>
           <p className="text-gray-600 leading-relaxed">
            where to grow your business as a photographer:site or social media?
           </p>
           <div className="mt-4">
             <button className="inline-flex w-[128px] h-[52px] items-center justify-center text-white
             bg-[#4CAF4F] border-0 focus:outline-none rounded text-lg hover:bg-[#45A049]">
                Register
              </button>
           </div>
          </div>
          <div className="md:w-1/2 w-full">
             <Image
               className="mi-20"
               src="/images/Illustration.png"
               alt="Logo images"
               width={391}
               height={407}
               />
              <Image
                className=""
                src="/images/Dot.png"
                alt="DOT image"
                width={46}
                height={10}
              />

          </div>
        </div>
      </section>
      <section>
        <div>
          <h1 className="text-center text-3xl font-bold text-[#4D4D4D mb-4">
            Our Clients
          </h1>
          <p className="text-center text-[#717171] mb-8">
            We have been working with some Fortune 500+ clients
          </p>
          <div className="flex flex-wrap justify-center gap-32">
          <Image
                  className=""
                  src="/images/flo.png"
                  alt="logo image"
                  width={48}
                  height={48}
           />
           <Image
                  className=""
                  src="/images/Logo (1).png"
                  alt="logo image"
                  width={48}
                  height={48}
            />
           <Image
                  className=""
                  src="/images/Logo (5).png"
                  alt="logo image"
                  width={48}
                  height={48}
             />
            <Image
                  className=""
                  src="/images/Logo (2).png"
                  alt="logo image"
                  width={48}
                  height={48}
             />
             <Image
                  className=""
                  src="/images/Logo (3).png"
                  alt="logo image"
                  width={48}
                  height={48}
              />
             <Image
                  className=""
                  src="/images/Logo (4).png"
                  alt="logo image"
                  width={48}
                  height={48}
              />
               <Image
                  className=""
                  src="/images/Logo (5).png"
                  alt="logo image"
                  width={48}
                  height={48}
              />
          </div>
          </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto text-center">
          <h1 className="text-4xl text-[#4D4D4D] font-bold">
            Manage Your Entire Community
          </h1>
          <p className="text-4xl font-bold text-[#4D4D4D] mb-2">
            In a single system
          </p>
          <br></br>
          <p className="text-lg text-[#717171] mb-12">
            Who is Nextent suitable for?
          </p>
          <div className="flex flex-wrap justify-between">
          <Image
              className="mx-40"
              src="/images/Icon.png"
              alt="icon image"
              width={65}
              height={56}
           />

          <Image
              className="mx-40"
              src="/images/Icon (1).png"
              alt="icon image"
              width={65}
              height={56}
          />

          <Image
              className="mx-40"
              src="/images/Icon (2).png"
              alt="icon image"
              width={65}
              height={56}
          />
        </div>
          <div className="flex flex-wrap justify-between m-4">
            <div className="lg:w-1/3 md:w-1/2 w-full p-4">
             <div className="h-full text-center">
              <p className="text-xl font-bold text-[#4D4D4D]">Membership</p>
              <p className="text-xl font-bold text-[#4D4D4D]">
                Organizations
              </p>
              <p className="text-[#717171] text-xs mt-3">
                Our Membership Management
              </p>
              <p className="text-[#717171] text-xs">
                Membership renewals and payments
              </p>
              </div>
              </div>
          <div className="lg:w-1/3 md:w-1/2 w-full p-4">
            <div className="h-full text-center">
            <p className="text-xl font-bold text-[#4D4D4D]">National</p>
            <p className="text-xl font-bold text-[#4D4D4D]">
              Associatioins
            </p>
            <p className="text-[#717171] text-xs mt-3">
                Our Membership Management
            </p>
            <p className="text-[#717171] text-xs">
                Software provides full automation of 
            </p>
            <p className="text-[#717171] text-xs">
                Membership renewals and payments
            </p>
            <p className="text-[#717171] text-xs">Payments</p>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full p-4">
             <div className="h-full text-center">
             <p className="text-xl font-bold text-[#4D4D4D]">Clubs And</p>
            <p className="text-xl font-bold text-[#4D4D4D]">Groups</p>
            <p className="text-[#717171] text-xs mt-3">
                Our Membership Management
            </p>
            <p className="text-[#717171] text-xs">
                Software provides full automation of 
            </p>
            <p className="text-[#717171] text-xs">
                Membership renewals and payments
            </p>
             </div>
          </div>

        </div>
        </div>
      </section>
      <section className="">
        <div className="container mx-auto flex md:flex-row flex-col items-center px-6 md:px-24 py-16 gap-12">
          <div className="md:w-1/2 w-full">
              <Image
              className="ml-20"
              src="/images/Frame1.png"
              alt="logo image"
              width={442}
              height={433}
              />
          </div>
          <div className="flex flex-col md:items-start w-[657] h-[276] text-center md:text-left items-center md:w-1/2 gap-6">
            <h1 className="text-4xl text-[#4D4D4D] leading-snug">
              The unseen of spending three years at Pixelgrade
            </h1>
            <p className="text-gray-500 leading-relaxed text-balance font-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloremque excepturi quam 
              porro itaque tenetur aut mollitia natus, dolor maiores necessitatibus dolores facere
               nobis vero ipsam delectus, quas nisi animi?
            </p>
            <div className="mt-4">
              <button className="inline-flex w-[151px] h-[52px] items-center justify-center text-white
              bg-[#4CAF4F] border-0 focus:outline-none rounded text-lg hover:bg[#45A049]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="items-center bg-gray-100 h-[288]">
        <div className="container mx-auto flex md:flex-row flex-col items-center px-6 md:px-24 py-16 gap-12">
        <div className="flex flex-col md:items-start w-[657] h-[276] text-center md:text-left items-center md:w-1/2 gap-6">
            <h1 className="text-4xl text-[#4D4D4D] leading-snug">
              Helping a local
              <br></br>
              <span className="text-[#4CAF4F] font-bold">
                business reinvent itself
              </span>
              </h1>
              <p className="text-gray-600 leading-relaxed">
                We reached here with our hard work and dedication
              </p>
              </div>
              <div className="md:w-1/2 w-full mb-32">
                <div className="flex justify-between">
                <Image
                  src="/images/people.png"
                  alt="logo image"
                  width={255}
                  height={60}
              />
                <Image
                  src="/images/hands3.png"
                  alt="logo image"
                  width={255}
                  height={60}
                  />
                </div>
                <div className="flex justify-between">
                <Image
                  src="/images/top.png"
                  alt="logo image"
                  width={255}
                  height={60}
              />
               <Image
                  src="/images/purse.png"
                  alt="logo image"
                  width={255}
                  height={60}
              />
              </div>
              </div>
        </div>
      </section>
      <section className=" h-[433.4]">
        <div className="container mx-auto flex md:flex-row flex-col items-center px-6 md:px-24 py-16 gap-12">
        <div className="md:w-1/2 w-full">
        
         <Image
              className="ml-20"
              src="/images/touch.webp"
              alt="touch image"
              width={441.53}
              height={433.4}
            />
          </div>
          <div
            className="flex flex-col md:items-start text-center md:text-left items-center md:w-1/2
            w-[661px] h-[308]"
          >
            <h1 className="text-4xl text-[#4D4D4D] leading-snug ">
              How to design your site footer like we did
            </h1>
            <p className="text-gray-500 leading-relaxed ">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <div className="mt-4">
              <button className="inline-flex w-[151px] h-[52px] items-center justify-center text-white bg-[#4CAF4F] border-0 focus:outline-none rounded text-lg hover:bg-[#45A049]">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <section className="bg-gray-100">
        <div className="container mx-auto flex md:flex-row flex-col items-center px-6 md:px-24 py-16 ">
          <div className="md:w-1/2 w-full">
            <Image
              className="ml-20"
              src="/images/image 9.png"
              alt="Logo image"
              width={326}
              height={326}
            />
          </div>
          <div
            className="flex flex-col md:items-start text-sm
            w-[748px] h-[168] text-gray-500 leading-relaxed mb-40"
          >
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
            <div className="">
              <button className="inline-flex w-[151px] h-[52px] font-semibold items-center justify-start text-[#4CAF4F] border-0 focus:outline-none rounded">
                Tim Smith
              </button>
              <p className="text-gray-400">
                British Dragon Boat Racing Association
              </p>
              <div className="flex w-[] h-[48] gap-5">
                <Image
                  className=""
                  src="/images/flo.png"
                  alt="logo image"
                  width={48}
                  height={48}
                />
                <Image
                  className=""
                  src="/images/Logo (1).png"
                  alt="logo image"
                  width={48}
                  height={48}
                />
                <Image
                  className=""
                  src="/images/Logo (5).png"
                  alt="logo image"
                  width={48}
                  height={48}
                />
                <Image
                  className=""
                  src="/images/Logo (2).png"
                  alt="logo image"
                  width={48}
                  height={48}
                />
                <Image
                  className=""
                  src="/images/Logo (3).png"
                  alt="logo image"
                  width={48}
                  height={48}
                />
                <Image
                  className=""
                  src="/images/Logo (4).png"
                  alt="logo image"
                  width={48}
                  height={48}
                />
                <div className="flex items-center text-sm text-[#4CAF4F]">
                  <p>Meet all customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div>
          <h1 className="text-center text-3xl font-bold text-[#4D4D4D] mb-4">
            Caring is the new marketing
          </h1>
          <p className="ml-80 w-[628] text-[#717171] mb-8">
            The Nexcent blog is the best place to read about the latest
            membership insights & trends and more. trends and more. See who;s
            joining the community&read about how our communityare increasing
            their membership income and lot;s more.
          </p>
          <Image
            className="mx-auto"
            src="/images/Frame 15.png"
            alt="logo image"
            width={1440}
            height={366}
          />
        </div>
      </section>
      <section>
        <div className="mt-20 bg-gray-100 mx-auto text-center">
          <h1 className="text-6xl text-gray-800">
            Pellentesque suscipit <br />
            fringilla libero eu.
          </h1>
          <button className="inline-flex w-[178px] h-[52px] font-semibold items-center justify-center bg-[#4CAF4F]  text-white border-0 focus:outline-none rounded mt-10 mb-20">
            
             Get a Demo
          </button>
        </div>
      </section>
    </div>  
  )
}
