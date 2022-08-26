import hotels from "./api/hotels/index.json"

function Sidebar () {
    return(
        <div>
            {hotels.list.map(hotel => {
                return <div>
                    {hotel.name}
                    {hotel.price}
                </div>
            })}
        </div>
    )
}

export default Sidebar;