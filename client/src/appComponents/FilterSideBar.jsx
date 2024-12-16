// /* eslint-disable react/prop-types */
// import { useState } from "react";
// import { X, SlidersHorizontal } from "lucide-react";

// export default function FilterSidebar({
//   filters,
//   onFilterChange,
//   isOpen,
//   onToggle,
// }) {
//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === "checkbox") {
//       if (name === "checked" || name === "notChecked") {
//         onFilterChange({
//           ...filters,
//           checked: name === "checked" ? checked : !checked,
//         });
//       } else {
//         onFilterChange({
//           ...filters,
//           type: checked
//             ? [...filters.type, name]
//             : filters.type.filter((t) => t !== name),
//         });
//       }
//     } else {
//       onFilterChange({ ...filters, [name]: value });
//     }
//   };

//   const handleDateChange = (e) => {
//     const { name, value } = e.target;
//     onFilterChange({ ...filters, [name]: value ? new Date(value) : null });
//   };

//   const resetFilters = () => {
//     onFilterChange({
//       category: "",
//       dateFrom: null,
//       dateTo: null,
//       notes: "",
//       checked: null,
//       type: [],
//     });
//   };

//   return (
//     <>
//       <div
//         className={`flex inset-y-30 left-0 z-20 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
//           isOpen ? "translate-x-30" : "-translate-x-full"
//         }`}
//       >
//         <div className="p-4">
//           <h2 className="text-xl font-bold mb-4">FILTER</h2>
//           <form className="space-y-4">
//             <div>
//               <label
//                 htmlFor="category"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Category
//               </label>
//               <input
//                 type="text"
//                 id="category"
//                 name="category"
//                 value={filters.category}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="dateFrom"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 From
//               </label>
//               <input
//                 type="date"
//                 id="dateFrom"
//                 name="dateFrom"
//                 value={filters.dateFrom?.toISOString().split("T")[0] || ""}
//                 onChange={handleDateChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="dateTo"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 To
//               </label>
//               <input
//                 type="date"
//                 id="dateTo"
//                 name="dateTo"
//                 value={filters.dateTo?.toISOString().split("T")[0] || ""}
//                 onChange={handleDateChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="notes"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Notes
//               </label>
//               <input
//                 type="text"
//                 id="notes"
//                 name="notes"
//                 value={filters.notes}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Status
//               </label>
//               <div className="mt-2 space-y-2">
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     id="checked"
//                     name="checked"
//                     checked={filters.checked === true}
//                     onChange={handleInputChange}
//                     className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                   />
//                   <label
//                     htmlFor="checked"
//                     className="ml-2 text-sm text-gray-700"
//                   >
//                     Checked
//                   </label>
//                 </div>
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     id="notChecked"
//                     name="notChecked"
//                     checked={filters.checked === false}
//                     onChange={handleInputChange}
//                     className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                   />
//                   <label
//                     htmlFor="notChecked"
//                     className="ml-2 text-sm text-gray-700"
//                   >
//                     Not Checked
//                   </label>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Type
//               </label>
//               <div className="mt-2 space-y-2">
//                 {["Expenses", "Income", "Transfer Between Accounts"].map(
//                   (type) => (
//                     <div key={type} className="flex items-center">
//                       <input
//                         type="checkbox"
//                         id={type}
//                         name={type}
//                         checked={filters.type.includes(type)}
//                         onChange={handleInputChange}
//                         className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                       />
//                       <label
//                         htmlFor={type}
//                         className="ml-2 text-sm text-gray-700"
//                       >
//                         {type}
//                       </label>
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>
//           </form>
//           <button
//             onClick={resetFilters}
//             className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-200"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//       {/* <button
//         onClick={onToggle}
//         className={`felx-1 top-4 left-0 z-40 p-2 rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
//           isOpen ? "transform translate-x-64" : ""
//         }`}
//       >
//         {isOpen ? (
//           <X className="h-6 w-6 text-gray-600" />
//         ) : (
//           <SlidersHorizontal className="h-6 w-6 text-gray-600" />
//         )}
//       </button> */}
//     </>
//   );
// }

/* eslint-disable react/prop-types */
import { useState } from "react";
import { X, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FilterSidebar({
  filters,
  onFilterChange,
  // isOpen, // Removed this prop
  onToggle,
}) {
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name === "checked" || name === "notChecked") {
        onFilterChange({
          ...filters,
          checked: name === "checked" ? checked : !checked,
        });
      } else {
        onFilterChange({
          ...filters,
          type: checked
            ? [...filters.type, name]
            : filters.type.filter((t) => t !== name),
        });
      }
    } else {
      onFilterChange({ ...filters, [name]: value });
    }
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value ? new Date(value) : null });
  };

  const resetFilters = () => {
    onFilterChange({
      category: "",
      dateFrom: null,
      dateTo: null,
      notes: "",
      checked: null,
      type: [],
    });
  };

  return (
    <>
      <div
        className={`flex inset-y-30 left-0 z-20 w-64 bg-gray-500 text-white shadow-lg`} // Removed the conditional transform
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">FILTER</h2>
          <form className="space-y-4 text-white">
            {/* <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-white-700"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={filters.category}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div> */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-white-700"
              >
                Category
              </label>
              <Select
                value={filters.category}
                onValueChange={(value) =>
                  onFilterChange({ ...filters, category: value })
                }
              >
                <SelectTrigger className="mt-1 block w-full rounded-md border-gray-800 shadow-sm focus:border-indigo-300 focus:ring focus:ring-black focus:ring-opacity-50 ">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700">
                  <SelectItem value="Food">Food</SelectItem>
                  <SelectItem value="Travel">Travel</SelectItem>
                  <SelectItem value="Entertainment">Entertainment</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label
                htmlFor="dateFrom"
                className="block text-sm font-medium text-gray-700"
              >
                From
              </label>
              <input
                type="date"
                id="dateFrom"
                name="dateFrom"
                value={filters.dateFrom?.toISOString().split("T")[0] || ""}
                onChange={handleDateChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label
                htmlFor="dateTo"
                className="block text-sm font-medium text-gray-700"
              >
                To
              </label>
              <input
                type="date"
                id="dateTo"
                name="dateTo"
                value={filters.dateTo?.toISOString().split("T")[0] || ""}
                onChange={handleDateChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label
                htmlFor="notes"
                className="block text-sm font-medium text-gray-700"
              >
                Notes
              </label>
              <textarea
                type="text"
                id="notes"
                name="notes"
                value={filters.notes}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <div className="mt-2 space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="checked"
                    name="checked"
                    checked={filters.checked === true}
                    onChange={handleInputChange}
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <label
                    htmlFor="checked"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Checked
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="notChecked"
                    name="notChecked"
                    checked={filters.checked === false}
                    onChange={handleInputChange}
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <label
                    htmlFor="notChecked"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Not Checked
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Type
              </label>
              <div className="mt-2 space-y-2">
                {["Expenses", "Income", "Transfer Between Accounts"].map(
                  (type) => (
                    <div key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        id={type}
                        name={type}
                        checked={filters.type.includes(type)}
                        onChange={handleInputChange}
                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                      <label
                        htmlFor={type}
                        className="ml-2 text-sm text-gray-700"
                      >
                        {type}
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>
          </form>
          <button
            onClick={resetFilters}
            className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
