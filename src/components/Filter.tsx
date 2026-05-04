import { Search } from 'lucide-react';

type FilterProps = {
    title: string
    placeholder?: string
}

const Filter = ({ title, placeholder }: FilterProps) => {
    return (
        <div className="flex flex-col items-center mt-10">
            <p className="font-bold text-[#00A2F7] text-xl">
                {title}
            </p>
            <p className="text-[#00A2F7] text-sm">
                Busque o conteúdo que deseja assistir
            </p>

            <div className="flex items-center mt-2">
                <input
                    type="text"
                    placeholder={placeholder}
                    className="bg-white bordper-[#f2f2f2] rounded-md w-[615px] h-[35px] text-sm px-2"
                />
                <div className='h-[35px] w-[35px] flex justify-center items-center rounded-md bg-[#E1F4FF] cursor-pointer'>
                    <Search size={16} className='text-[#00A2F7]' />
                </div>
            </div>
        </div>
    )
}

export default Filter