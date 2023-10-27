"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "@/images/logo.png";
import Image from "next/image";
import React from "react";

const Links = ["Beranda", "Tentang", "Layanan", "About", "Home"];

export default function Footer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="bg-footer">
        <div className="container">
          <div class="row">
            <div className="col-4">
              <Image className="logo" src={Logo} alt="Logo" width={250} />
              <p className="trm p-regular t_putih">
                Terimakasih sudah mempercayai kami untuk mencarikanmu lokasi
                penjual bensin, terus support kami ya, Love you all.
              </p>
            </div>

            <div className="col-2">
              <h5 className="p-semibold t_putih mt-20">Kontak</h5>
              <span className="t_putih p-regular">0812-9341-2433</span>
              <br></br>
              <span className="t_putih p-regular">@bnsindmny</span>
              <br></br>
              <span className="t_putih p-regular">@btuhbsin</span>
            </div>

            <div className="col-2">
              <h5 className="p-semibold t_putih mt-20">Kontak</h5>
              <span className="t_putih p-regular">0812-9341-2433</span>
              <br></br>
              <span className="t_putih p-regular">@bnsindmny</span>
              <br></br>
              <span className="t_putih p-regular">@btuhbsin</span>
            </div>

            <div className="col-2">
              <h5 className="p-semibold t_putih mt-20">Kontak</h5>
              <span className="t_putih p-regular">0812-9341-2433</span>
              <br></br>
              <span className="t_putih p-regular">@bnsindmny</span>
              <br></br>
              <span className="t_putih p-regular">@btuhbsin</span>
            </div>

            <div className="col-2">
              <h5 className="p-semibold t_putih mt-20">Kontak</h5>
              <span className="t_putih p-regular">0812-9341-2433</span>
              <br></br>
              <span className="t_putih p-regular">@bnsindmny</span>
              <br></br>
              <span className="t_putih p-regular">@btuhbsin</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
