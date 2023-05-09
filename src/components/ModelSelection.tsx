'use client'

import useSWR from "swr";
import Select from 'react-select';

const fetchModels = () => fetch('/api/getModels').then((res) => (res.json()));

function ModelSelection() {
    const { data: models, error, isLoading } = useSWR('/api/getModels', fetchModels);
    const { data: model, mutate: setModel } = useSWR('model', {
        fallbackData: "ada"
    });

    return (
        <div className="mt-2">
            <Select 
                className="mt-2 bg-[#434654]"
                options={models?.modelOptions}
                id="long-value-select"
                instanceId="long-value-select"
                defaultValue={model}
                placeholder={model}
                isSearchable
                isLoading={isLoading}
                menuPosition="fixed"
                classNames={{
                    control: (state) => "bg-[#434654] border-[#434654]"
                }}
                onChange={(e) => setModel(e.value)}
            />
        </div>
    )
}

export default ModelSelection