import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import React from 'react';
import Select from 'react-select';
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { PlusSmIcon, ChevronRightIcon, PencilIcon, TrashIcon, DocumentDuplicateIcon } from "@heroicons/react/solid";
import { PieChart, Pie, Tooltip } from 'recharts';

import UpdateSurveyModal from '../components/modal/UpdateSurvey'
function SurveyDetails() {
   var Thisstate = {
      sectionsloaded: false
   }
   const params = useParams();
   const navigate = useNavigate();
   let location = useLocation();
   const [tabIndex, setTabIndex] = useState(0);
   const [responses, setResponses] = useState([
      {
         id: 'a',
         category: 'Emotional health activities',
         questions: [
            {
               id: 'a',
               type: 'yes/no',
               question: 'Lorem ipsum color si amet?',
               data: [
                  { name: 'Yes', value: 12 },
                  { name: 'No', value: 8 },
               ]
            },
         ]
      },
      {
         id: 'b',
         category: 'Emotional health activities',
         questions: [
            {
               id: 'a',
               type: 'rating',
               question: 'Lorem ipsum color si amet?',
               ratings: [3, 5, 2, 1, 2, 0, 4, 3, 5, 2, 1, 2, 0, 4, 3, 2, 1, 5, 4, 3],
            },
         ]
      },
      {
         id: 'c',
         category: 'Emotional health activities',
         questions: [
            {
               id: 'a',
               type: 'limited',
               question: 'Lorem ipsum color si amet?',

            },
         ]
      },
      {
         id: 'd',
         category: 'Emotional health activities',
         questions: [
            {
               id: 'a',
               type: 'open',
               question: 'Lorem ipsum color si amet?',

            },
         ]
      },
   ]);
   const [TRIAL_DATA, setTRIAL_DATA] = useState({})
   const [SURVEY_DATA, setSURVEY_DATA] = useState({})
   const [UpdatemodalShow, setModalShow] = useState(false);

   const [sectionsdata, setsectionsdata] = useState([
      {
         category: "",
         id: "",
         surveyID: 0
      },
   ])
   const [sectionsQuestionsdata, setsectionsQuestionsdata] = useState([
      {
         id: "",
         sectionid: "",
         questiontype: "",
         surveyid: "",
         question: "",
         questiontype2: ""
      },
   ])

   const [LimitedAnswerdata, setLimitedAnswerdata] = useState([
      {
         id: "",
         questionid: "",
         answer: "",
      },
   ])
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

   const dataCategory = [
      {
         value: "0",
         text: 'Emotional health activities',
         icon: <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_476_15862)">
               <path d="M6.51126 22.0638L6.44933 21.4817L5.88408 21.6338C5.68512 21.6874 5.47117 21.7151 5.25 21.7151C3.86937 21.7151 2.75 20.5939 2.75 19.2151C2.75 18.925 2.79986 18.6436 2.88999 18.3871L3.05197 17.9263L2.59507 17.7536C1.37016 17.2906 0.5 16.1043 0.5 14.7151C0.5 13.4199 1.25935 12.2983 2.35927 11.778L2.92772 11.5091L2.53765 11.0159C2.20335 10.5932 2 10.0133 2 9.46509C2 8.26684 2.84265 7.26556 3.96975 7.01918L4.48992 6.90547L4.34376 6.39347C4.28299 6.18057 4.25 5.95022 4.25 5.71509C4.25 4.54643 5.0544 3.5634 6.1364 3.29036L6.47421 3.20511L6.51123 2.85869C6.62492 1.79497 7.52796 0.965088 8.625 0.965088C9.79747 0.965088 10.75 1.91656 10.75 3.09009V21.8401C10.75 23.0124 9.7973 23.9651 8.625 23.9651C7.52914 23.9651 6.62517 23.1346 6.51126 22.0638ZM17.4888 2.85869L17.5258 3.20511L17.8636 3.29036C18.9456 3.5634 19.75 4.54643 19.75 5.71509C19.75 5.95255 19.7183 6.18183 19.6574 6.39105L19.5079 6.90482L20.0307 7.01916C21.1569 7.26553 22 8.26687 22 9.46509C22 10.0144 21.7984 10.5931 21.4623 11.0141L21.068 11.5082L21.6396 11.7781C22.7411 12.2984 23.5 13.4199 23.5 14.7151C23.5 16.1045 22.6311 17.2906 21.4047 17.7536L20.9487 17.9257L21.1091 18.3859C21.1992 18.6444 21.25 18.9264 21.25 19.2151C21.25 20.5936 20.1285 21.7151 18.75 21.7151C18.5288 21.7151 18.3149 21.6874 18.1159 21.6338L17.5507 21.4817L17.4887 22.0638C17.3748 23.1346 16.4709 23.9651 15.375 23.9651C14.2027 23.9651 13.25 23.0124 13.25 21.8401V3.09009C13.25 1.91656 14.2025 0.965088 15.375 0.965088C16.472 0.965088 17.3751 1.79497 17.4888 2.85869Z" fill="#EB71AC" stroke="#EB71AC" />
            </g>
            <defs>
               <clipPath id="clip0_476_15862">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.465088)" />
               </clipPath>
            </defs>
         </svg>

      }
   ]

   function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }
   async function addSection(e) {
      var addSectionBTN = e.currentTarget;
      addSectionBTN.classList.remove("hover:bg-gray-600")
      addSectionBTN.classList.remove("bg-black")     
      addSectionBTN.classList.add("bg-gray-400")
      addSectionBTN.classList.add("cursor-default")
      addSectionBTN.disabled = true;
      await fetch(`https://cors-anyhere.herokuapp.com/https://wavedata.i.tgcloud.io:14240/restpp/query/WaveData/CreateSection?SurveyidTXT=${(params.id)}`, {
         "headers": {
            "accept-language": "en-US,en;q=0.9",
            "Authorization": "Bearer h6t28nnpr3e58pdm1c1miiei4kdcejuv",
         },
         "body": null,
         "method": "GET"
      }).then(e => { return e.json() }).then(e2 => {
         setsectionsdata(prevState => [...prevState, {
            id: e2.results[0].ID,
            category: ""
         }]);
         addSectionBTN.classList.add("hover:bg-gray-600")
         addSectionBTN.classList.add("bg-black")     
         addSectionBTN.classList.remove("bg-gray-400")
         addSectionBTN.classList.remove("cursor-default")
         addSectionBTN.disabled = false;
      })


   };

   async function addQuestion(e) {
      var addQuestionBTN = e.currentTarget;
      let sectionsidTXT = e.currentTarget.getAttribute("sectionsid");
      addQuestionBTN.classList.remove("hover:bg-gray-600")
      addQuestionBTN.classList.remove("bg-black")     
      addQuestionBTN.classList.add("bg-gray-400")
      addQuestionBTN.classList.add("cursor-default")
      addQuestionBTN.disabled = true;

      await fetch(`https://cors-anyhere.herokuapp.com/https://wavedata.i.tgcloud.io:14240/restpp/query/WaveData/CreateQuestion?sectionidTXT=${encodeURIComponent(sectionsidTXT)}&surveyID=${parseInt(params.id)}`, {
         "headers": {
            "accept-language": "en-US,en;q=0.9",
            "Authorization": "Bearer h6t28nnpr3e58pdm1c1miiei4kdcejuv",
         },
         "body": null,
         "method": "GET"
      }).then(e => { return e.json() }).then(e2 => {
         setsectionsQuestionsdata(prevState => [...prevState, {
            id: e2.results[0].ID,
            sectionid: sectionsidTXT,
            questiontype: "rating",
            surveyid: params.id,
            question: "",
            questiontype2: "1-5"
         }]);
         addQuestionBTN.classList.add("hover:bg-gray-600")
         addQuestionBTN.classList.add("bg-black")     
         addQuestionBTN.classList.remove("bg-gray-400")
         addQuestionBTN.classList.remove("cursor-default")
   
   
         addQuestionBTN.disabled = false;
      })


   };

   async function LoadDataTrial() {
      setTRIAL_DATA({})
      await fetch(`https://cors-anyhere.herokuapp.com/https://wavedata.i.tgcloud.io:14240/restpp/query/WaveData/GetTrial?idTXT=${parseInt(location.state.trialID)}`, {
         "headers": {
            "accept-language": "en-US,en;q=0.9",
            "Authorization": "Bearer h6t28nnpr3e58pdm1c1miiei4kdcejuv",
         },
         "body": null,
         "method": "GET"
      }).then(e => {
         return e.json();
      }).then(e => {
         setTRIAL_DATA(e.results[0]['(SV)'][0].attributes);
      })
   }
   async function LoadSurveyData() {
      setSURVEY_DATA({})
      await fetch(`https://cors-anyhere.herokuapp.com/https://wavedata.i.tgcloud.io:14240/restpp/query/WaveData/SelectSurveyByID?idTXT=${encodeURIComponent(params.id)}`, {
         "headers": {
            "accept-language": "en-US,en;q=0.9",
            "Authorization": "Bearer h6t28nnpr3e58pdm1c1miiei4kdcejuv",
         },
         "body": null,
         "method": "GET"
      }).then(e => {
         return e.json();
      }).then(e => {
         console.log(e.results[0]['(SV)'])
         setSURVEY_DATA(e.results[0]['(SV)'][0].attributes);
      })
   }

   async function LoadDataSections() {
      setsectionsdata([])
      sleep(100)
      await fetch(`https://cors-anyhere.herokuapp.com/https://wavedata.i.tgcloud.io:14240/restpp/query/WaveData/LoadSection?surveyIDTXT=${parseInt(params.id)}`, {
         "headers": {
            "accept-language": "en-US,en;q=0.9",
            "Authorization": "Bearer h6t28nnpr3e58pdm1c1miiei4kdcejuv",
         },
         "body": null,
         "method": "GET"
      }).then(e => {
         return e.json();
      }).then(e => {
         e.results[0].SV.forEach(async element => {
            setsectionsdata(prevState => [...prevState, element.attributes]);
         });
         Thisstate.sectionsloaded = true;
      })
   }
   async function LoadDataQuestions() {
      setsectionsQuestionsdata([])
      sleep(100)
      await fetch(`https://cors-anyhere.herokuapp.com/https://wavedata.i.tgcloud.io:14240/restpp/query/WaveData/LoadQuestionBySurveyID?surveyIDTXT=${parseInt(params.id)}`, {
         "headers": {
            "accept-language": "en-US,en;q=0.9",
            "Authorization": "Bearer h6t28nnpr3e58pdm1c1miiei4kdcejuv",
         },
         "body": null,
         "method": "GET"
      }).then(e => {
         return e.json();
      }).then(e => {
         e.results[0].SV.forEach(async element => {
            setsectionsQuestionsdata(prevState => [...prevState, element.attributes]);
         });
         Thisstate.sectionsloaded = true;
      })
   }
   async function LoadDataLimitedAnswers() {
      setLimitedAnswerdata([])
      sleep(100)
      await fetch(`https://cors-anyhere.herokuapp.com/https://wavedata.i.tgcloud.io:14240/restpp/query/WaveData/LoadLimitedAnswers?surveyIDTXT=${parseInt(params.id)}`, {
         "headers": {
            "accept-language": "en-US,en;q=0.9",
            "Authorization": "Bearer h6t28nnpr3e58pdm1c1miiei4kdcejuv",
         },
         "body": null,
         "method": "GET"
      }).then(e => {
         return e.json();
      }).then(e => {
         e.results[0].SV.forEach(async element => {
            setLimitedAnswerdata(prevState => [...prevState, element.attributes]);
         });
      })
   }


   async function AddLimitedAnswer(e,item) {
      var AddLimitedBTN= e.currentTarget;
      AddLimitedBTN.classList.remove("hover:bg-white")
      AddLimitedBTN.classList.add("bg-gray-300")
      AddLimitedBTN.classList.add("cursor-default")
      AddLimitedBTN.disabled = true;
      let questionidTXT = item.id;
      await fetch(`https://cors-anyhere.herokuapp.com/https://wavedata.i.tgcloud.io:14240/restpp/query/WaveData/CreateLimitedAnswer?questionidTXT=${encodeURIComponent(questionidTXT)}&surveyidTXT=${parseInt(params.id)}&sectionidTXT=${encodeURIComponent(item.sectionid)}`, {
         "headers": {
            "accept-language": "en-US,en;q=0.9",
            "Authorization": "Bearer h6t28nnpr3e58pdm1c1miiei4kdcejuv",
         },
         "body": null,
         "method": "GET"
      }).then(e => { return e.json() }).then(e2 => {
         setLimitedAnswerdata(prevState => [...prevState, {
            id: e2.results[0].ID,
            questionid: item.id,
            answer: ""
         }]);
         AddLimitedBTN.classList.add("hover:bg-white")
         AddLimitedBTN.classList.remove("bg-gray-300")
         AddLimitedBTN.classList.remove("cursor-default")
         AddLimitedBTN.disabled = false;
      })


   }

   async function updateSections() {
      var done = new Promise(async (resolve, reject) => {
         await sectionsdata.forEach(async (element) => {
            const textUpdate = `UpdateSection?idTXT=${encodeURIComponent(element.id)}&categoryTXT=${encodeURIComponent(element.category)}`
            var waitUpdate = new Promise(async (resolve2, reject) => {
               await fetch(`https://cors-anyhere.herokuapp.com/https://wavedata.i.tgcloud.io:14240/restpp/query/WaveData/${textUpdate}`, {
                  "headers": {
                     "accept-language": "en-US,en;q=0.9",
                     "Authorization": "Bearer h6t28nnpr3e58pdm1c1miiei4kdcejuv",
                  },
                  "body": null,
                  "method": "GET"
               }).then(e => {
                  resolve2(e.json)
               })
            });
            await waitUpdate;
         });
         resolve(sectionsdata);

      })
      await done
   }
   async function updateQuestionType(idTXT, typeTXT) {
      const textUpdate = `UpdateQuestion?idTXT=${encodeURIComponent(idTXT)}&typeTXT=${encodeURIComponent(typeTXT)}&questionTXT=""&way=type&questiontype2TXT=${encodeURIComponent()}`
      await fetch(`https://cors-anyhere.herokuapp.com/https://wavedata.i.tgcloud.io:14240/restpp/query/WaveData/${textUpdate}`, {
         "headers": {
            "accept-language": "en-US,en;q=0.9",
            "Authorization": "Bearer h6t28nnpr3e58pdm1c1miiei4kdcejuv",
         },
         "body": null,
         "method": "GET"
      }).then(e => {
         return e.json;
      })
   }
   async function updateQuestionAnswerType(idTXT, typeAnserTXT) {
      const textUpdate = `UpdateQuestion?idTXT=${encodeURIComponent(idTXT)}&way=answertype&questiontype2TXT=${encodeURIComponent(typeAnserTXT)}`
      await fetch(`https://cors-anyhere.herokuapp.com/https://wavedata.i.tgcloud.io:14240/restpp/query/WaveData/${textUpdate}`, {
         "headers": {
            "accept-language": "en-US,en;q=0.9",
            "Authorization": "Bearer h6t28nnpr3e58pdm1c1miiei4kdcejuv",
         },
         "body": null,
         "method": "GET"
      }).then(e => {
         return e.json;
      })
   }


   function RatingAnswer({ item }) {
      return (<><div className="ml-4" style={{ width: '48.7%' }} id={`AnswerType${item.id}`}>
         <select id="testID" defaultValue={item.questiontype2} onChange={(e) => { updateQuestionAnswerType(item.id, e.target.value) }} className="h-10 px-1 rounded-md border border-gray-200 outline-none " style={{ "width": "100%" }}>
            <option value="1-5">Rating from 1 to 5</option>
            <option value="1-10">Rating from 1 to 10</option>
         </select>
      </div></>)
   }

   function AnswerTypeJSX({ item }) {
      function Allanswer({ item }) {
         var all = []
         LimitedAnswerdata.filter(e => { return e.questionid == item.id }).map((itemQuestions, index) => {
            all.push(<>
               <div style={{ display: "flex", width: "49%", alignItems: "center", fontSize: 19, justifyContent: "space-between" }} className="mt-3">
                  <span style={{ fontWeight: 700 }}>Answer {index + 1}</span>
                  <input  onKeyUp={(e) => { LimitedAnswerdata.filter(e2 => e2.id == itemQuestions.id)[0].answer=e.target.value;startTypingLimitedAnswers(e, itemQuestions) }} type="text" defaultValue={itemQuestions.answer} className="border py-1 px-2" placeholder="Answer" style={{ width: "69%" }} />
                  <button onClick={(e)=>{DeleteLimitedAnswer(e,itemQuestions)}} orderid={index} className="flex w-[52px] h-10 border border-gray-400 bg-gray-200 rounded-md justify-center items-center hover:bg-white">
                     <TrashIcon className="w-5 h-5" />
                  </button>
               </div>
            </>);
         })

         return all;

      }
      return (<>
         <div className="w-full ml-0" id={`AnswerType${item.id}`}>
            <div>
               <Allanswer item={item} />

               <button onClick={(e) => AddLimitedAnswer(e,item)} className="h-10 mt-3 rounded-md border-solid border bg-gray-100 flex py-2 px-4 items-center text-gray-700 hover:bg-white">
                  <PlusSmIcon className="w-5 h-5 " />
                  <p className="ml-2"> Answer</p>
               </button>
            </div>
         </div>

      </>)
   }
   function QustionsWithType(questionid, itemQuestions, type) {

      var answerplace = document.getElementById(`AnswerType${questionid}`)
      try {
         ReactDOM.unmountComponentAtNode(answerplace)
      } catch (error) {
      }

      sectionsQuestionsdata.filter((e) => { return e.id == questionid })[0].questiontype = type;

      updateQuestionType(questionid, type);
      if (type === "rating") {
         answerplace.style = `width: 47.2%;`;
         answerplace.innerHTML = `
         <select class="h-10 px-1 rounded-md border border-gray-200 outline-none " style="width: 100%">
         <option value="1-5">Rating from 1 to 5</option>
         <option value="1-10">Rating from 1 to 10</option>
      </select>
         `
      } else if (type === "yes/no") {
         try {
             answerplace.innerHTML = ""
         } catch (error) {}
        
      } else if (type === "limited") {  
         try {
            answerplace.className=""
            answerplace.style = `width: 100%;`;
        } catch (error) {}
        
         sectionsQuestionsdata.filter((e) => { return e.id == questionid })[0].questiontype2 = ""
         updateQuestionAnswerType(questionid, "")
         ReactDOM.render(
            <AnswerTypeJSX item={itemQuestions} />,
            answerplace
         );
      } else if (type === "open") {
         try {
            answerplace.innerHTML = ""
        } catch (error) {}
      }
   }

   async function deleteSurvey() {
      document.getElementById("surveyDelete").disabled = true;
      document.getElementById("surveyDelete").classList.remove("hover:bg-white");
      document.getElementById("surveyDelete").classList.remove("cursor-pointer");
      var Delete = new Promise(async (resolve, reject) => {
         const textDelete = `DeleteSurvey?idTXT=${encodeURIComponent(params.id)}`;
         await fetch(`https://cors-anyhere.herokuapp.com/https://wavedata.i.tgcloud.io:14240/restpp/query/WaveData/${textDelete}`, {
            "headers": {
               "accept-language": "en-US,en;q=0.9",
               "Authorization": "Bearer h6t28nnpr3e58pdm1c1miiei4kdcejuv",
            },
            "body": null,
            "method": "GET"
         }).then(e => {
            resolve(e.json)
         })

      });
      await Delete
      navigate(`/trials/${location.state.trialID}`, { replace: true })
      document.getElementById("surveyDelete").disabled = false;
      document.getElementById("surveyDelete").classList.add("hover:bg-white");
      document.getElementById("surveyDelete").classList.add("cursor-pointer");
   }
   async function removeElementFromArray(all, specificid, seting) {
      seting([])
      var storing = [];
      for (let index = 0; index < all.length; index++) {
         const element = all[index];
         if (index == specificid) {
            continue
         }
         storing.push(element)
      }

      seting(storing)

      console.log("done")
   }
   async function removeElementFromArrayBYID(all, specificid, seting) {
      seting([])
      var storing = [];
      for (let index = 0; index < all.length; index++) {
         const element = all[index];
         if (element.id == specificid) {
            continue
         }
         storing.push(element)
      }

      seting(storing)

      console.log("done")
   }

   async function deleteSection(e) {
      var sectionDeleteBTN = e.currentTarget;
      let sectionid = sectionDeleteBTN.getAttribute("sectionid")
      let sectionindexid = sectionDeleteBTN.getAttribute("sectionindexid")
      sectionDeleteBTN.disabled = true;
      sectionDeleteBTN.classList.remove("hover:bg-white");
      sectionDeleteBTN.classList.remove("cursor-pointer");
      var Delete = new Promise(async (resolve, reject) => {
         const textDelete = `DeleteSection?idTXT=${decodeURIComponent(sectionid)}`;
         await fetch(`https://cors-anyhere.herokuapp.com/https://wavedata.i.tgcloud.io:14240/restpp/query/WaveData/${textDelete}`, {
            "headers": {
               "accept-language": "en-US,en;q=0.9",
               "Authorization": "Bearer h6t28nnpr3e58pdm1c1miiei4kdcejuv",
            },
            "body": null,
            "method": "GET"
         }).then(e => {
            resolve(e.json)
         })

      });
      await Delete
      await removeElementFromArray(sectionsdata, sectionindexid, setsectionsdata)
      sectionDeleteBTN.disabled = false;
      sectionDeleteBTN.classList.add("hover:bg-white");
      sectionDeleteBTN.classList.add("cursor-pointer");
   }
   async function deleteQuestion(e) {
      var DeleteQuestionBTN = e.currentTarget;
      DeleteQuestionBTN.disabled = true; DeleteQuestionBTN.classList.remove("hover:bg-white"); DeleteQuestionBTN.classList.remove("cursor-pointer");
      let questionid = DeleteQuestionBTN.getAttribute("questionid")
      var Delete = new Promise(async (resolve, reject) => {
         const textDelete = `DeleteQuestion?idTXT=${encodeURIComponent(questionid)}`;
         await fetch(`https://cors-anyhere.herokuapp.com/https://wavedata.i.tgcloud.io:14240/restpp/query/WaveData/${textDelete}`, {
            "headers": {
               "accept-language": "en-US,en;q=0.9",
               "Authorization": "Bearer h6t28nnpr3e58pdm1c1miiei4kdcejuv",
            },
            "body": null,
            "method": "GET"
         }).then(e => {
            resolve(e.json)
         })

      });
      await Delete
      removeElementFromArrayBYID(sectionsQuestionsdata, questionid, setsectionsQuestionsdata)
   }
     async function DeleteLimitedAnswer(e,item) {
      var DeleteBTN = e.currentTarget;
      DeleteBTN.disabled = true; DeleteBTN.classList.remove("hover:bg-white"); DeleteBTN.classList.remove("cursor-pointer");
      let id = item.id   
      let orderid = DeleteBTN.getAttribute("orderid")  
      var Delete = new Promise(async (resolve, reject) => {
         const textDelete = `DeleteLimitedAnswerByID?idTXT=${encodeURIComponent(id)}`;
         await fetch(`https://cors-anyhere.herokuapp.com/https://wavedata.i.tgcloud.io:14240/restpp/query/WaveData/${textDelete}`, {
            "headers": {
               "accept-language": "en-US,en;q=0.9",
               "Authorization": "Bearer h6t28nnpr3e58pdm1c1miiei4kdcejuv",
            },
            "body": null,
            "method": "GET"
         }).then(e => {
            resolve(e.json)
         })

      });
      await Delete
      removeElementFromArrayBYID(LimitedAnswerdata, id, setLimitedAnswerdata)
   } 

async function duplicateQuestion(e,item){
   var DuplicateBTN = e.currentTarget;
   DuplicateBTN.disabled = true; DuplicateBTN.classList.remove("hover:bg-white"); DuplicateBTN.classList.remove("cursor-pointer");
   let id = item.id   
   var Duplicate = new Promise(async (resolve, reject) => {
      const textDelete = `DeleteLimitedAnswerByID?idTXT=${encodeURIComponent(id)}`;
      await fetch(`https://cors-anyhere.herokuapp.com/https://wavedata.i.tgcloud.io:14240/restpp/query/WaveData/${textDelete}`, {
         "headers": {
            "accept-language": "en-US,en;q=0.9",
            "Authorization": "Bearer h6t28nnpr3e58pdm1c1miiei4kdcejuv",
         },
         "body": null,
         "method": "GET"
      }).then(e => {
         resolve(e.json)
      })

   });
   await Duplicate
}

   useEffect(() => {
      LoadDataTrial();
      LoadSurveyData()
      LoadDataSections();
      LoadDataQuestions()
      LoadDataLimitedAnswers()
   }, [])
   //setup before functions
   var typingTimer;                //timer identifier
   var doneTypingInterval = 1000;  //time in ms, 1 seconds for example

   function startTyping(e) {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(() => doneTypingQuestion(e), doneTypingInterval);
   }


   //user is "finished typing," do something
   function doneTypingQuestion(e) {
      var inputbox = e.target;
      let questionid = inputbox.getAttribute("questionid")
      let questionTXT = inputbox.value;
      const textUpdate = `UpdateQuestion?idTXT=${encodeURIComponent(questionid)}&typeTXT=""&questionTXT=${encodeURIComponent(questionTXT)}&way=question`
      fetch(`https://cors-anyhere.herokuapp.com/https://wavedata.i.tgcloud.io:14240/restpp/query/WaveData/${textUpdate}`, {
         "headers": {
            "accept-language": "en-US,en;q=0.9",
            "Authorization": "Bearer h6t28nnpr3e58pdm1c1miiei4kdcejuv",
         },
         "body": null,
         "method": "GET"
      }).then(e => {
         return e.json;
      })
      console.log("changed", e)
   }
   function startTypingLimitedAnswers(e, item) {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(() => doneTypingLimited(e, item), doneTypingInterval);
   }
   function doneTypingLimited(e, item) {
      var inputbox = e.target;
      let answerid = item.id;
      let answerTXT = inputbox.value;
      const textUpdate = `UpdateLimitedQuestion?idTXT=${encodeURIComponent(answerid)}&answerTXT=${encodeURIComponent(answerTXT)}`
      fetch(`https://cors-anyhere.herokuapp.com/https://wavedata.i.tgcloud.io:14240/restpp/query/WaveData/${textUpdate}`, {
         "headers": {
            "accept-language": "en-US,en;q=0.9",
            "Authorization": "Bearer h6t28nnpr3e58pdm1c1miiei4kdcejuv",
         },
         "body": null,
         "method": "GET"
      }).then(e => {
         return e.json;
      })

      console.log("changed", e)
   }

   return (
      <>
         <div className="bg-white border border-gray-400 rounded-lg py-4 px-6 flex mb-2 items-center">
            <div onClick={() => navigate(-2)} className="flex items-center hover:cursor-pointer hover:underline decoration-gray-400">
               <p className="text-gray-400">Trials</p>
               <ChevronRightIcon className="mx-1 w-5 h-5 text-gray-400" />
            </div>
            <div onClick={() => navigate(-1)} className="flex items-center hover:cursor-pointer hover:underline decoration-gray-400">
               <p className="text-gray-400">{TRIAL_DATA?.title}</p>
               <ChevronRightIcon className="mx-1 w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center">
               <p className="text-gray-400">{SURVEY_DATA?.name}</p>
            </div>
         </div>
         <div className={`bg-white border border-gray-400 rounded-lg overflow-hidden mb-2`}>
            <div className="flex p-6">
               <img src={SURVEY_DATA?.image} alt="Survey" className="w-[128px] h-[128px] object-cover" />
               <div className="mx-8 flex-1">
                  <p className="text-3xl font-semibold">{SURVEY_DATA?.name}</p>
                  <p className="mt-6">{SURVEY_DATA?.description}</p>
               </div>
               <div className="flex">
                  <button onClick={() => { setModalShow(true) }} className="flex w-[52px] h-10 border border-gray-400 bg-gray-200 rounded-md justify-center items-center hover:bg-white">
                     <PencilIcon className="w-5 h-5 text-gray-400" />
                  </button>
                  <button id="surveyDelete" onClick={deleteSurvey} className="flex w-[52px] h-10 border border-gray-400 bg-gray-200 rounded-md justify-center items-center mx-1 hover:bg-white">
                     <TrashIcon className="w-5 h-5 text-gray-400" />
                  </button>
                  <button onClick={addSection} className="h-10 rounded-md shadow-md bg-black text-white flex py-2 px-4 items-center hover:bg-gray-700 hover:text-gray-500">
                     <PlusSmIcon className="w-5 h-5 " />
                     <p className=" ml-2">Section</p>
                  </button>
               </div>
            </div>
         </div>
         <div className="bg-white border border-gray-400 rounded-lg flex mt-4 px-4">
            {TABS.map(({ id, title }, index) => {
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
         {tabIndex === 0 && (
            <>
               {sectionsdata.map((item, index) => {
                  const sectindex = item.id;
                  return (
                     <div for={sectindex} className="bg-white border border-gray-400 rounded-lg flex flex-col mt-4 overflow-hidden">
                        <div className="bg-gray-100 py-4 px-6 border-b border-b-gray-400">
                           <div className="flex mb-4 items-center">
                              <p className="text-2xl font-semibold flex-1">{`Section ${index + 1}`}</p>
                              <button id={`Trash-sectionid-${sectindex}`} sectionid={sectindex} sectionindexid={index} onClick={(e) => { deleteSection(e) }} className="flex w-[52px] h-10 border border-gray-400 bg-gray-200 rounded-md justify-center items-center hover:bg-white">
                                 <TrashIcon className="w-5 h-5 text-gray-400" />
                              </button>
                              <button className="flex w-[52px] h-10 border border-gray-400 bg-gray-200 rounded-md justify-center items-center ml-1">
                                 <DocumentDuplicateIcon className="w-5 h-5 text-gray-400" />
                              </button>
                           </div>
                           <label for={`category-select${sectindex}`} className="font-semibold mr-4">Category:</label>
                           <Select
                              className=" rounded-md  outline-none w-1/3"
                              name={`category${sectindex}`}
                              id={`category-select${sectindex}`}
                              placeholder="Select Category"
                              onChange={(e) => { sectionsdata[index].category = e.value; updateSections() }}
                              options={dataCategory}
                              defaultValue={dataCategory[Number(item.category)]}
                              getOptionLabel={e => (
                                 <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {e.icon}
                                    <span style={{ marginLeft: 5 }}>{e.text}</span>
                                 </div>
                              )}
                           />

                        </div>
                        {sectionsQuestionsdata.filter(e => { return e.sectionid == sectindex }).map((itemQuestions, index) => {
                           return (
                              <div className="border-b border-b-gray-400 p-4">
                                 <div className="flex mb-2 items-center">
                                    <p className="text-2xl font-semibold flex-1">{`Question ${index + 1}`}</p>
                                    <button questionid={itemQuestions.id} questionidOrder={index} onClick={(e) => { deleteQuestion(e) }} className="flex w-[52px] h-10 border border-gray-400 bg-gray-200 rounded-md justify-center items-center hover:bg-white">
                                       <TrashIcon className="w-5 h-5 text-gray-400" />
                                    </button>
                                    <button onClick={(e)=>{duplicateQuestion(e,itemQuestions)}} className="flex w-[52px] h-10 border border-gray-400 bg-gray-200 rounded-md justify-center items-center ml-1">
                                       <DocumentDuplicateIcon className="w-5 h-5 text-gray-400" />
                                    </button>
                                 </div>
                                 <input type="text" onKeyDown={(e) => {sectionsQuestionsdata.filter(e2=>{return e2.id==itemQuestions.id})[0].question=e.target.value; startTyping(e) }} defaultValue={itemQuestions.question} questionid={itemQuestions.id} className="border py-1 px-2 w-full" placeholder="What is your question?" />

                                 <div className="flex flex-wrap mt-2">
                                    <select name={`questiontype${index}`} defaultValue={itemQuestions.questiontype} onChange={(e) => { QustionsWithType(itemQuestions.id, itemQuestions, e.target.value) }} sectionid={sectindex} questionid={itemQuestions.id} id={`questiontype${index}`} className="h-10 px-1 rounded-md border border-gray-200 outline-none " style={{ width: "49%", "fontFamily": "FontAwesome" }}>
                                       <option value="rating" className="fa-solid"> &#xf118; Rating question</option>
                                       <option value="yes/no">&#xf058; Yes/no question</option>
                                       <option value="limited">&#xf0c9; Limited question</option>
                                       <option value="open">&#xf059; Open question</option>
                                    </select>

                                    {(itemQuestions.questiontype === "rating") && (
                                       <RatingAnswer item={itemQuestions} />
                                    )}
                                    {(itemQuestions.questiontype === "limited") && (
                                       <AnswerTypeJSX item={itemQuestions} />
                                    )}

                                 </div>
                              </div>
                           );
                        })}
                        <div className="p-4">
                           <button sectionsid={sectindex} onClick={(e) => addQuestion(e)} className="h-10 rounded-md shadow-md bg-black text-white flex py-2 px-4 items-center hover:bg-gray-700 hover:text-gray-500">
                              <PlusSmIcon className="w-5 h-5" />
                              <p className=" ml-2">Question</p>
                           </button>
                        </div>
                     </div>
                  );
               })}
            </>
         )}
         {tabIndex === 1 && (
            <>
               {responses.map((item, index) => {
                  return (
                     <div className="bg-white border border-gray-400 rounded-lg flex flex-col mt-4 overflow-hidden">
                        <div className="bg-gray-100 py-4 px-6 border-b border-b-gray-400">
                           <div className="flex mb-4 items-center">
                              <p className="text-2xl font-semibold flex-1">{`Section ${index + 1}: ${item.category}`}</p>
                           </div>
                        </div>
                        {item.questions.map((item, index) => {
                           return (
                              <div className="border-b border-b-gray-400 p-4">
                                 <p className="text-xl font-semibold">{`Question ${index + 1}: ${item.question}`}</p>
                                 {item.type === 'yes/no' && (
                                    <PieChart width={400} height={400}>
                                       <Pie
                                          dataKey="value"
                                          isAnimationActive={false}
                                          data={item.data}
                                          cx="50%"
                                          cy="50%"
                                          outerRadius={80}
                                          fill="#8884d8"
                                          label
                                       />
                                       <Tooltip />
                                    </PieChart>
                                 )}
                              </div>
                           );
                        })}
                     </div>
                  );
               })}
            </>
         )}
         <UpdateSurveyModal
            show={UpdatemodalShow}
            onHide={() => {
               setModalShow(false);
               LoadSurveyData()
            }}
            id={(params.id)}
         />
      </>
   );
}

export default SurveyDetails;
