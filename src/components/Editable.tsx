import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Editable,
  Tooltip,
  EditablePreview,
  useColorModeValue,
  Input,
  EditableInput,
  useEditableControls,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { Control, Controller } from "react-hook-form";

type Props = {
  name: string;
  control: Control<any>;
};
export function ChakraEditable(props: Props) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => {
        return (
          <Editable
            value={field.value}
            isPreviewFocusable={true}
            selectAllOnFocus={false}
          >
            <Tooltip label="Click to edit">
              <EditablePreview
                py={2}
                px={4}
                _hover={{
                  background: useColorModeValue("gray.100", "gray.700"),
                }}
              />
            </Tooltip>
            <Input py={2} px={4} as={EditableInput} {...field} />
            <EditableControls />
          </Editable>
        );
      }}
    ></Controller>
  );
}

function EditableControls() {
  const { isEditing, getSubmitButtonProps, getCancelButtonProps } =
    useEditableControls();

  return isEditing ? (
    <ButtonGroup justifyContent="end" size="sm" w="full" spacing={2} mt={2}>
      <IconButton
        aria-label=""
        icon={<CheckIcon />}
        {...getSubmitButtonProps()}
      />
      <IconButton
        aria-label=""
        icon={<CloseIcon boxSize={3} />}
        {...getCancelButtonProps()}
      />
    </ButtonGroup>
  ) : null;
}
