import { useAxios } from "@/hooks/useAxios";

export const usePostUser = () => {
  const { axios } = useAxios();

  const usePostUser = async (id: string) => {
    await axios.post("/users", { firebase_uid: "1", name: "yuri" });
  };

  return { usePostUser };
};
