import React from "react";
import { MdOutlineTextsms } from "react-icons/md";
import { FiPhoneCall, FiRotateCcw } from "react-icons/fi";
import { LuVideo } from "react-icons/lu";

const RightBottom = () => {
  return (
    <div className="space-y-6">

      {/* 🔹 Quick Check-In (Separate Card) */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-md font-semibold text-gray-800 mb-4">
          Quick Check-In
        </h2>

        <div className="grid grid-cols-3 gap-4">

          <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg py-6 hover:bg-gray-200 transition cursor-pointer font-bold">
            <FiPhoneCall className="text-2xl text-gray-700 mb-2" />
            <p className="text-sm text-gray-700">Call</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg py-6 hover:bg-gray-200 transition cursor-pointer font-bold">
            <MdOutlineTextsms className="text-2xl text-gray-700 mb-2" />
            <p className="text-sm text-gray-700">Text</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg py-6 hover:bg-gray-200 transition cursor-pointer font-bold">
            <LuVideo className="text-2xl text-gray-700 mb-2" />
            <p className="text-sm text-gray-700">Video</p>
          </div>

        </div>
      </div>

      {/* 🔹 Recent Interactions (Separate Card) */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">

        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold text-gray-800">
            Recent Interactions
          </h2>

          <button className="flex items-center gap-2 text-sm px-3 py-1.5 border rounded-md text-gray-600 hover:bg-gray-100 transition">
            <FiRotateCcw />
            Full History
          </button>
        </div>

        <div className="divide-y">

          <div className="flex items-center justify-between py-4">
            <div className="flex items-start gap-3">
              <MdOutlineTextsms className="text-xl text-gray-600 mt-1" />
              <div>
                <p className="font-medium text-gray-800">Text</p>
                <p className="text-sm text-gray-500">Asked for career advice</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">Jan 28, 2026</p>
          </div>

          <div className="flex items-center justify-between py-4">
            <div className="flex items-start gap-3">
              <FiPhoneCall className="text-xl text-gray-600 mt-1" />
              <div>
                <p className="font-medium text-gray-800">Meetup</p>
                <p className="text-sm text-gray-500">Industry conference meetup</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">Jan 28, 2026</p>
          </div>

          <div className="flex items-center justify-between py-4">
            <div className="flex items-start gap-3">
              <LuVideo className="text-xl text-gray-600 mt-1" />
              <div>
                <p className="font-medium text-gray-800">Video</p>
                <p className="text-sm text-gray-500">Asked for career advice</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">Jan 28, 2026</p>
          </div>

        <div className="flex items-center justify-between py-4">
            <div className="flex items-start gap-3">
              <FiPhoneCall className="text-xl text-gray-600 mt-1" />
              <div>
                <p className="font-medium text-gray-800">Text</p>
                <p className="text-sm text-gray-500">Asked for career advice</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">Jan 28, 2026</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RightBottom;