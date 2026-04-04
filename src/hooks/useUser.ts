import useUserStore from "@/stores/useUserStore";
import { useEffect } from "react";
import { UserProfile } from "@/api/request";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const useUser = () => {
  const { user, setUser, reset } = useUserStore();
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      reset();
      return;
    }
    
    if (!user) {
      UserProfile()
        .then((data) => setUser(data))
        .catch(() => {
          toast.error("nu sa putut lua date");
          reset();
          navigate('/')
          
        });
    }
  }, [user, reset, setUser, UserProfile]);

  return { user, setUser };
};
