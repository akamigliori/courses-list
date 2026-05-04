type CardProps = {
    title: string
    img: string
    hour: string
}

const Card = ({ title, img, hour }: CardProps) => {
    return (
        <div className="border w-full p-4 rounded-md border-[#00A2F7] flex flex-col">
            <div className="flex justify-center items-center flex-1">
                <img
                    src={img}
                    className="w-32 mx-auto"
                    alt=""
                />
            </div>
            <p
                className="text-[#00A2F7] font-bold text-sm mt-2">
                {title}
            </p>
            <p
                className="text-[#00A2F7] font-bold text-sm mt-2">
                {hour}
            </p>
            <button
                className="bg-[#00A2F7] text-white w-full text-sm py-1 rounded-sm cursor-pointer mt-1">
                Inscreva-se
            </button>
        </div>
    )
}


export default Card;