

const Job = ({jobData}) => {
    const {logo} = jobData;
    return (
        <div>
            <img src={logo} alt="" />
        </div>
    );
};

export default Job;