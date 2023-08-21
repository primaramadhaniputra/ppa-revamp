import { Checkbox, Grid, Input, Text } from '@hudoro/neron'
import React, { useMemo, useState } from 'react'
import { JabatanContainer } from './styles'


interface IProps {
  data: { label: string; id: string; }[]
  dataChecked: { label: string; id: string; }[]
  setDataChecked: React.Dispatch<React.SetStateAction<{
    label: string;
    id: string;
  }[]>>
  isCheckAll: boolean
  setIsCheckAll: React.Dispatch<React.SetStateAction<boolean>>
}

const FilterJabatan = ({ data: dataJabatan, dataChecked, setDataChecked, isCheckAll, setIsCheckAll }: IProps) => {
  const [search, setSearch] = useState('')

  const fitleredData = useMemo(() => dataJabatan.filter(item => item.label.includes(search)), [search])

  const handleCheckAll = () => {
    // first filtered data before from filtered data
    if (!isCheckAll) {
      const allData = [...dataChecked, ...fitleredData]
      const key = 'id';

      const unique = [...new Map(allData.map(item =>
        [item[key], item])).values()];

      setDataChecked(unique)
    } else {
      setDataChecked([])
    }
    setIsCheckAll(!isCheckAll)

  }

  const handleDataChecked = (label: string, id: string) => {
    // first check data exist in datachecked
    const isExistData = Boolean(dataChecked.find(item => item.id === id))

    if (isExistData) {
      const filteredData = dataChecked.filter(item => item.id !== id)
      return setDataChecked(() => filteredData)
    }

    const newDataChecked = {
      label, id
    }
    setDataChecked((prevData) => [...prevData, newDataChecked])
  }

  return (
    <JabatanContainer>
      <Grid
        style={{ borderBottom: "1px solid #ddd", padding: "10px 10px 8px 8px" }}
        container
        justifyContent="space-between"
      >
        <Text variant="p">Jabatan</Text>
        <Checkbox checked={isCheckAll} onChange={handleCheckAll} />
      </Grid>
      <Grid
        flexDirection="column"
        gap={12}
        container
        style={{ padding: "10px 10px 8px 8px" }}
      >
        <Input
          placeholder="Cari Jabatan Anda Disini"
          iconLeft="IcSearch"
          style={{ borderRadius: "4px" }}
          onChange={(e) => setSearch(e.target.value)}
        />

        {
          fitleredData.map((item, idx) => (
            <Grid key={idx} container justifyContent="space-between">
              <label htmlFor={item.label} style={{ fontSize: "12px" }}>{item.label}</label>
              <Checkbox id={item.label} onChange={() => handleDataChecked(item.label, item.id)} checked={Boolean(dataChecked.find(data => data.id == item.id))} value={item.id} />
            </Grid>
          ))
        }
      </Grid>
    </JabatanContainer>
  )
}

export default FilterJabatan