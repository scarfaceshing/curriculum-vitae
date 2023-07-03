import React from 'react'
import { IProps } from 'types-module'
import './App.css'
import Information from './Components/Information'
import WorkExperience from './Components/WorkExperience'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

class App extends React.Component {
 constructor(props: IProps) {
  super(props)
 }

 printDocument() {
  const input: any = document.getElementById('divToPrint')
  html2canvas(input).then((canvas) => {
   let imgWidth = 208
   let imgHeight = (canvas.height * imgWidth) / canvas.width
   const imgData = canvas.toDataURL('img/png')
   const pdf = new jsPDF('p', 'mm', 'a4')
   pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
   // pdf.output('dataurlnewwindow');
   pdf.save('download.pdf')
  })
 }

 render() {
  return (
   <>
    <div id="divToPrint">
     <div className="lg:container lg:mx-auto">
      <div className="flex justify-center">
       <div className="grid md:grid-cols-3 930-765-screen:grid-cols-1 sm:grid-cols-1 grid-rows-1 gap-4 content-center">
        <div className="bg-neutral-900 text-gray-50 pt-8">
         <div className="flex lg:justify-center lg:mx-12 px-2 pb-5">
          <Information />
         </div>
        </div>
        <div className="md:col-span-2 930-765-screen:col-span-1 sm:col-span-1 pb-5 mb-5">
         <WorkExperience />
        </div>
       </div>
      </div>
     </div>
    </div>
   </>
  )
 }
}

export default App
