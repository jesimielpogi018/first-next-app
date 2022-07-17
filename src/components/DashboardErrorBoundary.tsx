/* eslint-disable no-undef */
import React, { ReactNode } from "react";

interface errorBoundaryType {
   children: JSX.Element
}

interface reactState {
   hasError: boolean
}

class DashboardError extends React.Component<errorBoundaryType, reactState> {

   constructor(props: errorBoundaryType) {
      super(props);

      this.state = { hasError: false };
   }

   static getDerivedStateFromError(error: any) {
      if (error) {
         return { hasError: true };
      }

      return { hasError: false };
   }

   componentDidCatch() {
      
   }

   render() {
      if (this.state.hasError) {
         return <h1>Something went wrong</h1>
      } else {
         return this.props.children;
      }
   }
}

export default DashboardError;