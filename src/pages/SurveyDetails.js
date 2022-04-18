import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { PlusSmIcon, ChevronRightIcon, PencilIcon, TrashIcon, DocumentDuplicateIcon } from "@heroicons/react/solid";
import { DUMMY_SURVEYS_DATA, DUMMY_TRIALS_DATA } from "./data";

function SurveyDetails() {
   const params = useParams();
   let location = useLocation();
   const [tabIndex, setTabIndex] = useState(0);
   const [sections, setSections] = useState([]);

   const SURVEY_DATA = DUMMY_SURVEYS_DATA.find(item => item.id === params.id);
   const TRIAL_DATA = DUMMY_TRIALS_DATA.find(item => item.id === location.state.trialID);

   const TABS = [
      {
         id: 'questions',
         title: 'Questions',
      },
      {
         id: 'responses',
         title: 'Responses',
      },
   ];

   const addSection = () => {
      const section = {
         category: '',
         questions: []
      };
      setSections(prevState => [...prevState, section]);
   };

   const addQuestionToSection = (sectionIndex) => {
      const question = {
         question: '',
         type: '',
      };

      const newArray = [...sections, ]

   };

   return (
      <>
         <div className="bg-white border border-gray-400 rounded-lg py-4 px-6 flex mb-2 items-center">
            <div className="flex items-center hover:cursor-pointer hover:underline decoration-gray-400">
               <p className="text-gray-400">Trials</p>
               <ChevronRightIcon className="mx-1 w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center">
               <p className="text-gray-400">{TRIAL_DATA.title}</p>
               <ChevronRightIcon className="mx-1 w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center">
               <p className="text-gray-400">{SURVEY_DATA.name}</p>
            </div>
         </div>
         <div className={`bg-white border border-gray-400 rounded-lg overflow-hidden mb-2`}>
            <div className="flex p-6">
               <img src={SURVEY_DATA.image} alt="Trial" className="w-[128px] h-[128px] object-cover" />
               <div className="mx-8 flex-1">
                  <p className="text-3xl font-semibold">{SURVEY_DATA.name}</p>
                  <p className="mt-6">{SURVEY_DATA.description}</p>
               </div>
               <div className="flex">
                  <button className="flex w-[52px] h-10 border border-gray-400 bg-gray-200 rounded-md justify-center items-center">
                     <PencilIcon className="w-5 h-5 text-gray-400" />
                  </button>
                  <button className="flex w-[52px] h-10 border border-gray-400 bg-gray-200 rounded-md justify-center items-center mx-1">
                     <TrashIcon className="w-5 h-5 text-gray-400" />
                  </button>
                  <button onClick={addSection} className="h-10 rounded-md shadow-md bg-black text-white flex py-2 px-4 items-center">
                     <PlusSmIcon className="w-5 h-5 text-white" />
                     <p className="text-white ml-2">Section</p>
                  </button>
               </div>
            </div>
         </div>
         <div className="bg-white border border-gray-400 rounded-lg flex mt-4 px-4">
            {TABS.map(({id, title}, index) => {
               const IS_LAST = index === TABS.length - 1;
               const ACTIVE = index === tabIndex;

               return (
                  <>
                     <div className="self-stretch w-[1px] bg-gray-400" />
                     <button key={id} onClick={() => setTabIndex(index)} className={`flex items-center h-14 p-4 ${ACTIVE ? 'bg-gray-100' : 'bg-white'}`}>
                        <p className={`${ACTIVE ? 'text-orange-500' : 'text-black'} font-medium`}>{title}</p>
                     </button>
                     {IS_LAST && <div className="self-stretch w-[1px] bg-gray-400" />}
                  </>
               );
            })}
         </div>
         {sections.map((item, index) => {
            return (
               <div className="bg-white border border-gray-400 rounded-lg flex flex-col mt-4 overflow-hidden">
                  <div className="bg-gray-100 py-4 px-6 border-b border-b-gray-400">
                     <div className="flex mb-4 items-center">
                        <p className="text-2xl font-semibold flex-1">{`Section ${index + 1}`}</p>
                        <button className="flex w-[52px] h-10 border border-gray-400 bg-gray-200 rounded-md justify-center items-center">
                           <TrashIcon className="w-5 h-5 text-gray-400" />
                        </button>
                        <button className="flex w-[52px] h-10 border border-gray-400 bg-gray-200 rounded-md justify-center items-center ml-1">
                           <DocumentDuplicateIcon className="w-5 h-5 text-gray-400" />
                        </button>
                     </div>
                     <label for={`category-select${index}`} className="font-semibold mr-4">Category:</label>
                     <select name={`category${index}`} id={`category-select${index}`} className="h-10 px-4 rounded-md border border-gray-400 outline-none w-1/3">
                        <option value="">Select a category</option>
                        <option value="1">Category 1</option>
                        <option value="2">Category 2</option>
                        <option value="3">Category 3</option>
                        <option value="4">Category 4</option>
                     </select>
                  </div>
                  {item.questions.map((item, index) => {
                     return (
                        <div className="border-b border-b-gray-400 p-4">
                           <p>{`Question ${index + 1}`}</p>
                        </div>
                     );
                  })}
                  <div className="p-4">
                     <button onClick={() => addQuestionToSection(index)} className="h-10 rounded-md shadow-md bg-black text-white flex py-2 px-4 items-center">
                        <PlusSmIcon className="w-5 h-5 text-white" />
                        <p className="text-white ml-2">Question</p>
                     </button>
                  </div>
               </div>
            );
         })}
      </>
   );
 }

 export default SurveyDetails;
 