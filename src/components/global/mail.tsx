import { EmailTemplateProps } from "@/schema/contac-schema";
import * as React from "react";



export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = (data) => (
  <div>
    <h2>
      Client name: {data.firstName} {data.lastname}
    </h2>
    <h3>Email address: {data.email}</h3>
    <h3>Phone number: {data.phone}</h3>
    <h3>Service: {data.service}</h3>
    <div>{data.message}</div>
  </div>
);
