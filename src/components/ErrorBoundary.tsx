import { ErrorProps } from "next/error";
import React, { Component, JSXElementConstructor, ReactNode } from "react";

interface errorBoundaryType {
   children?: ReactNode
}

class ErrorBoundary extends Component<errorBoundaryType, any> {
   constructor(props: any) {
      super(props);
   }

   state = { hasError: false };

   static getDerivedStateFromError(error: ErrorProps) {
      if (error) {
         return { hasError: true };
      }

      return { hasError: false };
   }

   render() {
      if (this.state.hasError) {
         return <>Something went Wrong!</>;
      }

      return this.props.children;
   }
}

export default ErrorBoundary;