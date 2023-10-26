import Input from "./Input";
import HeroBtn from "./HeroBtn";
import * as Form from "@radix-ui/react-form";
import Password from "./Password";

const LoginForm = () => {
  return (
    <>
      <Form.Root className="FormRoot flex flex-col gap-4">
        <Form.Field className="FormField" name="email">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter your email
            </Form.Message>
            <Form.Message className="FormMessage" match="typeMismatch">
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <Input label="Email" type="email" />
          </Form.Control>
        </Form.Field>
        <Form.Field className="FormField" name="password">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter a password
            </Form.Message>
          </div>
          <Form.Control asChild>
            <Password label="Password" type="password" />
          </Form.Control>
        </Form.Field>

        <div>
          <div className="flex justify-around">
            <label className="flex gap-2">
              <input type="radio" name="user" className="" />
              Creator
            </label>

            <label className="flex gap-2">
              <input type="radio" name="user" className="" />
              Editor
            </label>
          </div>
        </div>
        <div>
          <HeroBtn className="Button" text="Login" />
        </div>
      </Form.Root>
    </>
  );
};

export default LoginForm;
