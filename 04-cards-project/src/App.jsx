import React from 'react'
import Card from './components/Card'
import User from './components/user'

const App = () => {

  const jobs = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-aa4QAmLM93FQ0PPNQ0kNuxwSr3C84c8GTgI6LotBg&s=10",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6U-KSnY_r4hsTsVxDuaaM1suHkBJRHcyaf65xF5PJQ&s=10",
    company: "Amazon",
    datePosted: "2 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0lP2_kgCkHUWXDSmcPvGTYhE2XLv3amPV-aPYMxhrQ&s=10",
    company: "Meta",
    datePosted: "10 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM2tL_LqE0tXh0tBYRxY0_FnYVAJXw_0ArGg3BGHAByw&s=10",
    company: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEej-B-dTbyp-oJ3GLCfQ3EYHxn9TpTooXcss2g9mJMQ&s=10",
    company: "Microsoft",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoMznz1zJ3fNTFggg26u-HrG1L7P1uQHJ4uqv7cishUA&s=10",
    company: "Netflix",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaFuWlWnfaEXDF28kPEqdgbrhs5h2v3P7mMjHU0lyoA&s=10",
    company: "NVIDIA",
    datePosted: "6 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY4GXr_6LOXhrqu_ydfQcYa4Qnpa5OcvO5EcJK9chmvg&s=10",
    company: "Tesla",
    datePosted: "3 weeks ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_MlO3koV2GayVLm8an7l8W_Y3syrPmJHZQ2tX_Ev8w&s=10",
    company: "Uber",
    datePosted: "4 days ago",
    post: "Java Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$40/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HpwNmXWFlzj9jc93MKv78jSOvRtxfe8vKTRdsumXxQ&s=10",
    company: "Adobe",
    datePosted: "1 week ago",
    post: "UI/UX Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Noida, India"
  }
];
console.log(jobs);


return (
  <div className="parent">
    {jobs.map(function(elem,idx){

      return <div key={idx}>
       <Card company={elem.company} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay}tag2={elem.tag2}/>
       </div>
    })}
  </div>
)
  }


export default App