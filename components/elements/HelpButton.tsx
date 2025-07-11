/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { CheckCircleFilled, DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Flex, Input, Modal } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useRef, useState } from "react";

const HelpButton = () => {
  const [open, setOpen] = useState(false);
  const [messageModal, setMessageModal] = useState(false);
  const [sendMessage, setSendMessage] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (open) setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !(containerRef.current as any).contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef}>
      <Flex
        vertical
        className="fixed z-50 lg:right-24 2xl:right-48 md:right-16 right-5 bottom-10 items-end"
      >
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-3 mb-4 items-end"
            >
              <Button
                onClick={() => setMessageModal(true)}
                className="bg-[#D90506] text-white text-[16px] font-medium rounded-full h-10 border-0 w-fit"
              >
                sendMessage
              </Button>
              <Button className="bg-[#D90506] text-white text-[16px] font-medium rounded-full h-10 border-0 w-fit">
                callback
              </Button>
              <Button className="bg-[#D90506] text-white text-[16px] font-medium rounded-full h-10 border-0 w-fit">
                Whatsapp
              </Button>
              <Button className="bg-[#D90506] text-white text-[16px] font-medium rounded-full h-10 border-0 w-fit">
                Telegram
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <Button
          onClick={() => setOpen((prev) => !prev)}
          className="bg-[#D90506] text-white text-[16px] font-medium rounded-full h-10 border-0 w-fit"
        >
          help
          {open ? <DownOutlined /> : <UpOutlined />}
        </Button>
      </Flex>

      <Modal
        centered
        open={messageModal}
        onCancel={() => setMessageModal(false)}
        footer={null}
      >
        <Flex vertical gap={24}>
          <Flex vertical className="text-center m-auto max-w-[300px]">
            <h1>Сообщение</h1>
            <p>Отправьте нам свой вопрос и мы в скором времени ответим</p>
          </Flex>
          <Flex vertical gap={12}>
            <Flex vertical className="w-full">
              <p>Имя</p>
              <Input placeholder="Введите ваше имя" />
            </Flex>
            <Flex vertical className="w-full">
              <p>Телефон</p>
              <Input placeholder="Введите ваш номер" />
            </Flex>
            <Flex vertical className="w-full">
              <p>Сообщение</p>
              <TextArea
                maxLength={300}
                placeholder="disable resize"
                style={{ height: 120, resize: "none" }}
              />
            </Flex>
            <Button
              onClick={() => {
                setSendMessage(true);
                setMessageModal(false);
              }}
              className="bg-[#D90506] text-white text-[16px] font-medium rounded-xl h-10 border-0"
            >
              Отправить
            </Button>
          </Flex>
        </Flex>
      </Modal>
      <Modal
        centered
        open={sendMessage}
        onCancel={() => setSendMessage(false)}
        footer={null}
      >
        <Flex
          vertical
          className="w-full text-center items-center justify-center"
        >
          <CheckCircleFilled className="text-white bg-[#04DE68] size-10" />
          <h1>Cообщение отправлено!</h1>
          <p>
            Наша администрация рассмотрит ваше сообщение и в скором времени
            ответит
          </p>
          <Button
            onClick={() => setSendMessage(false)}
            className="bg-[#D90506] text-white text-[16px] font-medium rounded-xl h-10 border-0"
          >
            Вернуться на главную страницу
          </Button>
        </Flex>
      </Modal>
    </div>
  );
};

export default HelpButton;
