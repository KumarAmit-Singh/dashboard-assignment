// const Teams = ({ teamsData }) => {
//   return (
//     <div className="animate-in zoom-in-95 duration-300">
//       <div className="bg-white rounded-3xl shadow-sm border border-gray-50 p-8 min-h-[400px]">
//         <div className="mb-8">
//           <h3 className="text-xl font-bold text-gray-800">{teamsData.title}</h3>
//           <p className="text-sm text-gray-500">{teamsData.activeMembers}</p>
//         </div>

//         {/* Grid for 12 Members */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {teamsData.members.map((member, i) => (
//             <div
//               key={member.id}
//               className="p-5 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300 group bg-white"
//             >
//               <div className="flex items-center gap-4 mb-4">
//                 <img
//                   src={member.avatar}
//                   alt={member.name}
//                   className="w-14 h-14 rounded-2xl object-cover shadow-sm"
//                 />
//                 <div className="overflow-hidden">
//                   <h4 className="text-[15px] font-bold text-gray-800 truncate">
//                     {member.name}
//                   </h4>
//                   <p className="text-[12px] text-teal-500 font-semibold uppercase tracking-wider">
//                     {member.role}
//                   </p>
//                 </div>
//               </div>

//               <div className="space-y-2 pt-4 border-t border-gray-50">
//                 <div className="flex flex-col">
//                   <span className="text-[10px] text-gray-400 font-bold uppercase">
//                     Email
//                   </span>
//                   <span className="text-[13px] text-gray-600 truncate">
//                     {member.email}
//                   </span>
//                 </div>
//                 <div className="flex flex-col">
//                   <span className="text-[10px] text-gray-400 font-bold uppercase">
//                     Mobile
//                   </span>
//                   <span className="text-[13px] text-gray-600">
//                     {member.mobile}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Teams;

// // const Teams = ({ teamsData }) => {
// //   return (
// //     <div className="animate-in zoom-in-95 duration-300">
// //       <div className="bg-white rounded-3xl shadow-sm border border-gray-50 p-8">
// //         <div className="mb-8">
// //           <h3 className="text-xl font-bold text-gray-800">{teamsData.title}</h3>
// //           <p className="text-sm text-gray-500">{teamsData.activeMembers}</p>
// //         </div>

// //         {/* Grid for Members */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
// //           {teamsData.members.map((member) => (
// //             <div
// //               key={member.id}
// //               className="flex flex-col overflow-hidden bg-gray-50/30 rounded-2xl border border-gray-100 group hover:shadow-xl transition-all duration-300"
// //             >
// //               {/* Profile Image Section */}
// //               <div className="relative aspect-[3/4] overflow-hidden">
// //                 <img
// //                   src={member.avatar}
// //                   alt={member.name}
// //                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
// //                 />

// //                 <div className="absolute bottom-0 left-0 w-full h-1.5 bg-teal-400"></div>
// //               </div>

// //               {/* Text Content Section */}
// //               <div className="p-6 text-center space-y-1">
// //                 <h4 className="text-[18px] font-bold text-teal-500 leading-tight">
// //                   {member.name}
// //                 </h4>
// //                 <p className="text-[14px] text-gray-500 font-medium">
// //                   {member.role}
// //                 </p>

// //                 <div className="pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                   <p className="text-[11px] text-gray-400 truncate">
// //                     {member.email}
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Teams;

const Teams = ({ teamsData }) => {
  return (
    <div className="animate-in zoom-in-95 duration-300">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-50 p-8 min-h-[400px]">
        {/* Header Section */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-800">{teamsData.title}</h3>
          <p className="text-sm text-gray-500">{teamsData.activeMembers}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamsData.members.map((member) => (
            <div key={member.id} className="flex flex-col items-center group">
              <div className="relative w-32 h-32 mb-6">
                <div className="w-full h-full rounded-full overflow-hidden border border-gray-100 shadow-inner bg-gray-50">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-[18px] font-bold text-gray-700">
                  {member.name}
                </h4>
              </div>

              <p className="text-[14px] text-teal-500 font-medium text-center">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
