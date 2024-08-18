import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = (data) => (
  <div>
    <h2>
      Client name: {data.firstName} {data.lastName}
    </h2>
    <h3>Email address: {data.email}</h3>
    <h3>Phone number: {data.phone}</h3>
    <h3>Service: {data.service}</h3>
    <div>{data.message}</div>
  </div>
);
