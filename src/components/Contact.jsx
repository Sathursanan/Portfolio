import Card from "./ui/Card";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-start">
      <Card className="p-6 sm:p-8">
        <p className="text-white/75 leading-7">
          If you have any questions or concerns, please don't hesitate to contact
          me. I am open to any work opportunities that align with my skills and
          interests.
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="text-sm text-white/70">Your Name:</label>
            <input
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-purple-400/60"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="text-sm text-white/70">Your Email:</label>
            <input
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-purple-400/60"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="text-sm text-white/70">Your Message:</label>
            <textarea
              rows={5}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-purple-400/60"
              placeholder="Write your message"
            />
          </div>

          <button
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 shadow-glow2 hover:opacity-90 transition"
          >
            SEND MESSAGE ✉️
          </button>
        </form>
      </Card>

      <div className="space-y-5">
        <Card className="p-6 flex items-center gap-4">
          <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <MdEmail className="text-2xl text-purple-300" />
          </div>
          <div>
            <div className="text-white/60 text-sm">Email</div>
            <div className="font-semibold">sathursanan1017@gmail.com</div>
          </div>
        </Card>

        <Card className="p-6 flex items-center gap-4">
          <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <FaPhoneAlt className="text-xl text-purple-300" />
          </div>
          <div>
            <div className="text-white/60 text-sm">Phone</div>
            <div className="font-semibold">+94774114379</div>
          </div>
        </Card>

        <Card className="p-6 flex items-center gap-4">
          <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <FaMapMarkerAlt className="text-xl text-purple-300" />
          </div>
          <div>
            <div className="text-white/60 text-sm">Address</div>
            <div className="font-semibold"> Jaffna, Sri Lanka </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="text-white/70 text-sm font-semibold mb-3">Social</div>
          <div className="flex items-center gap-3 text-xl">
            <a className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition" href="#">
              <FaGithub />
            </a>
            <a className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition" href="#">
              <FaLinkedinIn />
            </a>
            <a className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition" href="#">
              <FaFacebookF />
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}
