"use client";

import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      {" "}
      <main className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100 px-4">
        <div className="max-w-md w-full text-center space-y-6">
          {/* Logo / Initials */}
          <div className="mx-auto flex  items-center justify-center ">
            <Image
              src="/logo.png"
              width={150}
              height={150}
              alt="Picture of the author"
            />
          </div>

          {/* Main Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Website under{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">
                construction
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-400">
              We&apos;re working on something awesome for you.
              <br />
              Please check back again soon.
            </p>
          </div>

          {/* Simple progress bar (just visual) */}
          <div className="mx-auto w-full max-w-xs">
            <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-300 animate-pulse" />
            </div>
            <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-slate-500">
              Coming soon
            </p>
          </div>

          {/* Optional contact text – you can remove if you want totally minimal */}
          <div className="pt-2 text-xs text-slate-500">
            For any urgent queries, contact us at{" "}
            <a
              href="mailto:info@kamla.co.in"
              className="underline underline-offset-2 hover:text-emerald-400"
            >
              info@sbpb.in
            </a>
          </div>

          <p className="text-[11px] text-slate-600 pt-4">
            © {new Date().getFullYear()} SBPB Packaging. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
};

export default page;
