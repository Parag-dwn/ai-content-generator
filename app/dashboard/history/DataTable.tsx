"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import React from "react";

type Data = {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string | null;
  createAt: string;
};

type DataTableProps = {
  data: Data[];
};

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>AI Response</th>
          <th>Template Slug</th>
          <th>Created At</th>
          <th> Copy</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.aiResponse}</td>
            <td>{row.templateSlug}</td>
            <td>{new Date(row.createAt).toLocaleString()}</td>
            <td><Button
        onClick={()=>navigator.clipboard.writeText(row.aiResponse)}>
          <Copy className='w-4 h-4'/>
          Copy
        </Button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
