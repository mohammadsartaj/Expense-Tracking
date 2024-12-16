import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Printer } from "lucide-react";
import { SummarySection } from "./SummarySection";

export function ReportsSection({ group }) {
  const handleDownload = (format) => {
    // Here you would typically generate and download the report
    console.log(`Downloading ${format} report for group: ${group.name}`);
  };

  const handlePrint = () => {
    const printContent = document.getElementById("summary-section");
    const windowPrint = window.open(
      "",
      "",
      "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
    );
    windowPrint.document.write(printContent.innerHTML);
    windowPrint.document.close();
    windowPrint.focus();
    windowPrint.print();
    windowPrint.close();
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Download Reports</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Generate and download balance sheet reports for your group.</p>
          <div className="flex space-x-4">
            <Button onClick={() => handleDownload("PDF")}>
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button>
            <Button onClick={() => handleDownload("CSV")} variant="outline">
              <Download className="mr-2 h-4 w-4" /> Download CSV
            </Button>
            <Button onClick={handlePrint} variant="secondary">
              <Printer className="mr-2 h-4 w-4" /> Print Summary
            </Button>
          </div>
        </CardContent>
      </Card>
      <div id="summary-section" className="hidden">
        <SummarySection group={group} />
      </div>
    </div>
  );
}
