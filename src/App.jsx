import DataImage from "./data";
import { listTools, listProyek } from "./data";
import ScrollFade from "./components/ScrollFade";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <ScrollFade>
          <div>
            <div className="flex items-center mb-6 bg-zinc-800 w-fit p-4 rounded-2xl ml-7">
              <q>It's never too late to learn</q>
            </div>
            <h1 className="text-3xl font-bold mb-7 ml-10">
              Halo, Saya Christ Daniel Santoso🧑🏻‍💻
            </h1>
            <div>
              <p className="text-base mb-5 opacity-50 ml-10">
                I am a front-end programmer and designer who began entering the
                IT field in 2023. I have a strong passion for technology and
                design, and I thoroughly enjoy the process of learning how
                websites and applications are developed to provide an enjoyable
                user experience. Currently, I am focused on honing my skills in
                front-end development, particularly with HTML, CSS, JavaScript,
                and React, as well as UI/UX design. Although I am still
                relatively new, I am eager to continue learning, keeping up with
                industry trends, and applying the knowledge I gain in real-world
                projects, while collaborating to create engaging solutions.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="bg-yellow-700 p-4 rounded-2xl hover:bg-yellow-600 ml-10"
              >
                Download CV <i className="ri-file-download-line"></i>
              </a>
              <a
                href="#"
                className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
              >
                Project <i className="ri-arrow-down-line"></i>
              </a>
            </div>
          </div>
        </ScrollFade>
        <ScrollFade>
          <img
            src={DataImage.HeroImage}
            alt="Hero Image"
            className="w-[250px] md:ml-70 sm:block hidden flex justify-center"
            loading="lazy"
          />
        </ScrollFade>
      </div>
      <ScrollFade>
        {/* about */}
        <div className="about mt-14 py-10">
          <h1 className="text-center text-3xl font-bold">About</h1>
          <div className="mt-14 xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg   ">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md mb-10 sm:hidden block"
              loading="lazy"
            />
            <p className="text-base mb-10">
              Hello, I am Christ Daniel Santoso, a front-end programmer
              currently studying at Telkom University Purwokerto, majoring in
              Computer Engineering. UI/UX design is my passion! I have always
              been fascinated by how design can enhance user experience by
              making it more intuitive and enjoyable. I thoroughly enjoy
              exploring various design ideas and applying them in the projects I
              work on, aiming to create solutions that are not only functional
              but also visually appealing and easy to use. With my background in
              technology, I continuously strive to learn and stay updated with
              design and technology trends to ensure my skills keep evolving.
            </p>
            <div className="flex items-center justify-between">
              <img
                src={DataImage.HeroImage}
                alt="Image"
                className="w-12 rounded-md sm:block hidden"
                loading="lazy"
              />
              <div className="flex items-center gap-18">
                <div>
                  <h1 className="text-2xl mb-1">
                    10<span className="text-yellow-500">+</span>
                  </h1>
                  <p>Project</p>
                </div>
                <div>
                  <h1 className="text-2xl mb-1">
                    2<span className="text-yellow-500">+</span>
                  </h1>
                  <p>Years of experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollFade>
      <ScrollFade>
        <div className="tools mt-14">
          <h1 className="text-center text-3xl font-bold">
            Technologies & Tools
          </h1>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                key={tool.id}
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  loading="lazy"
                ></img>
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollFade>

      {/*project*/}
      {/* Project */}
      <ScrollFade>
        <div className="proyek mt-1 py-10">
          <h1 className="text-center text-4xl font-bold mb-2">Project</h1>
          <div className="proyek-box mt-20 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listProyek.map((proyek) => (
              <div
                key={proyek.id}
                className="p-4 bg-zinc-800 rounded-md flex flex-col gap-4"
              >
                <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
                <div className="flex flex-col h-full">
                  <h1 className="text-2xl font-bold">{proyek.nama}</h1>
                  <p className="text-base/loose mb-4">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2 mt-2 mb-3">
                    {proyek.tools.map((tool, index) => (
                      <p
                        className="py-1 px-3 border border-zinc-600 bg-zinc-700 rounded-md font-semibold"
                        key={index}
                      >
                        {tool}
                      </p>
                    ))}
                  </div>
                  <div className="mt-auto text-white font-semibold text-center mt-3">
                    <a
                      className="bg-yellow-700 p-2 rounded-lg block border border-zinc-500 hover:bg-yellow-600"
                      href="#"
                    >
                      Lihat Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollFade>
      {/* contact */}
      <ScrollFade>
        <div className="contact mt-5 p-10">
          <h1 className="text-4xl mb-2 font-bold text-center">Contact</h1>
          <p className="text-base/loose text-center mb-10 opacity-50">
            Let's connection
          </p>
          <form
            action="https://formsubmit.co/danielsantosoopl1@gmail.com"
            method="POST"
            className="bg-zinc-800 p-10 w-fit mx-auto rounded-md"
            autoComplete="off"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Name</label>
                <input
                  type="text"
                  name="Nama"
                  placeholder="Input your name"
                  className="border border-zinc-500 p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Gmail</label>
                <input
                  type="text"
                  name="Gmail"
                  placeholder="Input your gmail"
                  className="border border-zinc-500 p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Message</label>
                <textarea
                  name="Message"
                  id="message"
                  cols="50"
                  rows="5"
                  placeholder="input your Message"
                  className="border border-zinc-500 p-2 rounded-md"
                ></textarea>
              </div>
              <div>
                <div className="text-center">
                  <button
                    type="Submit"
                    className="bg-yellow-500 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-yellow-500"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </ScrollFade>
    </>
  );
}

export default App;
