import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Button,
  Input,
  Select,
  SelectItem,
  DatePicker,
} from '@heroui/react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import useUpdateDataModal from './useUpdateDataModal';
import {
  COLLEGE_MAJOR,
  INTERN_CATEGORY,
  DIVISION_REQUEST,
} from '../../../Register/Register.constant';

const UpdateDataModal = (props) => {
  const { isOpen, onClose } = props;
  const { control, errors, handleSubmit } = useUpdateDataModal();
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement="right"
      size="md"
      className="font-sans"
      backdrop="opaque"
      isDismissable={true}>
      <DrawerContent>
        {(onClose) => (
          <>
            <DrawerHeader className="flex flex-col gap-1">
              Ubah Data
            </DrawerHeader>
            <DrawerBody>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                <div className="space-y-4">
                  {/* Left section */}
                  <Controller
                    name="full_name"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="text"
                        label="Nama Lengkap"
                        variant="faded"
                        autoComplete="off"
                        isInvalid={errors.full_name !== undefined}
                        errorMessage={errors.full_name?.message}
                      />
                    )}
                  />
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="email"
                        label="Email"
                        variant="faded"
                        autoComplete="off"
                        isInvalid={errors.email !== undefined}
                        errorMessage={errors.email?.message}
                      />
                    )}
                  />
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="phone"
                        label="Phone"
                        variant="faded"
                        autoComplete="off"
                        isInvalid={errors.phone !== undefined}
                        errorMessage={errors.phone?.message}
                      />
                    )}
                  />
                  <Controller
                    name="university"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="text"
                        label="Universitas"
                        variant="faded"
                        autoComplete="off"
                        isInvalid={errors.university !== undefined}
                        errorMessage={errors.university?.message}
                      />
                    )}
                  />
                  <Controller
                    name="college_major"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        label="Jurusan"
                        variant="faded"
                        autoComplete="off"
                        isInvalid={errors.college_major !== undefined}
                        errorMessage={errors.college_major?.message}>
                        {COLLEGE_MAJOR.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </Select>
                    )}
                  />
                  <Controller
                    name="semester"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="text"
                        label="Semester"
                        variant="faded"
                        autoComplete="off"
                        isInvalid={errors.semester !== undefined}
                        errorMessage={errors.semester?.message}
                      />
                    )}
                  />
                </div>
                {/* Right Section */}
                <div>
                  <div className="space-y-4">
                    <Controller
                      name="IPK"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          type="number"
                          label="IPK"
                          variant="faded"
                          autoComplete="off"
                          isInvalid={errors.IPK !== undefined}
                          errorMessage={errors.IPK?.message}
                        />
                      )}
                    />
                    <Controller
                      name="intern_category"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          label="Kategori Magang"
                          variant="faded"
                          autoComplete="off"
                          isInvalid={errors.intern_category !== undefined}
                          errorMessage={errors.intern_category?.message}>
                          {INTERN_CATEGORY.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                              {item.label}
                            </SelectItem>
                          ))}
                        </Select>
                      )}
                    />
                    <Controller
                      name="division_request"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          label="Bidang Kerja"
                          variant="faded"
                          autoComplete="off"
                          isInvalid={errors.division_request !== undefined}
                          errorMessage={errors.division_request?.message}>
                          {DIVISION_REQUEST.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                              {item.label}
                            </SelectItem>
                          ))}
                        </Select>
                      )}
                    />
                    <Controller
                      name="start_month"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          {...field}
                          label="Tanggal Mulai Magang"
                          variant="faded"
                          autoComplete="off"
                          isInvalid={errors.start_month !== undefined}
                          errorMessage={errors.start_month?.message}
                        />
                      )}
                    />
                    <Controller
                      name="end_month"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          {...field}
                          label="Tanggal Selesai Magang"
                          variant="faded"
                          autoComplete="off"
                          isInvalid={errors.end_month !== undefined}
                          errorMessage={errors.end_month?.message}
                        />
                      )}
                    />
                    <Controller
                      name="google_drive_link"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          type="input"
                          label="Link Pemberkasan"
                          variant="faded"
                          autoComplete="off"
                          isInvalid={errors.google_drive_link !== undefined}
                          errorMessage={errors.google_drive_link?.message}
                        />
                      )}
                    />
                  </div>
                </div>
                <Button
                  color="primary"
                  type="submit"
                  onPress={handleSubmit(() => {})}>
                  Save
                </Button>
              </form>
            </DrawerBody>
            <DrawerFooter>
              <div className="flex justify-between w-full">
                <Button color="danger" variant="flat" onPress={onClose}>
                  Batal
                </Button>
              </div>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
};

UpdateDataModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UpdateDataModal;
