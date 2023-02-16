import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Projects() {
  const pdfHandler = () => {
    window.html2canvas = html2canvas;
    var doc = new jsPDF({
      orientation: "a3",
      unit: "px",
      // format: [4, 2],
    });

    var content = document.getElementById("Hello");

    doc.html(content, {
      callback: function (doc) {
        doc.save();
      },
    });
  };

  return (
    <div className="">
      <button onClick={pdfHandler}>pdf Save</button>
      <div id="Hello">
        <div className="">
          <h4 className="">
            <div className="">
              <h4 className="">Computer Skill</h4>
              <div className="">
                <div>
                  <div className="">
                    MS Word : <span className="">Exellent</span>
                  </div>
                </div>
                <div className="">
                  <div className="text-sm">
                    MS Excell : <span>Exellent</span>
                  </div>
                </div>
                <div className="">
                  <div className="">
                    MS PowerPoint : <span>Exellent</span>
                  </div>
                </div>
              </div>
            </div>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Projects;
