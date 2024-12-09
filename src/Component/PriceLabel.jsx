export default function PriceLabel({text, price})
{
    return (<>
     <div className="flex items-center justify-between py-5">
                                        <p className="text-base font-medium text-gray-600">{text}</p>
                                        <p className="text-base font-medium text-right text-gray-600">₹{price}</p>
    </div>
    </>);
}