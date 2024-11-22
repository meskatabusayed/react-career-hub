import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {

    const [jobsData, setJobsData] = useState([]);
    useEffect(() => {
        fetch("jobs.json")
        .then(res => res.json())
        .then(data => setJobsData(data));
    } ,[])


    return (
        <div>
            <h2>Featured Jobs : {jobsData.length} </h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div>
                {
                    jobsData?.map((jobData) => (<Job key={jobData.id} jobData={jobData}></Job>))
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;