import React from 'react'
import CommingSoonComponent from '../../Components/CommingSoon/CommingSoonComponent'
import useDocumentTitle from "../../PageTitle"

const CommingSoon = () => {
  useDocumentTitle("TRoo Spa | Comming Soon ")
  return (
    <div>
      <CommingSoonComponent/>
    </div>
  )
}

export default CommingSoon