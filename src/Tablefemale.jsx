import React from "react";

function Tablefemale(){
    var people = [
        {
        "firstname": "praveen",
        "lastname": "gubbala",
        "age": 36,
        "gender": "male",
        "city": "hyd",
        "salary": 10000
        },
        {
        "firstname": "srikanth",
        "lastname": "gubbala",
        "age": 32,
        "gender": "male",
        "city": "bengaluru",
        "salary": 20000
        },
        {
        "firstname": "pradeep",
        "lastname": "reddy",
        "age": 21,
        "gender": "male",
        "city": "hyd",
        "salary": 25000
        },
        {
        "firstname": "mounika",
        "lastname": "mudiraj",
        "age": 20,
        "gender": "female",
        "city": "nalgonda",
        "salary": 30000
        },
        {
        "firstname": "nikhil",
        "lastname": "m",
        "age": 22,
        "gender": "male",
        "city": "guntur",
        "salary": 2000
        },
        {
        "firstname": "riya",
        "lastname": "bhadouria",
        "age": 14,
        "gender": "female",
        "city": "indore",
        "salary": 40000
        },
        ];
        return(
        
        <table className="table">
            <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>City</th>
                    <th>Salary</th>
            </tr>
                    <tbody>
                {
                    people.map((i)=>{
                        if(i.gender==='female')
                        return(
                            
                            <>
                            <tr>
                                <td>{i.firstname}</td>
                                <td>{i.lastname}</td>
                                <td>{i.age}</td>
                                <td>{i.gender}</td>
                                <td>{i.city}</td>
                                <td>{i.salary}</td>
                            </tr>
                            </>
                        )
                    })
                }
                    </tbody>
                    </table>

)
}
export default Tablefemale;