// @flow strict
import { personalData } from '@/utils/data/personal-data';
import { publicAssetPath } from '@/utils/public-asset-path';
import Image from 'next/image';
import Link from 'next/link';
import { MdLocationPin, MdOutlineEmail } from "react-icons/md";

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="space-y-8 lg:space-y-12">
        <div className="mx-auto w-full max-w-3xl rounded-lg border border-[#464c6a] p-5 text-center sm:p-8">
          <p className="mb-5 text-xl font-medium uppercase text-[#16f2b3]">Get in touch</p>
          <p className="mb-6 text-sm text-[#d3d8e8] sm:text-base">Have a question or an opportunity? I&apos;d love to hear from you.</p>
          <Link href={`mailto:${personalData.email}`} className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 text-sm font-medium text-white transition-all hover:from-violet-600 hover:to-pink-500 sm:px-8">
            <MdOutlineEmail size={20} className="shrink-0" aria-hidden="true" />
            <span className="break-all">Email me at {personalData.email}</span>
          </Link>
        </div>
        <div className="overflow-hidden rounded-xl border border-[#353a52] bg-[#10172d]">
          <Image
            src={publicAssetPath('/dublin-map.png')}
            alt={`${personalData.address} location image`}
            width={1400}
            height={350}
            unoptimized
            className="h-auto w-full"
          />
          <div className="border-t border-[#353a52] px-4 py-3 text-sm sm:px-6">
            <p className="flex items-center gap-2">
              <MdLocationPin className="text-violet-300" size={18} aria-hidden="true" />
              {personalData.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;