import { Button, Dialog } from "@radix-ui/themes";

import * as Form from "@radix-ui/react-form";
import Input from "./Input";
import HeroBtn from "./HeroBtn";
import Textarea from "./Textarea";
import BlackBtn from "./BlackBtn";
// import './styles.css';

const FormDialogForVideo = (props) => {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button>{props.text}</Button>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 450 }}>
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            {props.subheading}
          </Dialog.Description>

          <Form.Root className="FormRoot flex flex-col gap-4">
            <Form.Field className="FormField">
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                }}
              >
                {/* <Form.Label className="FormLabel">Email</Form.Label> */}
                <Form.Message className="FormMessage" match="valueMissing">
                  Video Title
                </Form.Message>
              </div>
              <Form.Control asChild>
                <Input label="Video Title" type="text" required="true" />
              </Form.Control>
            </Form.Field>

            <Form.Field className="FormField" name="files">
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                }}
              >
                {/* <Form.Label className="FormLabel">Question</Form.Label> */}
                <Form.Message className="FormMessage" match="valueMissing">
                  Description missing
                </Form.Message>
              </div>
              <Form.Control asChild>
                <Textarea label="Video Description" required="required" />
              </Form.Control>
            </Form.Field>

            <Form.Field className="FormField">
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                }}
              >
                {/* <Form.Label className="FormLabel">Email</Form.Label> */}
                <Form.Message className="FormMessage" match="valueMissing">
                  Video Tags missing
                </Form.Message>
              </div>
              <Form.Control asChild>
                <Input
                  label="Video Tags (comma i.e , seperated)"
                  type="text"
                  required="true"
                />
              </Form.Control>
            </Form.Field>

            <Form.Field className="FormField" name="files">
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                }}
              >
                <Form.Message className="FormMessage" match="valueMissing">
                  Please upload atleast one file
                </Form.Message>
              </div>
              <Input type="file" label="Select file" required="true" />
            </Form.Field>
            <Form.Submit asChild>
              <HeroBtn text="Upload File" />
            </Form.Submit>
          </Form.Root>

          <Dialog.Close>
            <div className="mt-4">
              <BlackBtn text="Cancel Uploading" />
            </div>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};

export default FormDialogForVideo;
