import { RootLayoutProps } from "@/lib/types"


const Container: React.FC<RootLayoutProps> = ({ children }) => {
   return (
      <div className="mx-auto w-full max-w-7xl">
         {children}
      </div>
   )
}

export default Container