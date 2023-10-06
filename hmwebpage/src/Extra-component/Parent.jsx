import React from 'react'
import Child from './Child';
 
function Parent(){
    return (
        <div>
            <Child>https://media.istockphoto.com/id/1173733640/photo/green-forest.webp?b=1&s=170667a&w=0&k=20&c=X6WIre2lWdgZeYjYQZdiinaT3yT3PgFr5dEHd9Eq9rE=</Child>
            <Child>https://media.istockphoto.com/id/184342766/photo/morning-in-the-field.webp?b=1&s=170667a&w=0&k=20&c=DOTZnGrWumQBfc2xBlTOL2oku96cgSZ8pBsDP8qM1WA=</Child>
            {/* <Child data={data} />
            <Child data={data} /> */}
        </div>
    );
}
 
export default Parent;