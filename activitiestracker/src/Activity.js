import React, { Component} from 'react' ;



class Activity extends  Component{

    state = {

        isLoading  :true,
        Activities : []
    }


    async componentDidMount()
    {
        const response = await fetch('api/activities');
        const body = await response.json();
        this.setState({Activities : body , isLoading: false});
    }

    render() { 
        const {Activities , isLoading} = this.state;
        if(isLoading) 
            return (<div>Loading...</div>);
       
        return ( 
            
                <div>
                    
                    <h2>Activitiess</h2>
                    {
                        Activities.map( activity=> 
                            <div id={activity.id}>
                                {activity.name}
                            </div>
                        )

                    }

                </div>
         );
    }

}
export default Activity;