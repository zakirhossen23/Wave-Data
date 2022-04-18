import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowRightIcon, UserIcon, CurrencyDollarIcon, GlobeAltIcon, ChevronRightIcon, PlusSmIcon } from "@heroicons/react/solid";
import { formatDistance } from 'date-fns'
import { DUMMY_SURVEYS_DATA, DUMMY_TRIALS_DATA } from "./data";

function TrialDetails() {
   const params = useParams();
   const navigate = useNavigate();
   const [tabIndex, setTabIndex] = useState(0);

   const TRIAL_DATA = DUMMY_TRIALS_DATA.find(item => item.id === params.id);

   const TABS = [
      {
         id: 'surveys',
         title: 'Surveys',
      },
      {
         id: 'settings',
         title: 'Settings',
      },
   ];

   const TABLE_COLS = [
      {
         id: 'name',
         title: 'Name',
      },
      {
         id: 'question',
         title: 'Question',
      },
      {
         id: 'reward',
         title: 'Reward',
      },
      {
         id: 'submission',
         title: 'Submission',
      },
      {
         id: 'last submission',
         title: 'Last submission',
      }
   ];

   return (
      <>
         <div className="bg-white border border-gray-400 rounded-lg py-4 px-6 flex mb-2 items-center">
            <div className="flex items-center hover:cursor-pointer hover:underline decoration-gray-400">
               <p className="text-gray-400">Trials</p>
               <ChevronRightIcon className="mx-1 w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center">
               <p className="text-gray-400">{TRIAL_DATA.title}</p>
            </div>
         </div>
         <div className={`bg-white border border-gray-400 rounded-lg overflow-hidden mb-2`}>
            <div className="flex p-6">
               <img src={TRIAL_DATA.image} alt="Trial" className="w-[128px] h-[128px] object-cover" />
               <div className="mx-8 flex-1">
                  <p className="text-3xl font-semibold">{TRIAL_DATA.title}</p>
                  <p className="mt-6">{TRIAL_DATA.description}</p>
               </div>
               <button className="flex w-[52px] h-10 border border-gray-400 bg-gray-200 rounded-md justify-center items-center">
                  <ArrowRightIcon className="w-5 h-5 text-gray-400" />
               </button>
            </div>
            <div className="flex p-6 border-t border-t-gray-400 bg-gray-200">
               <div className="flex items-center">
                  <UserIcon className="w-5 h-5 text-gray-500" />
                  <p className="text-gray-500 font-semibold ml-1">{`${TRIAL_DATA.contributors} contributor(s)`}</p>
               </div>
               <div className="flex items-center ml-6">
                  <GlobeAltIcon className="w-5 h-5 text-gray-500" />
                  <p className="text-gray-500 font-semibold ml-1">{`${TRIAL_DATA.contributors} contributor(s)`}</p>
               </div>
               <div className="flex items-center ml-6">
                  <CurrencyDollarIcon className="w-5 h-5 text-gray-500" />
                  <p className="text-gray-500 font-semibold ml-1">{`Budget of $${TRIAL_DATA.budget}`}</p>
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
         <div className="bg-white border border-gray-400 rounded-lg py-4 px-6 flex flex-col mt-4">
            {tabIndex === 0 && (
               <>
                  <div className="flex items-center">
                     <h1 className="text-2xl font-semibold flex-1">Surveys</h1>
                     <button className="h-10 rounded-md shadow-md bg-black text-white flex py-2 px-4 items-center">
                        <PlusSmIcon className="w-5 h-5 text-white" />
                        <p className="text-white ml-2">Survey</p>
                     </button>
                  </div>
                  <table class="table-fixed">
                     <thead className="border-b border-b-gray-400">
                     <tr>
                        {TABLE_COLS.map(({id, title}) => {
                           return (
                              <th key={id} className="text-left font-normal py-3 px-3">{title}</th>
                           );
                        })}
                        <th className="py-3 px-3" />
                     </tr>
                     </thead>
                     <tbody>
                     {DUMMY_SURVEYS_DATA.map(({id, name, questions, reward, submissions, last_submission_date}, index) => {
                        const IS_LAST = index === DUMMY_SURVEYS_DATA.length - 1;
                        return (
                           <tr className={`border-b-gray-400 ${!IS_LAST ? 'border-b' : 'border-0'}`}>
                              <td className="py-3 px-3">{name}</td>
                              <td className="py-3 px-3">{questions}</td>
                              <td className="py-3 px-3">{`$${reward}`}</td>
                              <td className="py-3 px-3">{`${submissions}/24`}</td>
                              <td className="py-3 px-3">{formatDistance(last_submission_date, new Date(), { addSuffix: true })}</td>
                              <td className="flex justify-end py-3">
                              <button onClick={() => navigate(`/trials/${TRIAL_DATA.id}/survey/${id}`, { state: { trialID: TRIAL_DATA.id }})} className="flex w-[52px] h-10 border border-gray-400 bg-gray-200 rounded-md justify-center items-center">
                                 <ArrowRightIcon className="w-5 h-5 text-gray-400" />
                              </button>
                              </td>
                           </tr>
                        );
                     })}
                     </tbody>
                  </table>
               </>
            )}
         </div>
      </>
   );
 }

 export default TrialDetails;
 