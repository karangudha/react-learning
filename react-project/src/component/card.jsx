import React from 'react'
import { Bookmark } from 'lucide-react';

const card = (props) => {
  return (
    <div className="card">
        <div>
            <div className='top'>
                <img src ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///83R0//swD/rwD/sQAsPkf/rgCSmZ0lOUI0RU0jN0EpPEUvQUkyQ0suQEggNkHk5uf4+fnMz9Hr7O2pr7L//vj5+vp+houYn6IbMjzf4eI/Tlb/9ub/6MD/2ZW5vsBmcXbX2dutsrX/8tf/4Kb/x1v/vjn/7tCepajFycqMlJhPXGNxe4BYZGqEjJFGVVz/5rj/vz//0Hb/143/9eH/y2f/w07/uyr/03//5Lv/4qz/uhv/zG3/+e//15L/wTw4KDGYAAALPElEQVR4nO2d+VfiMBDHpRe9uSnlKuVWQBAVWJTd//+/2paCVmib6Zn4Xj8/7Fufz5IvSSYzk0n68JCTk5OTk5OTk5OTk5OTk5OTk5OTQxSVWtmsGsN6fd5qzedDo9ou13C3KTHaj/Plal1gRZ6XLFjW+ocXRbmzGDwZZhN382JizgeqxEuyIgiFWwRBUXmJXRSrv1VlzdCkkqTcKbsVyoriYPj7hmzFWMq8jFJ3ReGlgVHB3eYw1IoduLyryMJTGXe7oZQ1nb2fdkgEVV+2cbcdQu2pxIaX56CKGvkTsi5E1mfDCnXcCoIpL/gI49ONwK9Ino51Hbk4oFFKBm4dflSWYnx9NmIRtxRvautYM9ANr+EW44UpJzBCSZZYlWOamBuJz7gF3WJGWeMDJc5xS/pJOdketBEfcYtyU+skOAev6CS5N4PErKgLeYBb1jctPgWB1jglZuU39VQEFoQOISFjc524lbkgtXBrc2hJKQm0IkYiOrGchpW5IBERSi3V9BQKAm51D+mZGQe+iluftRSGzDiFQ8XvgbfhIaGgyCzLqkoYy0vAgqHB7Iwg8/J6pT0Vi8+DtcrDfTwR9zCtFSA9IvDC0ih/5e7bw4EI1cjiDveHEH9NEuq3TrQ5EGGDVRngkOVigO4LxdszMYABpYx3IpbRdkZemz5/C4u4Sj5/nhFDpMOmLnz7ABY188MsBd2BHKTKOmCQPZYACvGamibKnxEKgXE6ZKmRl1mp8aKKmoZ8cAzbBigU1hmJ8aSFaKGyQjxgBTA2YiZSfEBNQx3lkNQBoaWOcbloIhwaYYF6ggnwanWMW1E1RBei49cKIPQSMS6IFUSYUEJ/+wCFWENELXAaCUFr4QWIQpw5xUrgji8kegWs+VgVPlTmC14XeckzrIU0jXiFD3ZJXtWYPw86ui6KEusq71LWgGIugEIJr2PqomY+GkXNLtHjrU6VWQlSGwNRSERG0U2tbVqduoQVOEEUEraRGBKAQpaQ1H5EcoW5QvKBKMSdT4xHrjBXSB7NSq3cNk2z6mACYnzyFTZtz7Ve1AaLQkm3KZXEL9ACyVZYKRvF5UK2ow/W88gFBHIVmvXlWuLZ2OVghCp81AReSqbWjUSFVU0Sk6vkI05hZbgqJVqdQZjCZqsTYgv79yls1iUp8QowkhRW12nUKJKjsKYBt+Z/q8JqJ6X6NlIUtvS0SjDJUNjU0qkSJkZhZZVaiSkZCivrFAswSVBYW6danohfYWWVYpEwEQqXIeegICiyqp6vHeAhoxu7wmKIAlOZFSWhsx4stWJrPhwaxhNAIm6FyJKaqzqVF9fa/NGsuTeGDcAig1lhpQNa6NWSohm1+03vX6DwGVLVxEqaT7UB+QqrkP2/Qsu3YoF8hQv0vR76U0DxHvEKDaSZYTuB9T7EK0SaGWkQXFKDrsDFqxDZAxKqNpR0hajSRHWAegKkNhGjQhPRhYDzLnPAYoNRYRHRPEDJHeFeG+LoKKSsTSNaoYlY7QG1l5ADKRgVzoOtBOis+QLg1eJTiKhCh1yJAPLbsSlEnbVgAQXoZcgWBzaFiCJ00Jkz1HqDVyHCHWEhFYWIqYxZISIyBFX2apAknfqUuhZvEIamBKifrUBMaYHFdRcPYr3nAVevtCFn17Ad7UIZehmgEDQNsZ2TLaMGGEAh5FwXvsNrbYRHqaAVtmG3MQgFPEe72ogRBvBKIXk6GwnPwSdUzR2PdNpq0C1HTEdKUO4Iunb5Gbolh+luDJRC5PFRSOGlA+SEWAogXUodseSjU61f4LkbA2VpUK7IU4g9OTzDtIx0KQO9mjrInQE9Ki3Ql5oEBfmgC0O+YXE43010eO5/t2MxVA8WMF0wCIgLeO9zdeVB6OIbLN73EhDbiR6jq/YkRyjdwLHqo/LBZ6SO8eMgabOqRbvsG3HBRipANsbs+5OUZ6Nds2kb8yUrRq0tQu+BJA4sfLX3uPmSJAgyX+LZOJVFYvZHSRO62RoMn3mIATE1SZL9VAy5ascn86lYS/XCRC8yvx4asnGULFlfVZP5MM38YmHYjYJJkvnlA9BUUmJk7ruVE6vuhn1Vipz5i6GAV3uiEBRQ9lspZJ9WrIWN87wFslXId6UucFyJNU/AdVNU076YH2W1eEQBWVqsYrtucuHcNahQBdv7LtpxX2vBLi7eZrCb65MuyAIjnu/2PfaC5rSg43zXxVMcz0Z0jT3/YlVFwHtLa/RDXQr745KrpY89ZbEYUTdRJUo39+/62FNUFW4WPEeZi4Ku3bbcs1KOx3pD65U6+k2Vdz3T8TAew3uJPK5akxvMRTgXVZWKnkPv7nUuGPJPPjRbOnztD3iT4/MPiYKO+0ZBN+UBLBcqsKWgN1W6zZbtsBKFuVRR9w0IrLguBtv+b4lK8FkNLJTnK93X6AiypK+f0e/+fb6s/OqapDdafdOuD0Q7u60I9oU7whlFZXlR7yzrbdDKVjwffJdW+JdBX9pGa7nq2PqslnY6i4E2N6oh2jsssJKKiiUa3dFsNDrFamhcKpVapRIt79A2/Udoo7t5fd9T3AXq33b8FrWJJDI7TBmaZhjqCsNYP0/HuNuVEI3+3lJH3cNwW9xtS4LGX295Z4lU6BnZ63fTaGUMNh+0j7yzxLBzccbR1GsjlZZG5ODbf2foUcjnzTjrjyiC5u+RY5izUTlz/b/L4IRV+LDl7Pm736TR2ij0Pj6mL7vP1/Gf3mw26lq8jXrjCXXVGHqUPjz85c426qWXQnOj0PA0Jd0dc7E0EczG8TwGGJoYjZ6cHPPD7KMYjZkzBKyxSrLGf04jd5H++O1inxluuiHKrrqZOAojrviNCX31GfZjQjU6E5GObBJfuYuxYqz1kRwfYHQ8Xg3PBxNpOfym9+XkMjT3PkumgfFoHKectRY6bWnQjimN8by3l29nyZqQY9wdOTpQjpF3rKftmlg/vMd65oFzuQ40hbMju/3p1ZG5rIBjOt40dOhRbpfQnpFYQs7T8cXlp9HO+nAxNHHN4GlC/9TIvWQ9WrvjyY/YiZ46psZZKz7jf8CR+enZW27vrp9ZT476O+bmOz44v+mdBymXhEvS3XE30Yv1mdPX9Odko7fdMzeRE01dJW1pKqrLds+RuotAreHKfG7Sy3c1en/3HM3cfbXvV0WNvf07Oqko7/TpFYTaeaBDL/lZ2e297hjO4xNpl5s8O3fhR3Lu1mzqmUiwRFIv2010t+KG02z8fs6oeX0W5049HOz20P2kPtimz/gkSxh7ruz+bmJan1Nv/L6n6LuR+aVv5/6Ahu2yxfJnvJqw9flwR6U1Mf8d+r3uKeTAaZy6m/7hH8X5ijuPlelPo9mzHZpEDOkPRpPgnNBZJzV93/7dzN66wWaocXobzcav28k+WJujb39rUezIiU5gLbxj9nK7cnjIvGSK7OzK+/bQH//50/viz2bcP3xOdi97q4VOYgnxPNuTuovfTnYu6SMdUz57Ce7Hn1K/UmQ/cH4DfApNeZiTPm39IjH7dqcRMVaTxJp/R682WHaGSzMZOHung5LQyenjdt62pEczia31PnQP/hsJScmj6a3fOJxwcYMmCOMpwgLGlBeUHppts3H9Z1sqnY5kuI8DEVkTOzLdefmP8eTRzGePpOzeaTxFLdgh1FnyJgQmaLvHCRVfpL107snqPTen3jZWV1rhJjXpj0iVd6F73KJdTM++45hdf0a4uivdzes/igG5m04pBU3tP4+puV9p8dbrv+8+qC8P9E7YOQahqenksJnhLfyJw6n7ZoV928nUksq5sGOOyeF13ENEV7+IhoUVC45ms9HorWv9gLtBOTk5OTk5OTk5OTk5OTk5v4z/RpnnI7Y36KUAAAAASUVORK5CYII=" alt="" />
                <button>save <Bookmark size={12}/> </button>
            </div>
            <div className='center'>
                <h3>{props.user} <span>5 days ago</span></h3>
                <h2>Senior UI/UX Designer</h2>
                <div className='tag'>
                    <h4>Part-Time</h4>
                    <h4>Senior Level</h4>
                </div>
            </div>
        </div>
        <div className='bottom'>
            <div>
                <h3>$120/hr</h3>
                <p>Mumbai, India</p>
            </div>
            <button>Apply Now</button>
        </div>
    </div>
  )
}

export default card