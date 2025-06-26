import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
  return (
    <Tabs defaultValue="login" className="w-[400px] mt-[150px] justify-center mb-auto">
      <TabsList className="grid w-full grid-cols-2 rounded-lg bg-muted p-1">
        <TabsTrigger
          value="login"
          className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md px-4 py-2 text-sm font-medium text-gray-900 cursor-pointer"
        >
          Login
        </TabsTrigger>
        <TabsTrigger
          value="signup"
          className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md px-4 py-2 text-sm font-medium text-gray-900 cursor-pointer"
        >
          Signup
        </TabsTrigger>
      </TabsList>

      <TabsContent value="login" className="mt-4">
        <Login />
      </TabsContent>
      <TabsContent value="signup" className="mt-4">
        <Signup />
      </TabsContent>
    </Tabs>
  );
};

export default Auth;
